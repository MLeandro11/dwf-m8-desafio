import { Link } from "react-router-dom";
import { Button, Danger, Secondary } from "../../ui/buttons";
import { Title, Text } from "../../ui/texts";
import css from "./index.module.css";
import { CommentsCardPet } from "./comments";
type PetCardProps = {
  id: string;
  name: string;
  location: string;
  image: string;
  lost: boolean;
  comments?: [];
  onClick?: () => void;
};
export function CardPetdUser({
  id,
  name,
  image,
  location,
  comments,
  lost,
  onClick,
}: PetCardProps) {
  return (
    <div className={css.card}>
      <div className={css.body}>
        <div className={css.image}>
          <img src={image} alt="Pet's Picture" />
        </div>
        <div className={css.info}>
          <div className={css.title}>
            <Title>{name}</Title>
            <Text>{location}</Text>
          </div>

          {lost ? (
            <Link to={`./${id}`}>
              <Secondary>Editar</Secondary>
            </Link>
          ) : (
            <Button onClick={onClick}>Publicar</Button>
          )}
        </div>
      </div>
      <CommentsCardPet comments={comments} />
    </div>
  );
}
