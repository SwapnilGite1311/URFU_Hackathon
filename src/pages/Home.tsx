import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Radiation, ShieldCheck, Clock3, Leaf } from "lucide-react";
import OrbitRings from "../components/OrbitRings";
import Counter from "../components/Counter";
import TiltCard from "../components/TiltCard";
import Timeline from "../components/Timeline";
import { stats, traceability } from "../data";

const features = [
  {
    icon: Radiation,
    title: "Precision Dosing",
    body: "Calibrated Cobalt-60 gamma exposure eliminates spoilage organisms without heat, preserving texture and nutrients.",
  },
  {
    icon: ShieldCheck,
    title: "Codex-Aligned Safety",
    body: "Every batch is certified against Codex Alimentarius standards for irradiated foods before it leaves the facility.",
  },
  {
    icon: Clock3,
    title: "Extended Shelf Life",
    body: "Up to 300% longer shelf life for perishables, cutting spoilage losses across the entire supply chain.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);

  return (
    <div>
      {/* HERO */}
      <div ref={heroRef} className="relative h-[100svh] overflow-hidden">
        <motion.video
          style={{ scale: videoScale, y: videoY }}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-facility.jpg"
        >
          <source src="/hero-facility.mp4" type="video/mp4" />
        </motion.video>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/60 to-void"
        />
        <OrbitRings />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-ion text-sm tracking-[0.2em] uppercase mb-4"
          >
            URFU International Hackathon — Nuclear Infrastructure Proposal
          </motion.p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold max-w-4xl leading-[1.05]">
            {"Preserving food, powered by nuclear precision."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-slate-200 mt-6 max-w-xl text-base md:text-lg [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]"
          >
            A proposal for a gamma-ray irradiation facility and end-to-end
            traceability system — extending food shelf life while keeping every
            batch verifiable, from harvest to shelf.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <Link
              to="/technology"
              className="rounded-full bg-ion text-void font-medium px-6 py-3 hover:bg-ion/90 transition-colors focus-ring"
            >
              Explore the Technology
            </Link>
            <Link
              to="/verify/GG-2026-004471"
              className="rounded-full border border-white/20 px-6 py-3 hover:border-ion/50 hover:text-ion transition-colors focus-ring"
            >
              See a Live Verification
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1.5"
        >
          <span className="w-1 h-1.5 rounded-full bg-ion" />
        </motion.div>
      </div>

      {/* content panel slides up over the hero */}
      <div className="relative bg-void rounded-t-[2.5rem] -mt-8 z-10">
        {/* STATS */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                <p className="text-muted text-sm mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-ion text-sm tracking-[0.2em] uppercase mb-3">
              Why gamma irradiation
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              A cold process, an old element, and a global food-loss problem.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TiltCard>
                  <f.icon className="w-8 h-8 text-ion mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg mb-2">{f.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{f.body}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FACILITY TEASER */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-white/10 aspect-video"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/lab-qc.jpg"
            >
              <source src="/conveyor.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gamma text-sm tracking-[0.2em] uppercase mb-3">
              The proposed facility
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Purpose-built for safety, throughput, and IAEA-aligned safeguards.
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              The proposal sites a Cobalt-60 irradiation facility within reach
              of regional farm cooperatives, cutting transit-driven spoilage
              while keeping every safety protocol auditable against
              international standards.
            </p>
            <Link
              to="/facility"
              className="text-ion hover:underline underline-offset-4 focus-ring"
            >
              View the facility proposal →
            </Link>
          </motion.div>
        </section>

        {/* TRACEABILITY TEASER */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-ion text-sm tracking-[0.2em] uppercase mb-3">
              Trackability
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Every batch, traced from field to shelf.
            </h2>
          </motion.div>
          <Timeline stages={traceability} />
          <div className="text-center mt-14">
            <Link
              to="/traceability"
              className="text-ion hover:underline underline-offset-4 focus-ring"
            >
              See the full traceability methodology →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
