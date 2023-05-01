import css from "./index.module.css";
type PropsTexts = {
  children: React.ReactNode;
  onClick?: () => void;
  bold?: boolean;
};
export function Title({ children }: PropsTexts) {
  return <h1 className={css.title}>{children}</h1>;
}
export function SubTitle({ children, bold }: PropsTexts) {
  return <h2 className={bold ? css.subTitleBold : css.subTitle}>{children}</h2>;
}
export function Text({ children, bold }: PropsTexts) {
  return <p className={bold ? css.textBold : css.text}>{children}</p>;
}
export function Caption({ children }: PropsTexts) {
  return <p className={css.caption}>{children}</p>;
}
export function MyLink({ onClick, children }: PropsTexts) {
  return (
    <a className={css.link} onClick={onClick}>
      {children}
    </a>
  );
}
