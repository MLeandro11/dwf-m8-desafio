import { atom, useRecoilState } from "recoil";

export const userEmail = atom({
    key: "userEmail",
    default: "",
});
export const useUserEmail = () => useRecoilState(userEmail);