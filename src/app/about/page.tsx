import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "./_components/Hero";
import Introduction from "./_components/Introduction";
import VisionQuote from "./_components/VisionQuote";
import Team from "./_components/Team";
import HowWeWork from "./_components/HowWeWork";
import Recognition from "./_components/Recognition";
import CTABanner from "./_components/CTABanner";
import StatsBanner from "./_components/StatsBanner";
import ProjectPage8 from "./_components/ProjectPage8";

const AboutPage = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <Introduction />
      <VisionQuote />
      <Team />
      <HowWeWork />
      <ProjectPage8/>
      <Recognition />
      <CTABanner />
      <StatsBanner />
      <Footer />
    </div>
  );
};

export default AboutPage;