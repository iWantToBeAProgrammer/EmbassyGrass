"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [background, setBackground] = useState(false);
  const topX = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= topX) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", setBackground);
    };
  }, []);

  return (
    <div
      className={`navbar ${
        background
          ? "bg-secondary/80 shadow-xl border-b border-gray-200"
          : "bg-transparent"
      } backdrop-blur-2xl backdrop-filter fixed top-0 z-10 w-full lg:ps-[150px] lg:pe-[30%] md:ps-20 md:pe-20 pe-8`}
    >
      <div className="flex-1">
        <a className="btn btn-ghost w-48 md:w-64 ">
          <Image
            src={"/assets/Images/Logo.png"}
            alt=""
            className="object-contain object-center text-accent"
            width={200}
            height={400}
          />
        </a>
      </div>
      <div className="flex-none lg:flex hidden">
        <ul className="menu menu-horizontal px-4">
          <li>
            <a className="text-base-100 text-lg font-['karla'] font-light capitalize tracking-widest">
              Home
            </a>
          </li>
          <li>
            <Link
              className="text-base-100 text-lg font-['karla'] font-light capitalize tracking-widest"
              href="#about-us"
              scroll={true}
            >
              About us
            </Link>
          </li>
          <li>
            <a className="text-base-100 text-lg font-['karla'] font-light capitalize tracking-widest">
              Products
            </a>
          </li>
          <li>
            <a className="text-base-100 text-lg font-['karla'] font-light capitalize tracking-widest">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="drawer drawer-end justify-items-end lg:hidden">
        <input
          className="btn btn-circle drawer-toggle hover:bg-slate-700 hover:bg-opacity-35 bg-transparent border-none flex flex-col gap-2"
          id="my-drawer"
          type="checkbox"
        ></input>

        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="drawer-button btn bg-transparent border-none hover:bg-opacity-50 flex justify-center"
          >
            <div className="flex flex-col gap-2 items-start">
              <span className="w-4 bg-white h-[2px]"></span>
              <span className="w-6 bg-white h-[2px]"></span>
              <span className="w-4 bg-white h-[2px]"></span>
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
