import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { TextField } from "../../ui/text-field";
import { Text } from "../../ui/texts";
import { Button } from "../../ui/buttons";
import css from "./index.module.css";
function Signup() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const dataUser = Object.fromEntries(form.entries());
    const newUser = await register({});
    if (newUser.message) {
      console.error(newUser.message);
    } else {
      navigate("/login");
    }
  };
  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <TextField typeInput="text" name="fullname">
        nombre
      </TextField>
      <TextField typeInput="email" name="email">
        Email
      </TextField>
      <TextField typeInput="password" name="password">
        contraseña
      </TextField>
      <TextField typeInput="password" name="repeat-password">
        confirmar contraseña
      </TextField>
      <div className={css.login}>
        <Text>Ya tenes una cuenta?</Text>
        <Link to={"/login"}>
          <Text>Iniciar sesión.</Text>
        </Link>
      </div>
      <Button type="submit">Siguiente</Button>
    </form>
  );
}
export { Signup };
