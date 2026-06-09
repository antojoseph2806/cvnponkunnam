"use client";

import { useState, useEffect } from "react";

const ADMIN_PASSWORD_KEY = "akm-admin-password";
const ADMIN_SESSION_KEY = "akm-admin-session";

export const DEFAULT_PASSWORD = "akmsreerudra2024";

export function isAdmin(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(ADMIN_SESSION_KEY) === "authenticated";
}

export function login(password: string): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(ADMIN_PASSWORD_KEY) ?? DEFAULT_PASSWORD;
  if (password === stored) {
    localStorage.setItem(ADMIN_SESSION_KEY, "authenticated");
    return true;
  }
  return false;
}

export function logout(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ADMIN_SESSION_KEY);
}

export function changePassword(current: string, newPassword: string): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(ADMIN_PASSWORD_KEY) ?? DEFAULT_PASSWORD;
  if (current === stored) {
    localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
    return true;
  }
  return false;
}

export function useAdminAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthenticated(isAdmin());
    setLoading(false);
  }, []);

  const signIn = (password: string) => {
    const ok = login(password);
    setAuthenticated(ok);
    return ok;
  };

  const signOut = () => {
    logout();
    setAuthenticated(false);
  };

  return { authenticated, loading, signIn, signOut };
}
