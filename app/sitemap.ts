import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://neerajrekwar.gihub.io/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          es: "https://neerajrekwar.gihub.io/es",
          de: "https://neerajrekwar.gihub.io/de",
        },
      },
      priority: 1,
    },
    {
      url: "https://neerajrekwar.gihub.io/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      alternates: {
        languages: {
          es: "https://neerajrekwar.gihub.io/es/about",
          de: "https://neerajrekwar.gihub.io/de/about",
        },
      },
      priority: 0.8,
    },
    {
      url: "https://neerajrekwar.gihub.io/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      alternates: {
        languages: {
          es: "https://neerajrekwar.gihub.io/es/blog",
          de: "https://neerajrekwar.gihub.io/de/blog",
        },
      },
      priority: 0.8,
    },
    {
      url: "https://neerajrekwar.gihub.io/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      alternates: {
        languages: {
          es: "https://neerajrekwar.gihub.io/es/contact",
          de: "https://neerajrekwar.gihub.io/de/contact",
        },
      },
      priority: 0.8,
    },
  ];
}
