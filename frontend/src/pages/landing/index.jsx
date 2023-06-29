import React, { useEffect, useContext } from "react";

import DefaultPage from "../../components/DefaultPage";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Topics from "../../components/Topics";
import Box from "../../components/Box";

import { getTopics } from "../../services/topics/topicsService";
import { TopicsDataContext } from "../../providers/topics";

import "./style.css";

function Landing() {
    const { topics, setTopics } = useContext(TopicsDataContext);

    useEffect(() => {
        getTopics()
            .then((res) => setTopics(res.data))
            .catch((err) => console.log(err.response.data));
    }, [setTopics]);

    return (
        <>
            <Header />
            <DefaultPage className="landing-page">
                <Box className="topics-box" minWidth="75%">
                    <div className="sign-text-box topics-text-box">
                        <span>
                            <h2>Topics</h2>
                            <Button
                                className="create-topic-btn"
                                margin="unset"
                                background="var(--purple-1)"
                                color="var(--white)"
                                hover="var(--purple-2)"
                                children={"Create topic"}
                                type="submit"
                                onClick={() =>
                                    (window.location.href = "/register")
                                }
                            />
                        </span>
                        <hr />
                    </div>

                    <Topics />
                </Box>

                <Box className="auth-box" minWidth="22%" height="20%">
                    <div className="sign-text-box sign-up-text-box">
                        <h2>Sign up or sign up</h2>
                        <hr />
                    </div>

                    <Button
                        className="login-btn"
                        minWidth="100%"
                        background="var(--purple-1)"
                        color="var(--white)"
                        hover="var(--purple-2)"
                        children={"Login"}
                        onClick={() => (window.location.href = "/login")}
                    />

                    <Button
                        className="register-btn"
                        minWidth="100%"
                        background="var(--purple-1)"
                        color="var(--white)"
                        hover="var(--purple-2)"
                        children={"Register"}
                        onClick={() => (window.location.href = "/register")}
                    />
                </Box>
            </DefaultPage>
        </>
    );
}

export default Landing;
