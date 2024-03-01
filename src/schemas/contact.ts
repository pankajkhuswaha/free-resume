import { z } from "zod";

export const contactSchema = z.object({
  portfolio: z.string().optional(),
  mobile: z.string().min(1, "Mobile number is required."),
  email: z.string().email().min(1, "Email is required."),
  linkedin: z.string().min(1, "Linkedin username is required."),
  address: z.string().optional(),
});


