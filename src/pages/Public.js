import { Suspense, lazy } from "react";
import { Channels } from "../components/Channels";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Loading from "../components/Loading";

const Feature = lazy(() => import("../components/Feature"));
const ScrollToTop = lazy(() => import("../components/ScrollToTop"));
const PricingOrange = lazy(() => import("../components/PricingOrange"));
const Footer = lazy(() => import("../components/Footer"));
const SignUp = lazy(() => import("../components/SignUp"));

const Public = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Hero section */}
      <Hero />
      <Suspense fallback={<Loading />}>
        {/* Feature section */}
        <Feature />
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
    </>
  );
};

export default Public;
