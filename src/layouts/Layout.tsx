import { ReactNode } from "react";
import Nav from "src/components/Nav/Nav";
import Footer from "src/components/Footer/Footer";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <div className="min-h-[calc(100vh-4rem)]">{children}</div>
      <Footer />
    </>
  );
}
