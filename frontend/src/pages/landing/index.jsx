import React, { useEffect, useContext, useState } from "react";

import DefaultPage from "../../components/DefaultPage";
import SubHeader from "../../components/SubHeader";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Box from "../../components/Box";

import {
    getTopics,
    getTopicsById,
    deleteTopic,
} from "../../services/topics/topicsService";
import { verifyJwtIsValid } from "../../services/auth/authService";

import { TopicsDataContext } from "../../providers/topics";
import TopicDetails from "../topic";

import "./style.css";

function Landing() {
    const token = verifyJwtIsValid();

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

    const handleDeleteClick = (topic_id) => {
        if (token.is_staff) deleteTopic(topic_id);
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
                            >
                                <a
                                    className="topic-link"
                                    onClick={() =>
                                        handleTopicClick(topic.topic_id)
                                    }
                                    href={`/topics/${topic.topic_id}`}
                                >
                                    {topic.subject}
                                </a>

                                <span>
                                    <p>{topic.author.username}</p>

                                    <Button
                                        className="delete-btn"
                                        width="50%"
                                        background="var(--orange-1)"
                                        color="var(--white)"
                                        hover="var(--orange-2)"
                                        children={"Delete"}
                                        onClick={() =>
                                            handleDeleteClick(topic.topic_id)
                                        }
                                    />
                                </span>
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
                        minWidth="100%"
                        background="var(--orange-1)"
                        color="var(--white)"
                        hover="var(--orange-2)"
                        children={"Login"}
                        onClick={() => (window.location.href = "/login")}
                    />

                    <Button
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
