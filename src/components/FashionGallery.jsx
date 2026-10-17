
import { motion } from "framer-motion";

const defaultImages = [
  {
    number: "01",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1699999999/fashion-01.jpg",
    alt: "Fashion editorial image one",
  },
  {
    number: "02",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1699999999/fashion-02.jpg",
    alt: "Fashion editorial image two",
  },
  {
    number: "03",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1699999999/fashion-03.jpg",
    alt: "Fashion editorial image three",
  },
  {
    number: "04",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1699999999/fashion-04.jpg",
    alt: "Fashion editorial image four",
  },
  {
    number: "05",
    image:
      "https://res.cloudinary.com/demo/image/upload/v1699999999/fashion-05.jpg",
    alt: "Fashion editorial image five",
  },
];

export default function FashionGallery({ images = defaultImages }) {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-4 overflow-x-auto pb-5 md:grid md:grid-cols-5 md:items-center md:gap-4 md:overflow-visible">
        {images.map((item, index) => {
          const imageSrc = item.src || item.image;

          return (
            <motion.figure
              key={imageSrc || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={`group min-w-[70vw] flex-shrink-0 md:min-w-0 ${
                index === 2
                  ? "md:-translate-y-8"
                  : index % 2 === 0
                  ? "md:translate-y-4"
                  : ""
              }`}
            >
              <div className="mb-3 text-[10px] tracking-[0.2em] text-black/40 dark:text-white/40">
                {item.number || String(index + 1).padStart(2, "0")}
              </div>

              <div
                className={`relative overflow-hidden ${
                  index === 2 ? "aspect-[3/5]" : "aspect-[3/4]"
                }`}
              >
                <img
                  src={imageSrc}
                  alt={item.alt || `Fashion editorial image ${index + 1}`}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(event) => {
                    console.error(
                      "Fashion image failed to load:",
                      event.currentTarget.src
                    );
                  }}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
            </motion.figure>
          );
        })}
      </div>
    </div>
  );
}
