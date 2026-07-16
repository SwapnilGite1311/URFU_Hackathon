import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import GlassCard from "../components/GlassCard";

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Get in touch"
        title="Questions about the proposal"
        subtitle="Reach the team behind  — built for URFU International Hackathon 2026."
      />

      <section className="max-w-3xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4"
        >
          <GlassCard>
            <Mail className="w-6 h-6 text-ion mb-3" strokeWidth={1.5} />
            <h3 className="font-display text-base mb-1">Email the team</h3>
            <p className="text-muted text-sm">team@-demo.example</p>
          </GlassCard>
          <GlassCard>
            <Users className="w-6 h-6 text-ion mb-3" strokeWidth={1.5} />
            <h3 className="font-display text-base mb-1">Team</h3>
            <p className="text-muted text-sm">
              Add your team members' names and roles here.
            </p>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
}
