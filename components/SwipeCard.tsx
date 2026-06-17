import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

interface SwipeCardProps {
  optionA: string;
  optionB: string;
  onSwipe: (choice: 'A' | 'B') => void;
}

/**
 * SwipeCard component for the Inclination Game (Tinder-style)
 */
export const SwipeCard: React.FC<SwipeCardProps> = ({
  optionA,
  optionB,
  onSwipe,
}) => {
  return (
    <div className="flex gap-8 w-full max-w-2xl mx-auto">
      <motion.div
        className="
          flex-1 bg-pure-white border-2 border-pure-black p-8
          flex items-center justify-center min-h-64
          cursor-pointer
        "
        onClick={() => onSwipe('A')}
        whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
        whileTap={{ scale: 0.95 }}
      >
        <TypewriterText
          text={optionA}
          className="text-center font-retro text-base"
        />
      </motion.div>

      <motion.div
        className="
          flex-1 bg-pure-white border-2 border-pure-black p-8
          flex items-center justify-center min-h-64
          cursor-pointer
        "
        onClick={() => onSwipe('B')}
        whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
        whileTap={{ scale: 0.95 }}
      >
        <TypewriterText
          text={optionB}
          className="text-center font-retro text-base"
        />
      </motion.div>
    </div>
  );
};

export default SwipeCard;