import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";
import AdminRoute from "./components/AdminRoute";
import { BlogProvider } from "./context/BlogContext";
import { DestinationProvider } from "./context/DestinationContext";
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BlogProvider>
        <DestinationProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Admin routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route 
                path="/admin/dashboard" 
                element={
                  <AdminRoute>
                    <Dashboard />
                  </AdminRoute>
                } 
              />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DestinationProvider>
      </BlogProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
