"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { LoginSchema } from "@dabaz/schemas";
import { signIn } from "@dabaz/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@dabaz/routes";

export default async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    };

    throw error;
  };
};
