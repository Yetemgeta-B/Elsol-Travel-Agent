
import React, { useState, useEffect } from 'react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { useBlogContext } from '../context/BlogContext';
import { BlogPost } from './BlogCard';
import { useNavigate } from 'react-router-dom';
import { toast } from '../hooks/use-toast';
import { X } from 'lucide-react';

interface BlogEditorProps {
  post?: BlogPost;
  isEditing?: boolean;
  onCancel: () => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ post, isEditing = false, onCancel }) => {
  const { addBlogPost, editBlogPost } = useBlogContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    imageUrl: '',
    slug: '',
  });

  useEffect(() => {
    if (isEditing && post) {
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        author: post.author,
        imageUrl: post.imageUrl,
        slug: post.slug,
      });
    }
  }, [isEditing, post]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Generate slug from title if slug field is empty and title is being changed
    if (name === 'title' && (!formData.slug || formData.slug === '')) {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      
      setFormData({
        ...formData,
        [name]: value,
        slug: generatedSlug,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const { title, excerpt, content, author, imageUrl, slug } = formData;
    if (!title || !excerpt || !content || !author || !imageUrl || !slug) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    
    // Calculate read time (approx 200 words per minute)
    const wordCount = formData.content.split(/\s+/).length;
    const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
    
    if (isEditing && post) {
      editBlogPost({
        ...post,
        ...formData,
        date: post.date,
        readTime: post.readTime,
      });
      toast({
        title: "Success!",
        description: "Blog post updated successfully",
      });
    } else {
      addBlogPost({
        ...formData,
        date: currentDate,
        readTime,
      });
      toast({
        title: "Success!",
        description: "New blog post created successfully",
      });
    }
    
    navigate('/admin/dashboard');
  };

  return (
    <div className="w-full glass-panel rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-200">
          {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h2>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onCancel}
          className="hover:bg-elsol-sage/20"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-300">
            Title*
          </label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter post title"
            className="bg-black/60 border-gray-700"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="slug" className="block text-sm font-medium text-gray-300">
            URL Slug*
          </label>
          <Input
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="enter-url-slug"
            className="bg-black/60 border-gray-700"
            required
          />
          <p className="text-xs text-gray-400">This will be used in the post URL</p>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="author" className="block text-sm font-medium text-gray-300">
            Author*
          </label>
          <Input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author name"
            className="bg-black/60 border-gray-700"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300">
            Image URL*
          </label>
          <Input
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="bg-black/60 border-gray-700"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300">
            Excerpt*
          </label>
          <Textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Brief description of the post"
            className="bg-black/60 border-gray-700 h-24"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="content" className="block text-sm font-medium text-gray-300">
            Content*
          </label>
          <Textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Full blog post content (HTML supported)"
            className="bg-black/60 border-gray-700 h-64"
            required
          />
          <p className="text-xs text-gray-400">HTML tags are supported for formatting</p>
        </div>
        
        <div className="flex space-x-4 pt-4">
          <Button 
            type="submit" 
            className="bg-elsol-sage hover:bg-elsol-sage-light text-black"
          >
            {isEditing ? 'Update Post' : 'Publish Post'}
          </Button>
          <Button 
            type="button" 
            onClick={onCancel}
            variant="outline" 
            className="border-elsol-sage text-elsol-sage hover:bg-elsol-sage hover:text-black"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogEditor;
