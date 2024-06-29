import { ReactNode } from "react";

export default async function StudentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <aside className="bg-gray-500 w-80 flex justify-center items-center max-h-screen self-stretch uppercase">
        sidebar
      </aside>
      <main className="flex justify-center items-center  flex-1">
        {children}
      </main>
    </>
  );
}
