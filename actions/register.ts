"use server";

import * as z from "zod";

import { RegisterSchema } from "@dabaz/schemas";

export default async function login(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Email sent!" };
};
