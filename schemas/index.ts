import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Minimum password length is 8 characters",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
