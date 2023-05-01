import { FormReport } from "../../components/formReport/formReport";
import { Title, Text } from "../../ui/texts";
import css from "./index.module.css";
function Report() {
  return (
    <div className={css.root}>
      <div className={css.title}>
        <Title>Reportar mascota</Title>
        <Text>
          Ingresá la siguiente información para realizar el reporte de la
          mascota
        </Text>
      </div>
      <FormReport />
    </div>
  );
}
export { Report };
