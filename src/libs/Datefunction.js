export const timestampFromDate = (date) => {
    return date.getTime();
}
export const dateFromTimestamp = (timestamp) => {
    return new Date(timestamp);
}

export const getFormattedDate = (date) => {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return formattedToday;
}