import Airtable, { FieldSet, Record } from "airtable";
import { BlogPost } from "~/types/types";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY as string;
const BASE_ID = process.env.AIRTABLE_BASE_ID as string;
const TABLE_NAME = "Blog Posts";

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(BASE_ID);

export async function fetchAllPosts(): Promise<BlogPost[]> {
  const records = await base(TABLE_NAME)
    .select({
      filterByFormula: `{Status} = 'Active'`,
    })
    .all();
  return records.map((record) => ({
    id: record.id,
    title: record.get("Title") as string,
    status: record.get("Status") as string,
    slug: record.get("Slug") as string,
    date: record.get("Formatted Date") as string,
    category: record.get("Category") as string[],
    content: record.get("Post") as string,
    type: record.get("Type") as string,
    banner: record.get("Banner") as string,
    thumbnail: record.get("Thumbnail") as string,
    video_url: record.get("Video URL") as string | undefined,
  }));
}

export async function fetchPostById(id: string): Promise<BlogPost> {
  const record = await base(TABLE_NAME).find(id);
  return {
    id: record.id,
    title: record.get("Title") as string,
    status: record.get("Status") as string,
    slug: record.get("Slug") as string,
    date: record.get("Formatted Date") as string,
    category: record.get("Category") as string[],
    content: record.get("Post") as string,
    type: record.get("Type") as string,
    banner: record.get("Banner") as string,
    thumbnail: record.get("Thumbnail") as string,
    video_url: record.get("Video URL") as string | undefined,
  };
}
