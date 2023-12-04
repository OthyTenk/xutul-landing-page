import React, { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));
const Contact = lazy(() => import("../components/OutStand/Contact"));
const ScrollToTop = lazy(() => import("../components/ScrollToTop"));

function OutStand() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        {/* Header */}
        <Header />
        <Contact />
        {/* Scroll to top */}
        <ScrollToTop />
        {/* Footer */}
        <Footer />
      </Suspense>
    </div>
  );
}

export default OutStand;
