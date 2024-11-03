"use client";

import dynamic from "next/dynamic";

const SplashScreen = dynamic(() => import("./splash-screen").then(mod => mod.ClientSplashScreen), {
  ssr: false,
});

export default function ClientSplashScreen() {
  return <SplashScreen />;
} 