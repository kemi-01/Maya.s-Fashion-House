import { useEffect } from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logo/logo2.png";

export default function IntroLoader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999999] flex h-screen w-screen items-center justify-center overflow-hidden bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
    >
      {/* Very subtle background MF */}
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 0.025, scale: 1 }}
        transition={{
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <img
          src={logo}
          alt=""
          className="w-[70vw] max-w-[700px] object-contain"
        />
      </motion.div>

      {/* Main loader */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-6">

        {/* Small top text */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mb-12 text-center text-[9px] uppercase tracking-[0.45em] text-white/40"
        >
          EST. / MAYA&apos;S FASHION HOUSE
        </motion.p>

        {/* REAL LOGO */}
        <div className="relative flex items-center justify-center">

          {/* Logo reveal */}
          <motion.div
            initial={{
              clipPath: "inset(100% 0 0 0)",
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              clipPath: "inset(0% 0 0 0)",
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={logo}
              alt="Maya's Fashion House"
              className="w-[180px] object-contain sm:w-[230px] lg:w-[280px]"
            />
          </motion.div>

          {/* Light sweep */}
          <motion.div
            initial={{ x: "-150%" }}
            animate={{ x: "150%" }}
            transition={{
              duration: 1.4,
              delay: 0.8,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-15deg] bg-white/20 blur-xl"
          />

        </div>

        {/* Brand name */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 text-center text-[10px] uppercase tracking-[0.5em] text-white/70 sm:text-xs"
        >
          MAYA&apos;S FASHION HOUSE
        </motion.p>

        {/* Progress */}
        <div className="mt-24 w-full">

          <div className="mb-3 flex items-center justify-between">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-[9px] uppercase tracking-[0.3em] text-white/30"
            >
              ENTERING THE HOUSE
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-[9px] uppercase tracking-[0.3em] text-white/30"
            >
              2026
            </motion.p>
          </div>

          <div className="h-px w-full overflow-hidden bg-white/15">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3.6,
                delay: 0.2,
                ease: "linear",
              }}
              className="h-full bg-white"
            />
          </div>

        </div>

        {/* Bottom message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 0.8,
          }}
          className="mt-6 text-center text-[9px] uppercase tracking-[0.3em] text-white/30"
        >
          A new chapter is coming
        </motion.p>

      </div>

      {/* Corner details */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-6 text-[8px] uppercase tracking-[0.3em] text-white/20"
      >
        MF / 001
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 right-6 text-[8px] uppercase tracking-[0.3em] text-white/20"
      >
        STUDIO
      </motion.p>

    </motion.div>
  );
}