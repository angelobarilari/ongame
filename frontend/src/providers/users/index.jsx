import { createContext, useState } from "react";

export const UsersDataContext = createContext([]);

export const UserDataProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    return (
        <UsersDataContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </UsersDataContext.Provider>
    );
};
