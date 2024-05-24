import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@dabaz/auth.config"
import { db } from "@dabaz/lib/db";
 
export const {
  handlers: { GET, POST }, auth, signIn, signOut
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
