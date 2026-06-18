import type { MetadataRoute } from "next";

// Génère /robots.txt : autorise tous les moteurs et indique le sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://locationjbl.com/sitemap.xml",
  };
}
