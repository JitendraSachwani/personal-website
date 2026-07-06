export const profile = {
  firstName: "Jitendra",
  lastName: "Sachwani",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  title: "Senior Software Engineer / Full Stack Developer",
  
  email: "sachwani.jitendra+freelance@gmail.com",
  phone: "+911234567890",
  
  company: "Jitendra Sachwani",
  website: "https://jitendra.sachwani.dev",

  bio: "Building scalable software with clean architecture and beautiful user experiences.",

  location: {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },

  social: {
    github: "https://github.com/JitendraSachwani",
    linkedin: "https://linkedin.com/in/jitendra-sachwani",
    twitter: "",
    instagram: "",
  },
} as const;
