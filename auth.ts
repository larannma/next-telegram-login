import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/lib/db";

 
export const { handlers, auth, signIn, signOut } = NextAuth({
	pages: {
		signIn: "/auth/login",
	},
  // adapter: PrismaAdapter(db),
  // session: { strategy: 'jwt'},
	callbacks: {
		async session({ session, user, token }) {
			session.user.id = session.user.email;
			return session;
		},
	},
  providers: [
    Credentials({
			id: "telegram-login",
      name: "Telegram Login",
			async authorize(credentials, req) {

				const user = {
					id: "id",
					email: "emain"
				}

				return user;
			},
    }),
  ]
})