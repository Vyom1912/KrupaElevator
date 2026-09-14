import {
  Hero,
  HomeStrip,
  WhyUs,
  HomeProductPreview,
  HomeTechPreview,
  HomeServicePreview,
  HomeContactCTA,
} from "../../components/index";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HomeStrip />
      <WhyUs />
      <HomeProductPreview />
      <HomeTechPreview />
      <HomeServicePreview />
      <HomeContactCTA />
    </main>
  );
}
