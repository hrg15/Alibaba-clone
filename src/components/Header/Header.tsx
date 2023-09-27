import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import LeftItems from "./LeftItems";
import MainLogo from "./MainLogo";
import menuList from "../../constants/MENU_ITEMS";
import MenuItem from "./MenuItem";
const Header = () => {
  const [position, setPosition] = useState<number>();
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
      let moving = window.pageYOffset;

      setVisible((position ?? 0) > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);
  const cls = visible ? "header-visible" : "header-hidden";
  return (
    <header className={`header is-desktop is-on-home ${styles.header} ${cls}`}>
      <div className="a-container px-0 md:px-5 max-w-[91rem]">
        <div className="header__main text-5">
          <nav className="flex h-full py-1 px-4 items-center md:py-0 md:px-0 ">
            <MainLogo />
            <ul className="header-menu h-full">
              {menuList.map((items, index) => (
                <MenuItem key={index} items={items} />
              ))}
            </ul>
          </nav>
          <LeftItems />
        </div>
      </div>
    </header>
  );
};

export default Header;
