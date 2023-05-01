import { Link } from "react-router-dom";
import logo from "../../assets/logo-page.svg";
import menu from "../../assets/ico-menu.svg";
import css from "./index.module.css";
import { Menu } from "./menu";
import { useState } from "react";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={css.header}>
      <Link to="/">
        <img src={logo} width={40} height={40} alt="icon" />
      </Link>
      <button className={css.buttonMenu} onClick={() => setIsOpen(!isOpen)}>
        <img src={menu} width={40} height={40} alt="icon" />
      </button>
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
