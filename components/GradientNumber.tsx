import React from 'react';

interface GradientNumberProps {
  number: number;
  className?: string;
}

/**
 * GradientNumber component that renders a number with a vibrant CSS gradient
 * Used for the "X" reveal on the transition screen
 */
export const GradientNumber: React.FC<GradientNumberProps> = ({
  number,
  className = '',
}) => {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(90deg, #a855f7 0%, #ec4899 25%, #f43f5e 50%, #3b82f6 75%, #06b6d4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {number}
    </span>
  );
};

export default GradientNumber;