"use client";

import { Inter } from "next/font/google";
import { useEffect } from "react";
import { adjustLayoutForScale } from "./utils/AdjustLayout";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      adjustLayoutForScale();
      window.addEventListener("resize", adjustLayoutForScale);

      return () => {
        window.removeEventListener("resize", adjustLayoutForScale);
      };
    }
  }, []);

  return <body className={inter.className}>{children}</body>;
}
