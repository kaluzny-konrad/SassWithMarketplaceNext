"use client";

import { User } from "@/payload-types";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "./ui/navigation-menu";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";

type Props = {
  user: User;
};

export default function UserAccountMobileNav({ user }: Props) {
  const { signOut } = useAuth();

  return (
    <>
      <div className="px-4 py-6 space-y-6">
        <div className="flow-root">
          <Link
            href="/dashboard"
            className="block p-2 -m-2 font-medium text-gray-900"
          >
            Dashboard
          </Link>
        </div>
        <div className="flow-root">
          <p
            onClick={signOut}
            className="block p-2 -m-2 font-medium text-gray-900"
          >
            Log out
          </p>
        </div>
      </div>
    </>
  );
}
