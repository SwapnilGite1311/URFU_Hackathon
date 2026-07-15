import { motion } from "framer-motion";
import { Leaf, Radiation, FlaskConical, Package, Truck, Store } from "lucide-react";
import { TraceStage } from "../data";

const iconMap = {
  leaf: Leaf,
  radiation: Radiation,
  flask: FlaskConical,
  package: Package,
  truck: Truck,
  store: Store,
};

function formatTimestamp(ts: string) {
  return new Date(ts).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Timeline({ stages }: { stages: TraceStage[] }) {
  return (
    <div className="relative">
      {/* connector line — vertical on mobile, horizontal on desktop */}
      <svg
        className="hidden md:block absolute top-7 left-0 w-full h-1 pointer-events-none"
        aria-hidden="true"
      >
        <motion.line
          x1="4%"
          y1="1"
          x2="96%"
          y2="1"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="6 8"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#4FF3C0" />
            <stop offset="100%" stopColor="#7C5CFF" />
          </linearGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative">
        {stages.map((stage, i) => {
          const Icon = iconMap[stage.icon];
          return (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:text-center"
            >
              <div className="shrink-0 w-14 h-14 rounded-full glass flex items-center justify-center border-ion/40 relative z-10">
                <Icon className="w-6 h-6 text-ion" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-display text-sm">{stage.stage}</p>
                <p className="text-xs text-muted mt-0.5">{stage.location}</p>
                <p className="text-xs text-ion/80 mt-0.5">
                  {formatTimestamp(stage.timestamp)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
