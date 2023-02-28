import { Fragment, useState } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";

import { Menu, CornerUpLeft } from "react-feather";
import Logo from "./Logo";

import MobileNavMenu from "./MobileNavMenu";
import ColorSchemeToggle from "src/components/ColorSchemeToggle/ColorSchemeToggle";
import analytics, { logAnalytics } from "../../utils/analytics";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return <>
    <nav className="fixed z-40 w-full h-16 text-sm font-light dark:border-b bg-white drop-shadow text-neutral-500 dark:border-neutral-800 dark:bg-black dark:text-neutral-200">
      {/* Minimum No Breakpoint */}
      <div className="grid grid-cols-3 md:hidden content">
        <div className="grid justify-self-start items-center">
          <Popover className="relative">
            {() => (
              <>
                <Popover.Button className="text-[24px]">
                  <Menu />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="fixed left-0 top-16">
                    <MobileNavMenu />
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>

        <Link href="/" aria-label="Home" className="w-8 h-8 justify-self-center">

          <Logo />

        </Link>

        <div className="grid justify-self-end items-center">
          <ColorSchemeToggle />
        </div>
      </div>

      {/* Minimum Medium Breakpoint */}
      <div className="hidden grid-cols-3 md:grid content">
        <Link
          href="https://old.zotistics.com"
          className="grid grid-flow-col gap-2 justify-self-start items-center"
          onClick={() => {logAnalytics({
            category: analytics.nav.category,
            action: analytics.nav.actions.OLD_ZOTISTICS_LINK
          })}}>

          <CornerUpLeft size={24} strokeWidth={1.5} />old.zotistics.com
        </Link>

        <Link
          href="/"
          aria-label="Home"
          className="w-8 h-8 justify-self-center"
          onClick={() => {logAnalytics({
            category: analytics.nav.category,
            action: analytics.nav.actions.HOME_LOGO
          })}}>

          <Logo />

        </Link>

        <div className="grid grid-flow-col gap-4 justify-self-end items-center">
          <Link
            href="/posts/faq"
            onClick={() => {logAnalytics({
                category: analytics.nav.category,
                action: analytics.nav.actions.FAQ
              })}}>
            
              FAQ
            
          </Link>
          <a href="https://forms.gle/FEH4CC3LLw8ETmn78" target="_blank"
             onClick={() => {logAnalytics({
               category: analytics.nav.category,
               action: analytics.nav.actions.FEEDBACK
             })}}
          >
            Feedback
          </a>
          <div className="ml-2">
            <ColorSchemeToggle />
          </div>
        </div>
      </div>
    </nav>
    <div className="h-16" />
  </>;
};

export default Nav;
