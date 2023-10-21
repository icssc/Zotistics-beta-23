import Image from "next/image";

import { Sun } from "react-feather";

import poweredByVercel from "./poweredByVercel.svg";

const Footer = () => {
  return (
    <footer className="footer z-50 flex flex-col sm:flex-row items-center justify-between w-full h-16 text-sm dark:text-neutral-200 content">
      <span className="mb-2 sm:mb-0">
        Maintained by{" "}
        <a href="https://icssc.club/?utm_source=icssc">ICSSC</a> in{" "}
        <Sun className="inline" fill="currentColor" size={16} /> Irvine,
        California
      </span>
      <a href="https://vercel.com/?utm_source=icssc&utm_campaign=oss">
        <Image src={poweredByVercel} />
      </a>
    </footer>
  );
};

export default Footer;
