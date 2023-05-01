import { Pet } from "../../components/petsUser/pet";
import { Title } from "../../ui/texts";
import css from "./index.module.css";
export function PetPage() {
  return (
    <div className={css.root}>
      <Title>Editar reporte de mascota</Title>
      <Pet />
    </div>
  );
}
