import { useState } from "react";
import { auth, signUp } from "../lib/api";
import { useUserToken } from "./useUserToken";

export function useAuth() {
    const [, setToken] = useUserToken();
    const [isLoading, setIsLoading] = useState(false);
    const login = async (email: string, pass: string) => {
        try {
            setIsLoading(true);
            const { token } = await auth(email, pass);
            localStorage.setItem("auth_token", token);
            return token;
        } catch (e) {
            console.error(e.message);
        } finally {
            setIsLoading(false);
        }

    }
    function logout() {
        setToken(null);
        localStorage.removeItem("auth_token");
    }
    async function register(dataUser) {
        try {
            setIsLoading(true);
            return await signUp(dataUser);
        } catch (e) {
            console.error("no se pudo crear usuario");
        } finally {
            setIsLoading(false);
        }
    }
    return {
        login,
        logout,
        register,
        isLoading
    };
}
