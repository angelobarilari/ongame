import apiUrl from "../api";

export const loginReq = (formdata) => {
    const data = {
        username: formdata.username,
        password: formdata.password,
    };

    apiUrl
        .post("login/", data)
        .then((res) => {
            localStorage.setItem("ongame-token", res.data.token);
            window.location.href = "/home";
        })
        .catch((err) => console.log(err.response.data));
};
