import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, readdir, unlink } from "node:fs/promises";
import path from "node:path";

const UPLOAD_DIRS: Record<string, string> = {
  "gallery-photos": path.join(process.cwd(), "public", "assets", "gallery images"),
  "gallery-videos": path.join(process.cwd(), "public", "assets", "gallery videos"),
  "hero-background": path.join(process.cwd(), "public", "assets", "hero"),
  "marma-background": path.join(process.cwd(), "public", "assets"),
};

const IMAGE_EXTENSIONS = new Set([".avif", ".jpeg", ".jpg", ".png", ".webp"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".ogg"]);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const category = formData.get("category") as string | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!category || !UPLOAD_DIRS[category]) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    const uploadDir = UPLOAD_DIRS[category];
    await mkdir(uploadDir, { recursive: true });

    const ext = path.extname(file.name).toLowerCase();

    // Validate file type
    if (category === "gallery-photos" || category === "hero-background" || category === "marma-background") {
      if (!IMAGE_EXTENSIONS.has(ext) && !VIDEO_EXTENSIONS.has(ext)) {
        return NextResponse.json({ error: "Invalid file type. Use images or videos." }, { status: 400 });
      }
    }

    if (category === "gallery-videos" && !VIDEO_EXTENSIONS.has(ext)) {
      return NextResponse.json({ error: "Invalid file type. Use .mp4, .webm, or .ogg" }, { status: 400 });
    }

    // For hero background, allow both images and videos
    const isVideo = VIDEO_EXTENSIONS.has(ext);

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replace(/\s+/g, "-");
    const filePath = path.join(uploadDir, filename);

    await writeFile(filePath, buffer);

    // Build the public path
    const relativePath = path.relative(path.join(process.cwd(), "public"), filePath);
    const publicPath = `/${relativePath.replace(/\\/g, "/")}`;

    return NextResponse.json({
      success: true,
      path: publicPath,
      filename,
      isVideo,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

// GET: List files in a category
export async function GET(request: NextRequest) {
  try {
    const category = request.nextUrl.searchParams.get("category");

    if (!category || !UPLOAD_DIRS[category]) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    const dir = UPLOAD_DIRS[category];

    let files: string[] = [];
    try {
      const entries = await readdir(dir, { withFileTypes: true });
      files = entries
        .filter((e) => e.isFile())
        .map((e) => e.name)
        .sort();
    } catch {
      // Directory might not exist yet
    }

    const fileList = files.map((filename) => {
      const ext = path.extname(filename).toLowerCase();
      const relativePath = path.relative(path.join(process.cwd(), "public"), path.join(dir, filename));
      return {
        filename,
        path: `/${relativePath.replace(/\\/g, "/")}`,
        isVideo: VIDEO_EXTENSIONS.has(ext),
        isImage: IMAGE_EXTENSIONS.has(ext),
      };
    });

    return NextResponse.json({ files: fileList });
  } catch (error) {
    console.error("List error:", error);
    return NextResponse.json({ error: "Failed to list files" }, { status: 500 });
  }
}

// DELETE: Remove a file
export async function DELETE(request: NextRequest) {
  try {
    const category = request.nextUrl.searchParams.get("category");
    const filename = request.nextUrl.searchParams.get("filename");

    if (!category || !UPLOAD_DIRS[category]) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    if (!filename) {
      return NextResponse.json({ error: "No filename provided" }, { status: 400 });
    }

    const filePath = path.join(UPLOAD_DIRS[category], filename);
    await unlink(filePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
