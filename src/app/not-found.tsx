import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <p className="section-eyebrow mb-3">Not Found</p>
        <h1 className="page-title mb-4">404</h1>
        <p className="page-lead mb-4 max-w-xl">Oops! Page not found</p>
        <Link href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

