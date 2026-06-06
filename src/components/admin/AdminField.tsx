"use client";

interface AdminFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "textarea" | "number" | "url";
  placeholder?: string;
  rows?: number;
}

export function AdminField({ label, value, onChange, type = "text", placeholder, rows = 3 }: AdminFieldProps) {
  const baseClass =
    "w-full px-3 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-temple-gold/50 focus:border-temple-gold transition-colors text-sm";

  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-heritage-green">{label}</label>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={baseClass}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </div>
  );
}
