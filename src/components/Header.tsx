"use client";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useSession, signIn, signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

const Header = () => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className="w-full h-24 flex items-center justify-around">
      <Link
        href={"/home"}
        className="lg:text-3xl text-2xl font-[700] text-green-500 shadow-2xl rounded-full"
      >
        Ummah<span className="text-slate-700">Unity.com</span>
      </Link>
      <div>
        {!user ? (
          <>
            <Dialog>
              <DialogTrigger>Sign Up</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-center my-2">
                    Continue with Google
                  </DialogTitle>
                  <DialogTitle
                    onClick={() => signIn()}
                    className="bg-orange-500 text-slate-700 text-center my-2 py-3 rounded cursor-pointer"
                  >
                    Login with Google
                  </DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </>
        ) : (
          <>
            <div className="flex gap-2 items-center">
              <p className="cursor-pointer">{user?.name}</p>
              <LogOut
                onClick={() => signOut()}
                size={20}
                className="cursor-pointer text-red-500"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
