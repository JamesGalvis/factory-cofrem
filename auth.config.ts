import Credentials from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";

import { LoginFormSchema } from "@/schemas/auth";
import { getUserByEmail } from "@/actions/auth";

export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const result = LoginFormSchema.safeParse(credentials);

        if (result.success) {
          const { email, password } = result.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;