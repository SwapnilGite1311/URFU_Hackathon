import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Atom, FileDown, Award } from "lucide-react";
import VerifiedBadge from "../components/VerifiedBadge";
import GlassCard from "../components/GlassCard";
import Timeline from "../components/Timeline";
import { product, traceability } from "../data";

const facts = [
  { label: "Batch / Lot ID", value: product.batchId },
  { label: "Manufacturing Date", value: product.manufacturingDate },
  { label: "Irradiation Date", value: product.irradiationDate },
  { label: "Expiry Date", value: product.expiryDate },
  { label: "Irradiation Dose", value: `${product.irradiationDoseKGy} kGy` },
  { label: "Facility", value: product.facility },
];

export default function Verify() {
  const { productId } = useParams();

  return (
    <div className="min-h-screen">
      {/* minimal header, no full nav */}
      <header className="max-w-2xl mx-auto px-6 pt-8 pb-4 flex items-center gap-2">
        <Atom className="w-5 h-5 text-ion" strokeWidth={1.75} />
        <span className="font-display text-sm tracking-wide">GammaGuard</span>
        <span className="text-muted text-xs ml-auto">ID: {productId}</span>
      </header>

      <div className="max-w-2xl mx-auto px-6 pb-24">
        {/* hero card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-10"
        >
          <VerifiedBadge label={product.status} />
          <h1 className="font-display text-2xl md:text-3xl font-semibold mt-6">
            {product.name}
          </h1>
          <p className="text-muted text-sm mt-2">
            Certificate {product.certificateNumber}
          </p>
        </motion.div>

        {/* facts grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
            >
              <GlassCard className="p-4 h-full">
                <p className="text-muted text-xs uppercase tracking-wide mb-1">
                  {f.label}
                </p>
                <p className="font-display text-sm leading-snug">{f.value}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* certificate panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <div className="glass rounded-2xl p-6 border-2 border-dashed border-ion/30 relative">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-ion shrink-0" strokeWidth={1.5} />
              <div>
                <h2 className="font-display text-lg mb-1">Certificate of Safety</h2>
                <p className="text-muted text-sm leading-relaxed">
                  Certified safe for consumption per {product.standard}.
                </p>
              </div>
            </div>
            <button className="mt-5 w-full flex items-center justify-center gap-2 rounded-full border border-ion/40 text-ion py-2.5 text-sm font-medium hover:bg-ion/10 transition-colors focus-ring">
              <FileDown className="w-4 h-4" />
              Download Certificate (PDF)
            </button>
          </div>
        </motion.div>

        {/* traceability */}
        <div className="mb-10">
          <h2 className="font-display text-lg mb-6">Supply chain trace</h2>
          <Timeline stages={traceability} />
        </div>

        <p className="text-center text-xs text-muted/70">
          Demonstration for URFU International Hackathon 2026 — not a real
          commercial food safety certification.
        </p>
        <p className="text-center mt-4">
          <Link to="/" className="text-ion text-sm hover:underline underline-offset-4 focus-ring">
            ← Back to GammaGuard home
          </Link>
        </p>
      </div>
    </div>
  );
}
