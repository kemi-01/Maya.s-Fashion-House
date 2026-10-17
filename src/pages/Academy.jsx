
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

import ComingSoonProgress from "../components/ComingSoonProgress";

const studioImage =
  "https://res.cloudinary.com/dcoojr90p/image/upload/v1792263331/djdf_mhuyy9.jpg";

export default function Academy() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10 px-5 pb-20 pt-28 dark:border-white/10 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">

        <div className="pointer-events-none absolute right-[-5%] top-[10%] select-none">
          <span className="text-[20vw] font-black leading-none tracking-[-0.08em] text-black/[0.025] dark:text-white/[0.025]">
            MF
          </span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">

          <Link
            to="/"
            className="mb-14 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-black/45 transition-colors hover:text-black dark:text-white/45 dark:hover:text-white"
          >
            <ArrowLeft size={13} />
            Back Home
          </Link>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            <div className="lg:col-span-7">

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 text-[9px] uppercase tracking-[0.28em] text-black/40 dark:text-white/40"
              >
                01 — Maya&apos;s Fashion House Academy
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
              >
                Building the next generation of creative talent.
              </motion.h1>

            </div>

            <div className="flex items-end lg:col-span-5">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-sm"
              >
                <p className="text-xs leading-6 text-black/60 dark:text-white/60">
                  Maya&apos;s Fashion House Academy is creating a space where
                  aspiring creatives can learn practical skills, develop their
                  ideas, and grow through fashion.
                </p>

                <p className="mt-4 text-xs leading-6 text-black/60 dark:text-white/60">
                  Courses, workshops, and creative experiences are currently
                  in development.
                </p>

                <button
                  type="button"
                  onClick={() => {}}
                  className="group mt-8 inline-flex items-center gap-3 border border-black px-5 py-3 text-[9px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                >
                  <Heart
                    size={13}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                  Support the Academy
                </button>
              </motion.div>

            </div>

          </div>
        </div>
      </section>


      {/* STUDIO IMAGE */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-[1400px]">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >

            <img
              src={studioImage}
              alt="Maya's Fashion House studio"
              className="h-[55vh] w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:h-[65vh]"
              loading="lazy"
            />

            {/* IMAGE LABEL */}
            <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />

              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-white drop-shadow">
                The Studio
              </span>
            </div>

            {/* BOTTOM CAPTION */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">

              <p className="max-w-xs text-[10px] uppercase leading-5 tracking-[0.15em] text-white/80">
                A space for ideas,
                <br />
                learning & creation.
              </p>

              <span className="text-[9px] uppercase tracking-[0.2em] text-white/60">
                02
              </span>

            </div>

          </motion.div>

        </div>
      </section>


      {/* COMING SOON */}
      <section className="border-b border-black/10 px-5 py-20 dark:border-white/10 sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16">

          <div className="lg:col-span-6">

            <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
              03 — Coming Soon
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              A new home for learning and creativity.
            </h2>

          </div>

          <div className="flex flex-col justify-end lg:col-span-6">

            <p className="max-w-md text-xs leading-6 text-black/55 dark:text-white/55">
              We&apos;re developing an educational experience focused on
              practical learning, creativity, fashion, and helping emerging
              talent turn ideas into real projects.
            </p>

            <div className="mt-8 max-w-md">
              <ComingSoonProgress progress={50} />
            </div>

            <p className="mt-6 text-[9px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              Academy launch — coming soon
            </p>

          </div>

        </div>
      </section>


      {/* SUPPORT */}
      <section className="border-b border-black/10 px-5 py-20 dark:border-white/10 sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12">

          <div className="lg:col-span-7">

            <p className="mb-6 text-[9px] uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
              04 — Support
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Help us build something meaningful.
            </h2>

          </div>

          <div className="flex items-end lg:col-span-5">

            <div className="max-w-md">

              <p className="text-xs leading-6 text-black/55 dark:text-white/55">
                Your support will help us develop learning resources,
                creative programs, and opportunities for aspiring talent.
              </p>

              <button
                type="button"
                onClick={() => {}}
                className="group mt-7 inline-flex items-center gap-3 bg-black px-6 py-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:opacity-80 dark:bg-white dark:text-black"
              >
                Donate to the Academy

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* FINAL */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <p className="max-w-2xl text-2xl font-medium leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl">
            Fashion can be learned.
            <br />
            <span className="text-black/35 dark:text-white/35">
              Creativity can be developed.
            </span>
          </p>

          <Link
            to="/collection"
            className="group mt-10 inline-flex items-center gap-3 border-b border-black/25 pb-2 text-[9px] uppercase tracking-[0.2em] dark:border-white/25"
          >
            Explore the collection

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </section>

    </main>
  );
}
