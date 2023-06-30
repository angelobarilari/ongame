import React from "react";

import DefaultPage from "../../components/DefaultPage";
import SubHeader from "../../components/SubHeader";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Box from "../../components/Box";

import { loginReq, verifyJwtIsValid } from "../../services/auth/authService";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./style.css";

function Login() {
    // const token = localStorage.getItem("ongame-token");

    // if (token) {
    //     const decodedToken = jwt_decode(token);

    //     if (decodedToken.exp * 1000 > new Date())
    //         window.location.href = "/dashboard";
    // }

    const LoginSchema = yup.object().shape({
        username: yup.string().required("Enter with username"),
        password: yup.string().required("Enter with password"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(LoginSchema),
    });

    return (
        <>
            <Header />

            <DefaultPage className="login-page">
                <Box className="login-box" minWidth="30%" height="fit-content%">
                    <SubHeader width="90%" text={"Sign into OnGame forum"} />

                    <form
                        className="login-form"
                        onSubmit={handleSubmit(loginReq)}
                    >
                        <div className="input-container">
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter with username"
                                {...register("username")}
                            />
                            {errors.username?.message && (
                                <span className="error-message">
                                    {errors.username.message}
                                </span>
                            )}
                        </div>

                        <div className="input-container">
                            <input
                                className="input"
                                type="password"
                                placeholder="Enter with password"
                                {...register("password")}
                            />
                            {errors.password?.message && (
                                <span className="error-message">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        <Button
                            className="login-btn"
                            minWidth="100%"
                            background="var(--orange-1)"
                            color="var(--white)"
                            hover="var(--orange-2)"
                            type="submit"
                            children={"Login in OnGame"}
                            onSubmit={() => loginReq()}
                        />
                    </form>
                </Box>
            </DefaultPage>
        </>
    );
}

export default Login;
