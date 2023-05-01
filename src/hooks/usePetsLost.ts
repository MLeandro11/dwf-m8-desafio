import { useEffect, useState } from "react";
import { getPetsLost } from "../lib/api";

export const usePetsLostResults = () => {
    const [position, setPosition] = useState(null);
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getPosition = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setPosition({ lat: latitude, lng: longitude });
            }
        );
    }
    const petsLost = async () => {
        setIsLoading(true);
        const data = await getPetsLost(position);
        setIsLoading(false);
        const petsLost = data.filter((pet) => pet.lost === true);
        setResults(petsLost);
    }
    useEffect(() => {
        getPosition();
    }, [])
    useEffect(() => {
        if (!position) return;
        petsLost();

    }, [position])
    return { results, isLoading }
}