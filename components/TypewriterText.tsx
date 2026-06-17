import React from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  onComplete?: () => void;
}

/**
 * Custom TypewriterText component that:
 * 1. Splits text into words
 * 2. Appends a full stop after each word
 * 3. Animates with typewriter effect using Framer Motion
 */
export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.03,
  onComplete,
}) => {
  const words = text.split(' ').filter(word => word.length > 0);

  // Create word segments with periods
  const segments = words.map((word, index) => ({
    word,
    id: index,
    content: `${word}.`,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onComplete}
    >
      {segments.map((segment) => (
        <motion.span
          key={segment.id}
          variants={childVariants}
          className="inline"
        >
          {segment.content}
          {segment.id < segments.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TypewriterText;