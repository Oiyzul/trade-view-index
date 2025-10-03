import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropdownMenu from "./UserDropdownMenu";

const Header = async ({ user }: { user: any }) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/"
            alt=""
            width={140}
            height={32}
            className="w-auto h-8 cursor-pointer"
          />
        </Link>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <UserDropdownMenu user={user} />
      </div>
    </header>
  );
};

export default Header;
