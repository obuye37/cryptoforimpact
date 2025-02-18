'use client'
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';


interface ScreenDimension {
    screenWidth: number
    screenHeight: number
}
// Define the type for the context value
interface ScreenSizeContextType {
  screenSize: ScreenDimension;
  setScreenSize?: React.Dispatch<React.SetStateAction<ScreenDimension>>;
}

// Create a Context with a default value of `undefined` (will be checked later)
const ScreenSizeContext = createContext<ScreenSizeContextType | undefined>(undefined);

// Create a provider component
interface AppProviderProps {
  children: ReactNode;
}

export const ScreenSizeProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [screenSize, setScreenSize] = useState<ScreenDimension>({
    screenWidth: window?.innerWidth || 1920,
    screenHeight:window?.innerHeight ||1020
  });

  useEffect(() => {
    const getScreenSize = () => 
        setScreenSize({
            screenWidth:window.innerWidth,
            screenHeight:window.innerHeight
        })
  
    return () => getScreenSize()
  }, [])
  

  return (
    <ScreenSizeContext.Provider value={{ screenSize }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

// Custom hook to use the context
export const useScreenSizeContext = (): ScreenSizeContextType => {
  const context = useContext(ScreenSizeContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
