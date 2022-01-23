import Link from "next/link";

import Logo from "~icons/custom/logo.jsx";
import ReturnUpBack from "~icons/ion/return-up-back-outline.jsx";

import ColorSchemeToggle from "src/components/ColorSchemeToggle/ColorSchemeToggle";

const Nav = () => {
  return (
    <>
      <nav className="fixed w-full h-16 text-sm font-light dark:border-b bg-white/75 drop-shadow-lg text-neutral-500 dark:border-neutral-800 dark:bg-black/75 dark:text-neutral-200">
        <div className="grid grid-cols-3 justify-between items-center h-full content">
          <Link href="https://old.zotistics.com">
            <a className="grid grid-flow-col gap-2 justify-self-start items-center">
              <div className="text-[24px]">
                <ReturnUpBack />
              </div>
              old.zotistics.com
            </a>
          </Link>

          <Link href="/">
            <a aria-label="Home" className="text-[32px] justify-self-center">
              <Logo />
            </a>
          </Link>

          <div className="grid grid-flow-col gap-4 justify-self-end items-center">
            <Link href="/posts/faq">
              <a>FAQ</a>
            </Link>
            <Link href="/feedback">
              <a>Feedback</a>
            </Link>
            <div className="ml-2">
              <ColorSchemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16" />
    </>
  );
};

export default Nav;
