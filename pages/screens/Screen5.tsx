import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';
import CareerCard from '@/components/CareerCard';

interface Screen5Props {
  onCareerSelect: (careerPath: string) => void;
}

const CAREER_CATEGORIES = [
  {
    category: 'The Builders',
    careers: [
      {
        title: 'Architect',
        summary: 'Designing innovative structures that shape cityscapes and communities for generations.',
      },
      {
        title: 'Software Engineer',
        summary: 'Building digital systems that power the modern world with code and creativity.',
      },
      {
        title: 'Civil Engineer',
        summary: 'Creating infrastructure and bridges that connect people and places.',
      },
      {
        title: 'Product Manager',
        summary: 'Building products that solve real problems for millions of users.',
      },
    ],
  },
  {
    category: 'The Storytellers',
    careers: [
      {
        title: 'Novelist',
        summary: 'Crafting narratives that transport readers to new worlds and perspectives.',
      },
      {
        title: 'Filmmaker',
        summary: 'Telling visual stories that inspire, entertain, and challenge audiences.',
      },
      {
        title: 'Journalist',
        summary: 'Uncovering truth and sharing important stories with the world.',
      },
      {
        title: 'Content Creator',
        summary: 'Building engaged communities through authentic and engaging content.',
      },
    ],
  },
  {
    category: 'The Analysts',
    careers: [
      {
        title: 'Data Scientist',
        summary: 'Extracting insights from data to drive decisions and innovation.',
      },
      {
        title: 'Researcher',
        summary: 'Uncovering new knowledge and pushing the boundaries of human understanding.',
      },
      {
        title: 'Economist',
        summary: 'Analyzing markets and systems to understand how societies function.',
      },
      {
        title: 'UX Researcher',
        summary: 'Understanding human behavior to create better digital experiences.',
      },
    ],
  },
];

export default function Screen5({ onCareerSelect }: Screen5Props) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen bg-pure-white p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12">
          <TypewriterText
            text="Explore your future paths"
            className="font-retro text-3xl font-bold block mb-4"
          />
        </div>

        {/* Category tabs */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {CAREER_CATEGORIES.map((cat, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-3 border-2 border-pure-black font-retro whitespace-nowrap ${
                activeCategory === idx
                  ? 'bg-pure-black text-pure-white'
                  : 'bg-pure-white text-pure-black'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TypewriterText text={cat.category} />
            </motion.button>
          ))}
        </div>

        {/* Career cards */}
        <motion.div
          className="flex gap-6 overflow-x-auto pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={activeCategory}
        >
          {CAREER_CATEGORIES[activeCategory].careers.map((career, idx) => (
            <CareerCard
              key={idx}
              title={career.title}
              summary={career.summary}
              onClick={() => onCareerSelect(career.title)}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}