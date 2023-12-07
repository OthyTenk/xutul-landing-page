import { Analytics } from '@vercel/analytics/react';
import { lazy, Suspense } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";

const Footer = lazy(() => import("../components/Footer"));
const Contact = lazy(() => import("../components/OutStand/Contact"));
const ScrollToTop = lazy(() => import("../components/ScrollToTop"));

function OutStand() {
  return (
    <>
      {/* Header */}
      <Header />
      <Suspense fallback={<Loading />}>
        <Contact />
        {/* Scroll to top */}
        <ScrollToTop />
        {/* Footer */}
        <Footer />
        <Analytics />
      </Suspense>
    </>
  );
}

export default OutStand;
