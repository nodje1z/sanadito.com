"use client";

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'
import Lottie from "lottie-react";
import mobileAnimation from "@/assets/Logo-6.json";
import desktopAnimation from "@/assets/Logo-6-desktop.json";

function useWindowSize() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkSize()
    
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkSize, 100)
    }
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  return isMobile
}

// Main splash screen component
function SplashScreen() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useWindowSize()

  useEffect(() => {
    // Prevent body scroll during splash screen
    document.body.style.overflow = 'hidden'
    
    // Add a small delay to ensure smooth transition
    const loadTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    
    if (isAnimationComplete) {
      const timer = setTimeout(() => {
        setShouldUnmount(true);
        document.body.style.overflow = '';
        // Dispatch event when animation is complete
        window.dispatchEvent(new Event('splashComplete'))
      }, 300); // Reduced from 500ms to 300ms for faster transition

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }

    return () => clearTimeout(loadTimer)
  }, [isAnimationComplete]);

  if (shouldUnmount) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        !isLoaded ? 'opacity-0' : isAnimationComplete ? 'opacity-0' : 'opacity-100'
      }`}
      aria-label="Pantalla de carga"
      role="status"
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-full h-full ${
            isMobile 
              ? 'max-w-[430px] max-h-[932px] aspect-[430/932]'
              : 'max-w-[1920px] max-h-[1080px] aspect-[16/9]'
          }`}>
            <Lottie
              animationData={isMobile ? mobileAnimation : desktopAnimation}
              loop={false}
              onComplete={() => setIsAnimationComplete(true)}
              className="w-full h-full"
              rendererSettings={{
                preserveAspectRatio: "xMidYMid meet",
                progressiveLoad: true,
                hideOnTransparent: true,
              }}
              aria-hidden="true"
              initialSegment={[0, isMobile ? 120 : 180]} // Optimize animation length
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Client-side wrapper with dynamic import
export const ClientSplashScreen = dynamic(() => Promise.resolve(SplashScreen), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-50 bg-black" aria-hidden="true" />
  )
}) 