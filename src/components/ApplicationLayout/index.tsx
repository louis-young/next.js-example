import type { ReactNode } from "react";

interface ApplicationLayoutProps {
  content: ReactNode;
  sidebar: ReactNode;
}

export const ApplicationLayout = ({
  content,
  sidebar,
}: ApplicationLayoutProps) => {
  return (
    <div className="grid h-screen grid-cols-[15rem_1fr] md:grid-cols-[18rem_1fr]">
      {sidebar}

      <main className="h-screen bg-lighter">{content}</main>
    </div>
  );
};
