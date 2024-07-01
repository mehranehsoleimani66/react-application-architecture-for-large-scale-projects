import Image from "next/image";
import { TopNavigation } from "./top-navigation-menu";

export const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex justify-between items-center">
        <Image
          src="/images/logo-light.svg"
          alt="کلاسبن"
          width={100}
          height={64}
        />
        <TopNavigation />
        <span className="mr-auto">Authentication</span>
      </div>
    </header>
  );
};
