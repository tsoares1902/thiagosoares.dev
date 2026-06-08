import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Thiago Soares",
    short_name: "Thiago",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#050505"
    // TODO: adicionar icons quando public/icon.png e public/apple-icon.png existirem.
  };
}
