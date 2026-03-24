import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface LiveCounterProps {
  value: number;
  label: string;
  icon?: React.ReactNode;
  color?: string;
  animate?: boolean;
}

export function LiveCounter({ value, label, icon, color = "#00d4ff", animate = true }: LiveCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!animate) {
      setDisplayValue(value);
      return;
    }

    const duration = 1000;
    const steps = 60;
    const increment = (value - displayValue) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue((prev) => prev + increment);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, animate, displayValue]);

  return (
    <motion.div
      className="flex items-center gap-3 p-4 rounded-xl border border-[#00d4ff]/20 bg-[rgba(26,26,62,0.3)]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {icon && (
        <div className="p-2 rounded-lg" style={{ backgroundColor: `${color}20`, color }}>
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-2xl font-bold" style={{ color }}>
          {Math.round(displayValue).toLocaleString()}
        </span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    </motion.div>
  );
}
