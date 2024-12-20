import { GoogleAnalytics as GoogleAnalyticsLib } from "@next/third-parties/google";

interface GoogleAnalyticsProps {
  gaId: string;
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  return <GoogleAnalyticsLib gaId={gaId} />;
}