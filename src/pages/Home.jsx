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
    </div>
  );
};
export default Home;
