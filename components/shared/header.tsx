import Image from "next/image";
import Link from "next/link";

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

        <div>
            auth
        </div>
      </div>
    </header>
  );
};

export default Header;
