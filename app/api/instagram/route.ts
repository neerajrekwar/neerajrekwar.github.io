// app/api/instagram/route.ts
import { NextResponse } from 'next/server';

interface InstagramPost {
  id: string;
  media_url: string;
  caption?: string;
  permalink: string;
  media_type: string;
}

let cachedData: InstagramPost[] | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export async function GET() {
  const currentTime = Date.now();

  if (cachedData && currentTime - lastFetchTime < CACHE_DURATION) {
    return NextResponse.json({ data: cachedData });
  }

  const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

  if (!accessToken) {
    return NextResponse.json(
      { error: 'Instagram access token is not set.' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type&access_token=${accessToken}&limit=4`
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Failed to fetch Instagram posts.', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    cachedData = data.data;
    lastFetchTime = currentTime;

    return NextResponse.json({ data: cachedData });
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred.', details: error },
      { status: 500 }
    );
  }
}
