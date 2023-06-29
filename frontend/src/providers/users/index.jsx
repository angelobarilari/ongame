import { createContext, useState } from "react";

const UsersDataContext = createContext([]);

const UserDataProvider = ({ children }) => {
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

export { UsersDataContext, UserDataProvider }
