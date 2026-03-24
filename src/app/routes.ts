import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { CreatorDashboard } from "./pages/CreatorDashboard";
import { EarnerDashboard } from "./pages/EarnerDashboard";
import { Marketplace } from "./pages/Marketplace";
import { EngagementPlayer } from "./pages/EngagementPlayer";
import { ChannelOnboarding } from "./pages/ChannelOnboarding";
import { CampaignSetup } from "./pages/CampaignSetup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/creator",
    Component: CreatorDashboard,
  },
  {
    path: "/earner",
    Component: EarnerDashboard,
  },
  {
    path: "/marketplace",
    Component: Marketplace,
  },
  {
    path: "/engagement-player/:taskId",
    Component: EngagementPlayer,
  },
  {
    path: "/onboarding",
    Component: ChannelOnboarding,
  },
  {
    path: "/campaign/new",
    Component: CampaignSetup,
  },
]);
