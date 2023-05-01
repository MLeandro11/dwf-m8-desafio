import { checkEmail } from "../../lib/api";
import { Link, useNavigate } from "react-router-dom";
import { useUserEmail } from "../../hooks/useUserEmail";
import { Button } from "../../ui/buttons";
import { TextField } from "../../ui/text-field";
import { Text } from "../../ui/texts";
import css from "./index.module.css";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useUserEmail();
  const [isLoading, setIsLoading] = useState(false);
  async function submitHandler(e: any) {
    e.preventDefault();
    const email = e.target.email.value;
    setUserEmail(email);
    setIsLoading(true);
    const response = await checkEmail(email);
    setIsLoading(false);
    if (response.exists) {
      navigate("/login/password");
    } else {
      navigate("/signup");
    }
  }

  return (
    <div className={css.login}>
      <form className={css.formLogin} onSubmit={submitHandler}>
        <TextField typeInput="email" name="email">
          Email
        </TextField>
        <Button type="submit">
          {isLoading ? "Verificando email..." : "Ingresar"}
        </Button>
      </form>
      <div className={css.signup}>
        <Text>Aún no tenes cuenta?</Text>
        <Link to={"/signup"}>
          <Text>Registrate.</Text>
        </Link>
      </div>
    </div>
  );
}

export { Login };
