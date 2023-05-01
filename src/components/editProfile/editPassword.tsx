import { useState } from "react";
import { useUserData } from "../../hooks/useUserData";
import { TextField } from "../../ui/text-field";
import { Title } from "../../ui/texts";
import css from "./index.module.css";
import { Button } from "../../ui/buttons";

export function EditPassword() {
  const { dataUser, updateMyData, isLoading } = useUserData();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };
  const handleClick = () => {
    if (password !== confirmPassword || password == "") return;
    updateMyData({ password });
  };
  return (
    <div className={css.root}>
      <Title>Contraseña</Title>
      <div className={css.inputs}>
        <TextField
          onChange={handlePasswordChange}
          typeInput="password"
          name="password"
          value={dataUser?.password}
        >
          contraseña
        </TextField>
        <TextField
          onChange={handleConfirmPasswordChange}
          typeInput="password"
          name="repeat-password"
          value={dataUser?.password}
        >
          confirmar contraseña
        </TextField>
      </div>
      <Button onClick={handleClick}>
        {isLoading ? "Guardando..." : "Guardar"}
      </Button>
    </div>
  );
}
