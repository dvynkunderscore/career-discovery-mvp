import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

interface RetroButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

/**
 * RetroButton component with typewriter text and sharp black borders
 */
export const RetroButton: React.FC<RetroButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  className = '',
}) => {
  return (
    <motion.button
      className={`
        px-8 py-4 font-retro text-lg
        border-2 border-pure-black
        bg-pure-white text-pure-black
        hover:bg-pure-black hover:text-pure-white
        transition-colors duration-200
        cursor-pointer
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <TypewriterText text={text} />
    </motion.button>
  );
};

export default RetroButton;