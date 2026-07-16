import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import PageHero from "../components/PageHero";
import Timeline from "../components/Timeline";
import GlassCard from "../components/GlassCard";
import { traceability, product } from "../data";

export default function Traceability() {
  // const verifyUrl =
  //   typeof window !== "undefined"
  //     ? `${window.location.origin}/verify/${product.id}`
  //     : `/verify/${product.id}`;

  const verifyUrl =
  "https://urfu-hackathon.netlify.app/verify/GG-2026-004471";
  return (
    <div>
      <PageHero
        eyebrow="Trackability"
        title="One QR code, six verified checkpoints"
        subtitle="Every package carries a QR code linking to this exact batch's record — from the farm it left to the shelf it's sitting on."
      />

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <Timeline stages={traceability} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="flex flex-col sm:flex-row items-center gap-8 p-8">
            <div className="bg-white p-3 rounded-xl shrink-0">
              <QRCodeSVG value={verifyUrl} size={140} fgColor="#05070A" bgColor="#FFFFFF" />
            </div>
            <div>
              <p className="text-ion text-sm tracking-[0.2em] uppercase mb-2">
                Try it live
              </p>
              <h3 className="font-display text-xl mb-2">
                Scan to open this batch's verification page
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                This QR points to the same demo product used throughout this
                site — batch{" "}
                <span className="text-primary">{product.batchId}</span>,
                certificate{" "}
                <span className="text-primary">{product.certificateNumber}</span>.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
}
