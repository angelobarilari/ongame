import apiUrl from "../api";

export const getUserById = (user_id) => {
    return apiUrl.get(`users/${user_id}/`);
};

export const updateUserById = (user_id, data) => {
    const token = localStorage.getItem("ongame-token");

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    apiUrl
        .patch(`users/${user_id}/`, data, { headers })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response.data));
};
