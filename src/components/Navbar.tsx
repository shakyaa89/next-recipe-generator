import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-center items-center py-5 mx-5">
      <nav className="max-w-md shadow-[8px_8px_15px_#171717,-8px_-8px_15px_#2a2a2a] px-20 py-3 w-full rounded-full">
        <ul className="flex gap-5 justify-center md:justify-around items-center text-xl">
          <li>
            <Link
              href="/"
              className="border-b border-transparent hover:border-[#ddd] transition-all duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/recipes"
              className="border-b border-transparent hover:border-[#ddd] transition-all duration-300"
            >
              Recipes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
