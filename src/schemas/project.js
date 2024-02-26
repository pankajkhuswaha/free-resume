import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Project title is required."),
  link: z
    .string()
    .url("Please enter a valid url")
    .min(1, "Project link is required."),
  startDate: z.string().min(1, "Start Date is required."),
  endDate: z.string().min(1, "End Date is required."),
  techStack: z.array(
    z.string().min(1, "Tech Stack used in project is required.")
  ),
  description: z.array(z.string().min(1, "Description is required.")),
});

// export type Projects = z.infer<typeof projectsSchema>
