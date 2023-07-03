import React, { useEffect, useState } from "react";

import DefaultPage from "../../components/DefaultPage";
import SubHeader from "../../components/SubHeader";
import Comment from "../../components/Comments";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Box from "../../components/Box";

import { getTopicsById, deleteTopic } from "../../services/topics/topicsService";
import { verifyJwtIsValid } from "../../services/auth/authService";
import { postComment } from "../../services/comments/commentsService";

import formatDate from "../../utils/formatDate";

import { withRouter } from "react-router-dom";

import "./style.css";


function Topic({ match }) {
    const token = verifyJwtIsValid()

    const topicId = match.params.topicId;
    const [topicDetails, setTopicDetails] = useState(null);
    const [newComment, setNewComment] = useState("");

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        postComment(newComment, topicId);
        setNewComment("");
    };

    const handleDeleteClick = (topic_id) => {
        if (token.is_staff) 
            deleteTopic(topic_id)
    };

    useEffect(() => {
        getTopicsById(topicId)
            .then((res) => setTopicDetails(res.data))
            .catch((err) => console.log(err.response.data));
    }, [topicId]);

    if (!topicDetails) return <p>Not found</p>;

    return (
        <>
            <Header />

            <DefaultPage className="topic-details-page">
                <Box className="topic-box" minWidth="80%" height="97%">
                    <Box className="topic-content" minWidth="80%">
                        <SubHeader
                            className="topic-details-sub-header"
                            text={topicDetails.subject}
                        >
                            <p>Author: {topicDetails.author.username}</p>
                            <p>{formatDate(topicDetails.created_at)}</p>
                            <Button 
                                className="delete-btn"
                                width="10%"
                                background="var(--orange-1)"
                                color="var(--white)"
                                hover="var(--orange-2)"
                                children={"Delete"}
                                onClick={() => handleDeleteClick(topicDetails.topic_id)} />
                        </SubHeader>

                        {topicDetails.content}
                        {topicDetails.comments.map((comment) => (
                            <Comment children={comment} />
                        ))}
                    </Box>

                    <Box className="topic-section">
                        <form
                            className="comments-form"
                            onSubmit={handleCommentSubmit}
                        >
                            <div className="input-container">
                                <textarea
                                    className="input"
                                    type="text"
                                    placeholder="Type your comment..."
                                    value={newComment}
                                    onChange={(event) =>
                                        setNewComment(event.target.value)
                                    }
                                />
                            </div>

                            <Button
                                className="comment-btn"
                                minWidth="100%"
                                background="var(--orange-1)"
                                color="var(--white)"
                                hover="var(--orange-2)"
                                type="submit"
                                children={"Comment"}
                            />
                        </form>
                    </Box>
                </Box>
            </DefaultPage>
        </>
    );
}

export default withRouter(Topic);
