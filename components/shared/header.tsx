import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/images/logo.svg"
            width={38}
            height={38}
            alt="blueFlame logo"
            className="aspect-square"
          />
        </Link>

        <div className="flex w-32 justify-end gap-3 items-center">
          <Link href='/sign-in'>
            <Button size="lg">Login</Button>
          </Link>

          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
};

export default Header;
