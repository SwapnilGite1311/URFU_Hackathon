import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function VerifiedBadge({ label = "Verified Safe" }: { label?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full bg-ion/10 border border-ion/40 px-5 py-2.5 animate-pulseGlow"
    >
      <ShieldCheck className="w-5 h-5 text-ion" strokeWidth={2.25} />
      <span className="font-display text-sm tracking-wide text-ion uppercase">
        {label}
      </span>
    </motion.div>
  );
}
