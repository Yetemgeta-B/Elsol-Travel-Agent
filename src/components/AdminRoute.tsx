
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const location = useLocation();

  // Check authentication status when component mounts
  useEffect(() => {
    // You could add token validation logic here in a real app
  }, []);

  if (!isLoggedIn) {
    // Redirect to login page, but save the current location they were trying to access
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
