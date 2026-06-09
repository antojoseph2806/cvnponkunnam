"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ImageIcon,
  Image,
  BookOpen,
  Save,
  RotateCcw,
  Download,
  Upload,
  LogOut,
  ChevronRight,
  Globe,
  Plus,
  Trash2,
  Loader2,
  Film,
  X,
} from "lucide-react";
import { useSiteContent, exportContent, importContent } from "@/lib/content-store";
import { logout } from "@/lib/admin-auth";
import { AdminField } from "@/components/admin/AdminField";
import { SectionCard } from "@/components/admin/SectionCard";
import type { CourseItem, SiteContent } from "@/lib/admin-types";

const tabs = [
  { id: "media", label: "Photos & Videos", icon: ImageIcon },
  { id: "hero", label: "Hero Background", icon: Image },
  { id: "courses", label: "Courses & Services", icon: BookOpen },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const { content, updateContent, reset } = useSiteContent();
  const [activeTab, setActiveTab] = useState("media");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm("Reset all content to defaults? This cannot be undone.")) {
      reset();
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const handleExport = () => {
    const blob = new Blob([exportContent()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "akm-site-content.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-heritage-cream flex">
      {/* Sidebar */}
      <aside className="w-64 bg-heritage-green-dark text-heritage-cream flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-temple-gold/20">
          <h1 className="font-display text-xl text-temple-gold">Admin Panel</h1>
          <p className="text-xs text-heritage-cream/60 mt-1">AKM Sree Rudra</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm transition-colors ${
                  activeTab === tab.id
                    ? "bg-temple-gold/20 text-temple-gold"
                    : "text-heritage-cream/80 hover:bg-white/5 hover:text-heritage-cream"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {activeTab === tab.id && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-temple-gold/20 space-y-2">
          <a
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 text-sm text-heritage-cream/70 hover:text-heritage-cream transition-colors"
          >
            <Globe className="w-4 h-4" />
            View Website
          </a>
          <button
            onClick={handleExport}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-heritage-cream/70 hover:text-heritage-cream transition-colors"
          >
            <Download className="w-4 h-4" />
            Export Backup
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-heritage-cream/70 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-border px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div>
            <h2 className="font-display text-xl text-heritage-green">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {saved && (
              <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-md">Saved!</span>
            )}
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-4 py-2 bg-heritage-green text-heritage-cream text-sm rounded-md hover:bg-heritage-green-dark transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground text-sm rounded-md hover:bg-muted/80 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            {activeTab === "media" && <MediaManager />}
            {activeTab === "hero" && (
              <HeroBackgroundEditor
                content={content.hero}
                onChange={(hero) => updateContent((prev) => ({ ...prev, hero }))}
              />
            )}
            {activeTab === "courses" && (
              <CoursesAndServicesManager
                courses={content.courses}
                marmaServices={content.marma.services}
                onCoursesChange={(courses) => updateContent((prev) => ({ ...prev, courses }))}
                onMarmaChange={(services) => updateContent((prev) => ({ ...prev, marma: { ...prev.marma, services } }))}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

/* =========================
   FILE UPLOAD HELPER
   ========================= */
function FileUploader({
  category,
  accept,
  label,
  onUploaded,
}: {
  category: string;
  accept: string;
  label: string;
  onUploaded: (path: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        onUploaded(data.path);
      } else {
        alert(data.error || "Upload failed");
      }
    } catch {
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
        id={`upload-${category}`}
      />
      <label
        htmlFor={`upload-${category}`}
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-temple-gold text-heritage-green-dark text-sm font-semibold rounded-md hover:bg-temple-gold-light transition-colors cursor-pointer"
      >
        {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
        {label}
      </label>
    </div>
  );
}

/* =========================
   MEDIA MANAGER
   ========================= */
type MediaFile = {
  filename: string;
  path: string;
  isVideo: boolean;
  isImage: boolean;
};

function MediaManager() {
  const [photos, setPhotos] = useState<MediaFile[]>([]);
  const [videos, setVideos] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [previewFile, setPreviewFile] = useState<MediaFile | null>(null);

  const fetchFiles = useCallback(async () => {
    try {
      const [photosRes, videosRes] = await Promise.all([
        fetch("/api/upload?category=gallery-photos"),
        fetch("/api/upload?category=gallery-videos"),
      ]);
      const photosData = await photosRes.json();
      const videosData = await videosRes.json();
      setPhotos(photosData.files || []);
      setVideos(videosData.files || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  const handleDelete = async (category: string, filename: string, type: "photo" | "video") => {
    if (!window.confirm(`Delete ${filename}?`)) return;
    try {
      await fetch(`/api/upload?category=${category}&filename=${filename}`, { method: "DELETE" });
      if (type === "photo") setPhotos((prev) => prev.filter((f) => f.filename !== filename));
      else setVideos((prev) => prev.filter((f) => f.filename !== filename));
    } catch {
      alert("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-temple-gold" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Photos Section */}
      <SectionCard title="Gallery Photos">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">{photos.length} photos in gallery</p>
          <FileUploader
            category="gallery-photos"
            accept="image/*"
            label="Upload Photo"
            onUploaded={() => fetchFiles()}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {photos.map((file) => (
            <div key={file.filename} className="group relative aspect-square rounded-lg overflow-hidden border border-border bg-muted/30">
              <img
                src={file.path}
                alt={file.filename}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setPreviewFile(file)}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <button
                  onClick={() => handleDelete("gallery-photos", file.filename, "photo")}
                  className="opacity-0 group-hover:opacity-100 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] px-2 py-1 truncate">{file.filename}</p>
            </div>
          ))}
          {photos.length === 0 && (
            <p className="text-sm text-muted-foreground col-span-full text-center py-8">
              No photos yet. Upload your first gallery photo.
            </p>
          )}
        </div>
      </SectionCard>

      {/* Videos Section */}
      <SectionCard title="Gallery Videos">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">{videos.length} videos in gallery</p>
          <FileUploader
            category="gallery-videos"
            accept="video/*"
            label="Upload Video"
            onUploaded={() => fetchFiles()}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((file) => (
            <div key={file.filename} className="group relative aspect-video rounded-lg overflow-hidden border border-border bg-heritage-green-dark">
              <video
                src={file.path}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleDelete("gallery-videos", file.filename, "video")}
                  className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[10px] px-2 py-1 truncate">{file.filename}</p>
            </div>
          ))}
          {videos.length === 0 && (
            <p className="text-sm text-muted-foreground col-span-full text-center py-8">
              No videos yet. Upload your first gallery video.
            </p>
          )}
        </div>
      </SectionCard>

      {/* Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setPreviewFile(null)}>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute -top-10 right-0 text-white hover:text-temple-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            {previewFile.isImage && (
              <img src={previewFile.path} alt={previewFile.filename} className="w-full h-full object-contain rounded-lg" />
            )}
            {previewFile.isVideo && (
              <video src={previewFile.path} controls autoPlay className="w-full h-full rounded-lg" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================
   HERO BACKGROUND EDITOR
   ========================= */
function HeroBackgroundEditor({
  content,
  onChange,
}: {
  content: SiteContent["hero"];
  onChange: (v: SiteContent["hero"]) => void;
}) {
  const [heroFiles, setHeroFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHeroFiles = useCallback(async () => {
    try {
      const res = await fetch("/api/upload?category=hero-background");
      const data = await res.json();
      setHeroFiles(data.files || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHeroFiles();
  }, [fetchHeroFiles]);

  const handleDeleteHeroFile = async (filename: string) => {
    if (!window.confirm(`Delete ${filename}?`)) return;
    try {
      await fetch(`/api/upload?category=hero-background&filename=${filename}`, { method: "DELETE" });
      setHeroFiles((prev) => prev.filter((f) => f.filename !== filename));
      // Clear selection if deleted file was active
      if (content.backgroundImage.includes(filename)) onChange({ ...content, backgroundImage: "" });
      if (content.backgroundVideo.includes(filename)) onChange({ ...content, backgroundVideo: "" });
    } catch {
      alert("Delete failed");
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Background Preview */}
      <SectionCard title="Current Hero Background">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-heritage-green mb-2">Background Image</h4>
            <div className="aspect-video rounded-lg overflow-hidden border border-border bg-muted/30">
              {content.backgroundImage ? (
                <img src={content.backgroundImage} alt="Hero BG" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">No image selected</div>
              )}
            </div>
            {content.backgroundImage && (
              <button
                onClick={() => onChange({ ...content, backgroundImage: "" })}
                className="mt-2 text-sm text-red-600 hover:text-red-700"
              >
                Clear image
              </button>
            )}
          </div>
          <div>
            <h4 className="text-sm font-medium text-heritage-green mb-2">Background Video (optional)</h4>
            <div className="aspect-video rounded-lg overflow-hidden border border-border bg-muted/30">
              {content.backgroundVideo ? (
                <video src={content.backgroundVideo} controls preload="metadata" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">No video selected</div>
              )}
            </div>
            {content.backgroundVideo && (
              <button
                onClick={() => onChange({ ...content, backgroundVideo: "" })}
                className="mt-2 text-sm text-red-600 hover:text-red-700"
              >
                Clear video
              </button>
            )}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          If a video is set, it will be used as the hero background instead of the image. The image will be used as the video poster (thumbnail).
        </p>
      </SectionCard>

      {/* Upload New */}
      <SectionCard title="Upload New Background">
        <div className="flex flex-wrap gap-4">
          <FileUploader
            category="hero-background"
            accept="image/*,video/*"
            label="Choose File (Image or Video)"
            onUploaded={(path) => {
              const isVid = /\.(mp4|webm|ogg)$/i.test(path);
              if (isVid) {
                onChange({ ...content, backgroundVideo: path });
              } else {
                onChange({ ...content, backgroundImage: path });
              }
              fetchHeroFiles();
            }}
          />
        </div>
      </SectionCard>

      {/* Choose from Uploaded Files */}
      <SectionCard title="Choose from Uploaded Files">
        {loading ? (
          <Loader2 className="w-6 h-6 animate-spin text-temple-gold" />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {heroFiles.map((file) => (
              <div key={file.filename} className="group relative aspect-video rounded-lg overflow-hidden border border-border bg-muted/30">
                {file.isImage ? (
                  <img
                    src={file.path}
                    alt={file.filename}
                    className={`w-full h-full object-cover cursor-pointer ${
                      content.backgroundImage === file.path ? "ring-2 ring-temple-gold" : ""
                    }`}
                    onClick={() => onChange({ ...content, backgroundImage: file.path })}
                  />
                ) : (
                  <video
                    src={file.path}
                    preload="metadata"
                    className={`w-full h-full object-cover cursor-pointer ${
                      content.backgroundVideo === file.path ? "ring-2 ring-temple-gold" : ""
                    }`}
                    onClick={() => onChange({ ...content, backgroundVideo: file.path })}
                  />
                )}
                {file.isVideo && (
                  <div className="absolute top-1 left-1">
                    <Film className="w-4 h-4 text-white drop-shadow" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                  <div className="w-full bg-black/70 px-2 py-1 flex items-center justify-between">
                    <span className="text-white text-[10px] truncate flex-1">{file.filename}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDeleteHeroFile(file.filename); }}
                      className="text-red-400 hover:text-red-300 ml-1"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {heroFiles.length === 0 && (
              <p className="text-sm text-muted-foreground col-span-full text-center py-4">
                No files uploaded yet. Use the upload button above.
              </p>
            )}
          </div>
        )}
      </SectionCard>

      {/* Hero Text Content */}
      <SectionCard title="Hero Text Content">
        <AdminField label="Badge Text" value={content.badgeText} onChange={(v) => onChange({ ...content, badgeText: v })} />
        <AdminField label="Title" value={content.title} onChange={(v) => onChange({ ...content, title: v })} />
        <AdminField label="Tagline" value={content.tagline} onChange={(v) => onChange({ ...content, tagline: v })} />
        <AdminField label="Subtitle" value={content.subtitle} onChange={(v) => onChange({ ...content, subtitle: v })} />
        <div className="grid grid-cols-2 gap-4">
          <AdminField label="Since Year" value={String(content.sinceYear)} onChange={(v) => onChange({ ...content, sinceYear: Number(v) || 1996 })} type="number" />
          <AdminField label="Primary Button Text" value={content.primaryButtonText} onChange={(v) => onChange({ ...content, primaryButtonText: v })} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <AdminField label="Primary Button Link" value={content.primaryButtonLink} onChange={(v) => onChange({ ...content, primaryButtonLink: v })} />
          <AdminField label="Secondary Button Text" value={content.secondaryButtonText} onChange={(v) => onChange({ ...content, secondaryButtonText: v })} />
        </div>
        <AdminField label="Secondary Button Link" value={content.secondaryButtonLink} onChange={(v) => onChange({ ...content, secondaryButtonLink: v })} />
      </SectionCard>
    </div>
  );
}

/* =========================
   COURSES & SERVICES MANAGER
   ========================= */
function CoursesAndServicesManager({
  courses,
  marmaServices,
  onCoursesChange,
  onMarmaChange,
}: {
  courses: CourseItem[];
  marmaServices: string[];
  onCoursesChange: (v: CourseItem[]) => void;
  onMarmaChange: (v: string[]) => void;
}) {
  const trainingCourses = courses.filter((c) => c.category === "training");
  const wellnessCourses = courses.filter((c) => c.category === "wellness");

  const addCourse = (category: "training" | "wellness") => {
    const maxId = courses.reduce((max, c) => Math.max(max, c.id), 0);
    const newCourse: CourseItem = {
      id: maxId + 1,
      duration: "Duration",
      title: "New Course",
      subtitle: "Subtitle",
      description: "Description",
      features: "Feature 1\nFeature 2\nFeature 3",
      type: "Residential",
      suitableFor: "All Levels",
      amountInr: 0,
      amountUsd: 0,
      tokenAmountInr: 0,
      tokenAmountUsd: 0,
      isPopular: false,
      isActive: true,
      displayOrder: courses.length + 1,
      category,
    };
    onCoursesChange([...courses, newCourse]);
  };

  const updateCourse = (index: number, updated: CourseItem) => {
    const globalIndex = courses.findIndex((c) => c.id === updated.id);
    if (globalIndex === -1) return;
    const newCourses = [...courses];
    newCourses[globalIndex] = updated;
    onCoursesChange(newCourses);
  };

  const removeCourse = (id: number) => {
    if (!window.confirm("Remove this course?")) return;
    onCoursesChange(courses.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Kalaripayattu Training Courses */}
      <SectionCard title="Kalaripayattu Training Courses">
        <div className="space-y-4">
          {trainingCourses.map((course) => (
            <CourseEditor
              key={course.id}
              course={course}
              onChange={(updated) => updateCourse(course.id, updated)}
              onRemove={() => removeCourse(course.id)}
            />
          ))}
          {trainingCourses.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">No training courses yet.</p>
          )}
          <button
            onClick={() => addCourse("training")}
            className="w-full py-3 border-2 border-dashed border-border rounded-md text-sm text-muted-foreground hover:border-temple-gold/50 hover:text-temple-gold transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Training Course
          </button>
        </div>
      </SectionCard>

      {/* Wellness Therapy Courses */}
      <SectionCard title="Wellness Therapy Courses">
        <div className="space-y-4">
          {wellnessCourses.map((course) => (
            <CourseEditor
              key={course.id}
              course={course}
              onChange={(updated) => updateCourse(course.id, updated)}
              onRemove={() => removeCourse(course.id)}
            />
          ))}
          {wellnessCourses.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">No wellness courses yet.</p>
          )}
          <button
            onClick={() => addCourse("wellness")}
            className="w-full py-3 border-2 border-dashed border-border rounded-md text-sm text-muted-foreground hover:border-temple-gold/50 hover:text-temple-gold transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Wellness Course
          </button>
        </div>
      </SectionCard>

      {/* Marma Services */}
      <SectionCard title="Marma Chikilsa Services">
        <div className="space-y-2">
          {marmaServices.map((service, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={service}
                onChange={(e) => {
                  const updated = [...marmaServices];
                  updated[i] = e.target.value;
                  onMarmaChange(updated);
                }}
                className="flex-1 px-3 py-2 border border-border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
              />
              <button
                onClick={() => {
                  const updated = marmaServices.filter((_, idx) => idx !== i);
                  onMarmaChange(updated);
                }}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-md text-sm transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            onClick={() => onMarmaChange([...marmaServices, "New Service"])}
            className="w-full py-2 border-2 border-dashed border-border rounded-md text-sm text-muted-foreground hover:border-temple-gold/50 hover:text-temple-gold transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Service
          </button>
        </div>
      </SectionCard>
    </div>
  );
}

/* =========================
   COURSE EDITOR (expandable card)
   ========================= */
function CourseEditor({
  course,
  onChange,
  onRemove,
}: {
  course: CourseItem;
  onChange: (updated: CourseItem) => void;
  onRemove: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`border rounded-lg overflow-hidden ${course.isPopular ? "border-temple-gold" : "border-border"}`}>
      <div
        className="flex items-center justify-between px-4 py-3 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-heritage-green">{course.title}</span>
          <span className="text-xs text-muted-foreground">{course.duration} - {course.category}</span>
          {course.isPopular && (
            <span className="text-[10px] bg-temple-gold text-heritage-green-dark px-2 py-0.5 rounded font-bold uppercase">Popular</span>
          )}
          {!course.isActive && (
            <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold uppercase">Inactive</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${expanded ? "rotate-90" : ""}`} />
        </div>
      </div>
      {expanded && (
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Title" value={course.title} onChange={(v) => onChange({ ...course, title: v })} />
            <AdminField label="Duration" value={course.duration} onChange={(v) => onChange({ ...course, duration: v })} />
          </div>
          <AdminField label="Subtitle" value={course.subtitle} onChange={(v) => onChange({ ...course, subtitle: v })} />
          <AdminField label="Description" value={course.description} onChange={(v) => onChange({ ...course, description: v })} type="textarea" />
          <AdminField label="Features (one per line)" value={course.features} onChange={(v) => onChange({ ...course, features: v })} type="textarea" rows={5} />
          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Type" value={course.type} onChange={(v) => onChange({ ...course, type: v })} />
            <AdminField label="Suitable For" value={course.suitableFor} onChange={(v) => onChange({ ...course, suitableFor: v })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Amount (INR)" value={String(course.amountInr)} onChange={(v) => onChange({ ...course, amountInr: Number(v) || 0 })} type="number" />
            <AdminField label="Amount (USD)" value={String(course.amountUsd)} onChange={(v) => onChange({ ...course, amountUsd: Number(v) || 0 })} type="number" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Token Amount (INR)" value={String(course.tokenAmountInr)} onChange={(v) => onChange({ ...course, tokenAmountInr: Number(v) || 0 })} type="number" />
            <AdminField label="Token Amount (USD)" value={String(course.tokenAmountUsd)} onChange={(v) => onChange({ ...course, tokenAmountUsd: Number(v) || 0 })} type="number" />
          </div>
          <div className="flex items-center gap-6 pt-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={course.isPopular}
                onChange={(e) => onChange({ ...course, isPopular: e.target.checked })}
                className="w-4 h-4 accent-heritage-green"
              />
              Popular
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={course.isActive}
                onChange={(e) => onChange({ ...course, isActive: e.target.checked })}
                className="w-4 h-4 accent-heritage-green"
              />
              Active
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
