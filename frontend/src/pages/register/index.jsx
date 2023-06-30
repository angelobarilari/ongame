import React from "react";

import DefaultPage from "../../components/DefaultPage";
import SubHeader from "../../components/SubHeader";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Box from "../../components/Box";

import parseDateString from "../../utils/parseDateString";

import { registerReq } from "../../services/auth/authService";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import "./style.css";

function Register() {
    const RegisterSchema = yup.object().shape({
        username: yup.string().required("Enter with username"),
        password: yup.string().required("Enter with password"),
        name: yup.string().required("Enter with name"),
        surname: yup.string().required("Enter with surname"),
        birthdate: yup.date().transform(parseDateString).required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(RegisterSchema),
    });

    return (
        <>
            <Header />

            <DefaultPage className="register-page">
                <Box
                    className="register-box"
                    minWidth="30%"
                    height="fit-content%"
                >
                    <SubHeader width="90%" text={"Sign up"} />

                    <form
                        className="register-form"
                        onSubmit={handleSubmit(registerReq)}
                    >
                        <div className="input-container">
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter with email"
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

                        <div className="input-container">
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter with your name"
                                {...register("name")}
                            />
                            {errors.name?.message && (
                                <span className="error-message">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        <div className="input-container">
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter with your surname"
                                {...register("surname")}
                            />
                            {errors.surname?.message && (
                                <span className="error-message">
                                    {errors.surname.message}
                                </span>
                            )}
                        </div>

                        <div className="input-container">
                            <input
                                className="input"
                                type="date"
                                {...register("birthdate")}
                            />
                            {errors.birthdate?.message && (
                                <span className="error-message">
                                    {errors.birthdate.message}
                                </span>
                            )}
                        </div>

                        <Button
                            className="register-btn"
                            minWidth="100%"
                            background="var(--orange-1)"
                            color="var(--white)"
                            hover="var(--orange-2)"
                            type="submit"
                            onSubmit={() => registerReq()}
                        >
                            Register in OnGame
                        </Button>
                    </form>
                </Box>
            </DefaultPage>
        </>
    );
}

export default Register;
