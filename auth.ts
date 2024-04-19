import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/lib/db";



declare module "next-auth" {
	interface User {
		username: string | null;
		first_name?: string | null;
		last_name?: string | null;
	}

}


export const { handlers, auth, signIn, signOut } = NextAuth({
	pages: {
		signIn: "/auth/login",
	},
  session: { strategy: 'jwt'},
  callbacks: {
		async session({ token, session }) {
			if (token.sub && session.user){
				session.user.username = typeof token.username === 'string' ? token.username : null;
				session.user.first_name = typeof token.first_name === 'string' ? token.first_name : null;
				session.user.last_name = typeof token.last_name === 'string' ? token.last_name : null;
			}
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.uid = user.id;
				token.username = user.username;
				token.first_name = user.first_name;
				token.last_name = user.last_name;
				}
			return token;
		},
  },
  providers: [
    Credentials({
			id: "telegram-login",
			name: "Telegram Login",
			async authorize(credentials, req) {
				try {
					const {
						username,
						first_name,
						last_name,
						photo_url
					} = credentials as { username: string, first_name: string, last_name: string, photo_url: string };

					const user = await db.user.findUnique({
						where: {
							username,
						}
					})

					if (user?.username){
						return user;
					}

					const newUser = await db.user.create({
						data: {
							username,
							first_name,
							last_name,
							photo_url
						}
					})
				
					return newUser;
					
				  } catch (error) {
					console.error('Error authorizing user:', error);
					return null;
				  }
			},
    }),
  ]
})