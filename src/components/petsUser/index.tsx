import { usePetsUser } from "../../hooks/usePetsUser";
import { useReportPet } from "../../hooks/useReportPet";
import { CardPetdUser } from "../../components/cardPetUser";
import css from "./index.module.css";
import { Text } from "../../ui/texts";
import { Button, Danger } from "../../ui/buttons";
import { Link } from "react-router-dom";
import noReports from "../../assets/noreports-image.svg";
import icoRefresh from "../../assets/icon-actualizar.svg";

export function PetsUserResults() {
  const { pets } = usePetsUser();
  const { getReports, updateReport } = useReportPet();

  return (
    <div>
      {pets && pets.length < 1 ? (
        <div className={css.noReports}>
          <Text>Aún no reportaste mascotas perdidas</Text>
          <div className={css.image}>
            <img src={noReports} alt="image-report" />
          </div>
          <Link to={"/report"}>
            <Button>Publicar reporte</Button>
          </Link>
        </div>
      ) : (
        pets && (
          <div className={css.cardsList}>
            <div className={css.panel}>
              <Link to={"/report"}>
                <Button>Publicar reporte</Button>
              </Link>
              <Danger onClick={getReports}>
                <div>
                  <img src={icoRefresh} width={16} alt="Refresh" />
                </div>
              </Danger>
            </div>
            {pets.map((pet) => (
              <div key={pet.id}>
                <CardPetdUser
                  id={pet.id}
                  name={pet.name}
                  location={pet.location}
                  image={pet.picture_URL}
                  lost={pet.lost}
                  comments={pet.reports}
                  onClick={() => updateReport({ lost: !pet.lost }, pet.id)}
                />
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}
