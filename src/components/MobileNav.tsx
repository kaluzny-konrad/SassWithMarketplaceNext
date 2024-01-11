"use client";

import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { User } from "@/payload-types";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import UserAccountMobileNav from "./UserAccountMobileNav";

type Props = {
  user: User | null;
};

export default function MobileNav({ user }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  // whenever we click an item in the menu and navigate away, we want to close the menu
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // when we click the path we are currently on, we still want the mobile menu to close,
  // however we cant rely on the pathname for it because that won't change (we're already there)
  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  // remove second scrollbar when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  if (!isOpen)
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md sm:hidden"
      >
        <MenuIcon className="w-6 h-6" aria-hidden="true" />
      </button>
    );

  return (
    <div className="">
      <div className="relative z-40 sm:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </div>

      <div className="fixed inset-0 z-40 flex overflow-y-scroll overscroll-y-none">
        <div className="w-full ">
          <div
            ref={navRef}
            className="relative flex flex-col w-full pb-12 overflow-y-auto bg-white shadow-xl"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="relative inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
              >
                <XIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            {user ? (
              <UserAccountMobileNav user={user} />
            ) : (
              <>
                <div className="px-4 py-6 space-y-6">
                  <div className="flow-root">
                    <Link
                      onClick={() => closeOnCurrent("/sign-in")}
                      href="/sign-in"
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      onClick={() => closeOnCurrent("/sign-up")}
                      href="/sign-up"
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
