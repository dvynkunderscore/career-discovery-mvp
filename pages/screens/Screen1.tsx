import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';
import RetroButton from '@/components/RetroButton';

interface Screen1Props {
  onComplete: (data: any) => void;
}

const ACTIVITIES = [
  'Design',
  'Coding',
  'Reading',
  'Building',
  'Debating',
  'Analyzing',
  'Storytelling',
];

const GENDERS = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

export default function Screen1({ onComplete }: Screen1Props) {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [step, setStep] = useState<'age' | 'gender' | 'interests' | 'confirm'>('age');

  const toggleInterest = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const canProceed = () => {
    if (step === 'age') return age && parseInt(age) > 0 && parseInt(age) < 120;
    if (step === 'gender') return gender !== '';
    if (step === 'interests') return interests.length >= 2;
    return true;
  };

  const handleNext = () => {
    if (step === 'age') setStep('gender');
    else if (step === 'gender') setStep('interests');
    else if (step === 'interests') setStep('confirm');
    else if (step === 'confirm') {
      onComplete({
        age: parseInt(age),
        gender,
        interests,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pure-white p-8">
      <motion.div
        className="max-w-md w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12 text-center">
          <TypewriterText
            text="Let us discover your future"
            className="font-retro text-2xl font-bold block mb-8"
          />
        </div>

        {step === 'age' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="block font-retro mb-4">
              <TypewriterText text="What is your age" />
            </label>
            <input
              type="number"
              value={age}
              onChange={e => setAge(e.target.value)}
              className="w-full border-2 border-pure-black p-3 bg-pure-white font-retro text-lg mb-6"
              placeholder="Enter your age"
            />
          </motion.div>
        )}

        {step === 'gender' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="block font-retro mb-4">
              <TypewriterText text="Select your gender" />
            </label>
            <div className="space-y-3">
              {GENDERS.map(g => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`w-full border-2 border-pure-black p-3 font-retro text-lg ${
                    gender === g
                      ? 'bg-pure-black text-pure-white'
                      : 'bg-pure-white text-pure-black'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'interests' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="block font-retro mb-4">
              <TypewriterText text="Select your activities min 2" />
            </label>
            <div className="grid grid-cols-2 gap-3">
              {ACTIVITIES.map(activity => (
                <button
                  key={activity}
                  onClick={() => toggleInterest(activity)}
                  className={`border-2 border-pure-black p-3 font-retro text-sm ${
                    interests.includes(activity)
                      ? 'bg-pure-black text-pure-white'
                      : 'bg-pure-white text-pure-black'
                  }`}
                >
                  {activity}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'confirm' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <TypewriterText
              text="Ready to discover your paths"
              className="font-retro text-xl mb-6 block"
            />
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <RetroButton
            text={step === 'confirm' ? 'Begin' : 'Next'}
            onClick={handleNext}
            className={!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}
          />
        </div>
      </motion.div>
    </div>
  );
}