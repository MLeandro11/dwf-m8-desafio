import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

const MAPBOX_TOKEN = "pk.eyJ1IjoiZGVuaXNwYXJhZGEiLCJhIjoiY2t2cmhwbjZlMDM5czJ2cWlyczZoODg4cSJ9.6obRc3i_TK7qdx_A6_y-qg";
mapboxgl.accessToken = MAPBOX_TOKEN;

type useMapProps = {
    onChange?: (any) => any;
    location?: [number, number];
};
export function useMap({ onChange, location }: useMapProps) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const inputContainer = useRef(null);
    const geocoder = useRef(null);

    useEffect(() => {
        if (geocoder.current) return; //
        geocoder.current = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            countries: "ar",
            autocomplete: true,
            language: "es",
            placeholder: 'Ej: "Obelisco - Plaza de la República"',
            marker: false,
        });
        geocoder.current.addTo(inputContainer.current);
        geocoder.current.on("result", function (e) {
            const result = e.result;
            const newCoords = result.geometry.coordinates;
            map.current.flyTo({
                center: newCoords,
                zoom: 15,
            });
            new mapboxgl.Marker().setLngLat(newCoords).addTo(map.current);
            if (onChange) {
                onChange({
                    query: result.text,
                    coords: newCoords,
                });

            }
        });
    }, []);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: location ? location : [-63.616672, -38.416097],
            zoom: location ? 14 : 4,
        });
        if (location) {
            new mapboxgl.Marker({
                color: '#00a884',

            }).setLngLat(location).addTo(map.current);
        }
        return () => map.current.remove();
    }, []);
    return { mapContainer, inputContainer };
};