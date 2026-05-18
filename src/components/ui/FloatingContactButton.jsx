"use client";
import React, { useEffect, useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { setSalesSlideoverOpen } from '@/redux/uiSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const FloatingContactButton = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  
  const [hasFallenFromSky, setHasFallenFromSky] = useState(false);
  const [key, setKey] = useState(0);

  // Robust check for home page
  const isHomePage = pathname === '/' || pathname === '/index.html' || pathname === '';

  useEffect(() => {
    if (isHomePage && !hasFallenFromSky) {
      const timer = setTimeout(() => {
        setHasFallenFromSky(true);
      }, 4000); // Wait 4 seconds before switching modes
      return () => clearTimeout(timer);
    }
  }, [isHomePage, hasFallenFromSky]);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [pathname]);

  const shouldFallFromSky = isHomePage && !hasFallenFromSky;

  return (
    <div className="fixed bottom-5 left-5 z-[100] pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={shouldFallFromSky ? { y: -800, opacity: 0 } : { x: -100, opacity: 0 }}
          animate={{ 
            y: 0, 
            x: 0, 
            opacity: 1,
          }}
          transition={shouldFallFromSky ? {
            y: {
              type: "spring",
              damping: 12,
              stiffness: 60, // Slightly faster than 40 for better feedback
              mass: 1,
            },
            opacity: { duration: 0.5 }
          } : {
            x: {
              type: "spring",
              damping: 20,
              stiffness: 260,
            },
            opacity: { duration: 0.3 }
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shouldFallFromSky ? 3 : 0.5
            }}
          >
            <button
              onClick={() => dispatch(setSalesSlideoverOpen(true))}
              className="flex items-center justify-center p-4 rounded-full bg-primary text-white shadow-2xl hover:bg-opacity-90 transition-all duration-300 group ring-4 ring-primary/10 hover:ring-primary/20"
            >
              <EnvelopeIcon className="h-6 w-6" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out font-medium">
                Contact Us
              </span>
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FloatingContactButton;
