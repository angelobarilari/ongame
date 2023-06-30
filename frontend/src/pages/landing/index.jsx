import React, { useEffect, useContext, useState } from "react";

import DefaultPage from "../../components/DefaultPage";
import SubHeader from "../../components/SubHeader";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Box from "../../components/Box";

import { getTopicsById } from "../../services/topics/topicsService";
import { getTopics } from "../../services/topics/topicsService";

import { TopicsDataContext } from "../../providers/topics";
import TopicDetails from "../topic";

import "./style.css";

function Landing() {
    const { topics, setTopics } = useContext(TopicsDataContext);
    const [selectedTopicId, setSelectedTopicId] = useState(null);
    const [topicDetails, setTopicDetails] = useState(null);

    const handleTopicClick = (topicId) => {
        getTopicsById(topicId)
            .then((response) => {
                setSelectedTopicId(topicId);
                setTopicDetails(response.data);
            })
            .catch((error) => console.log(error.response.data));
    };

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
                    <SubHeader text={"Topics"}>
                        <Button
                            className="create-topic-btn"
                            margin="unset"
                            background="var(--orange-1)"
                            color="var(--white)"
                            hover="var(--orange-2)"
                            children={"Create topic"}
                            onClick={() => (window.location.href = "/newtopic")}
                        />
                    </SubHeader>

                    {topics ? (
                        topics.map((topic) => (
                            <Box
                                className="topics"
                                minWidth="30%"
                                key={topic.topic_id}
                                onClick={() => handleTopicClick(topic.topic_id)}
                            >
                                <a
                                    className="topic-link"
                                    href={`/topics/${topic.topic_id}`}
                                >
                                    {topic.subject}
                                </a>
                                <p>{topic.author.username}</p>
                            </Box>
                        ))
                    ) : (
                        <p>No topics available</p>
                    )}

                    {selectedTopicId && topicDetails && (
                        <TopicDetails topic={topicDetails} />
                    )}
                </Box>

                <Box className="auth-box" minWidth="22%" height="20%">
                    <SubHeader text={"Sign up or sign in"} />

                    <Button
                        className="login-btn"
                        minWidth="100%"
                        background="var(--orange-1)"
                        color="var(--white)"
                        hover="var(--orange-2)"
                        children={"Login"}
                        onClick={() => (window.location.href = "/login")}
                    />

                    <Button
                        className="register-btn"
                        minWidth="100%"
                        background="var(--orange-1)"
                        color="var(--white)"
                        hover="var(--orange-2)"
                        children={"Register"}
                        onClick={() => (window.location.href = "/register")}
                    />
                </Box>
            </DefaultPage>
        </>
    );
}

export default Landing;
