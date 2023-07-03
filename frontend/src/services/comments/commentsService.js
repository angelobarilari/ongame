import apiUrl from "../api";

export const postComment = (comment, topicId) => {
    const token = localStorage.getItem("ongame-token");

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    apiUrl
        .post(`comments/${topicId}/`, { content: comment }, { headers })
        .then((res) => window.location.reload())
        .catch((err) => console.log(err.response.data));
};
