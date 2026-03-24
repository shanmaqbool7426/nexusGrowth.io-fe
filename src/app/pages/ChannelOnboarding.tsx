import { useState } from "react";
import { useNavigate } from "react-router";
import { GlassPanel } from "../components/GlassPanel";
import { CircularProgress } from "../components/CircularProgress";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Youtube,
  Instagram,
  Facebook,
  CheckCircle,
  Loader2,
  Shield,
  TrendingUp,
  Users,
  Eye,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function ChannelOnboarding() {
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "connecting" | "analyzing" | "complete">("idle");
  const [auditScore, setAuditScore] = useState(0);

  const platforms = [
    {
      id: "youtube",
      name: "YouTube",
      icon: Youtube,
      color: "#FF0000",
      description: "Connect your YouTube channel for growth optimization",
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: Sparkles,
      color: "#000000",
      description: "Link your TikTok account for viral content insights",
    },
    {
      id: "meta",
      name: "Meta (FB/IG)",
      icon: Facebook,
      color: "#1877F2",
      description: "Integrate Facebook and Instagram accounts",
    },
  ];

  const handleConnect = () => {
    setConnectionStatus("connecting");
    setTimeout(() => {
      setConnectionStatus("analyzing");
      // Simulate audit score calculation
      let score = 0;
      const interval = setInterval(() => {
        score += 2;
        setAuditScore(score);
        if (score >= 87) {
          clearInterval(interval);
          setTimeout(() => {
            setConnectionStatus("complete");
          }, 500);
        }
      }, 50);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-[#e0e7ff]">
      {/* Top Navigation */}
      <div className="border-b border-[#00d4ff]/20 bg-[rgba(10,10,20,0.8)] backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-[#00d4ff]" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#b966ff] bg-clip-text text-transparent">
                Channel Onboarding
              </h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/creator")}
              className="border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {connectionStatus === "idle" && (
          <>
            {/* Platform Selection */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#e0e7ff] mb-4">Connect Your Channel</h2>
              <p className="text-lg text-[#a0a8c5]">
                Select a platform to begin deep analytics and growth optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {platforms.map((platform) => (
                <GlassPanel
                  key={platform.id}
                  glow={selectedPlatform === platform.id ? "blue" : "none"}
                  className={`p-8 cursor-pointer transition-all ${
                    selectedPlatform === platform.id ? "border-[#00d4ff]" : ""
                  }`}
                  onClick={() => setSelectedPlatform(platform.id)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${platform.color}20` }}
                    >
                      <platform.icon className="w-10 h-10" style={{ color: platform.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-[#e0e7ff] mb-2">{platform.name}</h3>
                    <p className="text-sm text-[#a0a8c5]">{platform.description}</p>
                    {selectedPlatform === platform.id && (
                      <CheckCircle className="w-6 h-6 text-[#00ff88] mt-4" />
                    )}
                  </div>
                </GlassPanel>
              ))}
            </div>

            {selectedPlatform && (
              <GlassPanel glow="green" className="p-8">
                <h3 className="text-2xl font-bold text-[#00d4ff] mb-6">API Integration Setup</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="text-sm text-[#a0a8c5] mb-2 block">Channel URL or Username</label>
                    <Input
                      placeholder="Enter your channel URL..."
                      className="bg-[rgba(26,26,62,0.5)] border-[#00d4ff]/20 focus:border-[#00d4ff]"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-[#a0a8c5] mb-2 block">API Key (Optional)</label>
                    <Input
                      placeholder="Enter API key for deeper insights..."
                      type="password"
                      className="bg-[rgba(26,26,62,0.5)] border-[#00d4ff]/20 focus:border-[#00d4ff]"
                    />
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-[rgba(26,26,62,0.3)] border border-[#00d4ff]/20">
                    <Shield className="w-5 h-5 text-[#00ff88]" />
                    <div>
                      <div className="text-sm font-bold text-[#e0e7ff]">Secure Connection</div>
                      <div className="text-xs text-[#a0a8c5]">256-bit encrypted API authentication</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-[rgba(26,26,62,0.3)] border border-[#00d4ff]/20">
                    <TrendingUp className="w-5 h-5 text-[#00d4ff]" />
                    <div>
                      <div className="text-sm font-bold text-[#e0e7ff]">Real-time Sync</div>
                      <div className="text-xs text-[#a0a8c5]">Analytics updated every 15 minutes</div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleConnect}
                  className="w-full bg-gradient-to-r from-[#00d4ff] to-[#b966ff] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                  size="lg"
                >
                  Connect & Analyze Channel
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </GlassPanel>
            )}
          </>
        )}

        {connectionStatus === "connecting" && (
          <div className="flex items-center justify-center min-h-[400px]">
            <GlassPanel glow="blue" className="p-12 text-center max-w-md">
              <Loader2 className="w-16 h-16 text-[#00d4ff] mx-auto mb-6 animate-spin" />
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-2">Establishing Connection</h2>
              <p className="text-[#a0a8c5]">Verifying channel credentials and API access...</p>
            </GlassPanel>
          </div>
        )}

        {connectionStatus === "analyzing" && (
          <div className="flex items-center justify-center min-h-[400px]">
            <GlassPanel glow="purple" className="p-12 text-center max-w-md">
              <CircularProgress value={auditScore} max={100} size={160} color="#b966ff" showValue />
              <h2 className="text-2xl font-bold text-[#b966ff] mb-2 mt-6">Running Deep Audit</h2>
              <p className="text-[#a0a8c5]">Analyzing growth metrics, engagement patterns, and content performance...</p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#a0a8c5]">Subscriber Analysis</span>
                  <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#a0a8c5]">Engagement Metrics</span>
                  <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#a0a8c5]">Content Quality Score</span>
                  {auditScore > 50 ? (
                    <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                  ) : (
                    <Loader2 className="w-4 h-4 text-[#00d4ff] animate-spin" />
                  )}
                </div>
              </div>
            </GlassPanel>
          </div>
        )}

        {connectionStatus === "complete" && (
          <div className="space-y-8">
            <div className="text-center">
              <CheckCircle className="w-20 h-20 text-[#00ff88] mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-[#00ff88] mb-2">Channel Connected!</h2>
              <p className="text-lg text-[#a0a8c5]">Your channel audit is complete</p>
            </div>

            <GlassPanel glow="green" className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <CircularProgress value={auditScore} max={100} size={100} color="#00ff88" showValue={false} />
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-[#00ff88]">{auditScore}</div>
                    <div className="text-sm text-[#a0a8c5]">Audit Score</div>
                  </div>
                </div>
                <div className="text-center p-6 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <Users className="w-12 h-12 text-[#00d4ff] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#00d4ff]">125K</div>
                  <div className="text-sm text-[#a0a8c5]">Subscribers</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <Eye className="w-12 h-12 text-[#b966ff] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#b966ff]">28K</div>
                  <div className="text-sm text-[#a0a8c5]">Avg Views</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <TrendingUp className="w-12 h-12 text-[#00ff88] mx-auto mb-2" />
                  <div className="text-3xl font-bold text-[#00ff88]">+24%</div>
                  <div className="text-sm text-[#a0a8c5]">Growth Rate</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <h3 className="text-xl font-bold text-[#e0e7ff]">Audit Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20">
                    <div className="text-sm text-[#a0a8c5] mb-1">Growth Health</div>
                    <div className="text-lg font-bold text-[#00ff88]">Excellent</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                    <div className="text-sm text-[#a0a8c5] mb-1">Engagement Rate</div>
                    <div className="text-lg font-bold text-[#00d4ff]">High</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20">
                    <div className="text-sm text-[#a0a8c5] mb-1">Monetization Status</div>
                    <div className="text-lg font-bold text-[#00ff88]">Eligible</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#b966ff]/10 border border-[#b966ff]/20">
                    <div className="text-sm text-[#a0a8c5] mb-1">Content Quality</div>
                    <div className="text-lg font-bold text-[#b966ff]">Premium</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => navigate("/creator")}
                  className="flex-1 bg-gradient-to-r from-[#00d4ff] to-[#b966ff] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                  size="lg"
                >
                  Go to Dashboard
                </Button>
                <Button
                  onClick={() => navigate("/campaign/new")}
                  variant="outline"
                  className="flex-1 border-[#00ff88]/30 hover:border-[#00ff88] hover:bg-[#00ff88]/10"
                  size="lg"
                >
                  Create Campaign
                </Button>
              </div>
            </GlassPanel>
          </div>
        )}
      </div>
    </div>
  );
}
