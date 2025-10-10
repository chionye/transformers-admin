/** @format */

import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password must be at least 1 characters long"),
});

export const ForgotSchema = z.object({
  email: z.email("Invalid email address"),
});

export const VerificationSchema = z.object({
  otp1: z.string().min(6, "OTP must be at least 6 characters long"),
  otp2: z.string().min(6, "OTP must be at least 6 characters long"),
  otp3: z.string().min(6, "OTP must be at least 6 characters long"),
  otp4: z.string().min(6, "OTP must be at least 6 characters long"),
  otp5: z.string().min(6, "OTP must be at least 6 characters long"),
  otp6: z.string().min(6, "OTP must be at least 6 characters long"),
});

export const searchSchema = z.object({
  search: z.string().min(1, "Search must be at least 1 character long"),
});

export const newUserSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 character long"),
  email: z.email("Invalid email address"),
  username: z.string().min(1, "Username must be at least 1 character long"),
  country: z.string().min(1, "Country must be at least 1 character long"),
  gender: z.string().min(1, "Gender must be at least 1 character long"),
  date_of_birth: z
    .string()
    .min(1, "Date of birth must be at least 1 character long"),
});

export const userDetails = z.object({
  country: z.string().min(1, "Country must be at least 1 character long"),
  gender: z.string().min(1, "Gender must be at least 1 character long"),
  date_of_birth: z
    .string()
    .min(1, "Date of birth must be at least 1 character long"),
  referred_by: z
    .string()
    .min(1, "Referred by must be at least 1 character long"),
});

export const newTeamSchema = z.object({
  name: z.string().min(1, "Team name is required"),
  description: z.string().min(1, "Team description is required"),
  color: z.string().min(1, "Please select a color"),
  icon: z.string().min(1, "Please select an icon"),
  owner: z.array(z.string()).optional(),
});

export const newTeamMemberSchema = z.object({
  member: z.string().min(1, "Members is required"),
});

export const newChallengeSchema = z.object({
  title: z.string().min(1, "Challenge title is required"),
  description: z.string().min(1, "Description is required"),
  icon: z.string().min(1, "Please select an icon"),
  category: z.string().min(1, "Please select a category"),
  isPublic: z.boolean().default(false),
  checklists: z
    .array(
      z.object({
        task: z.string().min(1, "Task cannot be empty"),
      })
    )
    .min(2, "At least 2 checklist items required"),
  frequency: z.string().optional(),
  start: z.string().min(1, "Start date is required"),
  end: z.string().min(1, "End date is required"),
});

export const newMessage = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Message is required"),
  recepients: z.string().min(1, "Please select a recepients"),
});

export const newBlogPost = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Message is required"),
  photo: z.string().min(1, "Please select a photo"),
});

export const newOpportunity = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Message is required"),
  photo: z.string().min(1, "Please select a photo"),
  link: z.string().optional(),
});

export const newEvent = z.object({
  title: z.string().min(1, "Title is required"),
  eventDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  description: z.string().min(1, "Description is required"),
  location: z.string().min(1, "Location is required"),
  photo: z.string().min(1, "Please select a photo"),
  link: z.string().optional(),
});

export const newCourse = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  lessons: z.string().min(1, "Lessons is required"),
  link: z.string().optional(),
  photo: z.string().min(1, "Please select a photo"),
});

export const newFaq = z.object({
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
});

export const generalSettings = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
});

export const teamSettings = z.object({
  teams: z
    .number()
    .min(1, "Max team members must be at least 1 character long"),
});

export const newAdminSchema = z.object({
  fullName: z.string().min(1, "Full Name must be at least 1 character long"),
  email: z.email("Invalid email address"),
  role: z.string().min(1, "Role must be at least 1 character long"),
});

export const acceptInviteSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const newCategorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  color: z.string().min(1, "Theme is required"),
  icon: z.string().min(1, "Icon description is required"),
});

export const newEarningsSchema = z.object({
  referral: z.number().min(1, "Referral must be at least 1 character long"),
  completeGoal: z
    .number()
    .min(1, "Complete goal must be at least 1 character long"),
  completeChallenge: z
    .number()
    .min(1, "Complete challenge must be at least 1 character long"),
  makePost: z.number().min(1, "Make post must be at least 1 character long"),
  joinTeam: z.number().min(1, "Join team must be at least 1 character long"),
});
