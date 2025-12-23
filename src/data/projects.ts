export type Project = {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  tags: string[];
  status?: string;

  // local images in /public
  logo?: string;
  previewImage?: string;

  // outbound links
  externalUrl?: string;
  iosUrl?: string;
  androidUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "gridiron",
    name: "Gridiron Analytics",
    description: "Football analytics: tendencies, matchups, and clean dashboards.",
    longDescription:
      "A sports analytics project focused on clear visualizations, matchup insights, and interactive exploration of football data.",
    tags: ["Analytics", "Charts", "React Native"],
    status: "Building",
    logo: "/gridiron-analytics.png",
    previewImage: "/gridiron-analytics.png",
    // externalUrl: "", // leave off until you have a real URL
  },
  {
    slug: "saveory",
    name: "Saveory",
    description: "Find happy hours fast — built end-to-end with Firebase + mobile.",
    longDescription:
      "A mobile app that helps users find nearby happy hours, deals, and events. Built end-to-end from concept to deployment.",
    tags: ["Product", "Firebase", "React Native"],
    status: "Live",
    logo: "/SaveoryLogo.png",
    previewImage: "/SaveoryLogo.png",
    iosUrl: "https://apps.apple.com/us/app/saveory/id6608961161",
  },
];
