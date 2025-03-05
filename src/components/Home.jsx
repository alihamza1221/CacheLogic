// pages/index.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import SocialProveCarousel from "./carousel";
import ServicesGrid from "./services";
export default function HomeSection() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <SocialProveCarousel />
        <ServicesGrid />
      </main>
    </div>
  );
}
