import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import ComingSoonProgress from "../components/ComingSoonProgress";

const heroImage =
  "https://res.cloudinary.com/dcoojr90p/image/upload/v1792249836/31_wbtogx.jpg";

const editorialImages = [
  {
    image:
      "https://res.cloudinary.com/dcoojr90p/image/upload/v1792256034/865_vblnmr.jpg",
   
  },
  {
    image:
      "https://res.cloudinary.com/dcoojr90p/image/upload/v1792256032/2234_lm1clt.jpg",
    
  },
  {
    image:
      "https://res.cloudinary.com/dcoojr90p/image/upload/v1792256030/576_fhwvkv.jpg",

  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white text-black dark:bg-black dark:text-white pt-20">

      {/* HERO */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Maya's Fashion House fashion campaign"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 flex min-h-screen items-end px-5 pb-12 pt-32 sm:px-8 lg:px-12 lg:pb-16">
          <div className="mx-auto w-full max-w-[1600px]">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-[10px] uppercase tracking-[0.3em] text-white/70"
            >
              Maya's Fashion House
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-7xl lg:text-[9rem]"
            >
              Fashion
              <br />
              Without
              <br />
              Limits.
            </motion.h1>

            <div className="mt-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-md text-sm leading-7 text-white/75"
              >
                Maya's Fashion House explores contemporary fashion
                through bold expression, considered design, and an
                evolving creative identity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  to="/collection"
                  className="group inline-flex items-center gap-3 bg-white px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white"
                >
                  View Collection
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 border border-white/50 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  Discover MF
                </Link>
              </motion.div>
            </div>

            <div className="mt-12 flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/50">
              <ArrowDownRight size={14} />
              Scroll to explore
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-12">

          <div className="lg:col-span-4">
           
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-5xl text-3xl font-medium uppercase leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-7xl">
              A fashion house shaped by expression, individuality, and
              the freedom to explore.
            </h2>

            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 border-b border-black/30 pb-2 text-[10px] uppercase tracking-[0.2em] dark:border-white/30"
            >
              Explore the house
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* EDITORIAL IMAGES */}
     {/* EDITORIAL IMAGES */}
<section className="relative overflow-hidden px-5 pb-28 sm:px-8 lg:px-12 lg:pb-40">
  <div className="mx-auto max-w-[1600px]">

    {/* HEADER */}
    <div className="mb-14 flex items-end justify-between sm:mb-20">
      <div>
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40">
          Selected Editorial
        </p>

        <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl">
          The House
        </h2>
      </div>

      <span className="text-[9px] uppercase tracking-[0.25em] text-black/30 dark:text-white/30">
        2026 / 03
      </span>
    </div>

    {/* EDITORIAL STAGE */}
    <div className="relative">

      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -140 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative z-10
          w-[78%]
          sm:w-[58%]
          lg:absolute
          lg:left-0
          lg:top-[14%]
          lg:w-[29%]
        "
      >
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={editorialImages[0].image}
            alt="Maya's Fashion House sculptural fashion editorial"
            loading="lazy"
            className="
              h-full w-full object-cover
              grayscale
              transition duration-1000
              hover:scale-105
              hover:grayscale-0
            "
          />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
            {editorialImages[0].label}
          </span>

          <span className="text-[9px] text-black/30 dark:text-white/30">
            01
          </span>
        </div>
      </motion.div>


      {/* CENTER IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.2,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative z-20
          mx-auto
          mt-10
          w-[88%]
          sm:w-[70%]
          lg:mt-0
          lg:w-[42%]
        "
      >
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={editorialImages[1].image}
            alt="Maya's Fashion House collection dress"
            loading="lazy"
            className="
              h-full w-full object-cover
              grayscale
              transition duration-1000
              hover:scale-105
              hover:grayscale-0
            "
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
            {editorialImages[1].label}
          </span>

          <span className="text-[9px] text-black/30 dark:text-white/30">
            02
          </span>
        </div>
      </motion.div>


      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 140 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1.1,
          delay: 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative z-10
          ml-auto
          mt-12
          w-[72%]
          sm:w-[52%]
          lg:absolute
          lg:right-0
          lg:top-[28%]
          lg:mt-0
          lg:w-[27%]
        "
      >
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={editorialImages[2].image}
            alt="Maya's Fashion House fashion illustration"
            loading="lazy"
            className="
              h-full w-full object-cover
              grayscale
              transition duration-1000
              hover:scale-105
              hover:grayscale-0
            "
          />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
            {editorialImages[2].label}
          </span>

          <span className="text-[9px] text-black/30 dark:text-white/30">
            03
          </span>
        </div>
      </motion.div>


      {/* CENTER EDITORIAL TEXT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="
          relative z-30
          mt-14
          hidden
          text-center
          lg:block
          lg:pt-[34rem]
        "
      >
        <p className="text-[10px] uppercase tracking-[0.4em] text-black/40 dark:text-white/40">
          Maya&apos;s Fashion House
        </p>

        <p className="mx-auto mt-5 max-w-xl text-4xl font-medium uppercase leading-[0.9] tracking-[-0.04em] xl:text-6xl">
          Fashion
          <br />
          without
          <br />
          limits.
        </p>
      </motion.div>


      {/* MOBILE TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center lg:hidden"
      >
        <p className="text-[9px] uppercase tracking-[0.35em] text-black/40 dark:text-white/40">
          Maya&apos;s Fashion House
        </p>

        <h3 className="mx-auto mt-4 max-w-sm text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-5xl">
          Fashion
          <br />
          Without
          <br />
          Limits.
        </h3>
      </motion.div>

    </div>
  </div>
</section>

      {/* COLLECTION ANNOUNCEMENT */}
      <section className="border-y border-black/10 px-5 py-24 dark:border-white/10 sm:px-8 lg:px-12 lg:py-36">
  <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-12">

    <div className="lg:col-span-7">
      

      <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
        The New
        <br />
        Collection
        <br />
        Is Here.
      </h2>
    </div>

    <div className="flex flex-col justify-end lg:col-span-5">

      <p className="max-w-md text-sm leading-7 text-black/55 dark:text-white/55">
        Discover the latest Maya&apos;s Fashion House collection —
        a curated expression of style, craftsmanship, and the
        creative vision behind the house.
      </p>

      <Link
        to="/collection"
        className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-black/30 pb-2 text-[10px] uppercase tracking-[0.2em] dark:border-white/30"
      >
        Explore the collection

        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>

    </div>
  </div>
</section>

      {/* CONTACT CTA */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1600px]">

        
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

            <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-[8rem]">
              Let's
              <br />
              Create.
            </h2>

            <div className="max-w-sm">
              <p className="text-sm leading-7 text-black/55 dark:text-white/55">
                For enquiries, collaborations, creative conversations,
                and the latest updates from Maya's Fashion House.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 bg-black px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
              >
                Connect With The Studio
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}