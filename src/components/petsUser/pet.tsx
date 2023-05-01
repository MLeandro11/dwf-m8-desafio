import { useNavigate } from "react-router-dom";
import { MyDropzone } from "../../components/dropzone";
import { MapboxSearch } from "../../components/mapbox-search";
import { usePetUser } from "../../hooks/usePetsUser";
import { useReportPet } from "../../hooks/useReportPet";
import { Button, Secondary, Danger, Cancel } from "../../ui/buttons";
import { TextField } from "../../ui/text-field";
import { useState } from "react";
import { Modal } from "../modal";
import { SubTitle, Text, Title } from "../../ui/texts";
import css from "./index.module.css";
export function Pet() {
  const { pet } = usePetUser();
  const navigate = useNavigate();
  const { deleteReport, updateReport, isLoading } = useReportPet();
  const [formData, setFormData] = useState({});
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalLocated, setShowModalLocated] = useState(false);
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    if (Object.keys(formData).length === 0) {
      return setMessage("Debes modificar al menos un campo");
    }

    const report = await updateReport(formData, pet.id);

    if (report) {
      navigate("/my-pets");
    } else {
      setMessage("No se pudo actualizar el reporte");
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
  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    const newName = e.target.value;
    if (newName == pet?.name) return;
    setFormData((prevData) => ({
      ...prevData,
      name: newName,
    }));
  }
  const handleDelete = async (id: string) => {
    await deleteReport(id);
    navigate("/my-pets");
  };
  const handleLocated = async (id: string) => {
    await updateReport({ lost: false }, id);
    navigate("/my-pets");
  };

  return (
    <>
      {pet && (
        <>
          <form className={css.form} onSubmit={handleSubmit}>
            <TextField
              onChange={handleChangeName}
              value={pet?.name}
              typeInput="text"
              name="name"
            >
              Nombre
            </TextField>
            <MyDropzone onChange={handleDropzone} url={pet?.picture_URL} />
            <MapboxSearch
              onChange={handleMapboxChange}
              location={[pet?.lng, pet?.lat]}
            />
            <div className={css.buttons}>
              <div className={css.message}>
                <Text bold>{message}</Text>
              </div>
              <Button type="submit">
                {!isLoading ? "Guardar" : "Guardando cambios..."}
              </Button>
              <Secondary onClick={() => setShowModalLocated(true)}>
                Reportar como encontrado
              </Secondary>
              <Danger onClick={() => setShowModalDelete(true)}>
                Eliminar Reporte
              </Danger>
            </div>
          </form>
          <Modal
            isOpen={showModalDelete}
            onClose={() => setShowModalDelete(false)}
          >
            <div className={css.modalDelete}>
              <SubTitle bold>Eliminar reporte</SubTitle>
              <Text>¿Está seguro que desea eliminar el reporte?</Text>
              <div className={css.buttonsModal}>
                <Danger onClick={() => handleDelete(pet.id)}>Eliminar</Danger>
                <Cancel onClick={() => setShowModalDelete(false)}>
                  Cancelar
                </Cancel>
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={showModalLocated}
            onClose={() => setShowModalLocated(false)}
          >
            <div className={css.modalLocated}>
              <SubTitle bold>Reportar como encontrado</SubTitle>
              <Text>¿Está seguro que quiere despublicar su mascota?</Text>
              <div className={css.buttonsModal}>
                <Secondary onClick={() => handleLocated(pet.id)}>
                  Despublicar
                </Secondary>
                <Cancel onClick={() => setShowModalLocated(false)}>
                  Cancelar
                </Cancel>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
}
