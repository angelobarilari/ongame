function parseDateString(originalValue) {
    const parsedDate = Date.parse(originalValue);
    return Number.isNaN(parsedDate) ? null : new Date(parsedDate);
}

export default parseDateString;
