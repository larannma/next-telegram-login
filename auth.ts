import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/lib/db";

import { AuthDataValidator, objectToAuthDataMap } from "@telegram-auth/server";
import { urlStrToAuthDataMap } from '@telegram-auth/server/utils';


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
				const validator = new AuthDataValidator({
					botToken: `${process.env.BOT_TOKEN}`,
				});
				
				try {
					const {
						id,
						username,
						first_name,
						last_name,
						photo_url,
						auth_date,
						hash
					} = credentials as { id: string, username: string, first_name: string, last_name: string, photo_url: string, auth_date: string, hash: string};

					// console.log(credentials)
					const query = {
						id,
						username,
						first_name,
						last_name,
						photo_url,
						auth_date,
						hash
					}

					const data = objectToAuthDataMap(query);

					try{
						const validatedUser = await validator.validate(data);
						console.log("CONGRATS! DATA HAS BEEN VALIDATED!")
					} catch(error) {
						console.log("could not validate", error)
						return null
					}
					
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