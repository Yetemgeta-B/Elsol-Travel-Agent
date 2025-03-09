import React, { createContext, useContext, useState, useEffect } from 'react';

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

  useEffect(() => {
    localStorage.setItem('destinations', JSON.stringify(destinations));
  }, [destinations]);

  const addDestination = (destination: Destination) => {
    setDestinations([...destinations, destination]);
  };

  const updateDestination = (updatedDestination: Destination) => {
    setDestinations(destinations.map(dest => 
      dest.id === updatedDestination.id ? updatedDestination : dest
    ));
  };

  const deleteDestination = (id: string) => {
    setDestinations(destinations.filter(dest => dest.id !== id));
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
