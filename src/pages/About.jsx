import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const studioImage =
  "https://res.cloudinary.com/dcoojr90p/image/upload/v1792249835/21_fynsbg.jpg";

const styles = [
  "Luxury Fashion",
  "Ready-to-Wear",
  "African Fashion",
  "Streetwear",
  "Custom Outfits",
  "Designer Collections",
];

export default function About() {
  return (
    <div className="overflow-hidden bg-white text-black dark:bg-black dark:text-white">

      {/* HERO */}
      <section className="relative px-5 pb-24 pt-36 sm:px-8 lg:px-12 lg:pb-36 lg:pt-48">
        <div className="mx-auto max-w-[1600px]">

          <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40">
            About Maya's Fashion House
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl text-6xl font-black uppercase leading-[0.85] tracking-[-0.05em] sm:text-8xl lg:text-[10rem]"
          >
            Designed
            <br />
            To Express.
          </motion.h1>

        </div>
      </section>

      {/* STORY */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-12">

          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
              01 — Our Approach
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-5xl text-3xl font-medium uppercase leading-[1.1] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              Maya's Fashion House is a developing fashion identity
              built around individuality, contemporary expression, and
              an open approach to style.
            </p>

            <p className="mt-10 max-w-2xl text-sm leading-8 text-black/55 dark:text-white/55">
              The house embraces different expressions of fashion,
              allowing collections and custom pieces to evolve around
              the people, ideas, and creative direction behind them.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE */}
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1600px]">

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[16/9] overflow-hidden"
          >
            <img
              src={studioImage}
              alt="Maya's Fashion House studio"
              loading="lazy"
              className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
            />
          </motion.div>

        </div>
      </section>

      {/* VISION */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-12">

          <div className="lg:col-span-7">
            <p className="mb-8 text-[10px] uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
              02 — Vision
            </p>

            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Fashion
              <br />
              Should
              <br />
              Feel
              <br />
              Personal.
            </h2>
          </div>

          <div className="flex items-end lg:col-span-5">
            <p className="max-w-md text-sm leading-8 text-black/55 dark:text-white/55">
              Our approach is intentionally open. From refined
              silhouettes to expressive streetwear and custom
              creations, Maya's Fashion House is developing a space
              where different fashion languages can exist together.
            </p>
          </div>

        </div>
      </section>

      {/* STYLES */}
      <section className="border-y border-black/10 dark:border-white/10">

        <div className="mx-auto max-w-[1600px]">

          <div className="grid lg:grid-cols-12">

            <div className="border-b border-black/10 p-5 dark:border-white/10 sm:p-8 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-12">
              <p className="text-[10px] uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                03 — Style
              </p>
            </div>

            <div className="lg:col-span-8">

              {styles.map((style, index) => (
                <motion.div
                  key={style}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="flex items-center justify-between border-b border-black/10 px-5 py-7 last:border-b-0 dark:border-white/10 sm:px-8 lg:px-12 lg:py-9"
                >
                  <span className="text-2xl font-medium uppercase tracking-[-0.02em] sm:text-4xl">
                    {style}
                  </span>

                  <span className="text-[10px] text-black/30 dark:text-white/30">
                    0{index + 1}
                  </span>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-12 lg:flex-row lg:items-end">

          <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-[8rem]">
            The Next
            <br />
            Chapter
            <br />
            Awaits.
          </h2>

          <div>
            <p className="mb-7 max-w-sm text-sm leading-7 text-black/50 dark:text-white/50">
              Explore the upcoming collection or connect directly
              with the studio.
            </p>

            <div className="flex flex-wrap gap-3">

              <Link
                to="/collection"
                className="group inline-flex items-center gap-3 bg-black px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-white dark:bg-white dark:text-black"
              >
                Collection
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-black/20 px-6 py-4 text-[10px] uppercase tracking-[0.2em] dark:border-white/20"
              >
                Contact
              </Link>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}