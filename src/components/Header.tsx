import Link from "next/link";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

const Header = () => {
  return (
    <div className="w-full h-24 flex items-center justify-around">
      <Link
        href={"/"}
        className="lg:text-3xl text-2xl font-[700] text-green-500 shadow-2xl rounded-full"
      >
        Ummah<span className="text-slate-700">Unity.com</span>
      </Link>
      <div>
        <Dialog>
          <DialogTrigger>Sign In</DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-center">Login with Google</DialogTitle>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
