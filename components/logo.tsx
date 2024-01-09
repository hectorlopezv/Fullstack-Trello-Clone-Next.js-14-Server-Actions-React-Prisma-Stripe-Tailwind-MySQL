import Image from "next/image";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

type Props = {};
const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});
export default function Logo({}: Props) {
  return (
    <Link href="/">
      <div
        className="hover:opacity-75 transition items-center gap-x-2 hidden
      md:flex"
      >
        <Image src="/logo.svg" width={50} height={50} alt="logo image" />
        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
}
