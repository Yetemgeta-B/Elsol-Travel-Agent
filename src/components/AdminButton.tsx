import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Settings, Lock, X } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const AdminButton = () => {
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const [password, setPassword] = useState('');

  // Simple password for demo purposes - in production, use proper authentication
  const ADMIN_PASSWORD = 'elsol2024';

  const handleAdminAccess = () => {
    if (password === ADMIN_PASSWORD) {
      toast({
        title: "Access Granted",
        description: "Welcome to the admin dashboard",
      });
      navigate('/admin/dashboard');
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid password",
        variant: "destructive"
      });
      setPassword('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      {showInput ? (
        <div className="flex items-center gap-2 bg-black/80 p-2 rounded-lg backdrop-blur-sm shadow-xl">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="px-3 py-2 rounded-md bg-black/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-elsol-sage focus:border-transparent w-48"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAdminAccess();
              } else if (e.key === 'Escape') {
                setShowInput(false);
                setPassword('');
              }
            }}
            autoFocus
          />
          <div className="flex gap-2">
            <Button
              onClick={handleAdminAccess}
              className="bg-elsol-sage hover:bg-elsol-sage-light text-black"
            >
              <Lock className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => {
                setShowInput(false);
                setPassword('');
              }}
              variant="outline"
              size="icon"
              className="border-gray-700 hover:bg-red-500/20 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setShowInput(true)}
          variant="outline"
          size="icon"
          className="rounded-full w-12 h-12 bg-black/80 border-elsol-sage text-elsol-sage hover:bg-elsol-sage hover:text-black backdrop-blur-sm shadow-xl hover-lift hover-glow"
        >
          <Settings className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default AdminButton; 