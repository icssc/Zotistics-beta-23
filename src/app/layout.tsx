import "./tailwind.css";
import ColorSchemeContextProvider from "src/contexts/colorSchemeToggle/ColorSchemeContextProvider";
import Nav from "./Nav";

export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 dark:bg-black">
        <ColorSchemeContextProvider initialValue="dark">
          <Nav />
          {children}
        </ColorSchemeContextProvider>
      </body>
    </html>
  );
}
