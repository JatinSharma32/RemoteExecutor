import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // Make login, register, Token verification logic
    const [token, setToken] = useState();
    const login = () => {};
    const register = () => {};
    const tokenVerification = () => {};

    return (
        <AuthContext.Provider
            value={{ login, register, tokenVerification, token }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
