import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getAuthOptions } from "./auth"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getUserId = async () => {
  const session = await getAuthOptions()
  const userId = session?.user.id

  if (!userId) {
    throw new Error("Unauthorized")
  }

  return userId
}