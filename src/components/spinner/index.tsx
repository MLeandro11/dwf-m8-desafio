import css from "./index.module.css";
export function Spinner() {
  return (
    <div className={css.spinnerContainer}>
      <div className={css.spinner}></div>
    </div>
  );
}
