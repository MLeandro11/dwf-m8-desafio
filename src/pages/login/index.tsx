import { Login } from "../../components/login";
import { Title, Text } from "../../ui/texts";
import css from "./index.module.css";
import IMAGE_LOGIN from "../../assets/login-image.svg";
function LoginPage() {
  return (
    <div className={css.login}>
      <div className={css.body}>
        <div className={css.image}>
          <img src={IMAGE_LOGIN} alt="login-portada" />
        </div>
        <div className={css.title}>
          <Title>Ingresar</Title>
          <Text>Ingresá tu email para continuar.</Text>
        </div>
      </div>
      <Login />
    </div>
  );
}

export { LoginPage };
