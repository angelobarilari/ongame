import apiUrl from "../api";

export const getTopics = () => {
    return apiUrl.get("topics/");
};

export const getTopicsById = (topics_id) => {
    return apiUrl.get(`topics/${topics_id}/`);
};

export const postTopic = (subject, content, category) => {
    const token = localStorage.getItem("ongame-token");

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const data = {
        subject,
        content,
        category,
    };

    apiUrl
        .post(`topics/`, data, { headers })
        .then((res) => (window.location.href = `/topics/${res.data.topic_id}`))
        .catch((err) => console.log(err.response.data));
};

export const deleteTopic = (topic_id) => {
    const token = localStorage.getItem("ongame-token")

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    apiUrl
        .delete(`topics/${topic_id}`, { headers})
        .then(res => window.location.href = "/")
        .catch(err => console.log(err))
}
