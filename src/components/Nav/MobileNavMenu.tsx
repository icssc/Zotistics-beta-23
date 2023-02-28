import Link from "next/link";

import { CornerUpLeft } from "react-feather";
import analytics, {logAnalytics} from "../../utils/analytics";

const MobileNavMenu = () => {
  return (
    <menu className="flex flex-col gap-2 p-4 w-screen bg-white dark:bg-black dark:border-b drop-shadow-lg text-neutral-500 dark:border-neutral-800 dark:text-neutral-200">
      <Link href="https://old.zotistics.com">
        <a className="grid grid-flow-col gap-2 justify-start items-center"
           onClick={() => {logAnalytics({
               category: analytics.nav.category,
               action: analytics.nav.actions.OLD_ZOTISTICS_LINK
           })}}
        >
          <CornerUpLeft size={24} strokeWidth={1.5} />
          old.zotistics.com
        </a>
      </Link>
      <Link href="/posts/faq">
        <a onClick={() => {logAnalytics({
              category: analytics.nav.category,
              action: analytics.nav.actions.FAQ
           })}}
        >FAQ</a>
      </Link>
      <a href="https://forms.gle/oyN3GBpiyyNcS6uY6" target="_blank"
         onClick={() => {logAnalytics({
             category: analytics.nav.category,
             action: analytics.nav.actions.FEEDBACK
         })}}
      >
        Feedback
      </a>
    </menu>
  );
};

export default MobileNavMenu;
