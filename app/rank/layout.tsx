import TopNav from "../../layouts/frontpage/top-nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav />
      {children}
    </>
  );
}
