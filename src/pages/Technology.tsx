import { motion } from "framer-motion";
import { Radiation, Thermometer, Dna, Gauge } from "lucide-react";
import PageHero from "../components/PageHero";
import TiltCard from "../components/TiltCard";

const steps = [
  {
    icon: Radiation,
    title: "Gamma exposure",
    body: "Cobalt-60 sources emit gamma photons that pass through sealed, pre-packaged food, disrupting the DNA of bacteria, mold, and insect larvae without making the food itself radioactive.",
  },
  {
    icon: Thermometer,
    title: "No heat, no chemicals",
    body: "Unlike pasteurization or chemical fumigation, irradiation is a cold process — texture, moisture, and most nutrients are preserved because the product's temperature barely changes.",
  },
  {
    icon: Dna,
    title: "Dose-controlled outcomes",
    body: "Different dose bands achieve different goals: low doses (0.1–1 kGy) inhibit sprouting and delay ripening; medium doses (1–7 kGy) reduce spoilage organisms and extend shelf life.",
  },
  {
    icon: Gauge,
    title: "Verified per batch",
    body: "Each batch passes through dosimetry checks confirming it received its target dose within a validated range before it is cleared for certification.",
  },
];

export default function Technology() {
  return (
    <div>
      <PageHero
        eyebrow="The technology"
        title="How gamma-ray preservation actually works"
        subtitle="A cold, dose-controlled process that extends shelf life while keeping food chemically unchanged — grounded in decades of Codex Alimentarius and IAEA-reviewed research."
      />

      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <TiltCard className="h-full">
              <s.icon className="w-8 h-8 text-ion mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.body}</p>
            </TiltCard>
          </motion.div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-10"
        >
          <h2 className="font-display text-2xl mb-4">Safety by design</h2>
          <p className="text-muted leading-relaxed mb-4">
            The proposal's safety case rests on three controls: sealed source
            containment with redundant shielding, dosimetry verification on
            every production run, and independent certification against
            Codex Alimentarius standards before any batch is released for
            distribution.
          </p>
          <p className="text-muted leading-relaxed">
            These controls are the technical foundation the rest of the
            proposal builds on — see the{" "}
            <a href="/facility" className="text-ion hover:underline underline-offset-4">
              facility proposal
            </a>{" "}
            for how they translate into physical infrastructure.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
