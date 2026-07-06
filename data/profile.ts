export const profile = {
  firstName: "Jitendra",
  lastName: "Sachwani",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  title: "Senior Software Engineer",
  secondaryTitle: "Full Stack Developer",
  combinedTitle: "Senior Software Engineer | Full Stack Developer",

  bio: "Building scalable software with clean architecture and beautiful user experiences.",
  subBio: "Specializing in Next.js, React, Node.js, and Cloud Infrastructure.",

  
  phone: "+911234567890",
  email: "sachwani.jitendra+freelance@gmail.com",

  company: "Jitendra Sachwani",
  website: "personal-website-beta-six-93.vercel.app",

  location: {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },

  social: {
    twitter: "",
    linkedin: "https://linkedin.com/in/jitendra-sachwani",
    github: "https://github.com/JitendraSachwani",
    instagram: "",
  },

  seo: {
    get title() {
      return `${profile.fullName} | ${profile.title} & ${profile.secondaryTitle}`;
    },
    get description() {
      return `${profile.bio}. ${profile.subBio}`;
    },
    keywords: [
      "Jitendra Sachwani",
      "Senior Software Engineer",
      "Full Stack Developer",
      "Freelance Software Engineer",
      "Next.js Portfolio",
      "React Portfolio",
      "Next.js Portfolio",
      "React Developer",
      "Clean Architecture",
      "Docker",
      "Kubernetes",
      "AWS",
      "TypeScript",
    ],
  },
} as const;
