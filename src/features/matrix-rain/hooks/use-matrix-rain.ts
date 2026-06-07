"use client";

import { useEffect, useRef } from "react";

const matrixCharacters =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";

const drawDelay = 56;

export function useMatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => 1);

    const draw = () => {
      context.fillStyle = "rgba(5, 5, 5, 0.08)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#00ff66";
      context.font = `${fontSize}px monospace`;

      for (let index = 0; index < drops.length; index++) {
        const character =
          matrixCharacters[
            Math.floor(Math.random() * matrixCharacters.length)
          ];

        context.fillText(character, index * fontSize, drops[index] * fontSize);

        if (
          drops[index] * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[index] = 0;
        }

        drops[index]++;
      }
    };

    const interval = window.setInterval(draw, drawDelay);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return canvasRef;
}
