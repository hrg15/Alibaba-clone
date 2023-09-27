import { useState } from "react";
import Arrow from "../Utils/Arrow";
import SubMenu from "./SubMenu";

type menuItemProp = {
  items: any;
};
const MenuItem = ({ items }: menuItemProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdown = () => {
    setIsOpen((prv) => !prv);
  };
  return (
    <>
      <li className="relative flex items-center">
        <div style={{ position: "relative" }}>
          <button
            onClick={handleDropdown}
            className="btn is-md is-raw hover:bg-grays-100 flex items-center px-4 py-1 text-5"
            type="button"
          >
            <span>{items.title}</span>
            {items.subMenu ? <Arrow /> : null}
          </button>
          {items.subMenu && isOpen ? (
            <div
              //className="v-dropdown pretty-scroll is-open overflow-visible"
              className="v-dropdown pretty-scroll is-open overflow-visible"
              style={{ width: "auto" }}
            >
              <div className="a-card header-menu__children">
                <ul className="flex flex-col p-0 m-0 list-none">
                  {items.subMenu.map((subItems: any, index: any) => (
                    <SubMenu subItem={subItems} key={index} />
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </li>
      {items.divider ? <li className="a-divider"></li> : null}
    </>
  );
};

export default MenuItem;
