import DefaultPage from "../../components/DefaultPage";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Box from "../../components/Box";
import apiUrl from "../../services/api";
import parseDateString from "../../utils/parseDateString";
import { loginReq } from "../../services/auth/authService";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

function Register() {
    const registerReq = (formdata) => {
        apiUrl
            .post("users/register/user/", formdata)
            .then((res) => loginReq(formdata))
            .catch((err) => console.log(err.response.data));
    };

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
                    <div className="register-text-box">
                        <h2>Sign up</h2>
                        <hr />
                    </div>

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
                            background="var(--purple-1)"
                            color="var(--white)"
                            hover="var(--purple-2)"
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