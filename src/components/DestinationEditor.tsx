import React, { useState, useEffect } from 'react';
import { useDestinationContext } from '@/context/DestinationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { X, Image as ImageIcon, Link, Upload } from 'lucide-react';

interface DestinationEditorProps {
  destination?: any;
  isEditing?: boolean;
  onCancel: () => void;
}

const DestinationEditor: React.FC<DestinationEditorProps> = ({
  destination,
  isEditing = false,
  onCancel,
}) => {
  const { addDestination, updateDestination } = useDestinationContext();
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    highlights: ['', '', '', ''],
  });
  const [imageInputType, setImageInputType] = useState<'url' | 'upload'>('url');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (isEditing && destination) {
      setFormData({
        name: destination.name,
        image: destination.image,
        description: destination.description,
        highlights: [...destination.highlights],
      });
      setImagePreview(destination.image);
    }
  }, [isEditing, destination]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "Error",
          description: "Image size should be less than 5MB",
          variant: "destructive"
        });
        return;
      }

      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        setFormData(prev => ({ ...prev, image: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHighlightChange = (index: number, value: string) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData({ ...formData, highlights: newHighlights });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const highlights = formData.highlights.filter(h => h.trim() !== '');
    
    if (highlights.length < 2) {
      toast({
        title: "Validation Error",
        description: "Please add at least 2 highlights",
        variant: "destructive"
      });
      return;
    }

    if (!formData.image) {
      toast({
        title: "Error",
        description: "Please add an image URL or upload an image",
        variant: "destructive"
      });
      return;
    }

    const destinationData = {
      id: isEditing ? destination.id : Date.now().toString(),
      ...formData,
      highlights,
      slug: formData.name.toLowerCase().replace(/\s+/g, '-'),
    };

    if (isEditing) {
      updateDestination(destinationData);
      toast({
        title: "Success",
        description: "Destination updated successfully",
      });
    } else {
      addDestination(destinationData);
      toast({
        title: "Success",
        description: "New destination added successfully",
      });
    }

    onCancel();
  };

  return (
    <div className="glass-panel rounded-xl p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Destination Name
          </label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Dubai"
            required
            className="bg-black/50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Featured Image
          </label>
          <div className="flex gap-4 mb-4">
            <Button
              type="button"
              variant={imageInputType === 'url' ? 'default' : 'outline'}
              className={imageInputType === 'url' ? 'bg-elsol-sage text-black' : ''}
              onClick={() => setImageInputType('url')}
            >
              <Link className="w-4 h-4 mr-2" />
              Image URL
            </Button>
            <Button
              type="button"
              variant={imageInputType === 'upload' ? 'default' : 'outline'}
              className={imageInputType === 'upload' ? 'bg-elsol-sage text-black' : ''}
              onClick={() => setImageInputType('upload')}
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Image
            </Button>
          </div>

          {imageInputType === 'url' ? (
            <Input
              value={formData.image}
              onChange={(e) => {
                setFormData({ ...formData, image: e.target.value });
                setImagePreview(e.target.value);
              }}
              placeholder="https://example.com/image.jpg"
              className="bg-black/50"
            />
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-center w-full">
                <label className="w-full flex flex-col items-center px-4 py-6 bg-black/50 text-gray-300 rounded-lg border-2 border-dashed border-elsol-sage/30 cursor-pointer hover:border-elsol-sage/50 transition-colors">
                  <ImageIcon className="w-8 h-8 mb-2 text-elsol-sage" />
                  <span className="text-sm">Click to upload image (max 5MB)</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
          )}

          {imagePreview && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-300 mb-2">Preview:</p>
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Description
          </label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Write a brief description..."
            required
            className="bg-black/50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Highlights (at least 2)
          </label>
          <div className="space-y-2">
            {formData.highlights.map((highlight, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={highlight}
                  onChange={(e) => handleHighlightChange(index, e.target.value)}
                  placeholder={`Highlight ${index + 1}`}
                  className="bg-black/50"
                />
                {index > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const newHighlights = formData.highlights.filter((_, i) => i !== index);
                      setFormData({ ...formData, highlights: newHighlights });
                    }}
                    className="hover:bg-red-500/20 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            {formData.highlights.length < 6 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setFormData({
                    ...formData,
                    highlights: [...formData.highlights, '']
                  });
                }}
                className="w-full mt-2"
              >
                Add Highlight
              </Button>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-elsol-sage hover:bg-elsol-sage-light text-black"
          >
            {isEditing ? 'Update' : 'Create'} Destination
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DestinationEditor;
