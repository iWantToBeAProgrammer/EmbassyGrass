"use client";

import { Inter } from "next/font/google";
import { useEffect } from "react";
import { adjustLayoutForScale } from "./utils/AdjustLayout"; // Adjust the import path as needed

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }) {
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // if (isMobile) {
  //   useEffect(() => {
  //     adjustLayoutForScale();
  //     window.addEventListener("resize", adjustLayoutForScale);
  //     return () => {
  //       window.removeEventListener("resize", adjustLayoutForScale);
  //     };
  //   }, []);
  // }

  return <body className={inter.className}>{children}</body>;
}
