import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { authOptions, getAuthOptions } from "./auth"
import { getServerSession } from "next-auth"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

