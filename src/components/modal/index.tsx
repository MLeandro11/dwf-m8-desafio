type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};
import css from "./index.module.css";
export function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <div
      className={css.container}
      style={{ display: isOpen ? "grid" : "none" }}
    >
      <div className={css.modal}>{children}</div>
    </div>
  );
}
