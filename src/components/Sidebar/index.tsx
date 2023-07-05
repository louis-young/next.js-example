import type { ReactNode } from "react";

import { BooksIcon, DashboardIcon } from "@/icons";
import { generateDashboardPagePath } from "@/pages";
import { generateBooksPagePath } from "@/pages/books";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import { Logo } from "../Logo";
import { Spacer } from "../Spacer";

const navigationLinks = [
  {
    icon: <DashboardIcon />,
    label: "Dashboard",
    link: generateDashboardPagePath(),
  },
  {
    icon: <BooksIcon />,
    label: "Books",
    link: generateBooksPagePath(),
  },
];

type NavigationLink = {
  icon: ReactNode;
  label: string;
  link: string;
};

const NavigationLink = ({ icon, label, link }: NavigationLink) => {
  const router = useRouter();

  const isActiveNavigationLink = router.pathname === link;

  return (
    <Link
      className={classNames(
        "flex items-center gap-4 rounded-md p-4 text-zinc-600 hover:bg-light",
        {
          "bg-light font-medium text-zinc-800 hover:bg-light":
            isActiveNavigationLink,
          "bg-lighter": !isActiveNavigationLink,
        }
      )}
      href={link}
    >
      {icon} {label}
    </Link>
  );
};

interface NavigationProps {
  navigationLinks: NavigationLink[];
}

const Navigation = ({ navigationLinks }: NavigationProps) => {
  return (
    <nav>
      <ul className="space-y-4">
        {navigationLinks.map(({ icon, label, link }) => (
          <NavigationLink icon={icon} key={link} label={label} link={link} />
        ))}
      </ul>
    </nav>
  );
};

export const Sidebar = () => {
  return (
    <aside className="h-full bg-lightest p-6">
      <div className="py-6">
        <Logo />
      </div>

      <Spacer />

      <Navigation navigationLinks={navigationLinks} />
    </aside>
  );
};
