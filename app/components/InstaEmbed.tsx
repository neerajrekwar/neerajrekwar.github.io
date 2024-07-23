'use client'
import { GetStaticProps } from 'next';
import Gallery from './Gallery';

interface Image {
  id: string;
  media_url: string;
  caption: string;
}

interface Feed {
  data: Image[];
}

interface Props {
  feed: Feed;
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const url = `https://graph.instagram.com/v20.0/me/media?fields=id,username,media_url,caption,timestamp,media_type&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      feed: data,
    },
  };
}

export default function InstaEmbed({ feed }: Props) {
  return (
    <div>
      <Gallery feed={feed} />
    </div>
  );
}
