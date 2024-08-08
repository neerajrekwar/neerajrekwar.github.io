import { GoogleTagManager } from '@next/third-parties/google';

interface GoogleTagManagerProps {
  containerId: string;
}

export default function MyGoogleTagManager({ containerId }: GoogleTagManagerProps) {         
  return <GoogleTagManager gtmId={containerId} dataLayer={[`containerId: ${containerId}`]} />;
}