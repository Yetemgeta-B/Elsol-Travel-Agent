import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, Share, ArrowLeft, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBlogContext } from '@/context/BlogContext';
import { useDestinationContext } from '@/context/DestinationContext';
import { toast } from '@/components/ui/use-toast';
import BlogEditor from '@/components/BlogEditor';
import DestinationEditor from '@/components/DestinationEditor';
import { TelegramBot } from '@/services/TelegramBot';

const telegramBot = new TelegramBot();

const Dashboard = () => {
  const navigate = useNavigate();
  const { blogPosts, deleteBlogPost } = useBlogContext();
  const { destinations, deleteDestination } = useDestinationContext();
  const [showEditor, setShowEditor] = useState(false);
  const [showDestinationEditor, setShowDestinationEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [editingDestination, setEditingDestination] = useState<any>(null);
  const [isSharing, setIsSharing] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'blogs' | 'destinations'>('blogs');

  const handleShare = async (post: any) => {
    setIsSharing(post.id);
    try {
      await telegramBot.shareNewBlogPost({
        title: post.title,
        excerpt: post.excerpt,
        imageUrl: post.imageUrl,
        slug: post.slug,
        author: post.author,
      });
      
      toast({
        title: "Shared Successfully",
        description: "Blog post has been shared to Telegram channel",
      });
    } catch (error) {
      console.error('Error sharing to Telegram:', error);
      toast({
        title: "Sharing Failed",
        description: "Failed to share post to Telegram channel. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSharing(null);
    }
  };

  const handleDelete = (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deleteBlogPost(postId);
      toast({
        title: "Post Deleted",
        description: "The blog post has been deleted successfully",
      });
    }
  };

  const handleDeleteDestination = (destId: string) => {
    if (window.confirm('Are you sure you want to delete this destination?')) {
      deleteDestination(destId);
      toast({
        title: "Destination Deleted",
        description: "The destination has been deleted successfully",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate('/blogs')}
              variant="outline"
              size="icon"
              className="border-elsol-sage text-elsol-sage hover:bg-elsol-sage hover:text-black"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-3xl font-bold text-elsol-sage">Admin Dashboard</h1>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => setActiveTab('blogs')}
              variant={activeTab === 'blogs' ? 'default' : 'outline'}
              className={activeTab === 'blogs' ? 'bg-elsol-sage text-black' : ''}
            >
              Blogs
            </Button>
            <Button
              onClick={() => setActiveTab('destinations')}
              variant={activeTab === 'destinations' ? 'default' : 'outline'}
              className={activeTab === 'destinations' ? 'bg-elsol-sage text-black' : ''}
            >
              Destinations
            </Button>
          </div>
        </div>

        {activeTab === 'blogs' ? (
          <>
            <div className="flex justify-end mb-4">
              <Button
                onClick={() => {
                  setEditingPost(null);
                  setShowEditor(true);
                }}
                className="bg-elsol-sage hover:bg-elsol-sage-light text-black"
              >
                <Plus className="h-4 w-4 mr-2" /> New Post
              </Button>
            </div>

            {showEditor ? (
              <BlogEditor
                post={editingPost}
                isEditing={!!editingPost}
                onCancel={() => {
                  setShowEditor(false);
                  setEditingPost(null);
                }}
              />
            ) : (
              <div className="grid gap-6">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="glass-panel rounded-xl p-6 hover-lift"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-2 text-gray-100">
                          {post.title}
                        </h2>
                        <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="mr-4">By {post.author}</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          onClick={() => handleShare(post)}
                          variant="outline"
                          size="icon"
                          className="hover:bg-elsol-sage/20"
                          disabled={isSharing === post.id}
                        >
                          <Share className={`h-4 w-4 ${isSharing === post.id ? 'animate-spin' : ''}`} />
                        </Button>
                        <Button
                          onClick={() => {
                            setEditingPost(post);
                            setShowEditor(true);
                          }}
                          variant="outline"
                          size="icon"
                          className="hover:bg-elsol-sage/20"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => handleDelete(post.id)}
                          variant="outline"
                          size="icon"
                          className="hover:bg-red-500/20 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {blogPosts.length === 0 && (
                  <div className="text-center py-12 glass-panel rounded-xl">
                    <p className="text-gray-400 text-lg">No blog posts yet. Create your first post!</p>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex justify-end mb-4">
              <Button
                onClick={() => {
                  setEditingDestination(null);
                  setShowDestinationEditor(true);
                }}
                className="bg-elsol-sage hover:bg-elsol-sage-light text-black"
              >
                <Plus className="h-4 w-4 mr-2" /> New Destination
              </Button>
            </div>

            {showDestinationEditor ? (
              <DestinationEditor
                destination={editingDestination}
                isEditing={!!editingDestination}
                onCancel={() => {
                  setShowDestinationEditor(false);
                  setEditingDestination(null);
                }}
              />
            ) : (
              <div className="grid gap-6">
                {destinations.map((destination) => (
                  <div
                    key={destination.id}
                    className="glass-panel rounded-xl p-6 hover-lift"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h2 className="text-xl font-semibold text-gray-100">
                              {destination.name}
                            </h2>
                            <p className="text-gray-400 text-sm">{destination.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {destination.highlights.map((highlight, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 rounded-full bg-elsol-sage/10 text-elsol-sage text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          onClick={() => {
                            setEditingDestination(destination);
                            setShowDestinationEditor(true);
                          }}
                          variant="outline"
                          size="icon"
                          className="hover:bg-elsol-sage/20"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => handleDeleteDestination(destination.id)}
                          variant="outline"
                          size="icon"
                          className="hover:bg-red-500/20 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {destinations.length === 0 && (
                  <div className="text-center py-12 glass-panel rounded-xl">
                    <p className="text-gray-400 text-lg">No destinations yet. Create your first destination!</p>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
