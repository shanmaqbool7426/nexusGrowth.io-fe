import { useState } from "react";
import { useNavigate } from "react-router";
import { GlassPanel } from "../components/GlassPanel";
import { CircularProgress } from "../components/CircularProgress";
import { LiveCounter } from "../components/LiveCounter";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Youtube,
  Instagram,
  Facebook,
  TrendingUp,
  Eye,
  Clock,
  Users,
  ThumbsUp,
  Share2,
  MessageSquare,
  CheckCircle,
  XCircle,
  Sparkles,
  Globe,
  Shield,
  Zap,
  Activity,
  DollarSign,
  BarChart3,
} from "lucide-react";

// Mock data
const retentionData = [
  { time: "0:00", retention: 100, viewers: 5000 },
  { time: "0:15", retention: 95, viewers: 4750 },
  { time: "0:30", retention: 88, viewers: 4400 },
  { time: "0:45", retention: 82, viewers: 4100 },
  { time: "1:00", retention: 76, viewers: 3800 },
  { time: "1:15", retention: 71, viewers: 3550 },
  { time: "1:30", retention: 68, viewers: 3400 },
  { time: "1:45", retention: 65, viewers: 3250 },
  { time: "2:00", retention: 62, viewers: 3100 },
];

const trafficData = [
  { source: "YouTube", clicks: 3420, color: "#FF0000" },
  { source: "WhatsApp", clicks: 2890, color: "#25D366" },
  { source: "Facebook", clicks: 2150, color: "#1877F2" },
  { source: "Direct", clicks: 1890, color: "#00d4ff" },
  { source: "Twitter", clicks: 1240, color: "#1DA1F2" },
];

const sentimentData = [
  { word: "Amazing", size: 32, sentiment: "positive" },
  { word: "Love it", size: 28, sentiment: "positive" },
  { word: "Great content", size: 24, sentiment: "positive" },
  { word: "Helpful", size: 20, sentiment: "positive" },
  { word: "Awesome", size: 26, sentiment: "positive" },
  { word: "Boring", size: 14, sentiment: "negative" },
  { word: "Too long", size: 12, sentiment: "negative" },
  { word: "Inspiring", size: 22, sentiment: "positive" },
];

const tasks = [
  { id: 1, user: "User_8X92", type: "Retention", status: "completed", humanScore: 98, verified: true },
  { id: 2, user: "User_K4L7", type: "Feedback", status: "completed", humanScore: 95, verified: true },
  { id: 3, user: "User_M3P1", type: "Share", status: "pending", humanScore: 92, verified: false },
  { id: 4, user: "User_Q9R5", type: "Retention", status: "completed", humanScore: 88, verified: true },
];

export function CreatorDashboard() {
  const navigate = useNavigate();
  const [connectedChannels] = useState({
    youtube: true,
    tiktok: false,
    meta: true,
  });

  return (
    <div className="min-h-screen bg-black text-[#e0e7ff]">
      {/* Top Navigation */}
      <div className="border-b border-[#00d4ff]/20 bg-[rgba(10,10,20,0.8)] backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-[#00d4ff]" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#b966ff] bg-clip-text text-transparent">
                NexusGrowth.io
              </h1>
              <Badge className="bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30">Creator Command Center</Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/marketplace")}
                className="border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10"
              >
                <Globe className="w-4 h-4 mr-2" />
                Marketplace
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/")}
                className="border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10"
              >
                Exit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-[rgba(26,26,62,0.5)] border border-[#00d4ff]/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#00d4ff]/20 data-[state=active]:text-[#00d4ff]">
              <Activity className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="channels" className="data-[state=active]:bg-[#00d4ff]/20 data-[state=active]:text-[#00d4ff]">
              <Globe className="w-4 h-4 mr-2" />
              Channels
            </TabsTrigger>
            <TabsTrigger value="campaigns" className="data-[state=active]:bg-[#00d4ff]/20 data-[state=active]:text-[#00d4ff]">
              <Zap className="w-4 h-4 mr-2" />
              Campaigns
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-[#00d4ff]/20 data-[state=active]:text-[#00d4ff]">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <LiveCounter value={125840} label="Total Views" icon={<Eye className="w-5 h-5" />} color="#00d4ff" />
              <LiveCounter value={8234} label="Engagement Rate" icon={<ThumbsUp className="w-5 h-5" />} color="#00ff88" />
              <LiveCounter value={1567} label="Active Tasks" icon={<Activity className="w-5 h-5" />} color="#b966ff" />
              <LiveCounter value={12450} label="Revenue ($)" icon={<DollarSign className="w-5 h-5" />} color="#00d4ff" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Channel Health */}
              <GlassPanel glow="blue" className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#00d4ff]">Channel Health</h3>
                  <Shield className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <div className="flex flex-col items-center">
                  <CircularProgress value={87} max={100} size={140} color="#00d4ff" label="Score" />
                  <div className="mt-6 w-full space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#a0a8c5]">Growth Rate</span>
                      <span className="text-sm font-bold text-[#00ff88]">+24%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#a0a8c5]">Engagement</span>
                      <span className="text-sm font-bold text-[#00ff88]">High</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#a0a8c5]">Monetization</span>
                      <span className="text-sm font-bold text-[#00d4ff]">Active</span>
                    </div>
                  </div>
                </div>
              </GlassPanel>

              {/* Connected Channels */}
              <GlassPanel className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#e0e7ff]">Connected Channels</h3>
                  <Button
                    size="sm"
                    onClick={() => navigate("/onboarding")}
                    className="bg-[#00d4ff]/20 text-[#00d4ff] hover:bg-[#00d4ff]/30"
                  >
                    + Add Channel
                  </Button>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "YouTube", icon: Youtube, connected: connectedChannels.youtube, color: "#FF0000" },
                    { name: "TikTok", icon: Globe, connected: connectedChannels.tiktok, color: "#000000" },
                    { name: "Meta (FB/IG)", icon: Facebook, connected: connectedChannels.meta, color: "#1877F2" },
                  ].map((channel) => (
                    <div
                      key={channel.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-[rgba(26,26,62,0.3)] border border-[#00d4ff]/10"
                    >
                      <div className="flex items-center gap-3">
                        <channel.icon className="w-5 h-5" style={{ color: channel.color }} />
                        <span className="text-sm">{channel.name}</span>
                      </div>
                      {channel.connected ? (
                        <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Connected
                        </Badge>
                      ) : (
                        <Badge className="bg-[#a0a8c5]/20 text-[#a0a8c5] border-[#a0a8c5]/30">Not Connected</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* Quick Actions */}
              <GlassPanel glow="green" className="p-6">
                <h3 className="text-lg font-bold text-[#e0e7ff] mb-6">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    onClick={() => navigate("/campaign/new")}
                    className="w-full bg-gradient-to-r from-[#00d4ff] to-[#b966ff] hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Launch New Campaign
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10"
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[#00ff88]/30 hover:border-[#00ff88] hover:bg-[#00ff88]/10"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Verify Tasks
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/marketplace")}
                    className="w-full border-[#b966ff]/30 hover:border-[#b966ff] hover:bg-[#b966ff]/10"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Browse Marketplace
                  </Button>
                </div>
              </GlassPanel>
            </div>

            {/* Live Control Core */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Viewer Retention Graph */}
              <GlassPanel glow="blue" className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#00d4ff]">Real-Time Retention Analysis</h3>
                  <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 animate-pulse">
                    <Activity className="w-3 h-3 mr-1" />
                    Live
                  </Badge>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={retentionData}>
                    <defs>
                      <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#00d4ff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a1a3e" />
                    <XAxis dataKey="time" stroke="#a0a8c5" />
                    <YAxis stroke="#a0a8c5" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(10, 10, 20, 0.95)",
                        border: "1px solid #00d4ff",
                        borderRadius: "8px",
                      }}
                    />
                    <Area type="monotone" dataKey="retention" stroke="#00d4ff" fillOpacity={1} fill="url(#retentionGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00d4ff]">62%</div>
                    <div className="text-xs text-[#a0a8c5]">Avg. Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00ff88]">1:45</div>
                    <div className="text-xs text-[#a0a8c5]">Drop-off Point</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#b966ff]">3.1K</div>
                    <div className="text-xs text-[#a0a8c5]">Final Viewers</div>
                  </div>
                </div>
              </GlassPanel>

              {/* Traffic Sources */}
              <GlassPanel className="p-6">
                <h3 className="text-lg font-bold text-[#e0e7ff] mb-6">External Traffic Sources</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={trafficData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a1a3e" />
                    <XAxis type="number" stroke="#a0a8c5" />
                    <YAxis dataKey="source" type="category" stroke="#a0a8c5" width={80} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(10, 10, 20, 0.95)",
                        border: "1px solid #00d4ff",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="clicks" radius={[0, 8, 8, 0]}>
                      {trafficData.map((entry, index) => (
                        <cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-[#a0a8c5]">Total External Clicks</div>
                  <div className="text-xl font-bold text-[#00d4ff]">11,590</div>
                </div>
              </GlassPanel>
            </div>

            {/* Content Intelligence & Task Verification */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sentiment Analysis */}
              <GlassPanel glow="purple" className="p-6">
                <h3 className="text-lg font-bold text-[#b966ff] mb-6">Sentiment Analysis</h3>
                <div className="flex flex-wrap gap-3 justify-center items-center min-h-[200px]">
                  {sentimentData.map((word, idx) => (
                    <span
                      key={idx}
                      className={`font-bold transition-transform hover:scale-110 cursor-default ${
                        word.sentiment === "positive" ? "text-[#00ff88]" : "text-[#ff0055]"
                      }`}
                      style={{ fontSize: `${word.size}px` }}
                    >
                      {word.word}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20">
                    <div className="text-2xl font-bold text-[#00ff88]">87%</div>
                    <div className="text-xs text-[#a0a8c5]">Positive</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-[#ff0055]/10 border border-[#ff0055]/20">
                    <div className="text-2xl font-bold text-[#ff0055]">13%</div>
                    <div className="text-xs text-[#a0a8c5]">Negative</div>
                  </div>
                </div>
              </GlassPanel>

              {/* Task Verification */}
              <GlassPanel className="p-6">
                <h3 className="text-lg font-bold text-[#e0e7ff] mb-6">Recent Task Completions</h3>
                <div className="space-y-3 max-h-[280px] overflow-y-auto">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-[rgba(26,26,62,0.3)] border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            task.verified ? "bg-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.5)]" : "bg-[#a0a8c5]"
                          }`}
                        ></div>
                        <div>
                          <div className="text-sm font-bold">{task.user}</div>
                          <div className="text-xs text-[#a0a8c5]">{task.type} Task</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-xs text-[#00d4ff]">Human Score</div>
                          <div className="text-sm font-bold">{task.humanScore}%</div>
                        </div>
                        {task.verified ? (
                          <Button size="sm" className="bg-[#00ff88]/20 text-[#00ff88] hover:bg-[#00ff88]/30">
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                        ) : (
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-[#00ff88]/20 text-[#00ff88] hover:bg-[#00ff88]/30">
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button size="sm" className="bg-[#ff0055]/20 text-[#ff0055] hover:bg-[#ff0055]/30">
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </TabsContent>

          {/* Other tabs content can be added here */}
          <TabsContent value="channels">
            <GlassPanel className="p-12 text-center">
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Channel Management</h2>
              <p className="text-[#a0a8c5] mb-6">Manage your connected social media channels</p>
              <Button onClick={() => navigate("/onboarding")} className="bg-[#00d4ff] text-black hover:bg-[#00b8e6]">
                <Globe className="w-4 h-4 mr-2" />
                Connect New Channel
              </Button>
            </GlassPanel>
          </TabsContent>

          <TabsContent value="campaigns">
            <GlassPanel className="p-12 text-center">
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Campaign Center</h2>
              <p className="text-[#a0a8c5] mb-6">Create and manage your growth campaigns</p>
              <Button onClick={() => navigate("/campaign/new")} className="bg-[#00d4ff] text-black hover:bg-[#00b8e6]">
                <Zap className="w-4 h-4 mr-2" />
                Create Campaign
              </Button>
            </GlassPanel>
          </TabsContent>

          <TabsContent value="analytics">
            <GlassPanel className="p-12 text-center">
              <h2 className="text-2xl font-bold text-[#00d4ff] mb-4">Advanced Analytics</h2>
              <p className="text-[#a0a8c5]">Deep dive into your performance metrics and insights</p>
            </GlassPanel>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
