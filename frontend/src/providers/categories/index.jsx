import { createContext, useState } from "react";

export const CategoriesDataContext = createContext([]);

export const CategoriesDataProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    return (
        <CategoriesDataContext.Provider
            value={{
                categories,
                setCategories,
            }}
        >
            {children}
        </CategoriesDataContext.Provider>
    );
};
