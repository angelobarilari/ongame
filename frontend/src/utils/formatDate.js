function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getDate()}/${
        date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

export default formatDate;
