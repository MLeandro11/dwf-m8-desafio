import { PetsLostResults } from "../../components/petsLost/petsLostResults";
import { SubTitle } from "../../ui/texts";
import css from "./home.module.css";
function PetsLost() {
  return (
    <div className={css.petsLost}>
      <SubTitle bold>Mascotas perdidas cerca</SubTitle>
      <PetsLostResults />
    </div>
  );
}

export { PetsLost };
