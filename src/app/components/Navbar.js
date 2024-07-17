"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [background, setBackground] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const topX = 10;

  const linkClicked = () => {
    if (typeof document !== "undefined") {
      const sideBar = document.getElementById("my-drawer");

      sideBar.checked = false;
    }
  };

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
      } fixed top-0 z-10 w-full lg:ps-36 lg:pe-[30%] md:ps-20 md:pe-20 pe-8`}
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
            <Link
              className="text-base-100 text-lg font-['karla'] font-light capitalize tracking-widest"
              href="#home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-base-100 text-lg font-['karla'] font-light capitalize tracking-widest"
              href="#about"
              scroll={true}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="text-base-100 text-lg font-['karla'] font-light capitalize tracking-widest"
              href="#product"
              scroll={true}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              className="text-base-100 text-lg font-['karla'] font-light capitalize tracking-widest"
              href="#contact"
              scroll={true}
            >
              Contact us
            </Link>
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
            <li className="mb-6">
              <Image src="/assets/Images/Logo2.png" width={270} height={200} />
            </li>
            <li>
              <Link
                className="text-neutral font-normal text-lg font-['karla'] capitalize tracking-widest"
                href="#home"
                onClick={linkClicked()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral font-normal text-lg font-['karla'] capitalize tracking-widest"
                href="#about"
                scroll={true}
                onClick={() => linkClicked()}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral font-normal text-lg font-['karla'] capitalize tracking-widest"
                href="#product"
                scroll={true}
                onClick={() => linkClicked()}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral font-normal text-lg font-['karla'] capitalize tracking-widest"
                href="#contact"
                scroll={true}
                onClick={() => linkClicked()}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
