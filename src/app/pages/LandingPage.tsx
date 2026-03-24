import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { GlassPanel } from "../components/GlassPanel";
import { Sparkles, TrendingUp, Zap, Shield, Globe, BarChart3 } from "lucide-react";
import { Button } from "../components/ui/button";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d4ff]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b966ff]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(#00d4ff 1px, transparent 1px),
            linear-gradient(90deg, #00d4ff 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12 text-[#00d4ff]" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-[#00d4ff] via-[#b966ff] to-[#00ff88] bg-clip-text text-transparent">
              NexusGrowth.io
            </h1>
            <Sparkles className="w-12 h-12 text-[#00ff88]" />
          </div>
          <p className="text-xl text-[#a0a8c5] max-w-2xl mx-auto">
            Social Media Growth & Intelligence Ecosystem
          </p>
          <p className="text-sm text-[#00d4ff] mt-2">
            Authentic Engagement • AI-Powered Insights • Verified Trust Network
          </p>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-12 max-w-4xl"
        >
          {[
            { icon: <TrendingUp className="w-6 h-6" />, label: "Exponential Growth", color: "#00d4ff" },
            { icon: <Shield className="w-6 h-6" />, label: "Anti-Bot Security", color: "#00ff88" },
            { icon: <BarChart3 className="w-6 h-6" />, label: "Real-Time Analytics", color: "#b966ff" },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 rounded-xl border border-[#00d4ff]/20 bg-[rgba(26,26,62,0.3)] backdrop-blur-xl"
            >
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${feature.color}20`, color: feature.color }}>
                {feature.icon}
              </div>
              <span className="text-sm text-[#e0e7ff]">{feature.label}</span>
            </div>
          ))}
        </motion.div>

        {/* User type selection */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full"
        >
          {/* Creator Card */}
          <GlassPanel glow="blue" className="p-8 cursor-pointer group hover:border-[#00d4ff] transition-all">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#b966ff] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-[#00d4ff] mb-3">I'm a Creator</h2>
              <p className="text-[#a0a8c5] mb-6">
                Grow your channels, optimize content, and monetize through our intelligence platform
              </p>
              <ul className="text-left space-y-2 mb-6 text-sm text-[#e0e7ff]">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]"></div>
                  Real-time retention analytics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]"></div>
                  AI-powered content insights
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]"></div>
                  Campaign management system
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]"></div>
                  Channel marketplace access
                </li>
              </ul>
              <Button
                onClick={() => navigate("/creator")}
                className="w-full bg-[#00d4ff] text-black hover:bg-[#00b8e6] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
              >
                Launch Command Center
              </Button>
            </div>
          </GlassPanel>

          {/* Earner Card */}
          <GlassPanel glow="green" className="p-8 cursor-pointer group hover:border-[#00ff88] transition-all">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-[#00ff88] mb-3">I'm an Earner</h2>
              <p className="text-[#a0a8c5] mb-6">
                Complete tasks, provide authentic engagement, and earn rewards in our trusted network
              </p>
              <ul className="text-left space-y-2 mb-6 text-sm text-[#e0e7ff]">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></div>
                  Gamified task interface
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></div>
                  Instant payment processing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></div>
                  Trust score rewards
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></div>
                  Human verification bonus
                </li>
              </ul>
              <Button
                onClick={() => navigate("/earner")}
                className="w-full bg-[#00ff88] text-black hover:bg-[#00e678] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]"
              >
                Start Earning Now
              </Button>
            </div>
          </GlassPanel>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center gap-8 text-sm text-[#a0a8c5]"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#00d4ff]" />
            <span>256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#00ff88]" />
            <span>Real-time Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#b966ff]" />
            <span>Global Network</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
