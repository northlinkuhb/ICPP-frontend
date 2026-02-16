import LenisScrollProvider from "@/providers/LenisScrollProvider";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <LenisScrollProvider>{children}</LenisScrollProvider>;
}
