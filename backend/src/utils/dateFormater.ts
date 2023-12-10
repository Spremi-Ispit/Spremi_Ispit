// @ts-nocheck
export function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    hours = d.getHours(),
    minutes = d.getMinutes(),
    seconds = d.getSeconds();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  let myDate = [year, month, day].join('-');
  let time = [hours, minutes, seconds].join('-');

  return myDate + ' ' + time;
}

export const getTodaysDate = () => {
  let todaysDate = new Date();
  return formatDate(todaysDate);
};
