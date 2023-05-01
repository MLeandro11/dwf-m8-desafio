import { Link } from "react-router-dom";
import css from "./index.module.css";
import close from "../../assets/ico-close.svg";
import { useUserData } from "../../hooks/useUserData";
import { Caption, MyLink } from "../../ui/texts";
import { useAuth } from "../../hooks/useAuth";
import { Secondary } from "../../ui/buttons";

type MenuProps = {
  isOpen: boolean;
  onClose?: () => void;
};
export function Menu({ isOpen, onClose }: MenuProps) {
  const { dataUser } = useUserData();
  const { logout } = useAuth();
  const handleClick = () => {
    logout();
    onClose();
  };
  return (
    <nav className={isOpen ? css.menu : css.menuClosed}>
      <button className={css.buttonClose} onClick={onClose}>
        <img src={close} alt="ico-close" />
      </button>
      <ul>
        <li onClick={onClose}>
          <Link to="/profile">Mis Datos</Link>
        </li>
        <li onClick={onClose}>
          <Link to="/my-pets">Mis mascotas reportadas</Link>
        </li>
        <li onClick={onClose}>
          <Link to="/report">Reportar mascota</Link>
        </li>
      </ul>
      {!dataUser ? (
        <Link to="/login">
          <Secondary onClick={onClose}>Iniciar sesion</Secondary>
        </Link>
      ) : (
        <div className={css.session}>
          <Caption>{dataUser?.email}</Caption>
          <MyLink onClick={handleClick}>Cerrar sesion</MyLink>
        </div>
      )}
    </nav>
  );
}
