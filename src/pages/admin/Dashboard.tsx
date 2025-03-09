
import React, { useState } from 'react';
import { useBlogContext } from '../../context/BlogContext';
import BlogEditor from '../../components/BlogEditor';
import { FileText, Edit, Trash, Plus, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { toast } from '../../hooks/use-toast';
import Header from '../../components/Header';

const Dashboard = () => {
  const { blogPosts, deleteBlogPost } = useBlogContext();
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      deleteBlogPost(id);
      toast({
        title: "Deleted",
        description: "Blog post has been deleted",
      });
    }
  };

  const handleEdit = (post: any) => {
    setEditingPost(post);
    setShowEditor(true);
  };

  const handleNewPost = () => {
    setEditingPost(null);
    setShowEditor(true);
  };

  const handleCancel = () => {
    setShowEditor(false);
    setEditingPost(null);
  };

  return (
    <div className="min-h-screen bg-black/90 backdrop-blur-md text-gray-200">
      <Header />
      
      <div className="pt-32 pb-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Blog Administration</h1>
            {!showEditor && (
              <Button
                onClick={handleNewPost}
                className="bg-elsol-sage hover:bg-elsol-sage-light text-black"
              >
                <Plus size={16} className="mr-2" />
                New Post
              </Button>
            )}
          </div>

          {showEditor ? (
            <BlogEditor 
              post={editingPost} 
              isEditing={!!editingPost}
              onCancel={handleCancel}
            />
          ) : (
            <div className="glass-panel rounded-xl overflow-hidden">
              {blogPosts.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="mb-4">No blog posts found.</p>
                  <Button 
                    onClick={handleNewPost}
                    className="bg-elsol-sage hover:bg-elsol-sage-light text-black"
                  >
                    <Plus size={16} className="mr-2" />
                    Create Your First Post
                  </Button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-black/60">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Author</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {blogPosts.map((post) => (
                        <tr key={post.id} className="hover:bg-black/20">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FileText size={16} className="mr-2 text-elsol-sage" />
                              <div className="text-sm font-medium">{post.title}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{post.author}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{post.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-elsol-sage/20 text-elsol-sage">
                              Published
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <Link to={`/blog/${post.slug}`} target="_blank">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-elsol-sage">
                                  <Eye size={16} />
                                </Button>
                              </Link>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-gray-400 hover:text-elsol-sage"
                                onClick={() => handleEdit(post)}
                              >
                                <Edit size={16} />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-gray-400 hover:text-destructive"
                                onClick={() => handleDelete(post.id)}
                              >
                                <Trash size={16} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
