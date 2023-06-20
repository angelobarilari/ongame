import React, { useContext, useState } from "react";
import { TopicsDataContext } from "../../providers/topics";
import { getTopicsById } from "../../services/topics/topicsService";
import TopicDetails from "../TopicDetails";
import Box from "../Box";
import "./style.css";

const Topics = () => {
    const { topics } = useContext(TopicsDataContext);
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

    return (
        <>
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
        </>
    );
};

export default Topics;
