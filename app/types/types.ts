export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: Thumbnail;
    large: Thumbnail;
    full: Thumbnail;
  };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface BlogPost {
  id: string;
  title: string;
  status: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string[];
  content: string;
  type: string;
  banner: Image[];
  thumbnail: Image[];
  video_url?: string;
}
