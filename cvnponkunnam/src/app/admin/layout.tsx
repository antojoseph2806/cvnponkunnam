"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && !isAdmin() && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [pathname, router]);

  return <>{children}</>;
}
