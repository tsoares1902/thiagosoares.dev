import type { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoConfig.siteName,
    short_name: "Thiago",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#050505"
    // TODO: adicionar icons quando public/icon.png e public/apple-icon.png existirem.
  };
}
