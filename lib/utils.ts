import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { signIn } from "@/auth"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
