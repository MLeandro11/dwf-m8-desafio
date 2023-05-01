import { PetsUserResults } from "../../components/petsUser";
import { Title } from "../../ui/texts";
import css from "./index.module.css";
export function MyPets() {
  return (
    <div className={css.root}>
      <Title>Mascotas reportadas</Title>
      <PetsUserResults />
    </div>
  );
}
