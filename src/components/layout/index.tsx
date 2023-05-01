import { Outlet } from "react-router-dom";
import { Header } from "../header";
import css from "./index.module.css";
function Layout() {
  return (
    <div>
      <Header />
      <div className={css.container}>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
