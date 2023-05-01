import { useState } from "react";
import { useUserData } from "../../hooks/useUserData";
import { Title } from "../../ui/texts";
import { TextField } from "../../ui/text-field";
import { Button } from "../../ui/buttons";
import css from "./index.module.css";
export function EditData() {
  const { dataUser, updateMyData, isLoading } = useUserData();
  const [change, setChange] = useState("");
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFullname = e.target.value;
    if (newFullname !== dataUser?.fullname) {
      setChange(newFullname);
    }
  };
  const handlerClick = () => {
    if (change == "") return;
    updateMyData({ fullname: change });
  };
  return (
    <div className={css.root}>
      <Title>Datos personales</Title>
      <TextField
        typeInput="text"
        name="fullname"
        value={dataUser?.fullname}
        onChange={handlerChange}
      >
        Nombre
      </TextField>
      <Button onClick={handlerClick}>
        {isLoading ? "Guardando..." : "Guardar"}
      </Button>
    </div>
  );
}
