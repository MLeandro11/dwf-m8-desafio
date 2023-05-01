import { atom, useRecoilState, selector } from "recoil";

export const userToken = atom({
    key: "userToken",
    default: localStorage.getItem("auth_token")
});
export const isAuthenticatedSelector = selector({
    key: 'isAuthenticated',
    get: ({ get }) => {
        const authToken = get(userToken);
        return authToken !== null && authToken !== undefined;
    },
});
export const useUserToken = () => useRecoilState(userToken);