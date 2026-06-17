import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';
import SwipeCard from '@/components/SwipeCard';

interface Screen2Props {
  onComplete: (curiosityProfile: Record<string, number>) => void;
}

const SCENARIOS = [
  {
    A: 'Fixing a broken machine',
    B: 'Sketching a new building',
    dimension: 'practical_vs_creative',
  },
  {
    A: 'Analyzing data patterns',
    B: 'Leading a team discussion',
    dimension: 'analytical_vs_social',
  },
  {
    A: 'Coding a new feature',
    B: 'Writing a compelling story',
    dimension: 'technical_vs_narrative',
  },
  {
    A: 'Building something tangible',
    B: 'Solving abstract problems',
    dimension: 'concrete_vs_abstract',
  },
  {
    A: 'Debating ideas',
    B: 'Creating visual art',
    dimension: 'verbal_vs_visual',
  },
];

export default function Screen2({ onComplete }: Screen2Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profile, setProfile] = useState<Record<string, number>>({});

  const handleSwipe = (choice: 'A' | 'B') => {
    const scenario = SCENARIOS[currentIndex];
    const weight = choice === 'A' ? -1 : 1;

    setProfile(prev => ({
      ...prev,
      [scenario.dimension]: (prev[scenario.dimension] || 0) + weight,
    }));

    if (currentIndex < SCENARIOS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete(profile);
    }
  };

  const scenario = SCENARIOS[currentIndex];
  const progress = ((currentIndex + 1) / SCENARIOS.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pure-white p-8">
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <TypewriterText
            text="What intrigues you more"
            className="font-retro text-3xl font-bold text-center mb-8 block"
          />
        </div>

        <div className="mb-8">
          <div className="w-full border-b-2 border-pure-black mb-4">
            <motion.div
              className="h-1 bg-pure-black"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-center font-retro">
            {currentIndex + 1} of {SCENARIOS.length}
          </p>
        </div>

        <SwipeCard
          optionA={scenario.A}
          optionB={scenario.B}
          onSwipe={handleSwipe}
        />
      </motion.div>
    </div>
  );
}