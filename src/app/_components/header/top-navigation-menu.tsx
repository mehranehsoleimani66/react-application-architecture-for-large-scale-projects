"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TopMenuType } from "./TopMenuType";

const topMenu: TopMenuType[] = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره‌های ری‌اکت و نکست", href: "/courses" },
  { title: "مطالب و مقالات", href: "/blog" },
];
export const TopNavigation: React.FC = () => {
  const pathName = usePathname();

  return (
    <ul className="flex gap-x-8 mr-12">
      {topMenu.map((item) => {
        const isActive = pathName === item.href;
        return (
          <li
            className={`hover:text-primary transition-colors pb-2 ${
              isActive
                ? "border-b-2 dark:text-primary dark:border-primary/30"
                : ""
            }`}
            key={item.href}
          >
            <Link href={item.href}> {item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
