import { Password } from "../../components/login/password";
import { Title, Text } from "../../ui/texts";
import css from "./index.module.css";
function PasswordPage() {
  return (
    <div className={css.password}>
      <div className={css.bodyPassword}>
        <Title>Iniciar Sesión</Title>
        <Text>Ingresá tu contraseña para iniciar sesión</Text>
      </div>
      <Password />
    </div>
  );
}

export { PasswordPage };
