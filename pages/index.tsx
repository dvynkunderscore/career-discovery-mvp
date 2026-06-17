import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';

type ScreenType = 'screen1' | 'screen2' | 'screen3' | 'screen4' | 'screen5' | 'screen6';

interface UserData {
  age: number | null;
  gender: string;
  interests: string[];
  curiosityProfile: Record<string, number>;
  selectedCareer: string | null;
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('screen1');
  const [userData, setUserData] = useState<UserData>({
    age: null,
    gender: '',
    interests: [],
    curiosityProfile: {},
    selectedCareer: null,
  });
  const [pathCount, setPathCount] = useState(0);

  const handleScreen1Complete = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
    // Calculate paths based on interests (simplified logic)
    const calculatedPaths = (data.interests?.length || 0) * 5 + 12;
    setPathCount(calculatedPaths);
    setCurrentScreen('screen2');
  };

  const handleScreen2Complete = (curiosityProfile: Record<string, number>) => {
    setUserData(prev => ({ ...prev, curiosityProfile }));
    setCurrentScreen('screen3');
  };

  const handleScreen3Complete = () => {
    setCurrentScreen('screen4');
  };

  const handleScreen4Modify = () => {
    setCurrentScreen('screen1');
  };

  const handleScreen4Proceed = () => {
    setCurrentScreen('screen5');
  };

  const handleCareerSelect = (careerPath: string) => {
    setUserData(prev => ({ ...prev, selectedCareer: careerPath }));
    setCurrentScreen('screen6');
  };

  return (
    <motion.div
      className="min-h-screen bg-pure-white overflow-hidden"
      key={currentScreen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {currentScreen === 'screen1' && (
        <Screen1 onComplete={handleScreen1Complete} />
      )}
      {currentScreen === 'screen2' && (
        <Screen2 onComplete={handleScreen2Complete} />
      )}
      {currentScreen === 'screen3' && (
        <Screen3 pathCount={pathCount} onComplete={handleScreen3Complete} />
      )}
      {currentScreen === 'screen4' && (
        <Screen4
          pathCount={pathCount}
          onModify={handleScreen4Modify}
          onProceed={handleScreen4Proceed}
        />
      )}
      {currentScreen === 'screen5' && (
        <Screen5 onCareerSelect={handleCareerSelect} />
      )}
    </motion.div>
  );
}