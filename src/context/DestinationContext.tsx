
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  highlights: string[];
  slug: string;
}

interface DestinationContextType {
  destinations: Destination[];
  addDestination: (destination: Destination) => void;
  updateDestination: (destination: Destination) => void;
  deleteDestination: (id: string) => void;
}

const DestinationContext = createContext<DestinationContextType | undefined>(undefined);

export const useDestinationContext = () => {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error('useDestinationContext must be used within a DestinationProvider');
  }
  return context;
};

export const DestinationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [destinations, setDestinations] = useState<Destination[]>(() => {
    const savedDestinations = localStorage.getItem('destinations');
    return savedDestinations ? JSON.parse(savedDestinations) : [];
  });
  const [lastKnownCount, setLastKnownCount] = useState<number>(0);

  // Initialize last known count
  useEffect(() => {
    const savedDestinations = localStorage.getItem('destinations');
    if (savedDestinations) {
      setLastKnownCount(JSON.parse(savedDestinations).length);
    }
  }, []);

  // Watch for changes in destinations
  useEffect(() => {
    localStorage.setItem('destinations', JSON.stringify(destinations));
    
    // Check if we have new destinations and show notification
    if (lastKnownCount > 0 && destinations.length > lastKnownCount) {
      const newDestination = destinations.find(dest => 
        !localStorage.getItem(`destination-${dest.id}-notified`)
      );
      
      if (newDestination) {
        toast({
          title: "New Destination Added!",
          description: `"${newDestination.name}" is now available for booking.`,
          duration: 5000,
        });
        
        // Mark this destination as notified
        localStorage.setItem(`destination-${newDestination.id}-notified`, 'true');
      }
    }
    
    // Update the last known count
    setLastKnownCount(destinations.length);
    
    // Broadcast the change to other tabs/windows
    const event = new CustomEvent('destinationsUpdated', { 
      detail: { destinations }
    });
    window.dispatchEvent(event);
  }, [destinations, lastKnownCount]);

  // Listen for changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'destinations' && e.newValue) {
        const newDestinations = JSON.parse(e.newValue);
        
        // Check if we have new destinations
        if (newDestinations.length > destinations.length) {
          const newDest = newDestinations.find(newDest => 
            !destinations.some(existingDest => existingDest.id === newDest.id)
          );
          
          if (newDest && !localStorage.getItem(`destination-${newDest.id}-notified`)) {
            toast({
              title: "New Destination Added!",
              description: `"${newDest.name}" is now available for booking.`,
              duration: 5000,
            });
            
            // Mark this destination as notified
            localStorage.setItem(`destination-${newDest.id}-notified`, 'true');
          }
        }
        
        setDestinations(newDestinations);
      }
    };

    const handleDestinationsUpdated = (e: CustomEvent<{destinations: Destination[]}>) => {
      // Check for new destinations
      if (e.detail.destinations.length > destinations.length) {
        const newDests = e.detail.destinations.filter(newDest => 
          !destinations.some(existingDest => existingDest.id === newDest.id)
        );
        
        if (newDests.length > 0) {
          newDests.forEach(newDest => {
            if (!localStorage.getItem(`destination-${newDest.id}-notified`)) {
              toast({
                title: "New Destination Added!",
                description: `"${newDest.name}" is now available for booking.`,
                duration: 5000,
              });
              
              // Mark this destination as notified
              localStorage.setItem(`destination-${newDest.id}-notified`, 'true');
            }
          });
        }
      }
      
      setDestinations(e.detail.destinations);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('destinationsUpdated', handleDestinationsUpdated as EventListener);

    // Add a visibility change listener to refresh when tab becomes visible again
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const savedDestinations = localStorage.getItem('destinations');
        if (savedDestinations) {
          const parsedDestinations = JSON.parse(savedDestinations);
          setDestinations(parsedDestinations);
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('destinationsUpdated', handleDestinationsUpdated as EventListener);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [destinations]);

  const addDestination = (destination: Destination) => {
    setDestinations([...destinations, destination]);
    
    // Show notification for the new destination
    toast({
      title: "New Destination Added!",
      description: `"${destination.name}" is now available for booking.`,
      duration: 5000,
    });
    
    // Mark this destination as notified
    localStorage.setItem(`destination-${destination.id}-notified`, 'true');
  };

  const updateDestination = (updatedDestination: Destination) => {
    setDestinations(destinations.map(dest => 
      dest.id === updatedDestination.id ? updatedDestination : dest
    ));
  };

  const deleteDestination = (id: string) => {
    setDestinations(destinations.filter(dest => dest.id !== id));
    
    // Remove the notification marker for this destination
    localStorage.removeItem(`destination-${id}-notified`);
  };

  return (
    <DestinationContext.Provider value={{
      destinations,
      addDestination,
      updateDestination,
      deleteDestination,
    }}>
      {children}
    </DestinationContext.Provider>
  );
};
