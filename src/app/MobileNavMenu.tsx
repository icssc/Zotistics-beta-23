import Link from "next/link";

import { CornerUpLeft } from "react-feather";

const MobileNavMenu = () => {
  return (
    <menu className="flex flex-col w-screen gap-2 p-4 bg-white dark:bg-black dark:border-b drop-shadow-lg text-neutral-500 dark:border-neutral-800 dark:text-neutral-200">
      <Link
        href="https://old.zotistics.com"
        className="grid items-center justify-start grid-flow-col gap-2"
      >
        <CornerUpLeft size={24} strokeWidth={1.5} />
        old.zotistics.com
      </Link>
      <Link href="/posts/faq">FAQ</Link>
      <a href="https://forms.gle/oyN3GBpiyyNcS6uY6" target="_blank">
        Feedback
      </a>
    </menu>
  );
};

export default MobileNavMenu;
