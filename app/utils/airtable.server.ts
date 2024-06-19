import Airtable from "airtable";
import { BlogPost, Image } from "~/types/types";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY as string;
const BASE_ID = process.env.AIRTABLE_BASE_ID as string;
const TABLE_NAME = "Blog Posts";

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(BASE_ID);

function mapRecordToBlogPost(record: Airtable.Record<any>): BlogPost {
  const fields = record.fields;
  return {
    id: record.id,
    title: fields["Title"] as string,
    status: fields["Status"] as string,
    slug: fields["Slug"] as string,
    excerpt: fields["Excerpt"] as string,
    date: fields["Formatted Date"] as string,
    category: fields["Category Name (from Category)"] as string[],
    content: fields["Post"] as string,
    type: fields["Type"] as string,
    banner: fields["Banner"] as Image[],
    thumbnail: fields["Thumbnail"] as Image[],
    video_url: fields["Video ID"] as string | undefined,
  };
}

/**
 * Fetch all blog posts from Airtable with Status 'Active'.
 */
export async function fetchAllPosts(): Promise<BlogPost[]> {
  const records = await base(TABLE_NAME)
    .select({
      filterByFormula: `{Status} = 'Active'`,
    })
    .all();

  return records.map(mapRecordToBlogPost);
}

/**
 * Fetch a single blog post by slug from Airtable.
 * @param {string} slug - The slug of the blog post.
 */
export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const records = await base(TABLE_NAME)
    .select({
      filterByFormula: `AND({slug}='${slug}',{Status}='Active')`,
      maxRecords: 1,
    })
    .all();

  if (records.length === 0) {
    return null;
  }

  return mapRecordToBlogPost(records[0]);
}
