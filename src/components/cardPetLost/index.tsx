import { Danger } from "../../ui/buttons";
import css from "./index.module.css";
import { Title, Text } from "../../ui/texts";
type PropsCardPet = {
  id: string;
  name: string;
  location: string;
  picture: string;
  onClick: () => void;
};
export function CardPet({ onClick, name, location, picture }: PropsCardPet) {
  return (
    <>
      <div className={css.card}>
        <div className={css.cardImage}>
          <img src={picture} alt="photo-pet" />
        </div>
        <div className={css.cardBody}>
          <div className={css.cardInfo}>
            <Title>{name}</Title>
            <Text bold>{location}</Text>
          </div>
          <Danger onClick={onClick}>Reportar</Danger>
        </div>
      </div>
    </>
  );
}
