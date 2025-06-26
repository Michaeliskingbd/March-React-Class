import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Popular from "../components/Popular";
import Sale from "../components/Sale";
import Conditional from "../components/Conditional";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Popular />
      <Sale />
      <Conditional />
    </div>
  );
};
export default Home;
