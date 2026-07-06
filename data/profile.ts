export const profile = {
  firstName: "Jitendra",
  lastName: "Sachwani",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  title: "Senior Software Engineer / Full Stack Developer",
  
  phone: "+911234567890",
  email: "sachwani.jitendra+freelance@gmail.com",
  
  company: "Jitendra Sachwani",
  website: "https://jitendra.sachwani.dev",

  bio: "Building scalable software with clean architecture and beautiful user experiences.",

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
} as const;
