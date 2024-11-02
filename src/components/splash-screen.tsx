"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Logo-6.json";

export default function SplashScreen() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    if (isAnimationComplete) {
      // Wait for fade out animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldUnmount(true);
      }, 500); // Match this with the duration in the className below

      return () => clearTimeout(timer);
    }
  }, [isAnimationComplete]);

  if (shouldUnmount) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-[430px] max-h-[932px] aspect-[430/932]">
            <Lottie
              animationData={animationData}
              loop={false}
              onComplete={() => setIsAnimationComplete(true)}
              className={`transition-opacity duration-500 w-full h-full ${
                isAnimationComplete ? "opacity-0" : "opacity-100"
              }`}
              rendererSettings={{
                preserveAspectRatio: "xMidYMid meet",
                progressiveLoad: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 