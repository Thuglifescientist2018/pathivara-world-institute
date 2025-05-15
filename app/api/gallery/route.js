import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const nextCursor = searchParams.get("next_cursor") || undefined;
  const folder = "PathivaraWorldInstitute";
  const maxResults = 6;

  try {
    const result = await cloudinary.search
      .expression(`resource_type:image AND folder:${folder}`)
      .sort_by("public_id","desc")
      .max_results(maxResults)
      .next_cursor(nextCursor)
      .execute();

    console.log("Cloudinary API result:", JSON.stringify(result, null, 2)); // Debug log

    const mappedResources = result.resources.map((img) => {
      console.log("Full image object:", JSON.stringify(img, null, 2));
      const title = img.context?.custom?.title || img.context?.caption || img.public_id;
      const description = img.context?.custom?.description || img.context?.alt || "";
      console.log(`Image: ${img.public_id}, Title: ${title}, Description: ${description}`);
      return {
        asset_id: img.asset_id,
        public_id: img.public_id,
        secure_url: img.secure_url,
        folder: img.folder,
        title,
        description,
      };
    });

    return NextResponse.json({
      resources: mappedResources,
      next_cursor: result.next_cursor || null,
    });
  } catch (e) {
    console.error("Cloudinary API error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
 