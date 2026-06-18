import type { MetadataRoute } from "next";

// Génère /sitemap.xml. Site d'une seule page → on liste la page d'accueil.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://locationjbl.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
