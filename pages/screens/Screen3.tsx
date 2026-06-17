import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';
import GradientNumber from '@/components/GradientNumber';

interface Screen3Props {
  pathCount: number;
  onComplete: () => void;
}

export default function Screen3({ pathCount, onComplete }: Screen3Props) {
  const [shouldDisssolve, setShouldDissolve] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldDissolve(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldDisssolve) {
      const timer = setTimeout(() => {
        onComplete();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [shouldDisssolve, onComplete]);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-pure-white p-8"
      animate={{ opacity: shouldDisssolve ? 0 : 1 }}
      transition={{ duration: 3, ease: 'easeInOut' }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mb-8">
          <TypewriterText
            text="You have"
            className="font-retro text-2xl font-bold block mb-2"
          />
        </div>

        <div className="my-12 text-center">
          <GradientNumber
            number={pathCount}
            className="text-9xl font-retro font-bold inline-block"
          />
        </div>

        <div>
          <TypewriterText
            text="amounts of options available for you to choose from"
            className="font-retro text-xl block leading-relaxed"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}