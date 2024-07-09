"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }) {

  return <body className={inter.className}>{children}</body>;
}
