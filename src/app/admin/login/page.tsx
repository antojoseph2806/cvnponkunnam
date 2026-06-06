"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, Shield } from "lucide-react";
import { login } from "@/lib/admin-auth";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (login(password)) {
        router.push("/admin");
      } else {
        setError("Incorrect password. Please try again.");
      }
      setLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-heritage-cream flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-xl border border-temple-gold/20 overflow-hidden">
          <div className="bg-heritage-green-dark px-8 py-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-temple-gold/20 rounded-full mb-4">
              <Shield className="w-8 h-8 text-temple-gold" />
            </div>
            <h1 className="font-display text-2xl text-heritage-cream mb-2">Admin Panel</h1>
            <p className="text-heritage-cream/70 text-sm">AKM Sree Rudra CVN Kalari</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-heritage-green mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full pl-10 pr-10 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-temple-gold/50 focus:border-temple-gold transition-colors"
                  required
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-heritage-green text-heritage-cream font-medium rounded-md hover:bg-heritage-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="inline-block w-5 h-5 border-2 border-heritage-cream/30 border-t-heritage-cream rounded-full animate-spin" />
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="px-8 pb-6 text-center">
            <a href="/" className="text-sm text-bronze hover:text-heritage-green transition-colors">
              Return to Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
