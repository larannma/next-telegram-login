import * as z from 'zod';

export const LogingSchema = z.object({
  username: z.string()
})