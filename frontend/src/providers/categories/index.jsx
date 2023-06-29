import { createContext, useState } from "react";

const CategoriesDataContext = createContext([]);

function CategoriesDataProvider({ children }) {
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
}

export { CategoriesDataContext, CategoriesDataProvider };
