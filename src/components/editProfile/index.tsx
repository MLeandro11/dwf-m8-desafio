import { Link } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";
import { Caption, MyLink, Title } from "../../ui/texts";
import { Button } from "../../ui/buttons";
import css from "./index.module.css";
import { useAuth } from "../../hooks/useAuth";
export function EditProfile() {
  const { dataUser } = useUserData();
  const { logout } = useAuth();
  const handleClick = () => {
    logout();
  };
  return (
    <div className={css.root}>
      <Title>Mis datos</Title>
      <div className={css.buttons}>
        <Link to="/profile/edit-data">
          <Button>Modificar datos personales</Button>
        </Link>
        <Link to="/profile/edit-password">
          <Button>Modificar contraseña</Button>
        </Link>
      </div>
      <div className={css.session}>
        <Caption>{dataUser?.email}</Caption>
        <MyLink onClick={handleClick}>Cerrar sesion</MyLink>
      </div>
    </div>
  );
}
