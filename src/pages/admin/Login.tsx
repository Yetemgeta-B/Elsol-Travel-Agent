
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { toast } from '../../hooks/use-toast';
import { Lock } from 'lucide-react';

// For demo purposes - in a real app, this would be handled securely
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network request
    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // In a real app, this would set a token in localStorage or cookies
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/admin/dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid username or password",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel rounded-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-elsol-sage/10 rounded-full mb-4">
            <Lock className="h-8 w-8 text-elsol-sage" />
          </div>
          <h1 className="text-2xl font-bold text-gray-200">Admin Login</h1>
          <p className="text-gray-400 mt-2">Sign in to manage blog content</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">
              Username
            </label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-black/60 border-gray-700"
              placeholder="admin"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black/60 border-gray-700"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-elsol-sage hover:bg-elsol-sage-light text-black"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </div>
          
          <div className="text-center text-sm text-gray-400 mt-4">
            <p>For demo: username = "admin", password = "admin123"</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
