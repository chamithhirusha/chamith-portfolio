import Image from "next/image";

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
              className="rounded-full grayscale brightness-90 contrast-110"
            />
            <div>
              <p className="font-bold text-lg">Chamith Hirusha</p>
              <p className="font-bold text-sm uppercase theme-secondary">Full stack engineer</p>
            </div>
          </div>

          <div className="flex flex-row sm:flex hidden gap-3 justify-center items-center px-5 py-2 h-fit rounded-full border-2 theme-border-secondary-light">
            <div className="theme-bg-highlight rounded-full w-2 h-2"></div>
            <span className="uppercase text-sm theme-secondary">Open to work</span>
          </div>
        </div>
        nav
      </div>
    </header>
  );
};

export default Header;
