import Navbar from "../components/Navbar";
// import HeroSection from "../components/HeroSection";
// import Popular from "../components/Popular";
import Sale from "../components/Sale";
import { lazy, Suspense, useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Collection from "../components/Collection";
// const Dashboard = lazy(() => import('./Dashboard'));

const HeroSection = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../components/HeroSection"));
      }, 10000);
    })
);

const Popular = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../components/Popular"));
      }, 5000);
    })
);

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count changes"); //Dependency array
  }, [count]);

  const ic = () => {
    setCount(count + 1);
  };
  const dc = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Navbar />

      <Suspense fallback={<Spinner />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Popular />
      </Suspense>

      <Collection />

      <Sale />
      <button onClick={ic}>add</button>
      <span>{count}</span>
      <button onClick={dc}>minus</button>
    </div>
  );
};
export default Home;
