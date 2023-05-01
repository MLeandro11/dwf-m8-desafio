import { useMap } from "../../hooks/useMap";
import { Text } from "../../ui/texts";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import css from "./index.module.css";
type MapBoxSearchProps = {
  onChange?: (any) => any;
  location?: [number, number];
};

export function MapboxSearch({ onChange, location }: MapBoxSearchProps) {
  const { inputContainer, mapContainer } = useMap({
    onChange,
    location,
  });

  return (
    <div className={css.mapSearch}>
      <div ref={mapContainer} style={{ height: 250, borderRadius: 10 }} />
      <Text>
        Buscá un punto de referencia para reportar la mascota. Por ejemplo, la
        ubicación donde lo viste por última vez.
      </Text>
      <div className={css.geocoder} ref={inputContainer}></div>
    </div>
  );
}
