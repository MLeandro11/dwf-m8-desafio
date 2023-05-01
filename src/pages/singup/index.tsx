import { Signup } from "../../components/signup";
import { Title, Text } from "../../ui/texts";
import css from "./index.module.css";
function SignupPage() {
  return (
    <div className={css.root}>
      <div className={css.title}>
        <Title>Registrarse</Title>
        <Text>Ingresá los siguientes datos para realizar el registro</Text>
      </div>
      <Signup />
    </div>
  );
}

export { SignupPage };
