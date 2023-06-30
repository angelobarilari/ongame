import apiUrl from "../api";
import jwt_decode from "jwt-decode"

export const loginReq = (formdata) => {
    const data = {
        username: formdata.username,
        password: formdata.password,
    };

    apiUrl
        .post("login/", data)
        .then((res) => {
            localStorage.setItem("ongame-token", res.data.token);
            window.location.href = "/dashboard";
        })
        .catch((err) => console.log(err.response.data));
};

export const registerReq = (formdata) => {
    apiUrl
        .post("users/register/user/", formdata)
        .then((res) => loginReq(formdata))
        .catch((err) => console.log(err.response.data));
};

export const verifyJwtIsValid = () => {
    const token = localStorage.getItem("ongame-token");

    if (token) {
        const decodedToken = jwt_decode(token);

        if (decodedToken.exp * 1000 > new Date())
            return decodedToken
    }

    return false
}
