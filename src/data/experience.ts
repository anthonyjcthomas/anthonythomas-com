export type ExperienceItem = {
    company: string;
    role: string;
    type?: string; // Full-time, Part-time, etc.
    dates: string;
    location?: string;
    bullets: string[];
    logo?: string; // path in /public (ex: "/logos/accuray.png")
  };
  
  export const experience: ExperienceItem[] = [
    {
      company: "Accuray",
      role: "Data Scientist I",
      type: "Full-time",
      dates: "May 2025 – Present",
      location: "Remote",
      logo: "/accuray.jpeg", 
      bullets: [
        "Automated pipelines from data sources to Databricks, ensuring clean, reliable, production-ready datasets for analytics",
        "Built natural language tools in Precision simplifying treatment queries, adjustments, and reporting (Python, LangChain)",
        "Developed software that forecasts machine servicing, reducing downtime by 97% (Python, scikit-learn, MLflow)",
      ],
    },
    {
      company: "Saveory",
      role: "Co-Founder / Full Stack Developer",
      type: "Self-employed",
      dates: "Jun 2024 – Present",
      location: "Madison, WI (On-site)",
      logo: "/SaveoryLogo.png", // you already added this
      bullets: [
        "Built the Saveory app from conceptualization and design to deployment onto the App Store (React, AWS, Firebase)",
        "Helped 50+ local establishments advertise and generate revenue through flash sales",
        "Enabled 500+ users in Madison to find nearby live happy hours, deals, and events",
      ],
    },
    {
      company: "The Kollege Klub",
      role: "Shift Lead",
      type: "Full-time",
      dates: "Feb 2023 – Present",
      location: "Madison, WI (On-site)",
      logo: "/kollegeklub.webp", // add later if you want
      bullets: [
        "Managed daily operations and supervised staff during high-volume shifts",
        "Coordinated scheduling, employee training, and inventory management to meet demand efficiently",
      ],
    },
    {
      company: "Nao Now",
      role: "Software Engineering Intern",
      type: "Full-time",
      dates: "May 2024 – Aug 2024",
      location: "Remote",
      logo: "/NaoNow.avif",
      bullets: [
        "Created 4% more financial flexibility annually by improving resource allocation workflows (Excel, R)",
        "Increased user engagement by 15% and optimized journeys for 3,000+ global students (JavaScript, HTML, CSS)",
      ],
    },
    {
      company: "Wealth Works for Well-Being",
      role: "Software Engineer",
      type: "Part-time",
      dates: "May 2024 – Aug 2024",
      location: "Remote",
      logo: "/wealthworks.png",
      bullets: [
        "Created educational mini-games and web projects for financial literacy education (Python, Java)",
        "Analyzed engagement data and shipped optimizations, increasing engagement by 25%",
      ],
    },
    {
      company: "Stoughton Trailers, LLC",
      role: "Full Stack Intern",
      type: "Full-time",
      dates: "May 2023 – Aug 2023",
      location: "Stoughton, WI (On-site)",
      logo: "/stoughton.png",
      bullets: [
        "Led executive-visible full-stack projects reducing development cycle time by 30% (Java, Node.js, Apache, Git)",
        "Re-engineered an approval system cutting approval time by 75%",
        "Forecasted resource needs with prescriptive analytics, reducing operational costs by 12% (Python, Pandas, scikit-learn)",
      ],
    },
  ];
  