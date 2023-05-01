import { useState } from "react";
import { MyDropzone } from "../dropzone";
import { MapboxSearch } from "../mapbox-search";
import { useReportPet } from "../../hooks/useReportPet";
import { TextField } from "../../ui/text-field";
import { Text } from "../../ui/texts";
import { Cancel, Secondary } from "../../ui/buttons";
import { Link, useNavigate } from "react-router-dom";
import css from "./index.module.css";

export function FormReport() {
  const navigate = useNavigate();
  const { createReport, isLoading } = useReportPet();
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    const allData = {
      ...formData,
      name: e.target["name"].value,
    };

    if (Object.keys(allData).length < 3) {
      setMessage("Todos los campos son obligatorios");
      return;
    }
    const report = await createReport(allData);
    if (report) {
      navigate("/my-pets");
    } else {
      setMessage("No se pudo crear el reporte");
    }
  }
  function handleDropzone(data) {
    setFormData((prevData) => ({
      ...prevData,
      dataURL: data.dataURL,
    }));
  }
  function handleMapboxChange(data) {
    setFormData((prevData) => ({
      ...prevData,
      location: data.query,
      lat: data.coords[1],
      lng: data.coords[0],
    }));
  }
  return (
    <>
      <form className={css.form} onSubmit={submitHandler}>
        <TextField typeInput="text" name="name">
          Nombre
        </TextField>
        <MyDropzone onChange={handleDropzone} />
        <MapboxSearch onChange={handleMapboxChange} />
        <div className={css.message}>
          <Text bold>{message}</Text>
        </div>
        <div className={css.buttons}>
          <Secondary type="submit">
            {!isLoading ? "Reportar mascota" : "Creando reporte..."}
          </Secondary>
          <Link to="/my-pets">
            <Cancel>Cancelar</Cancel>
          </Link>
        </div>
      </form>
    </>
  );
}
