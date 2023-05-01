import { Link } from "react-router-dom";
import { Button, Secondary } from "../../ui/buttons";
import { Title, SubTitle } from "../../ui/texts";
import css from "./home.module.css";
import IMG_HOME from "../../assets/home.svg";

function HomePage() {
  return (
    <div className={css.root}>
      <div>
        <img src={IMG_HOME} alt="portada" />
      </div>
      <div className={css.title}>
        <Title>Pet Finder App</Title>
        <SubTitle>
          Encontrá y reportá mascotas perdidas cerca de tu ubicación
        </SubTitle>
      </div>
      <div className={css.buttons}>
        <Link to="pets-lost">
          <Button>Dar mi ubicación actual</Button>
        </Link>
        <Secondary>¿Cómo funciona Pet Finder?</Secondary>
      </div>
    </div>
  );
}

export { HomePage };
