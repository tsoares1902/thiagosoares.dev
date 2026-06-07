"use client";

import { useMatrixRain } from "../use-matrix-rain";

export function MatrixRainCanvas() {
  const canvasRef = useMatrixRain();

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/40
          via-black/55
          to-black/90
        "
      />
    </>
  );
}
