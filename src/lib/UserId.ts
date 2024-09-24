import { getServerSession } from "next-auth"
import { authOptions } from "./auth"

export const getUserId = async () => {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
  
    if (!userId) {
      throw new Error("Unauthorized")
    }
  
    return userId
  }