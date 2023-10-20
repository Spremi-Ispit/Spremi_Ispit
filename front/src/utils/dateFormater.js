export function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export const getTodaysDate = () => {
  let todaysDate = new Date();
  return formatDate(todaysDate);
};

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Maj',
  'Jun',
  'Jul',
  'Avg',
  'Sep',
  'Okt',
  'Nov',
  'Dec',
];

export function formatBeautifulDate(date) {
  //date = 2022-12-03 -> 3 Dec

  var d = new Date(date),
    month = '' + months[d.getMonth()],
    day = '' + d.getDate();
  return day + ' ' + month;
}
