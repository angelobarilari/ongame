import { createContext, useState } from "react";

const CategoriesDataContext = createContext([]);

const CategoriesDataProvider = ({ children }) => {
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

export { CategoriesDataContext, CategoriesDataProvider }
