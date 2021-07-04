const convertDate = (time) => {
  const date = new Date(Number(time));
  return date.toString();
};

module.exports = convertDate;
