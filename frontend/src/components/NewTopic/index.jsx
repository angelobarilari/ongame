import React, { useEffect, useState, useContext } from "react";
import DefaultPage from "../DefaultPage";
import Header from "../Header";
import Button from "../Button";
import Box from "../Box";
import { postTopic } from "../../services/topics/topicsService";
import { CategoriesDataContext } from "../../providers/categories";
import { getCategories } from "../../services/categories/categoriesService";
import "./style.css";

function NewTopic() {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const { categories, setCategories } = useContext(CategoriesDataContext);

    useEffect(() => {
        getCategories()
            .then((res) => setCategories(res.data))
            .catch((err) => console.log(err.response.data));
    }, [setCategories]);

    const handleTopicSubmit = (event) => {
        event.preventDefault();
        postTopic(subject, content, category);
        setContent("");
    };

    return (
        <>
            <Header />
            <DefaultPage className="new-topic-page">
                <Box className="new-topic-box" minWidth="30%" height="70%">
                    <div className="sign-text-box">
                        <h2>New post</h2>
                        <hr />
                    </div>

                    <form className="topic-form" onSubmit={handleTopicSubmit}>
                        <div className="input-container topic-input">
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter with subject"
                                value={subject}
                                onChange={(event) =>
                                    setSubject(event.target.value)
                                }
                            />
                        </div>

                        <div className="input-container topic-input">
                            <select
                                className="input"
                                onChange={(event) =>
                                    setCategory(event.target.value)
                                }
                            >
                                <option value="">Select any category</option>
                                {categories.map((category) => (
                                    <option
                                        key={category.category_id}
                                        value={category.category_id}
                                    >
                                        {category.category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="input-container">
                            <textarea
                                className="input"
                                type="text"
                                placeholder="Type your post..."
                                value={content}
                                onChange={(event) =>
                                    setContent(event.target.value)
                                }
                            />
                        </div>

                        <Button
                            className="post-btn"
                            minWidth="100%"
                            background="var(--purple-1)"
                            color="var(--white)"
                            hover="var(--purple-2)"
                            type="submit"
                            children={"Post"}
                        />
                    </form>
                </Box>
            </DefaultPage>
        </>
    );
}

export default NewTopic;