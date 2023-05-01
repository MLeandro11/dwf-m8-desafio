import { Link, useNavigate } from "react-router-dom";
import { useUserEmail } from "../../hooks/useUserEmail";
import { useUserToken } from "../../hooks/useUserToken";
import { useAuth } from "../../hooks/useAuth";
import { TextField } from "../../ui/text-field";
import { SubTitle, Text } from "../../ui/texts";
import { Button } from "../../ui/buttons";
import css from "./index.module.css";
import { useState } from "react";
function Password() {
  const navigate = useNavigate();
  const [userEmail] = useUserEmail();
  const [, setUserToken] = useUserToken();
  const { login, isLoading } = useAuth();
  const [message, setMessage] = useState("");

  async function submitHandler(e: any) {
    e.preventDefault();
    const password = e.target.password.value;
    const token = await login(userEmail, password);
    if (!token) {
      return setMessage("Datos incorrectos");
    }
    setUserToken(token);
    navigate("/profile");
  }

  return (
    <form className={css.formPassword} onSubmit={submitHandler}>
      <div className={css.password}>
        <SubTitle>{userEmail}</SubTitle>
        <TextField typeInput="password" name="password">
          contraseña
        </TextField>
        <div className={css.signup}>
          <Link to={""}>
            <Text>Olvidé mi contraseña</Text>
          </Link>
        </div>
      </div>

      <div className={css.button}>
        {message && (
          <div className={css.message}>
            <Text bold>{message}</Text>
          </div>
        )}
        <Button type="submit">{isLoading ? "Ingresando..." : "Acceder"}</Button>
      </div>
    </form>
  );
}

export { Password };
