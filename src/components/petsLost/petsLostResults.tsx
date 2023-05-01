import { CardPet } from "../cardPetLost";
import { usePetsLostResults } from "../../hooks/usePetsLost";
import { useRef, useState } from "react";
import { Modal } from "../modal";
import { sendReport } from "../../lib/api";
import { TextField, TextArea } from "../../ui/text-field";
import { Cancel, Secondary } from "../../ui/buttons";
import { Title, Text, SubTitle } from "../../ui/texts";
import css from "./index.module.css";
import { Spinner } from "../spinner";
function PetsLostResults() {
  const { results: petsLost, isLoading } = usePetsLostResults();
  const [showModal, setShowModal] = useState(false);
  const [petID, setPetId] = useState(null);
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());
    const report = await sendReport({
      ...data,
      petId: petID,
    });
    if (!report) {
      return setMessage("No se pudo enviar el reporte");
    }
    formRef.current.reset();
    setShowModal(false);
    setMessage("");
  };
  return (
    <div className={css.container}>
      {isLoading && <Spinner />}
      {petsLost && petsLost.length < 0 ? (
        <div>
          <Text>No hay mascotas perdidas cerca de tu ubicación</Text>
        </div>
      ) : (
        petsLost.map((pet) => (
          <div key={pet.objectID}>
            <CardPet
              onClick={() => {
                setShowModal(true);
                setPetId(pet.objectID);
              }}
              id={pet.objectID}
              name={pet.name}
              location={pet.location}
              picture={pet.photo}
            />
            <div>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <form
                  ref={formRef}
                  onSubmit={handlerSubmit}
                  className={css.form}
                >
                  <Title>Reportar info de {pet.name}</Title>
                  <TextField style="dark" typeInput="name" name="reporter">
                    nombre
                  </TextField>
                  <TextField style="dark" typeInput="phone" name="phone_number">
                    telefono
                  </TextField>
                  <TextArea style="dark" name="message">
                    Donde lo viste?
                  </TextArea>
                  {message && (
                    <div className={css.message}>
                      <Text bold>{message}</Text>
                    </div>
                  )}
                  <Secondary type="submit">Enviar información</Secondary>
                  <Cancel onClick={() => setShowModal(false)}>Cancelar</Cancel>
                </form>
              </Modal>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export { PetsLostResults };
