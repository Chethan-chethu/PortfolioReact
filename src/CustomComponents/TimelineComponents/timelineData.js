import { GraduationCap, School, Briefcase } from "lucide-react";

export const timelineData = [
  {
    id: 1,
    type: "school",
    title: "High School",
    organization: "ABC Senior Secondary School",
    duration: "2016 – 2018",
    description:
      "Completed higher secondary education with a science background.",
    experience: [
      "Physics, Chemistry, Mathematics",
      "Science exhibitions",
      "Early interest in programming",
    ],
    icon: School,
  },
  {
    id: 2,
    type: "college",
    title: "Bachelor of Technology",
    organization: "XYZ University",
    duration: "2019 – 2023",
    description:
      "Computer Science & Engineering with strong software foundations.",
    experience: [
      "Data Structures & Algorithms",
      "Web & Backend Development",
      "Hackathons & internships",
    ],
    icon: GraduationCap,
  },
  {
    id: 3,
    type: "job",
    title: "Frontend Developer",
    organization: "Tech Company Pvt Ltd",
    duration: "2023 – Present",
    description: "Building scalable, high-performance React applications.",
    experience: [
      "React, Tailwind, TypeScript",
      "Improved performance by 30%",
      "Worked in Agile teams",
    ],
    icon: Briefcase,
  },
];
