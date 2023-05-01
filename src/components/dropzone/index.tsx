import { useState, useCallback } from "react";
import Dropzone from "react-dropzone";
import DROPZONE_IMG from "../../assets/dropzone.png";
import { Button } from "../../ui/buttons";
import css from "./index.module.css";
type DropzoneProps = {
  onChange?: (any) => any;
  url?: string;
};

export function MyDropzone(props: DropzoneProps) {
  const { onChange, url } = props;
  const [dataURL, setDataURL] = useState(null);

  const getDataUrl = useCallback((file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDataURL(reader.result);
      if (onChange) {
        onChange({ dataURL: reader.result });
      }
    };
  }, []);

  return (
    <Dropzone onDrop={(acceptedFiles) => getDataUrl(acceptedFiles[0])}>
      {({ getRootProps, getInputProps }) => (
        <section className={css.dropzone}>
          <div className={css.image}>
            <img src={dataURL ? dataURL : url || DROPZONE_IMG} alt="pet-img" />
          </div>
          <Button type="button">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              Agregar foto / Modificar foto
            </div>
          </Button>
        </section>
      )}
    </Dropzone>
  );
}
