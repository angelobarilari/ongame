import apiUrl from "../api";

export const getCategories = () => {
    return apiUrl.get("categories/");
};
