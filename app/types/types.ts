export interface BlogPost {
  id: string;
  title: string;
  status: string;
  slug: string;
  date: string;
  category: string[];
  content: string;
  type: string;
  banner: string;
  thumbnail: string;
  video_url?: string;
}
