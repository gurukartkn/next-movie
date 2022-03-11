import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { MdOutlineMovieFilter } from "react-icons/md";

const Header = () => {
  return (
    <div className="mx-auto bg-black bg-opacity-40 py-3 flex flex-row justify-between items-center fixed top-0 z-50 w-full">
      <Link passHref={true} href="/">
        <span className="flex flex-row items-center gap-1 cursor-pointer font-bold text-2xl pl-6 md:pl-10 l:pl-14 xl:pl-24 text-red-600">
          <MdOutlineMovieFilter className="text-6xl" />
          STREAMIT
        </span>
      </Link>
      <Link passHref={true} href="/search">
        <div className="cursor-pointer text-white font-bold text-2xl pr-6 md:pr-10 l:pr-14 xl:pr-20">
          <FaSearch />
        </div>
      </Link>
    </div>
  );
};

export default Header;
