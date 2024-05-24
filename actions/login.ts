"use server";

import * as z from "zod";

import { LoginSchema } from "@dabaz/schemas";

export default async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  //if (!validatedFields.success) {
    // TODO: handle error
    return { error: "Invalid fields" };
  //}

  // TODO: login user
  return { success: "Email sent!" };
};
