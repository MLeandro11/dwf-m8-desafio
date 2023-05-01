import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { atom, useRecoilValue, selector, useSetRecoilState, useRecoilRefresher_UNSTABLE, } from "recoil";
import { getPetUser, getPetsUser, } from "../lib/api";
import { useUserToken, userToken } from "./useUserToken";

export const petIdState = atom({
  key: "petId",
  default: "",
});

export const userPetSelector = selector({
  key: 'userPet',
  get: async ({ get }) => {
    const token = get(userToken)
    const petId = get(petIdState)
    if (token && petId) {
      const userPet = getPetUser(token, petId);
      return userPet;
    }
  },
});
export const userPetsSelector = selector({
  key: 'userPets',
  get: async ({ get }) => {
    const token = get(userToken)
    if (token) {
      const userPets = getPetsUser(token);
      return userPets;
    }
  },
});

export const usePetsUser = () => {
  const pets = useRecoilValue(userPetsSelector);
  return {
    pets
  }

};

export const usePetUser = () => {
  const params = useParams();
  const setId = useSetRecoilState(petIdState);

  useEffect(() => {
    setId(params.petId);
  }, [params])

  const pet = useRecoilValue(userPetSelector);

  return { pet }
}









