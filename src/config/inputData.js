import { z } from "zod";

const createInputVerification = z.object({
  fullname: z.string().min(3, { message: "Fullname must be at least 3 characters long" }),
  career: z.string().min(3, { message: "Career must be at least 3 characters long" }),
  userBio: z.string().max(200, { message: "Bio must be at least 20 characters long" }),

  project: z.array(z.string()).optional().default([]),

  certification: z.array(z.string()).optional().default([]),

  socialMedia: z.array(z.string()).optional().default([]),

  mainSkills: z.array(z.string()).optional().default([]),

  otherSkills: z.array(z.string()).optional().default([]),
});

export default createInputVerification;