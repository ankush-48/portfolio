import { motion } from "framer-motion";

const BUBBLES = [
  { size: 420, top: "6%", left: "-6%", delay: 0, duration: 18, opacity: 0.55 },
  { size: 320, top: "40%", left: "72%", delay: 2, duration: 22, opacity: 0.5 },
  { size: 260, top: "72%", left: "10%", delay: 4, duration: 20, opacity: 0.45 },
  { size: 200, top: "18%", left: "55%", delay: 1, duration: 16, opacity: 0.4 },
  { size: 360, top: "82%", left: "60%", delay: 3, duration: 24, opacity: 0.5 },
  { size: 160, top: "30%", left: "25%", delay: 5, duration: 14, opacity: 0.35 },
];

export function LiveBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* base wash */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />
      {/* floating orbs */}
      {BUBBLES.map((b, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background:
              i % 2 === 0
                ? "radial-gradient(circle at 30% 30%, var(--primary), transparent 65%)"
                : "radial-gradient(circle at 60% 40%, var(--primary-glow), transparent 60%)",
            opacity: b.opacity,
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />
    </div>
  );
}