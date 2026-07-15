import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import GlassCard from "../components/GlassCard";

const specs = [
  { label: "Source type", value: "Cobalt-60, sealed source" },
  { label: "Proposed site", value: "Vilnius region, Lithuania" },
  { label: "Throughput", value: "~40 tons/day" },
  { label: "Consortium", value: "12 partner countries" },
  { label: "Safeguards framework", value: "IAEA-aligned physical protection" },
  { label: "Waste handling", value: "On-site interim storage, licensed transfer" },
];

const pillars = [
  {
    title: "Site selection",
    body: "Located within 60km of major regional farm cooperatives to minimize pre-irradiation transit time and spoilage, while meeting IAEA siting criteria for population density, seismic activity, and access control.",
  },
  {
    title: "Physical safeguards",
    body: "Redundant shielding, restricted-access source chambers, and continuous radiation monitoring, with protocols aligned to IAEA Nuclear Security Series guidance.",
  },
  {
    title: "Operational safety",
    body: "Dosimetry verification on every run, trained radiation-protection officers on every shift, and a documented emergency-response plan reviewed by the international consortium.",
  },
  {
    title: "Waste & decommissioning",
    body: "Spent source material is transferred to licensed handlers under a documented chain of custody; the facility's decommissioning plan is scoped at the design stage, not deferred.",
  },
];

export default function Facility() {
  return (
    <div>
      <PageHero
        eyebrow="The proposed facility"
        title="Infrastructure built for safety first, throughput second"
        subtitle="This is the core of the proposal: a gamma irradiation facility sited, safeguarded, and operated to international nuclear-safety standards."
      />

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {specs.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <GlassCard>
                <p className="text-muted text-xs uppercase tracking-wide mb-1">
                  {s.label}
                </p>
                <p className="font-display text-lg">{s.value}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-32 space-y-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex gap-6 border-b border-white/5 pb-6"
          >
            <span className="font-display text-ion/50 text-3xl shrink-0 w-12">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-lg mb-2">{p.title}</h3>
              <p className="text-muted leading-relaxed">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
