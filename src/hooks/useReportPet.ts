import { useState } from "react";
import { createPet, deletePet, updatePet } from "../lib/api";
import { useUserToken } from "./useUserToken";
import { userPetSelector, userPetsSelector } from "./usePetsUser";
import { useRecoilRefresher_UNSTABLE } from "recoil";

export function useReportPet() {
    const [token] = useUserToken();
    const refreshPets = useRecoilRefresher_UNSTABLE(userPetsSelector);
    const refreshPet = useRecoilRefresher_UNSTABLE(userPetSelector);
    const [isLoading, setIsLoading] = useState(false);
    function getReports() {
        return refreshPets()
    }
    async function createReport(dataReport) {
        try {
            setIsLoading(true);
            const pet = await createPet(dataReport, token);
            console.log(pet);
            refreshPets();
            return pet
        } catch (e) {
            console.error("no se pudo crear reporte");
        } finally {
            setIsLoading(false);
        }
    }
    async function updateReport(newDataPet, id) {
        try {
            setIsLoading(true);
            const pet = await updatePet({ newDataPet, token, id });
            refreshPets();
            refreshPet()
            return pet
        } catch (e) {
            console.error("no se pudo crear reporte");
        } finally {
            setIsLoading(false);
        }
    }
    async function deleteReport(id) {
        try {
            setIsLoading(true);
            const pet = await deletePet(id, token);
            refreshPets();
            return pet
        } catch (e) {
            console.error("No se pudo eliminar reporte, vuelve a intentar");
        } finally {
            setIsLoading(false);
        }
    }
    return {
        createReport,
        updateReport,
        deleteReport,
        getReports,
        isLoading
    };
}