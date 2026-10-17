import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import PageTransition from "../components/PageTransition";
import IntroLoader from "../pages/loader/IntroLoader";

export default function MainLayout() {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white">

      {/* INTRO LOADER */}
      <AnimatePresence>
        {showLoader && (
          <IntroLoader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      {/* HEADER */}
      <Header />

      {/* SCROLL TO TOP */}
      <ScrollToTop />

      {/* PAGE CONTENT */}
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}