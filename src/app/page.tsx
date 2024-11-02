import ClientSplashScreen from "@/components/client-splash-screen";
import Component from "@/components/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientSplashScreen />
      <Component />
    </main>
  );
}
