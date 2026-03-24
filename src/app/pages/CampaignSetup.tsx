import { useState } from "react";
import { useNavigate } from "react-router";
import { GlassPanel } from "../components/GlassPanel";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Slider } from "../components/ui/slider";
import {
  Zap,
  MessageSquare,
  Share2,
  Target,
  Users,
  DollarSign,
  Clock,
  Shield,
  CheckCircle,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const campaignTypes = [
  {
    id: "retention",
    name: "Retention Boost",
    icon: TrendingUp,
    description: "Increase watch time and viewer retention with verified engagement",
    color: "#00d4ff",
    estimatedCost: "0.50 - 2.00",
  },
  {
    id: "feedback",
    name: "Feedback Audit",
    icon: MessageSquare,
    description: "Collect genuine feedback and sentiment analysis from real users",
    color: "#00ff88",
    estimatedCost: "1.00 - 4.00",
  },
  {
    id: "share",
    name: "Share Traffic",
    icon: Share2,
    description: "Generate external traffic through tracked social media shares",
    color: "#b966ff",
    estimatedCost: "0.75 - 3.50",
  },
];

export function CampaignSetup() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [budget, setBudget] = useState([500]);
  const [duration, setDuration] = useState([7]);
  const [taskLimit, setTaskLimit] = useState([200]);

  const estimatedTasks = Math.floor(budget[0] / 2.5);
  const estimatedReach = estimatedTasks * 12;

  return (
    <div className="min-h-screen bg-black text-[#e0e7ff]">
      {/* Top Navigation */}
      <div className="border-b border-[#00d4ff]/20 bg-[rgba(10,10,20,0.8)] backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Zap className="w-8 h-8 text-[#00d4ff]" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#b966ff] bg-clip-text text-transparent">
                Campaign Setup
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

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Setup Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Campaign Type Selection */}
            <div>
              <h2 className="text-2xl font-bold text-[#e0e7ff] mb-6">Select Campaign Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {campaignTypes.map((type) => (
                  <GlassPanel
                    key={type.id}
                    glow={selectedType === type.id ? "blue" : "none"}
                    className={`p-6 cursor-pointer transition-all ${
                      selectedType === type.id ? "border-[#00d4ff]" : ""
                    }`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${type.color}20` }}
                      >
                        <type.icon className="w-8 h-8" style={{ color: type.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-[#e0e7ff] mb-2">{type.name}</h3>
                      <p className="text-xs text-[#a0a8c5] mb-3">{type.description}</p>
                      <Badge
                        className="text-xs"
                        style={{
                          backgroundColor: `${type.color}20`,
                          color: type.color,
                          borderColor: `${type.color}30`,
                        }}
                      >
                        ${type.estimatedCost} per task
                      </Badge>
                      {selectedType === type.id && (
                        <CheckCircle className="w-6 h-6 text-[#00ff88] mt-3" />
                      )}
                    </div>
                  </GlassPanel>
                ))}
              </div>
            </div>

            {selectedType && (
              <>
                {/* Target Content */}
                <GlassPanel className="p-8">
                  <h3 className="text-xl font-bold text-[#e0e7ff] mb-6">Target Content</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-[#a0a8c5] mb-2">Content URL</Label>
                      <Input
                        placeholder="https://youtube.com/watch?v=..."
                        className="bg-[rgba(26,26,62,0.5)] border-[#00d4ff]/20 focus:border-[#00d4ff]"
                      />
                    </div>
                    <div>
                      <Label className="text-[#a0a8c5] mb-2">Campaign Name</Label>
                      <Input
                        placeholder="e.g., Tech Review Launch Boost"
                        className="bg-[rgba(26,26,62,0.5)] border-[#00d4ff]/20 focus:border-[#00d4ff]"
                      />
                    </div>
                    <div>
                      <Label className="text-[#a0a8c5] mb-2">Description (Optional)</Label>
                      <Textarea
                        placeholder="Add notes about your campaign goals..."
                        className="bg-[rgba(26,26,62,0.5)] border-[#00d4ff]/20 focus:border-[#00d4ff]"
                        rows={3}
                      />
                    </div>
                  </div>
                </GlassPanel>

                {/* Audience Targeting */}
                <GlassPanel className="p-8">
                  <h3 className="text-xl font-bold text-[#e0e7ff] mb-6">Audience Targeting</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-[#a0a8c5]">Trust Score Minimum</Label>
                        <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30">85+</Badge>
                      </div>
                      <Slider
                        value={[85]}
                        min={0}
                        max={100}
                        step={5}
                        className="my-4"
                      />
                      <p className="text-xs text-[#a0a8c5]">Higher trust scores ensure more authentic engagement</p>
                    </div>

                    <div>
                      <Label className="text-[#a0a8c5] mb-3 block">Geographic Targeting</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {["Global", "North America", "Europe", "Asia", "Middle East", "Africa"].map((region) => (
                          <div
                            key={region}
                            className="p-3 rounded-lg bg-[rgba(26,26,62,0.3)] border border-[#00d4ff]/20 hover:border-[#00d4ff] cursor-pointer transition-colors"
                          >
                            <span className="text-sm text-[#e0e7ff]">{region}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassPanel>

                {/* Budget & Duration */}
                <GlassPanel className="p-8">
                  <h3 className="text-xl font-bold text-[#e0e7ff] mb-6">Budget & Timeline</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-[#a0a8c5]">Campaign Budget</Label>
                        <Badge className="bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30">
                          ${budget[0]}
                        </Badge>
                      </div>
                      <Slider
                        value={budget}
                        onValueChange={setBudget}
                        min={100}
                        max={5000}
                        step={50}
                        className="my-4"
                      />
                      <p className="text-xs text-[#a0a8c5]">
                        Estimated {estimatedTasks} tasks will be completed
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-[#a0a8c5]">Campaign Duration</Label>
                        <Badge className="bg-[#b966ff]/20 text-[#b966ff] border-[#b966ff]/30">
                          {duration[0]} days
                        </Badge>
                      </div>
                      <Slider
                        value={duration}
                        onValueChange={setDuration}
                        min={1}
                        max={30}
                        step={1}
                        className="my-4"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label className="text-[#a0a8c5]">Daily Task Limit</Label>
                        <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30">
                          {taskLimit[0]} tasks/day
                        </Badge>
                      </div>
                      <Slider
                        value={taskLimit}
                        onValueChange={setTaskLimit}
                        min={10}
                        max={500}
                        step={10}
                        className="my-4"
                      />
                    </div>
                  </div>
                </GlassPanel>
              </>
            )}
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-6">
            <GlassPanel glow="green" className="p-6 sticky top-24">
              <h3 className="text-xl font-bold text-[#00ff88] mb-6">Campaign Summary</h3>
              
              {selectedType ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-[rgba(26,26,62,0.3)]">
                    <div className="text-sm text-[#a0a8c5] mb-1">Campaign Type</div>
                    <div className="font-bold text-[#e0e7ff]">
                      {campaignTypes.find(t => t.id === selectedType)?.name}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-[rgba(26,26,62,0.3)]">
                    <div className="text-sm text-[#a0a8c5] mb-1">Total Budget</div>
                    <div className="text-2xl font-bold text-[#00d4ff]">${budget[0]}</div>
                  </div>

                  <div className="p-4 rounded-lg bg-[rgba(26,26,62,0.3)]">
                    <div className="text-sm text-[#a0a8c5] mb-1">Duration</div>
                    <div className="font-bold text-[#e0e7ff]">{duration[0]} days</div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20">
                    <div className="text-sm text-[#a0a8c5] mb-1">Estimated Tasks</div>
                    <div className="text-2xl font-bold text-[#00ff88]">{estimatedTasks}</div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#b966ff]/10 border border-[#b966ff]/20">
                    <div className="text-sm text-[#a0a8c5] mb-1">Estimated Reach</div>
                    <div className="text-2xl font-bold text-[#b966ff]">{estimatedReach.toLocaleString()}</div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-[#00d4ff]/20">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="w-4 h-4 text-[#00ff88]" />
                      <span className="text-[#a0a8c5]">Escrow protection</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                      <span className="text-[#a0a8c5]">Human verification</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-[#00ff88]" />
                      <span className="text-[#a0a8c5]">Real-time tracking</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-[#00d4ff] to-[#b966ff] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] mt-6"
                    size="lg"
                    onClick={() => {
                      alert("Campaign created successfully! (Demo)");
                      navigate("/creator");
                    }}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Launch Campaign
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Sparkles className="w-12 h-12 text-[#a0a8c5] mx-auto mb-4" />
                  <p className="text-sm text-[#a0a8c5]">Select a campaign type to see summary</p>
                </div>
              )}
            </GlassPanel>

            <GlassPanel className="p-6">
              <h4 className="text-sm font-bold text-[#e0e7ff] mb-4">Payment Schedule</h4>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#a0a8c5]">Escrow Deposit</span>
                  <span className="text-[#e0e7ff] font-bold">${budget[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a0a8c5]">Platform Fee (5%)</span>
                  <span className="text-[#e0e7ff] font-bold">${(budget[0] * 0.05).toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-[#00d4ff]/20">
                  <span className="text-[#00d4ff]">Total Required</span>
                  <span className="text-[#00d4ff] font-bold">${(budget[0] * 1.05).toFixed(2)}</span>
                </div>
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </div>
  );
}
