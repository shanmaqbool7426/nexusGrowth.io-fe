import { useState } from "react";
import { useNavigate } from "react-router";
import { GlassPanel } from "../components/GlassPanel";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  Search,
  Filter,
  Youtube,
  Instagram,
  TrendingUp,
  Eye,
  Users,
  DollarSign,
  Shield,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Mock marketplace listings
const listings = [
  {
    id: 1,
    name: "Tech Reviews HD",
    platform: "YouTube",
    subscribers: "250K",
    avgViews: "45K",
    niche: "Technology",
    price: 45000,
    verified: true,
    monetized: true,
    auditScore: 94,
    growth: [
      { month: "Oct", value: 180 },
      { month: "Nov", value: 210 },
      { month: "Dec", value: 225 },
      { month: "Jan", value: 240 },
      { month: "Feb", value: 250 },
    ],
  },
  {
    id: 2,
    name: "Fitness Journey",
    platform: "Instagram",
    subscribers: "180K",
    avgViews: "28K",
    niche: "Fitness",
    price: 32000,
    verified: true,
    monetized: true,
    auditScore: 89,
    growth: [
      { month: "Oct", value: 140 },
      { month: "Nov", value: 155 },
      { month: "Dec", value: 165 },
      { month: "Jan", value: 175 },
      { month: "Feb", value: 180 },
    ],
  },
  {
    id: 3,
    name: "Gaming Central",
    platform: "YouTube",
    subscribers: "420K",
    avgViews: "85K",
    niche: "Gaming",
    price: 78000,
    verified: true,
    monetized: true,
    auditScore: 96,
    growth: [
      { month: "Oct", value: 350 },
      { month: "Nov", value: 380 },
      { month: "Dec", value: 395 },
      { month: "Jan", value: 410 },
      { month: "Feb", value: 420 },
    ],
  },
  {
    id: 4,
    name: "Cooking Mastery",
    platform: "YouTube",
    subscribers: "95K",
    avgViews: "18K",
    niche: "Cooking",
    price: 18500,
    verified: true,
    monetized: false,
    auditScore: 82,
    growth: [
      { month: "Oct", value: 75 },
      { month: "Nov", value: 82 },
      { month: "Dec", value: 88 },
      { month: "Jan", value: 92 },
      { month: "Feb", value: 95 },
    ],
  },
];

export function Marketplace() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedListing, setSelectedListing] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-[#e0e7ff]">
      {/* Top Navigation */}
      <div className="border-b border-[#00d4ff]/20 bg-[rgba(10,10,20,0.8)] backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-[#00d4ff]" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00d4ff] to-[#b966ff] bg-clip-text text-transparent">
                Channel Marketplace
              </h1>
              <Badge className="bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30">
                {listings.length} Verified Listings
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-[#00ff88]/30 hover:border-[#00ff88] hover:bg-[#00ff88]/10"
              >
                <DollarSign className="w-4 h-4 mr-2" />
                Sell Your Channel
              </Button>
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
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Search and Filter Bar */}
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a0a8c5]" />
            <Input
              placeholder="Search by channel name, niche, or platform..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[rgba(26,26,62,0.5)] border-[#00d4ff]/20 focus:border-[#00d4ff]"
            />
          </div>
          <Button
            variant="outline"
            className="border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {listings.map((listing) => (
            <GlassPanel
              key={listing.id}
              glow={listing.auditScore >= 90 ? "green" : "blue"}
              className="p-6 hover:border-[#00d4ff] transition-all cursor-pointer group"
              onClick={() => setSelectedListing(listing.id)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#b966ff] flex items-center justify-center">
                    {listing.platform === "YouTube" ? (
                      <Youtube className="w-6 h-6 text-black" />
                    ) : (
                      <Instagram className="w-6 h-6 text-black" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#e0e7ff]">{listing.name}</h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30 text-xs">
                        {listing.niche}
                      </Badge>
                      {listing.verified && (
                        <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                      )}
                    </div>
                  </div>
                </div>
                {listing.auditScore >= 90 && (
                  <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 animate-pulse">
                    <Shield className="w-3 h-3 mr-1" />
                    Certified
                  </Badge>
                )}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <Users className="w-4 h-4 text-[#00d4ff] mx-auto mb-1" />
                  <div className="text-lg font-bold text-[#00d4ff]">{listing.subscribers}</div>
                  <div className="text-xs text-[#a0a8c5]">Subscribers</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <Eye className="w-4 h-4 text-[#00ff88] mx-auto mb-1" />
                  <div className="text-lg font-bold text-[#00ff88]">{listing.avgViews}</div>
                  <div className="text-xs text-[#a0a8c5]">Avg Views</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                  <Shield className="w-4 h-4 text-[#b966ff] mx-auto mb-1" />
                  <div className="text-lg font-bold text-[#b966ff]">{listing.auditScore}</div>
                  <div className="text-xs text-[#a0a8c5]">Audit Score</div>
                </div>
              </div>

              {/* Growth Chart */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#a0a8c5]">28-Day Growth</span>
                  <div className="flex items-center gap-1 text-[#00ff88]">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs font-bold">+{((listing.growth[4].value - listing.growth[0].value) / listing.growth[0].value * 100).toFixed(1)}%</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={60}>
                  <LineChart data={listing.growth}>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(10, 10, 20, 0.95)",
                        border: "1px solid #00d4ff",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#00d4ff"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {listing.monetized && (
                  <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30 text-xs">
                    <DollarSign className="w-3 h-3 mr-1" />
                    Monetized
                  </Badge>
                )}
                <Badge className="bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30 text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified Analytics
                </Badge>
                <Badge className="bg-[#b966ff]/20 text-[#b966ff] border-[#b966ff]/30 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  3-Day Inspection
                </Badge>
              </div>

              {/* Price and Action */}
              <div className="flex items-center justify-between pt-4 border-t border-[#00d4ff]/20">
                <div>
                  <div className="text-xs text-[#a0a8c5] mb-1">Asking Price</div>
                  <div className="text-2xl font-bold text-[#00d4ff]">
                    ${listing.price.toLocaleString()}
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-[#00d4ff] to-[#b966ff] hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] group-hover:scale-105 transition-transform">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </GlassPanel>
          ))}
        </div>

        {/* Escrow Info Banner */}
        <GlassPanel glow="purple" className="p-6 mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Shield className="w-8 h-8 text-[#b966ff]" />
              <div>
                <h3 className="text-lg font-bold text-[#b966ff]">Secure Escrow System</h3>
                <p className="text-sm text-[#a0a8c5]">
                  All transactions are protected with our 3-day inspection period and escrow lock
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-[#b966ff]/30 hover:border-[#b966ff] hover:bg-[#b966ff]/10"
            >
              Learn More
            </Button>
          </div>
        </GlassPanel>
      </div>

      {/* Listing Detail Modal */}
      {selectedListing && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedListing(null)}
        >
          <GlassPanel
            glow="blue"
            className="p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {(() => {
              const listing = listings.find(l => l.id === selectedListing)!;
              return (
                <>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-[#00d4ff] mb-2">{listing.name}</h2>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30">
                          {listing.platform}
                        </Badge>
                        <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30">
                          {listing.niche}
                        </Badge>
                        {listing.verified && (
                          <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedListing(null)}
                      className="border-[#00d4ff]/30 hover:border-[#00d4ff]"
                    >
                      Close
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#e0e7ff] mb-4">Channel Stats</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                          <span className="text-[#a0a8c5]">Subscribers</span>
                          <span className="font-bold text-[#00d4ff]">{listing.subscribers}</span>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                          <span className="text-[#a0a8c5]">Avg Views</span>
                          <span className="font-bold text-[#00ff88]">{listing.avgViews}</span>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                          <span className="text-[#a0a8c5]">Audit Score</span>
                          <span className="font-bold text-[#b966ff]">{listing.auditScore}/100</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#e0e7ff] mb-4">Transaction Details</h3>
                      <div className="space-y-3">
                        <div className="p-4 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                          <div className="text-xs text-[#a0a8c5] mb-1">Asking Price</div>
                          <div className="text-3xl font-bold text-[#00d4ff]">
                            ${listing.price.toLocaleString()}
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                          <div className="flex items-center gap-2 text-sm">
                            <Shield className="w-4 h-4 text-[#00ff88]" />
                            <span className="text-[#a0a8c5]">Escrow Protection Included</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[rgba(26,26,62,0.3)]">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-[#00d4ff]" />
                            <span className="text-[#a0a8c5]">3-Day Inspection Period</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="flex-1 bg-gradient-to-r from-[#00d4ff] to-[#b966ff] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                      size="lg"
                    >
                      <Shield className="w-5 h-5 mr-2" />
                      Start Escrow Transaction
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10"
                      size="lg"
                    >
                      Contact Seller
                    </Button>
                  </div>
                </>
              );
            })()}
          </GlassPanel>
        </div>
      )}
    </div>
  );
}
