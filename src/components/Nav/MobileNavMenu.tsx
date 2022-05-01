import Link from "next/link";

import { CornerUpLeft } from "react-feather";

const MobileNavMenu = () => {
  return (
    <menu className="flex flex-col gap-2 p-4 w-screen bg-white dark:bg-black dark:border-b drop-shadow-lg text-neutral-500 dark:border-neutral-800 dark:text-neutral-200">
      <Link href="https://old.zotistics.com">
        <a className="grid grid-flow-col gap-2 justify-start items-center">
          <CornerUpLeft size={24} strokeWidth={1.5} />
          old.zotistics.com
        </a>
      </Link>
      <Link href="/posts/faq">
        <a>FAQ</a>
      </Link>
      <a href="https://forms.gle/oyN3GBpiyyNcS6uY6" target="_blank">
        Feedback
      </a>
    </menu>
  );
};

export default MobileNavMenu;
