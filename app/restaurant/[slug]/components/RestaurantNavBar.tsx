import React from "react";
import Link from "next/link";

function RestaurantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/ivarus" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/ivarus/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}

export default RestaurantNavBar;
