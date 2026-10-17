
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const collectionVideo =
  "https://res.cloudinary.com/dcoojr90p/video/upload/v1792261217/k_eppeef.mp4";

const collectionImages = [
  {
    image:
      "https://res.cloudinary.com/dcoojr90p/image/upload/v1792256030/WhatsApp_Image_2026-10-17_at_9.24.41_AM_n3otgs.jpg",
    label: "01",
    
    position: "center",
    width: "lg:w-[43%]",
  },
  {
    image:
      "https://res.cloudinary.com/dcoojr90p/image/upload/v1792256032/WhatsApp_Image_2026-10-17_at_9.27.09_AM_rc0xha.jpg",
    label: "02",
    
    position: "center",
    width: "lg:w-[32%]",
  },
  {
    image:
      "https://res.cloudinary.com/dcoojr90p/image/upload/v1792260163/asjkfjhd_boa1h9.jpg",
    label: "03",
  
    position: "center",
    width: "lg:w-[34%]",
  },
  {
    image:
      "https://res.cloudinary.com/dcoojr90p/image/upload/v1792260188/jhh_ctlkj8.jpg",
    label: "04",
    
    position: "center",
    width: "lg:w-[43%]",
  },
  {
    image:
      "https://res.cloudinary.com/dcoojr90p/image/upload/v1792260206/ssjhxc_zxt8fm.jpg",
    label: "05",
   
    position: "center",
    width: "lg:w-[34%]",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function EditorialImage({ item, index, className = "" }) {
  return (
    <motion.figure
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`group ${className}`}
    >
      <div
        className={`relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 ${
          index === 2 ? "aspect-[3/5]" : "aspect-[4/5]"
        }`}
      >
        <img
          src={item.image}
          alt={`Maya's Fashion House — ${item.title}`}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          onError={(event) => {
            console.error(
              "Collection image failed to load:",
              event.currentTarget.src
            );
          }}
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
        />

        <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.15em] text-white mix-blend-difference">
          {item.label}
        </span>
      </div>

      <figcaption className="flex items-center justify-between gap-3 py-3">
        <span className="text-[10px] uppercase tracking-[0.12em] text-black/65 dark:text-white/65">
          {item.title}
        </span>

        <span className="text-[9px] tracking-[0.12em] text-black/35 dark:text-white/35">
          MFH / {item.label}
        </span>
      </figcaption>
    </motion.figure>
  );
}

export default function Collection() {
  return (
    <main className="min-h-screen overflow-hidden bg-white pt-20 text-black dark:bg-black dark:text-white">
      {/* COLLECTION FILM */}
      <section className="relative bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-[78svh] min-h-[480px] max-h-[1000px] w-full overflow-hidden sm:h-[88svh]"
        >
          <video
            src={collectionVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Maya's Fashion House collection film"
            className="h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-12">
            <div className="mx-auto flex max-w-[1600px] items-end justify-between gap-5">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="text-[9px] uppercase tracking-[0.22em] text-white/80 sm:text-[10px]">
                  Maya&apos;s Fashion House
                </p>

                <p className="mt-2 text-[9px] tracking-[0.12em] text-white/60">
                  An exploration of contemporary style
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-right text-[9px] uppercase tracking-[0.18em] text-white/70"
              >
                Collection 01
                <br />
                <span className="mt-1 inline-block text-white/45">
                  2026
                </span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-12 md:gap-12">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
              The Collection
            </p>

            <div className="mt-5 h-px w-10 bg-current opacity-30" />
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-8"
          >
            <h1 className="max-w-2xl text-2xl font-medium leading-snug tracking-[-0.035em] sm:text-3xl lg:text-4xl">
              Clothing with a point of view.
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-black/55 dark:text-white/55">
              A visual study of form, texture and individuality.
              Discover the pieces and details that define the
              Maya&apos;s Fashion House aesthetic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL GALLERY */}
      <section className="border-y border-black/10 px-5 py-16 dark:border-white/10 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 flex items-end justify-between gap-4 sm:mb-16"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
                The Visual Archive
              </p>

              <h2 className="mt-3 text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                Selected looks
              </h2>
            </div>

            <span className="text-[9px] uppercase tracking-[0.15em] text-black/40 dark:text-white/40">
              05 Photographs
            </span>
          </motion.div>

          {/* Image 01 */}
          <div className="grid grid-cols-1 gap-y-14 sm:gap-y-20 lg:grid-cols-12 lg:gap-x-8">
            <EditorialImage
              item={collectionImages[0]}
              index={0}
              className="w-full sm:mx-auto sm:w-[78%] lg:col-span-6 lg:col-start-4 lg:w-full"
            />

            {/* Image 02 */}
            <EditorialImage
              item={collectionImages[1]}
              index={1}
              className="w-[88%] sm:w-[65%] lg:col-span-4 lg:col-start-2 lg:mt-12 lg:w-full"
            />

            {/* Image 03 */}
            <EditorialImage
              item={collectionImages[2]}
              index={2}
              className="ml-auto w-[88%] sm:w-[65%] lg:col-span-4 lg:col-start-8 lg:mt-24 lg:w-full"
            />

            {/* Image 04 */}
            <EditorialImage
              item={collectionImages[3]}
              index={3}
              className="w-full sm:mx-auto sm:w-[78%] lg:col-span-6 lg:col-start-2 lg:mt-10 lg:w-full"
            />

            {/* Image 05 */}
            <EditorialImage
              item={collectionImages[4]}
              index={4}
              className="ml-auto w-[82%] sm:w-[60%] lg:col-span-4 lg:col-start-8 lg:mt-24 lg:w-full"
            />
          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto flex max-w-[1400px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/45 dark:text-white/45">
              Maya&apos;s Fashion House
            </p>

            <p className="mt-4 max-w-md text-xl font-medium leading-relaxed tracking-[-0.025em] sm:text-2xl">
              An individual expression.
              <br />
              A style of your own.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-4 border-b border-black/25 pb-3 text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-black dark:border-white/25 dark:hover:border-white"
          >
            Connect with the studio

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <footer className="border-t border-black/10 px-5 py-7 dark:border-white/10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-black/55 transition-colors hover:text-black dark:text-white/55 dark:hover:text-white"
          >
            <ArrowLeft
              size={13}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back Home
          </Link>

          <p className="text-[9px] uppercase tracking-[0.12em] text-black/40 dark:text-white/40">
            MFH © 2026
          </p>

          <Link
            to="/contact"
            className="text-[9px] uppercase tracking-[0.15em] transition-opacity hover:opacity-50"
          >
            Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}
