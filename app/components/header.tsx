import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed bg-black w-full h-16 ">
      <nav>
        <h1 className="inline pt-11 absolute text-white -top-8 left-12 font-extrabold text-3xl">
          Portfolio
        </h1>
        <ul className="pt-5 inline ">
          <Link href="/">
            <li className="inline absolute right-96 top-5">Home</li>
          </Link>
          <Link href="#about">
            <li className="inline absolute right-72  top-5">About</li>
          </Link>
          <Link href="#portfolio">
            <li className="inline absolute right-44  top-5">Portfolio</li>
          </Link>
          {/* <Link href=""><li className='inline absolute right-40 mr-6 top-5'>Contact</li></Link> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
