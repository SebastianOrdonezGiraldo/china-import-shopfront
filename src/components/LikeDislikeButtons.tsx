
import { useState } from 'react';

interface LikeDislikeButtonsProps {
  initialLikes: number;
  initialDislikes: number;
}

const LikeDislikeButtons = ({ initialLikes, initialDislikes }: LikeDislikeButtonsProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [userAction, setUserAction] = useState<'liked' | 'disliked' | null>(null);

  const handleLike = () => {
    if (userAction === 'liked') {
      // Unlike
      setLikes(prevLikes => prevLikes - 1);
      setUserAction(null);
    } else {
      // Like
      setLikes(prevLikes => prevLikes + 1);
      
      // If previously disliked, remove that dislike
      if (userAction === 'disliked') {
        setDislikes(prevDislikes => prevDislikes - 1);
      }
      
      setUserAction('liked');
    }
  };

  const handleDislike = () => {
    if (userAction === 'disliked') {
      // Un-dislike
      setDislikes(prevDislikes => prevDislikes - 1);
      setUserAction(null);
    } else {
      // Dislike
      setDislikes(prevDislikes => prevDislikes + 1);
      
      // If previously liked, remove that like
      if (userAction === 'liked') {
        setLikes(prevLikes => prevLikes - 1);
      }
      
      setUserAction('disliked');
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button 
        onClick={handleLike}
        className={`flex items-center space-x-1 ${
          userAction === 'liked' ? 'text-primary font-medium' : 'text-gray-500'
        } hover:text-primary transition-colors`}
        aria-label="Like"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 ${userAction === 'liked' ? 'animate-pulse-heart' : ''}`}
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
        </svg>
        <span>{likes}</span>
      </button>
      
      <button 
        onClick={handleDislike}
        className={`flex items-center space-x-1 ${
          userAction === 'disliked' ? 'text-destructive font-medium' : 'text-gray-500'
        } hover:text-destructive transition-colors`}
        aria-label="Dislike"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 ${userAction === 'disliked' ? 'animate-pulse-heart' : ''}`}
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
        </svg>
        <span>{dislikes}</span>
      </button>
    </div>
  );
};

export default LikeDislikeButtons;
