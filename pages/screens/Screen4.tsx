import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';
import GradientNumber from '@/components/GradientNumber';
import RetroButton from '@/components/RetroButton';

interface Screen4Props {
  pathCount: number;
  onModify: () => void;
  onProceed: () => void;
}

export default function Screen4({
  pathCount,
  onModify,
  onProceed,
}: Screen4Props) {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-pure-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <TypewriterText
            text="Curated"
            className="font-retro text-2xl font-bold block mb-2"
          />
          <div className="inline-block mx-2">
            <GradientNumber
              number={pathCount}
              className="text-5xl font-retro font-bold"
            />
          </div>
          <TypewriterText
            text="for you to discover more"
            className="font-retro text-2xl font-bold block mt-2"
          />
        </div>

        {showButtons && (
          <motion.div
            className="flex gap-8 justify-center mt-16 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <RetroButton text="Modify" onClick={onModify} />
            <RetroButton text="Proceed" onClick={onProceed} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}