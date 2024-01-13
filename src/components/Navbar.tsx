import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import UserAccountNav from "./UserAccountNav";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import CartIcon from "./CartIcon";

type Props = {};

export default async function Navbar({}: Props) {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
      <header className="relative bg-white">
        <div className="border-b border-gray-200">
          <div className="flex items-center h-16 mx-2 sm:mx-8">
            <MobileNav user={user} />

            <div className="flex sm:ml-0">
              <Link href="/">Logo</Link>
            </div>

            <DesktopNav user={user} />

            <div className="ml-4 flow-root lg:ml-6">
              <CartIcon />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
