import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PlatformLayout({ children }: Props) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
