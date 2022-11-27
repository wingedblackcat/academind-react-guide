/**
 * @param {Date} date
 */
export const formatDate = (date) => {
  const day = getDayString(date);
  const month = getMonthString(date);
  const year = date.getFullYear();

  return [year, month, day].join("-");
};

/**
 * @param {Date} date 
 * @return {string}
 */
const getMonthString = (date) => {
  const month = date.getMonth() + 1;

  return month > 9 ? `${month}` : `0${month}`
}

/**
 * @param {Date} date 
 * @return {string}
 */
 const getDayString = (date) => {
  const day = date.getDate();

  return day > 9 ? `${day}` : `0${day}`
}