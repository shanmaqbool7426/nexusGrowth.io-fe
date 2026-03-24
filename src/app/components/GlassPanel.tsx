import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  glow?: "blue" | "green" | "purple" | "none";
}

export function GlassPanel({ children, className = "", glow = "none" }: GlassPanelProps) {
  const glowColors = {
    blue: "shadow-[0_0_30px_rgba(0,212,255,0.3)]",
    green: "shadow-[0_0_30px_rgba(0,255,136,0.3)]",
    purple: "shadow-[0_0_30px_rgba(185,102,255,0.3)]",
    none: "",
  };

  return (
    <div
      className={`
        relative rounded-2xl border border-[#00d4ff]/30
        bg-gradient-to-br from-[rgba(26,26,62,0.4)] to-[rgba(10,10,20,0.6)]
        backdrop-blur-xl
        ${glowColors[glow]}
        ${className}
      `}
      style={{
        background: "linear-gradient(135deg, rgba(26,26,62,0.4) 0%, rgba(10,10,20,0.6) 100%)",
      }}
    >
      {children}
    </div>
  );
}
