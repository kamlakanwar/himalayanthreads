import StorySection from "./Story_Section";
import BannerSection from "./BannerSection";
import FeaturesSection from "./FeatureSection";
import SpecialSection from "./SpecialSection";
import CultureSection from "../homepage/CultureSection";
import CommunitySection from "./CommunitySection";
import SocialMedia from "./SocialMedia";

export default function about() {
  return (
    <div>
      <BannerSection />
        <FeaturesSection />
        <StorySection />
        <SpecialSection />
        <CultureSection />
        <CommunitySection />
        <SocialMedia />
    </div>
  );
}