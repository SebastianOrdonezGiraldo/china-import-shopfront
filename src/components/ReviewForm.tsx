
import { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import StarRating from './StarRating';

interface ReviewFormProps {
  productId: number;
}

const ReviewForm = ({ productId }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [city, setCity] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (rating === 0) {
      toast({
        title: "Error",
        description: "Please select a rating.",
        variant: "destructive",
      });
      return;
    }
    
    if (text.trim() === '') {
      toast({
        title: "Error",
        description: "Please enter a review text.",
        variant: "destructive",
      });
      return;
    }
    
    if (city.trim() === '') {
      toast({
        title: "Error",
        description: "Please enter your city.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, we'd send this to the server
    console.log('Review submitted:', { productId, rating, text, city });
    
    // Display success message
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback!",
    });
    
    // Reset form
    setRating(0);
    setText('');
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Rating</label>
        <StarRating rating={rating} setRating={setRating} editable={true} />
      </div>
      
      <div className="mb-4">
        <label htmlFor="review-text" className="block text-sm font-medium text-gray-700 mb-1">
          Your Review
        </label>
        <textarea
          id="review-text"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="What did you like or dislike about this product?"
        ></textarea>
      </div>
      
      <div className="mb-6">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          Your City
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter your city"
        />
      </div>
      
      <button 
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
