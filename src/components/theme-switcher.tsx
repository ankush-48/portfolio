import { useEffect, useState } from "react";
import { Palette, Moon, Sun, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ACCENTS = [
  { id: "violet", label: "Amethyst", color: "oklch(0.68 0.22 280)" },
  { id: "emerald", label: "Emerald", color: "oklch(0.68 0.17 155)" },
  { id: "amber", label: "Solar", color: "oklch(0.78 0.19 65)" },
  { id: "rose", label: "Crimson", color: "oklch(0.70 0.20 12)" },
  { id: "cyan", label: "Ocean", color: "oklch(0.72 0.18 210)" },
  { id: "lime", label: "Neon", color: "oklch(0.80 0.22 130)" },
] as const;

type AccentId = (typeof ACCENTS)[number]["id"];
type Mode = "dark" | "light";

function readAttr<T extends string>(attr: string, fallback: T): T {
  if (typeof document === "undefined") return fallback;
  return (document.documentElement.getAttribute(attr) as T) || fallback;
}

export function ThemeSwitcher() {
  const [accent, setAccent] = useState<AccentId>("violet");
  const [mode, setMode] = useState<Mode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setAccent(readAttr<AccentId>("data-accent", "violet"));
    setMode(readAttr<Mode>("data-mode", "dark"));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-accent", accent);
    localStorage.setItem("pf-accent", accent);
  }, [accent, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-mode", mode);
    localStorage.setItem("pf-mode", mode);
  }, [mode, mounted]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Customize theme"
          className="relative border-border/60 bg-card/60 backdrop-blur hover:bg-card"
        >
          <Palette className="h-4 w-4" />
          <span
            className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-background"
            style={{ background: "var(--primary)" }}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 border-border/60 bg-card/95 backdrop-blur">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Accent color
            </p>
            <div className="mt-3 grid grid-cols-6 gap-2">
              {ACCENTS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setAccent(a.id)}
                  aria-label={a.label}
                  className={cn(
                    "group relative aspect-square rounded-full ring-offset-2 ring-offset-card transition-transform hover:scale-110",
                    accent === a.id && "ring-2 ring-foreground",
                  )}
                  style={{ background: a.color }}
                >
                  {accent === a.id && (
                    <Check className="absolute inset-0 m-auto h-3.5 w-3.5 text-background" strokeWidth={3} />
                  )}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {ACCENTS.find((a) => a.id === accent)?.label}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Appearance
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                onClick={() => setMode("dark")}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-md border border-border/60 px-3 py-2 text-sm transition-colors",
                  mode === "dark" ? "bg-primary text-primary-foreground border-transparent" : "hover:bg-muted",
                )}
              >
                <Moon className="h-4 w-4" /> Dark
              </button>
              <button
                onClick={() => setMode("light")}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-md border border-border/60 px-3 py-2 text-sm transition-colors",
                  mode === "light" ? "bg-primary text-primary-foreground border-transparent" : "hover:bg-muted",
                )}
              >
                <Sun className="h-4 w-4" /> Light
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}