import css from "./button.module.css";
type ButtonType = {
  style?: "primary" | "secondary" | "danger" | "cancel";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};
export function Button({ style, children, onClick, type }: ButtonType) {
  return (
    <>
      <button
        type={type ? type : "button"}
        onClick={onClick}
        className={style ? css[style] : css.primary}
      >
        {children}
      </button>
    </>
  );
}
export function Secondary({ children, onClick, type }: ButtonType) {
  return (
    <>
      <Button type={type} style="secondary" onClick={onClick}>
        {children}
      </Button>
    </>
  );
}
export function Danger({ children, onClick, type }: ButtonType) {
  return (
    <>
      <Button type={type} style="danger" onClick={onClick}>
        {children}
      </Button>
    </>
  );
}
export function Cancel({ children, onClick, type }: ButtonType) {
  return (
    <>
      <Button type={type} style="cancel" onClick={onClick}>
        {children}
      </Button>
    </>
  );
}
