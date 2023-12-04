import React, { Suspense } from "react";
import { lazy } from "react";
import { Channels } from "../components/Channels";
import Loading from "../components/Loading";
// import PricingOrange from "../components/PricingOrange";

const Header = lazy(() => import("../components/Header"));
const Feature = lazy(() => import("../components/Feature"));
const Hero = lazy(() => import("../components/Hero"));
const ScrollToTop = lazy(() => import("../components/ScrollToTop"));
// const Customers = lazy(() => import("../components/Customers"));
// const Pricing = lazy(() => import("../components/Pricing"));
const PricingOrange = lazy(() => import("../components/PricingOrange"));
const Footer = lazy(() => import("../components/Footer"));
const SignUp = lazy(() => import("../components/SignUp"));

const Public = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        {/* Header */}
        <Header />
        {/* Hero section */}
        <Hero />
        {/* Feature section */}
        <Feature />
        {/* Customers section */}
        {/* <Customers /> */}
        {/* Pricing section */}
        {/* <Pricing /> */}
        <PricingOrange />
        {/* Channels section */}
        <Channels />

        {/* SignUp */}
        <SignUp />
        {/* Scroll to top */}
        <ScrollToTop />
        {/* Footer */}
        <Footer />
      </Suspense>
    </div>
  );
};

export default Public;
