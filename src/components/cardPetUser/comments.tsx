import { Text, SubTitle, MyLink } from "../../ui/texts";
import css from "./index.module.css";
type CommentsProps = {
  comments: [];
};
export function CommentsCardPet({ comments }: CommentsProps) {
  return (
    <div className={css.comments}>
      <SubTitle bold>Comentarios</SubTitle>
      {comments.map((comment: any) => (
        <div className={css.comment} key={comment.id}>
          <Text bold>{comment.reporter}</Text>
          <Text>{comment.message}</Text>
          <MyLink bold>{comment.phone_number}</MyLink>
        </div>
      ))}
    </div>
  );
}
