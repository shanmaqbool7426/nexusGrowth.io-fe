import { useState } from "react";
import { useNavigate } from "react-router";
import { GlassPanel } from "../components/GlassPanel";
import { CircularProgress } from "../components/CircularProgress";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Zap,
  Shield,
  Wallet,
  Target,
  Clock,
  TrendingUp,
  Star,
  Eye,
  ThumbsUp,
  Share2,
  MessageSquare,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  Activity,
} from "lucide-react";

const availableTasks = [
  {
    id: "task-1",
    creator: "TechReviewer_HD",
    type: "Retention Watch",
    description: "Watch video for 2:30 min minimum with attention tracking",
    reward: 2.5,
    duration: "3 min",
    difficulty: "Easy",
  },
  {
    id: "task-2",
    creator: "FitnessGuru_Pro",
    type: "Feedback & Quiz",
    description: "Watch video, provide feedback, and complete verification quiz",
    reward: 4.0,
    duration: "5 min",
    difficulty: "Medium",
  },
  {
    id: "task-3",
    creator: "CookingChannel_X",
    type: "Share Campaign",
    description: "Share video link on WhatsApp/Facebook with tracking",
    reward: 3.5,
    duration: "2 min",
    difficulty: "Easy",
  },
  {
    id: "task-4",
    creator: "TravelVlogger",
    type: "Full Engagement",
    description: "Watch, like, comment, and share with verification",
    reward: 6.0,
    duration: "8 min",
    difficulty: "Hard",
  },
];

const completedTasks = [
  { id: 1, creator: "GameReviews_HD", type: "Retention", reward: 2.5, status: "verified", date: "2h ago" },
  { id: 2, creator: "MusicChannel_X", type: "Feedback", reward: 4.0, status: "verified", date: "5h ago" },
  { id: 3, creator: "TechTips_Pro", type: "Share", reward: 3.5, status: "pending", date: "1d ago" },
];

export function EarnerDashboard() {
  const navigate = useNavigate();
  const [trustScore] = useState(92);
  const [totalEarnings] = useState(284.5);
  const [pendingEarnings] = useState(42.0);
  const [deviceFingerprint] = useState("DFP-8X9K2-M4L7P-Q3R5");

  return (
    <div className="min-h-screen bg-black text-[#e0e7ff]">
      {/* Top Navigation */}
      <div className="border-b border-[#00ff88]/20 bg-[rgba(10,10,20,0.8)] backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Zap className="w-8 h-8 text-[#00ff88]" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
                NexusGrowth.io
              </h1>
              <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30">Earner Terminal</Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20">
                <Wallet className="w-4 h-4 text-[#00ff88]" />
                <span className="font-bold text-[#00ff88]">${totalEarnings.toFixed(2)}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/")}
                className="border-[#00ff88]/30 hover:border-[#00ff88] hover:bg-[#00ff88]/10"
              >
                Exit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Trust Score Card */}
          <GlassPanel glow="green" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#00ff88]">Trust Score</h3>
              <Shield className="w-5 h-5 text-[#00ff88]" />
            </div>
            <div className="flex flex-col items-center">
              <CircularProgress value={trustScore} max={100} size={120} color="#00ff88" label="Score" />
              <div className="mt-4 w-full space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#a0a8c5]">Human Verification</span>
                  <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#a0a8c5]">Device Verified</span>
                  <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#a0a8c5]">Tasks Completed</span>
                  <span className="text-[#00ff88] font-bold">127</span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20">
              <div className="text-xs text-[#a0a8c5] mb-1">Device Fingerprint</div>
              <div className="text-xs font-mono text-[#00ff88]">{deviceFingerprint}</div>
            </div>
          </GlassPanel>

          {/* Earnings Overview */}
          <GlassPanel glow="blue" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#00d4ff]">Earnings Overview</h3>
              <DollarSign className="w-5 h-5 text-[#00d4ff]" />
            </div>
            <div className="space-y-4">
              <div className="text-center p-4 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                <div className="text-3xl font-bold text-[#00d4ff]">${totalEarnings.toFixed(2)}</div>
                <div className="text-sm text-[#a0a8c5]">Total Earnings</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <div className="text-xl font-bold text-[#00ff88]">${pendingEarnings.toFixed(2)}</div>
                  <div className="text-xs text-[#a0a8c5]">Pending</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <div className="text-xl font-bold text-[#b966ff]">${(totalEarnings - pendingEarnings).toFixed(2)}</div>
                  <div className="text-xs text-[#a0a8c5]">Available</div>
                </div>
              </div>
              <Button className="w-full bg-[#00d4ff] text-black hover:bg-[#00b8e6]">
                <Wallet className="w-4 h-4 mr-2" />
                Withdraw to JazzCash
              </Button>
            </div>
          </GlassPanel>

          {/* Today's Stats */}
          <GlassPanel glow="purple" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#b966ff]">Today's Performance</h3>
              <Activity className="w-5 h-5 text-[#b966ff]" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-[#00d4ff]" />
                  <span className="text-sm">Tasks Completed</span>
                </div>
                <span className="text-xl font-bold text-[#00d4ff]">8</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#00ff88]" />
                  <span className="text-sm">Time Active</span>
                </div>
                <span className="text-xl font-bold text-[#00ff88]">2h 15m</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#b966ff]" />
                  <span className="text-sm">Earned Today</span>
                </div>
                <span className="text-xl font-bold text-[#b966ff]">$18.50</span>
              </div>
              <div className="p-3 rounded-lg bg-gradient-to-r from-[#00d4ff]/20 to-[#00ff88]/20 border border-[#00d4ff]/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#e0e7ff]">Daily Streak</span>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#00ff88]" />
                    <span className="text-xl font-bold text-[#00ff88]">12 Days</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>

        <Tabs defaultValue="available" className="space-y-6">
          <TabsList className="bg-[rgba(26,26,62,0.5)] border border-[#00ff88]/20">
            <TabsTrigger value="available" className="data-[state=active]:bg-[#00ff88]/20 data-[state=active]:text-[#00ff88]">
              <Target className="w-4 h-4 mr-2" />
              Available Tasks
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-[#00ff88]/20 data-[state=active]:text-[#00ff88]">
              <CheckCircle className="w-4 h-4 mr-2" />
              Completed
            </TabsTrigger>
            <TabsTrigger value="wallet" className="data-[state=active]:bg-[#00ff88]/20 data-[state=active]:text-[#00ff88]">
              <Wallet className="w-4 h-4 mr-2" />
              Wallet
            </TabsTrigger>
          </TabsList>

          {/* Available Tasks */}
          <TabsContent value="available" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#e0e7ff]">Personalized Task Feed</h2>
              <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30">
                Based on Trust Score: {trustScore}
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableTasks.map((task) => (
                <GlassPanel key={task.id} className="p-6 hover:border-[#00ff88] transition-all cursor-pointer group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#00ff88] mb-1">{task.creator}</h3>
                      <Badge
                        className={`${
                          task.difficulty === "Easy"
                            ? "bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30"
                            : task.difficulty === "Medium"
                            ? "bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30"
                            : "bg-[#b966ff]/20 text-[#b966ff] border-[#b966ff]/30"
                        }`}
                      >
                        {task.difficulty}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#00ff88]">${task.reward}</div>
                      <div className="text-xs text-[#a0a8c5]">Reward</div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-4 h-4 text-[#00d4ff]" />
                      <span className="text-[#e0e7ff] font-bold">{task.type}</span>
                    </div>
                    <p className="text-sm text-[#a0a8c5]">{task.description}</p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#a0a8c5]" />
                        <span className="text-[#a0a8c5]">{task.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => navigate(`/engagement-player/${task.id}`)}
                    className="w-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] group-hover:scale-105 transition-transform"
                  >
                    Accept Task
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </GlassPanel>
              ))}
            </div>
          </TabsContent>

          {/* Completed Tasks */}
          <TabsContent value="completed" className="space-y-4">
            <h2 className="text-xl font-bold text-[#e0e7ff] mb-4">Task History</h2>
            <div className="space-y-3">
              {completedTasks.map((task) => (
                <GlassPanel key={task.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          task.status === "verified"
                            ? "bg-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.5)]"
                            : "bg-[#00d4ff] shadow-[0_0_8px_rgba(0,212,255,0.5)] animate-pulse"
                        }`}
                      ></div>
                      <div>
                        <div className="font-bold text-[#e0e7ff]">{task.creator}</div>
                        <div className="text-sm text-[#a0a8c5]">
                          {task.type} • {task.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge
                        className={`${
                          task.status === "verified"
                            ? "bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30"
                            : "bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30"
                        }`}
                      >
                        {task.status === "verified" ? (
                          <>
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </>
                        ) : (
                          <>
                            <Clock className="w-3 h-3 mr-1" />
                            Pending
                          </>
                        )}
                      </Badge>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#00ff88]">${task.reward}</div>
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              ))}
            </div>
          </TabsContent>

          {/* Wallet Tab */}
          <TabsContent value="wallet">
            <GlassPanel className="p-8">
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-6">Wallet & Payouts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-[#e0e7ff] mb-4">Withdrawal Methods</h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg border border-[#00d4ff]/30 bg-[rgba(26,26,62,0.3)] hover:border-[#00d4ff] transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Wallet className="w-5 h-5 text-[#00d4ff]" />
                          <span className="font-bold">JazzCash</span>
                        </div>
                        <CheckCircle className="w-5 h-5 text-[#00ff88]" />
                      </div>
                      <div className="text-xs text-[#a0a8c5] mt-2">Instant transfer • 0% fee</div>
                    </div>
                    <div className="p-4 rounded-lg border border-[#00d4ff]/30 bg-[rgba(26,26,62,0.3)] hover:border-[#00d4ff] transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Wallet className="w-5 h-5 text-[#00d4ff]" />
                          <span className="font-bold">EasyPaisa</span>
                        </div>
                        <CheckCircle className="w-5 h-5 text-[#00ff88]" />
                      </div>
                      <div className="text-xs text-[#a0a8c5] mt-2">Instant transfer • 0% fee</div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-[#00d4ff] text-black hover:bg-[#00b8e6]">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Request Withdrawal
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#e0e7ff] mb-4">Recent Payouts</h3>
                  <div className="space-y-3">
                    {[
                      { amount: 50.0, status: "Paid", date: "Mar 20, 2026" },
                      { amount: 75.5, status: "Paid", date: "Mar 15, 2026" },
                      { amount: 42.0, status: "Pending", date: "Mar 24, 2026" },
                    ].map((payout, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[rgba(26,26,62,0.3)] border border-[#00d4ff]/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-[#00ff88]">${payout.amount.toFixed(2)}</div>
                            <div className="text-xs text-[#a0a8c5]">{payout.date}</div>
                          </div>
                          <Badge
                            className={`${
                              payout.status === "Paid"
                                ? "bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30"
                                : "bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30"
                            }`}
                          >
                            {payout.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
