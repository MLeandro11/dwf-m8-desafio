import { selector, useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { useUserToken, userToken } from "./useUserToken";
import { getMe, updateDataUser } from "../lib/api";
import { useState } from "react";

export const userData = selector({
    key: "userData",
    get: async ({ get }) => {
        const token = get(userToken)
        if (token) {
            const myUserData = getMe(token);
            return myUserData;
        }
    },
});


export const useUserData = () => {
    const [token] = useUserToken();
    const dataUser = useRecoilValue(userData)
    const refresh = useRecoilRefresher_UNSTABLE(userData);
    const [isLoading, setIsLoading] = useState(false);
    async function updateMyData(dataUser) {
        try {
            setIsLoading(true);
            const data = await updateDataUser(dataUser, token)
            refresh();
            return data
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return {
        updateMyData,
        dataUser,
        isLoading
    }
};