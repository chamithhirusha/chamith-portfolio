import Image from "next/image";
import Badge from "../badges/Badge";
import { MenuIcon } from "../icons/Icons";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between theme-default-padding-x py-[50px] fixed top-0 left-0 right-0 z-50">
        <div className="flex flex-row items-center gap-20">
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/images/avatar-200x200.jpg"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full w-12 h-12 sm:w-16 sm:h-16 grayscale brightness-90 contrast-110"
            />
            <div>
              <p className="font-bold text-md sm:text-lg">Chamith Hirusha</p>
              <p className="font-bold text-xs sm:text-sm uppercase theme-secondary">
                Full stack engineer
              </p>
            </div>
          </div>
          <Badge label="Open to work" showDot textColor="theme-secondary" />
        </div>
        <div className="flex items-center justify-center h-10">
          <MenuIcon
            className="cursor-pointer size-12 md:size-18 lg:size-24"
            strokeWidth={0.5}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
