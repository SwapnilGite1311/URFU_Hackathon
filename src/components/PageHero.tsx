import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-fade opacity-70"
      />
      <div className="max-w-4xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-ion text-sm tracking-[0.2em] uppercase mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-semibold leading-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted mt-5 max-w-2xl text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
