import { User } from "@/payload-types";
import UserAccountNav from "./UserAccountNav";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

type Props = {
  user: User | null;
};

export default function DesktopNav({user}: Props) {
  return (
    <div className="flex items-center ml-auto">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end sm:space-x-6">
        {user ? (
          <UserAccountNav user={user} />
        ) : (
          <>
            <Link
              href={"/sign-in"}
              className={buttonVariants({ variant: "ghost" })}
            >
              Sign in
            </Link>

            <span className="w-px h-6 bg-gray-200" aria-hidden="true" />

            <Link
              href={"sign-up"}
              className={buttonVariants({ variant: "ghost" })}
            >
              Create account
            </Link>

            <span className="w-px h-6 bg-gray-200" aria-hidden="true" />
          </>
        )}
      </div>
    </div>
  );
}
