/* eslint-disable class-methods-use-this */
import dayjs from 'dayjs/esm';
import dayjsPluginUTC from 'dayjs/esm/plugin/utc';

dayjs.extend(dayjsPluginUTC);

export const useTimeFormat = () => {
  const timeFormat = {
    ss: 'ss',
    mm_ss: 'mm:ss',
    HH_mm_ss: 'HH:mm:ss',
    HH_mm_ss_SS: 'HH:mm:ss:SSS',
    HH_mm: 'HH:mm',
    YYYY_MMMM_DD: 'YYYY MMMM DD',
    DD_MM: 'DD/MM',
    YYYY_MM_DD_HH_mm_ss: 'YYYY-MM-DD | HH:mm:ss',
  };

  function formatDate(date, format) {
    const time = dayjs(date).utc();
    return time.format(format);
  }

  return {
    formatDate,
    timeFormat,
  };
};

export default useTimeFormat;

export const timeLogger = (time) =>
  new Date(time).toLocaleString('sr-RS', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

export const timeLogger2 = (time) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
};
