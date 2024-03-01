import { z } from "zod";

export const experienceSchema = z.object({
  company: z.string().min(1, "Company name is required."),
  jobRole: z.string().min(1, "Job Role in company is required."),
  location: z.string().min(1, "Location is required."),
  startDate: z.string().min(1, "Joining Date is required."),
  endDate: z.string().min(1, "End Date is required."),
  description: z.array(z.string().min(1, "Description is required.")),
});

// export type Experience = z.infer<typeof experienceSchema>
