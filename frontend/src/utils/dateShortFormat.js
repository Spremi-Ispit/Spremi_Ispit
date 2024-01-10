export const dateShortFormat = (time) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
};
