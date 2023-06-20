import DefaultPage from "../../components/DefaultPage";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Box from "../../components/Box";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

import { loginReq } from "../../services/auth/authService";
import jwt_decode from "jwt-decode";

function Login() {
    const token = localStorage.getItem("ongame-token");
    const decodedToken = jwt_decode(token);

    if (token)
        if (decodedToken.exp * 1000 > new Date())
            window.location.href = "/home";

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
                    <div className="sign-text-box">
                        <h2>Sign into OnGame Forum</h2>
                        <hr />
                    </div>

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
                            background="var(--purple-1)"
                            color="var(--white)"
                            hover="var(--purple-2)"
                            type="submit"
                            onSubmit={() => loginReq()}
                        >
                            Login in OnGame
                        </Button>
                    </form>
                </Box>
            </DefaultPage>
        </>
    );
}

export default Login;
