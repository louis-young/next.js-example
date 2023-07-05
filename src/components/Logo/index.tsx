import { generateDashboardPagePath } from "@/pages";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="block w-fit" href={generateDashboardPagePath()}>
      <Image
        alt="Application"
        className="h-16 hover:opacity-80"
        height={64}
        src="/images/logo/logo.svg"
        width={64}
      />
    </Link>
  );
};
