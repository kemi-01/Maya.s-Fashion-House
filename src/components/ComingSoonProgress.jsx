import { motion } from "framer-motion";

export default function ComingSoonProgress({
  progress = 50,
  label = "ACADEMY in Process",
}) {
  return (
    <div className="w-full max-w-xl">
      <div className="mb-3 flex items-end justify-between gap-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
          {label}
        </span>

        <span className="text-xs tracking-[0.1em]">
          {progress}%
        </span>
      </div>

      <div
        className="h-[2px] w-full overflow-hidden bg-black/10 dark:bg-white/10"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${label}: ${progress}%`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full bg-black dark:bg-white"
        />
      </div>
    </div>
  );
}