const convertDate = (time) => {
    var date = new Date(Number(time));
    return date.toString();
}

module.exports = convertDate