import {
  ActivityIcon,
  Download,
  FilePenLine,
  LayoutTemplate
} from "lucide-react";

export const guideSteps = [
  {
    icon: <LayoutTemplate size={40} />,
    title: "Pick a resume template",
    description:
      "With a good resume template, you don't need to worry about details like formatting.",
    link: "#",
    buttonText: "Get a professional template",
    color: "text-[#60A4EF]",
    gradientClass: "bg-gradient-to-r from-[#60A4EF] to-[#A5CDF6]", // Tailwind CSS gradient class
  },
  {
    icon: <FilePenLine size={40} />,
    title: "Customize each section",
    description:
      "Fill in your personal information and write about your work experience.",
    link: "#",
    buttonText: "Learn how to write a resume",
    color: "text-[#EE8652]",
    gradientClass: "bg-gradient-to-r from-[#EE8652] to-[#FACBB3]", // Tailwind CSS gradient class
  },
  {
    icon: <ActivityIcon size={40} />,
    title: "Emphasize your skills",
    description:
      "Take skills from the job advertisement, then tie them into your resume.",
    link: "#",
    buttonText: "Pick skills for your resume",
    color: "text-[#4AB690]",
    gradientClass: "bg-gradient-to-r from-[#4AB690] to-[#9CDECA]", // Tailwind CSS gradient class
  },
  {
    icon: <Download size={40} />,
    title: "Download your resume",
    description:
      "Get the ATS friendly resume, and get your dream job as soon as possible.",
    link: "#",
    buttonText: "Pick skills for your resume",
    color: "text-[#F07EB3]",
    gradientClass: "bg-gradient-to-r from-[#F07EB3] to-[#F9C0D9]", // Tailwind CSS gradient class
  },
];
