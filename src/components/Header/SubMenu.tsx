import React from "react";
import Link from "next/link";

const SubMenu = ({ subItem }: any) => {
  return (
    <>
      <li className="px-1 py-1">
        <Link
          href={subItem.url}
          className="btn is-md is-raw is-block whitespace-nowrap text-3 text-grays-500 hover:bg-grays-100 w-full px-3 py-2 font-medium justify-start"
        >
          {subItem.title}
        </Link>
      </li>
      {subItem.divider ? <li className="a-divider h-px mx-3"></li> : null}
    </>
  );
};

export default SubMenu;
