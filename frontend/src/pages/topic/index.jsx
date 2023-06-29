import React, { useEffect, useState } from "react";

import DefaultPage from "../../components/DefaultPage";
import Comment from "../../components/Comments";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Box from "../../components/Box";

import { getTopicsById } from "../../services/topics/topicsService";
import { postComment } from "../../services/comments/commentsService";

import formatDate from "../../utils/formatDate";

import { withRouter } from "react-router-dom";

import "./style.css";

function Topic({ match }) {
    const topicId = match.params.topicId;
    const [topicDetails, setTopicDetails] = useState(null);
    const [newComment, setNewComment] = useState("");

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        // console.log(newComment, topicId)
        postComment(newComment, topicId);
        setNewComment("");
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
                        <div className="sign-text-box topics-text-box">
                            <span>
                                <h2>{topicDetails.subject}</h2>
                                <p>Author: {topicDetails.author.username}</p>
                            </span>
                            <hr />
                        </div>

                        <div className="sign-text-box topics-text-box">
                            <span>
                                <p>{formatDate(topicDetails.created_at)}</p>
                            </span>
                            <hr />
                        </div>

                        <div className="topic-comments">
                            {topicDetails.content}
                            {topicDetails.comments.map((comment) => (
                                <Comment key={comment.id} comment={comment} />
                            ))}
                        </div>
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
                            >
                                Comment
                            </Button>
                        </form>
                    </Box>
                </Box>
            </DefaultPage>
        </>
    );
}

export default withRouter(Topic);
