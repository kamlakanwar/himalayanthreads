import BestSellerSection from "./homepage/BestSellerSection";
import HeroSection from "./homepage/HeroSection";
import HimachaliTrendSection from "./homepage/himachalSection/HimachaliTrendSection";
import TrendingJewelry from "./homepage/TrendingJewelry";
import Highlights from "./homepage/Highlights";
import TrendingKalgi from "./homepage/TrendingKalgi";
import NewArrival from "./homepage/NewArrival";
import PremiumStoles from "./homepage/PremiumStoles";
import CultureSection from "./homepage/CultureSection";
import RealSection from "./homepage/RealSection";
import StorySection from "./homepage/StorySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HimachaliTrendSection />
      <BestSellerSection />
      <RealSection />
      <TrendingJewelry />
      <Highlights />
      <TrendingKalgi />
      <NewArrival />
      <PremiumStoles />
      <CultureSection />
      <StorySection />
    </main>
  );
}