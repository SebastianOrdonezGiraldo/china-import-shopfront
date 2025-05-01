
import { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import StarRating from './StarRating';
import { useQueryClient } from '@tanstack/react-query';

interface ReviewFormProps {
  productId: number;
}

const ReviewForm = ({ productId }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (rating === 0) {
      toast({
        title: "Error",
        description: "Por favor selecciona una calificación.",
        variant: "destructive",
      });
      return;
    }
    
    if (text.trim() === '') {
      toast({
        title: "Error",
        description: "Por favor escribe el texto de tu reseña.",
        variant: "destructive",
      });
      return;
    }
    
    if (city.trim() === '') {
      toast({
        title: "Error",
        description: "Por favor ingresa tu ciudad.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // En un entorno real, esta URL apuntaría a tu servidor PHP
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          rating,
          text,
          city
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al enviar la reseña');
      }

      // Mostrar mensaje de éxito
      toast({
        title: "¡Reseña enviada!",
        description: "Gracias por tu opinión.",
      });
      
      // Actualizar la caché de react-query para que se recarguen las reseñas
      queryClient.invalidateQueries({ queryKey: ['reviews', productId] });
      
      // Reset form
      setRating(0);
      setText('');
      setCity('');
    } catch (error) {
      console.error('Error al enviar la reseña:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "No se pudo enviar la reseña. Intenta de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">Escribe una Reseña</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Tu Calificación</label>
        <StarRating rating={rating} setRating={setRating} editable={true} />
      </div>
      
      <div className="mb-4">
        <label htmlFor="review-text" className="block text-sm font-medium text-gray-700 mb-1">
          Tu Reseña
        </label>
        <textarea
          id="review-text"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="¿Qué te gustó o no te gustó de este producto?"
        ></textarea>
      </div>
      
      <div className="mb-6">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          Tu Ciudad
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Ingresa tu ciudad"
        />
      </div>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar Reseña"}
      </button>
    </form>
  );
};

export default ReviewForm;
