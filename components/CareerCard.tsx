import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

interface CareerCardProps {
  title: string;
  summary: string;
  onClick: () => void;
}

/**
 * CareerCard component with hover typewriter effect
 */
export const CareerCard: React.FC<CareerCardProps> = ({
  title,
  summary,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="
        w-64 h-80 bg-pure-white border-2 border-pure-black
        flex flex-col justify-between p-6
        cursor-pointer flex-shrink-0
      "
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <div>
        <h3 className="font-retro text-lg font-bold mb-4 text-pure-black">
          {title}
        </h3>
      </div>
      <div className="min-h-32">
        {isHovered ? (
          <TypewriterText text={summary} className="text-sm leading-relaxed" />
        ) : (
          <p className="text-sm text-gray-700">{summary.substring(0, 50)}...</p>
        )}
      </div>
    </motion.div>
  );
};

export default CareerCard;