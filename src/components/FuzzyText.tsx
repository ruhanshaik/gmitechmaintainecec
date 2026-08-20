import { useEffect, useRef, type ReactNode } from "react";

interface FuzzyTextProps {
  children: ReactNode;
  fontSize?: number | string;
  fontWeight?: string | number;
  fontFamily?: string;
  color?: string;
  enableHover?: boolean;
  baseIntensity?: number;
  hoverIntensity?: number;
  fuzzRange?: number;
  fps?: number;
  letterSpacing?: number;
}

const FuzzyText = ({
  children,
  fontSize = "clamp(1rem, 2.2vw, 1.5rem)",
  fontWeight = 600,
  fontFamily = "inherit",
  color = "currentColor",
  enableHover = true,
  baseIntensity = 0.12,
  hoverIntensity = 0.25,
  fuzzRange = 12,
  fps = 30,
  letterSpacing = 4,
}: FuzzyTextProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let animationId = 0;
    let isCancelled = false;
    let isHovering = false;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = async () => {
      if (document.fonts?.ready) {
        try {
          await document.fonts.ready;
        } catch {
          /* noop */
        }
      }
      if (isCancelled) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const computed = window.getComputedStyle(canvas);
      const resolvedFontFamily =
        fontFamily === "inherit" ? computed.fontFamily || "sans-serif" : fontFamily;
      const px =
        typeof fontSize === "number"
          ? fontSize
          : parseFloat(computed.fontSize || "16") || 16;
      const resolvedColor = color === "currentColor" ? computed.color : color;
      const text = String(children);

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;
      const font = `${fontWeight} ${px}px ${resolvedFontFamily}`;
      offCtx.font = font;
      offCtx.textBaseline = "alphabetic";

      const width = Math.ceil(
        text.split("").reduce((w, ch) => w + offCtx.measureText(ch).width + letterSpacing, 0),
      );
      const m = offCtx.measureText(text);
      const ascent = m.actualBoundingBoxAscent || px * 0.8;
      const descent = m.actualBoundingBoxDescent || px * 0.2;
      const height = Math.ceil(ascent + descent);

      offscreen.width = width + fuzzRange * 2;
      offscreen.height = height;
      offCtx.font = font;
      offCtx.textBaseline = "alphabetic";
      offCtx.fillStyle = resolvedColor;
      let x = fuzzRange;
      for (const ch of text) {
        offCtx.fillText(ch, x, ascent);
        x += offCtx.measureText(ch).width + letterSpacing;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = (width + fuzzRange * 2) * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width + fuzzRange * 2}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      const interval = 1000 / fps;
      let last = 0;

      const draw = (time: number) => {
        if (isCancelled) return;
        animationId = requestAnimationFrame(draw);
        if (time - last < interval) return;
        last = time;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const intensity = isHovering && enableHover ? hoverIntensity : baseIntensity;
        for (let row = 0; row < height; row++) {
          const dx = reduced ? 0 : Math.round((Math.random() - 0.5) * fuzzRange * intensity * 2);
          ctx.drawImage(offscreen, 0, row, offscreen.width, 1, dx, row, offscreen.width, 1);
        }
      };
      animationId = requestAnimationFrame(draw);

      const enter = () => (isHovering = true);
      const leave = () => (isHovering = false);
      canvas.addEventListener("mouseenter", enter);
      canvas.addEventListener("mouseleave", leave);
      cleanupFns.push(() => {
        canvas.removeEventListener("mouseenter", enter);
        canvas.removeEventListener("mouseleave", leave);
      });
    };

    const cleanupFns: Array<() => void> = [];
    void run();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationId);
      cleanupFns.forEach((fn) => fn());
    };
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
    fuzzRange,
    fps,
    letterSpacing,
  ]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={String(children)}
      style={{ fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize }}
      className="block max-w-full"
    />
  );
};

export default FuzzyText;
