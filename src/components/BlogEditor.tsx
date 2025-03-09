import React, { useState, useEffect } from 'react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { useBlogContext } from '../context/BlogContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '../hooks/use-toast';
import { X, Plus, Minus } from 'lucide-react';
import { TelegramBot } from '../services/TelegramBot';

interface BlogEditorProps {
  post?: any;
  isEditing?: boolean;
  onCancel: () => void;
}

const telegramBot = new TelegramBot();

const BlogEditor: React.FC<BlogEditorProps> = ({ post, isEditing = false, onCancel }) => {
  const { addBlogPost, editBlogPost } = useBlogContext();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTravelPost, setIsTravelPost] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    imageUrl: '',
    slug: '',
    travelDetails: {
      title: '',
      airline: '',
      departureDate: '',
      returnDate: '',
      departureTime: '',
      returnTime: '',
      baggage: '',
      phones: [''],
      emails: ['elsoltravel5@gmail.com', 'eluua123@yahoo.com'],
      price: '',
      additionalInfo: ''
    }
  });

  useEffect(() => {
    if (isEditing && post) {
      setFormData({
        ...formData,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        author: post.author,
        imageUrl: post.imageUrl,
        slug: post.slug,
        travelDetails: post.travelDetails || {
          ...formData.travelDetails,
          title: post.title
        }
      });
      setIsTravelPost(!!post.travelDetails);
    }
  }, [isEditing, post]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === 'title') {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      
      setFormData({
        ...formData,
        title: value,
        slug: !formData.slug ? generatedSlug : formData.slug,
        travelDetails: {
          ...formData.travelDetails,
          title: value
        }
      });
    } else if (name.startsWith('travel.')) {
      const travelField = name.split('.')[1];
      setFormData({
        ...formData,
        travelDetails: {
          ...formData.travelDetails,
          [travelField]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePhoneChange = (index: number, value: string) => {
    const newPhones = [...formData.travelDetails.phones];
    newPhones[index] = value;
    setFormData({
      ...formData,
      travelDetails: {
        ...formData.travelDetails,
        phones: newPhones
      }
    });
  };

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...formData.travelDetails.emails];
    newEmails[index] = value;
    setFormData({
      ...formData,
      travelDetails: {
        ...formData.travelDetails,
        emails: newEmails
      }
    });
  };

  const addPhone = () => {
    setFormData({
      ...formData,
      travelDetails: {
        ...formData.travelDetails,
        phones: [...formData.travelDetails.phones, '']
      }
    });
  };

  const removePhone = (index: number) => {
    const newPhones = formData.travelDetails.phones.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      travelDetails: {
        ...formData.travelDetails,
        phones: newPhones
      }
    });
  };

  const validateForm = () => {
    if (isTravelPost) {
      const td = formData.travelDetails;
      if (!td.title || !td.airline || !td.departureDate || !td.returnDate || 
          !td.departureTime || !td.returnTime || !td.baggage || !td.phones.length) {
        toast({
          title: "Missing Travel Details",
          description: "Please fill in all required travel fields",
          variant: "destructive"
        });
        return false;
      }
    } else {
      const { title, excerpt, content, author, imageUrl, slug } = formData;
      if (!title || !excerpt || !content || !author || !imageUrl || !slug) {
        toast({
          title: "Missing Fields",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      
      const postData = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        author: formData.author,
        imageUrl: formData.imageUrl,
        slug: formData.slug,
        id: isEditing && post ? post.id : crypto.randomUUID(),
        date: isEditing && post ? post.date : currentDate,
        readTime: isEditing && post ? post.readTime : "1 min read",
        travelDetails: isTravelPost ? {
          ...formData.travelDetails,
          title: formData.title
        } : undefined
      };

      if (isEditing && post) {
        editBlogPost(postData);
        toast({
          title: "Success!",
          description: "Post updated successfully",
        });
      } else {
        addBlogPost(postData);
        await telegramBot.shareNewBlogPost(postData);
        toast({
          title: "Success!",
          description: "New post created and shared successfully",
        });
      }
      
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: "Error",
        description: "Failed to save the post. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full glass-panel rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-200">
          {isEditing ? 'Edit Post' : 'Create New Post'}
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
        <div className="flex items-center space-x-2 mb-6">
          <label className="text-sm font-medium text-gray-300">Post Type:</label>
          <Button
            type="button"
            variant={!isTravelPost ? "default" : "outline"}
            onClick={() => setIsTravelPost(false)}
            className={!isTravelPost ? "bg-elsol-sage text-black" : "text-elsol-sage"}
          >
            Regular Post
          </Button>
          <Button
            type="button"
            variant={isTravelPost ? "default" : "outline"}
            onClick={() => setIsTravelPost(true)}
            className={isTravelPost ? "bg-elsol-sage text-black" : "text-elsol-sage"}
          >
            Travel Post
          </Button>
        </div>

        {/* Regular post fields */}
        {!isTravelPost && (
          <div className="space-y-6">
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
          </div>
        )}

        {/* Travel post fields */}
        {isTravelPost && (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-300">
                Title/Description*
              </label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., በፍላይ ዱባይ አየር መንገድ ወደ ዱባይ"
                className="bg-black/60 border-gray-700"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="travel.airline" className="block text-sm font-medium text-gray-300">
                Airline*
              </label>
              <Input
                id="travel.airline"
                name="travel.airline"
                value={formData.travelDetails.airline}
                onChange={handleChange}
                placeholder="e.g., FLYDUBAI"
                className="bg-black/60 border-gray-700"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="travel.departureDate" className="block text-sm font-medium text-gray-300">
                  Departure Date*
                </label>
                <Input
                  id="travel.departureDate"
                  name="travel.departureDate"
                  value={formData.travelDetails.departureDate}
                  onChange={handleChange}
                  placeholder="e.g., Mar 18 ADDDXB"
                  className="bg-black/60 border-gray-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="travel.returnDate" className="block text-sm font-medium text-gray-300">
                  Return Date*
                </label>
                <Input
                  id="travel.returnDate"
                  name="travel.returnDate"
                  value={formData.travelDetails.returnDate}
                  onChange={handleChange}
                  placeholder="e.g., Mar 22 DXBADD"
                  className="bg-black/60 border-gray-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="travel.departureTime" className="block text-sm font-medium text-gray-300">
                  Departure Time*
                </label>
                <Input
                  id="travel.departureTime"
                  name="travel.departureTime"
                  value={formData.travelDetails.departureTime}
                  onChange={handleChange}
                  placeholder="e.g., 04:45_09:55"
                  className="bg-black/60 border-gray-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="travel.returnTime" className="block text-sm font-medium text-gray-300">
                  Return Time*
                </label>
                <Input
                  id="travel.returnTime"
                  name="travel.returnTime"
                  value={formData.travelDetails.returnTime}
                  onChange={handleChange}
                  placeholder="e.g., 16:05_19:35"
                  className="bg-black/60 border-gray-700"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="travel.baggage" className="block text-sm font-medium text-gray-300">
                Baggage*
              </label>
              <Input
                id="travel.baggage"
                name="travel.baggage"
                value={formData.travelDetails.baggage}
                onChange={handleChange}
                placeholder="e.g., 50Kg"
                className="bg-black/60 border-gray-700"
                required
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-300">
                Phone Numbers*
              </label>
              {formData.travelDetails.phones.map((phone, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    value={phone}
                    onChange={(e) => handlePhoneChange(index, e.target.value)}
                    placeholder="Phone number"
                    className="bg-black/60 border-gray-700"
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => removePhone(index)}
                    className="hover:bg-red-500/20"
                    disabled={formData.travelDetails.phones.length === 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  {index === formData.travelDetails.phones.length - 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={addPhone}
                      className="hover:bg-elsol-sage/20"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <label htmlFor="travel.price" className="block text-sm font-medium text-gray-300">
                Price (Optional)
              </label>
              <Input
                id="travel.price"
                name="travel.price"
                value={formData.travelDetails.price}
                onChange={handleChange}
                placeholder="e.g., Starting from $599"
                className="bg-black/60 border-gray-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="travel.additionalInfo" className="block text-sm font-medium text-gray-300">
                Additional Information (Optional)
              </label>
              <Textarea
                id="travel.additionalInfo"
                name="travel.additionalInfo"
                value={formData.travelDetails.additionalInfo}
                onChange={handleChange}
                placeholder="Any additional details or notes"
                className="bg-black/60 border-gray-700 h-24"
              />
            </div>
          </div>
        )}
        
        <div className="flex space-x-4 pt-4">
          <Button 
            type="submit" 
            className="bg-elsol-sage hover:bg-elsol-sage-light text-black"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : isEditing ? 'Update Post' : 'Publish Post'}
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
