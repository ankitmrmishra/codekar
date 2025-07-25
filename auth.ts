import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login", // 👈 This links to your custom page
  },
});
