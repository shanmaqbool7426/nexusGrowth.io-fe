import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { GlassPanel } from "../components/GlassPanel";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
  Shield,
  Share2,
  MessageSquare,
  Star,
  Lock,
  Activity,
} from "lucide-react";

export function EngagementPlayer() {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const [watchTime, setWatchTime] = useState(0);
  const [isWatching, setIsWatching] = useState(false);
  const [attentionStatus, setAttentionStatus] = useState<"active" | "warning" | "verified">("active");
  const [showQuiz, setShowQuiz] = useState(false);
  const [taskComplete, setTaskComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const requiredTime = 150; // 2:30 minutes in seconds

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isWatching && watchTime < requiredTime) {
      timer = setInterval(() => {
        setWatchTime((prev) => {
          const newTime = prev + 1;
          setProgress((newTime / requiredTime) * 100);
          
          // Show quiz at random time after 1 minute
          if (newTime === 75 && !showQuiz) {
            setShowQuiz(true);
            setIsWatching(false);
          }
          
          // Complete task
          if (newTime >= requiredTime) {
            setTaskComplete(true);
            setAttentionStatus("verified");
            setIsWatching(false);
          }
          
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isWatching, watchTime, showQuiz, requiredTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleQuizAnswer = (correct: boolean) => {
    if (correct) {
      setShowQuiz(false);
      setIsWatching(true);
      setAttentionStatus("active");
    } else {
      setAttentionStatus("warning");
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#e0e7ff]">
      {/* Top Bar */}
      <div className="border-b border-[#00ff88]/20 bg-[rgba(10,10,20,0.8)] backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Activity className="w-6 h-6 text-[#00ff88]" />
              <h1 className="text-xl font-bold">Active Engagement Task</h1>
              <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 animate-pulse">
                <Eye className="w-3 h-3 mr-1" />
                Tracking Active
              </Badge>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/earner")}
              className="border-[#00d4ff]/30 hover:border-[#00d4ff]"
            >
              Exit Task
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Player Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player Mock */}
            <GlassPanel glow={attentionStatus === "verified" ? "green" : attentionStatus === "warning" ? "purple" : "blue"} className="p-0 overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-[#1a1a3e] to-[#0a0a14] flex items-center justify-center">
                {!isWatching && !taskComplete ? (
                  <div className="text-center p-8">
                    <Shield className="w-16 h-16 text-[#00d4ff] mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-[#00d4ff] mb-2">Ready to Start</h2>
                    <p className="text-[#a0a8c5] mb-6">
                      Click "Start Watching" to begin the task. Your attention will be tracked.
                    </p>
                    <Button
                      onClick={() => setIsWatching(true)}
                      className="bg-[#00ff88] text-black hover:bg-[#00e678]"
                      size="lg"
                    >
                      Start Watching
                    </Button>
                  </div>
                ) : taskComplete ? (
                  <div className="text-center p-8">
                    <CheckCircle className="w-16 h-16 text-[#00ff88] mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-[#00ff88] mb-2">Task Completed!</h2>
                    <p className="text-[#a0a8c5] mb-6">Your reward will be credited after verification</p>
                    <Button
                      onClick={() => navigate("/earner")}
                      className="bg-[#00ff88] text-black hover:bg-[#00e678]"
                      size="lg"
                    >
                      Return to Dashboard
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#00d4ff] mb-4">{formatTime(watchTime)}</div>
                    <Progress value={progress} className="w-64 mx-auto mb-4" />
                    <p className="text-[#a0a8c5]">Keep watching to complete the task</p>
                  </div>
                )}
                
                {/* Attention Status Indicator */}
                {isWatching && (
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${
                        attentionStatus === "verified"
                          ? "bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30"
                          : attentionStatus === "warning"
                          ? "bg-[#ff0055]/20 text-[#ff0055] border-[#ff0055]/30 animate-pulse"
                          : "bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30"
                      }`}
                    >
                      {attentionStatus === "verified" ? (
                        <>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Attention Verified
                        </>
                      ) : attentionStatus === "warning" ? (
                        <>
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Stay Focused
                        </>
                      ) : (
                        <>
                          <Eye className="w-3 h-3 mr-1" />
                          Tracking Active
                        </>
                      )}
                    </Badge>
                  </div>
                )}
              </div>
              
              {/* Locked Controls */}
              <div className="p-4 bg-[rgba(10,10,20,0.9)] border-t border-[#00d4ff]/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Lock className="w-4 h-4 text-[#a0a8c5]" />
                    <span className="text-sm text-[#a0a8c5]">Seek controls locked during task</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#00d4ff]" />
                    <span className="text-sm font-bold text-[#00d4ff]">
                      {formatTime(watchTime)} / {formatTime(requiredTime)}
                    </span>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Video Info */}
            <GlassPanel className="p-6">
              <h2 className="text-xl font-bold text-[#e0e7ff] mb-2">Top 10 Tech Gadgets of 2026</h2>
              <p className="text-sm text-[#a0a8c5] mb-4">By TechReviewer_HD</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#00d4ff]" />
                  <span className="text-[#a0a8c5]">1.2M views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#00ff88]" />
                  <span className="text-[#a0a8c5]">4.8 rating</span>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* Task Sidebar */}
          <div className="space-y-6">
            {/* Task Requirements */}
            <GlassPanel glow="green" className="p-6">
              <h3 className="text-lg font-bold text-[#00ff88] mb-4">Task Requirements</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#00d4ff]" />
                    <span className="text-sm">Watch Time</span>
                  </div>
                  <Badge className={watchTime >= requiredTime ? "bg-[#00ff88]/20 text-[#00ff88]" : "bg-[#00d4ff]/20 text-[#00d4ff]"}>
                    {formatTime(requiredTime)}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#00d4ff]" />
                    <span className="text-sm">Human Verification</span>
                  </div>
                  <Badge className={attentionStatus === "verified" ? "bg-[#00ff88]/20 text-[#00ff88]" : "bg-[#a0a8c5]/20 text-[#a0a8c5]"}>
                    Required
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#00d4ff]" />
                    <span className="text-sm">Stay Active</span>
                  </div>
                  <Badge className={isWatching ? "bg-[#00ff88]/20 text-[#00ff88]" : "bg-[#a0a8c5]/20 text-[#a0a8c5]"}>
                    No Tab Switch
                  </Badge>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20">
                <div className="text-2xl font-bold text-[#00ff88] mb-1">$2.50</div>
                <div className="text-xs text-[#a0a8c5]">Task Reward</div>
              </div>
            </GlassPanel>

            {/* Share Task (if applicable) */}
            <GlassPanel className="p-6">
              <h3 className="text-lg font-bold text-[#e0e7ff] mb-4">Bonus: Share & Earn More</h3>
              <p className="text-sm text-[#a0a8c5] mb-4">Share this video to earn extra rewards</p>
              <div className="space-y-3">
                <Button className="w-full bg-[#25D366] hover:bg-[#1faa52]">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share on WhatsApp
                </Button>
                <Button className="w-full bg-[#1877F2] hover:bg-[#145dbf]">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share on Facebook
                </Button>
              </div>
              <div className="mt-3 text-center text-xs text-[#a0a8c5]">
                +$0.50 per unique click
              </div>
            </GlassPanel>

            {/* Security Status */}
            <GlassPanel className="p-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#00ff88]" />
                <div>
                  <div className="text-sm font-bold text-[#00ff88]">Protected Session</div>
                  <div className="text-xs text-[#a0a8c5]">Anti-bot verification active</div>
                </div>
              </div>
            </GlassPanel>
          </div>
        </div>

        {/* Attention Quiz Modal */}
        {showQuiz && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <GlassPanel glow="blue" className="p-8 max-w-lg w-full">
              <div className="text-center mb-6">
                <Shield className="w-16 h-16 text-[#00d4ff] mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-[#00d4ff] mb-2">Attention Verification</h2>
                <p className="text-[#a0a8c5]">Answer this question to prove you're watching</p>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[rgba(26,26,62,0.5)] border border-[#00d4ff]/20">
                  <p className="text-[#e0e7ff] font-bold mb-4">What was the first gadget mentioned in the video?</p>
                  <div className="space-y-2">
                    <Button
                      onClick={() => handleQuizAnswer(true)}
                      variant="outline"
                      className="w-full justify-start border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10"
                    >
                      A) Smart Glasses AR-X
                    </Button>
                    <Button
                      onClick={() => handleQuizAnswer(false)}
                      variant="outline"
                      className="w-full justify-start border-[#00d4ff]/30 hover:border-[#ff0055] hover:bg-[#ff0055]/10"
                    >
                      B) Wireless Earbuds
                    </Button>
                    <Button
                      onClick={() => handleQuizAnswer(false)}
                      variant="outline"
                      className="w-full justify-start border-[#00d4ff]/30 hover:border-[#ff0055] hover:bg-[#ff0055]/10"
                    >
                      C) Smartwatch Pro
                    </Button>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>
        )}
      </div>
    </div>
  );
}
