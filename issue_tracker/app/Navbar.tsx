import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex">
      <Link href="/">Logo</Link>

      <ul className="flex list-none">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
