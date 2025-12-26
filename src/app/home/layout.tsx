import { Suspense } from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "green" }}>
      <Suspense fallback={<div>Loading from layout...</div>}>
        {children}
      </Suspense>
    </div>
  );
}
