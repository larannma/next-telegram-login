import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

import { TelegramUserData } from "@telegram-auth/server";

export async function createUserOrUpdate(user: TelegramUserData) {
	return db.user.upsert({
		where: {
			id: user.id.toString(),
		},
		create: {
			id: user.id.toString(),
			name: user.first_name,
			image: user.photo_url,
		},
		update: {
			name: user.first_name,
			image: user.photo_url,
		},
	});
}
