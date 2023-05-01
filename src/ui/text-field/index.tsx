import css from "./index.module.css";
type propsTextField = {
  value?: string;
  typeInput: string;
  children?: string;
  name: string;
  style?: "dark" | "light";
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
type TextArea = {
  children?: string;
  name: string;
  style?: "dark" | "light";
  placeholder?: string;
};

export function TextField({
  typeInput,
  children,
  name,
  value,
  style,
  placeholder,
  onChange,
}: propsTextField) {
  return (
    <div className={css.root}>
      <label
        className={style == "dark" ? css.labelDark : css.label}
        htmlFor={name}
      >
        {children}
      </label>
      <input
        required
        onChange={onChange}
        placeholder={placeholder}
        className={style ? css[style] : css.light}
        type={typeInput}
        name={name}
        id={name}
        defaultValue={value}
      />
    </div>
  );
}

export function TextArea({ style, name, children }) {
  return (
    <div className={css.root}>
      <label
        className={style == "dark" ? css.labelDark : css.label}
        htmlFor={name}
      >
        {children}
      </label>
      <textarea
        required
        className={style == "dark" ? css.textAreaDark : css.textArea}
        name={name}
        id={name}
      ></textarea>
    </div>
  );
}
