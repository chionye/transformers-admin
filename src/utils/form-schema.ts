/** @format */

import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
      "Password must include uppercase, lowercase, number, and special character"
    ),
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
