/* eslint-disable class-methods-use-this */
import dayjs from 'dayjs/esm';
import dayjsPluginUTC from 'dayjs/esm/plugin/utc';

dayjs.extend(dayjsPluginUTC);

export const useTimeFormat = () => {
  function dateShortFormat(t) {
    const time = dayjs(t).utc();
    return time.format('HH:mm:ss');
  }

  function getReadableTimeInFullFormat(value) {
    const time = Number(value);
    return new Date(time);
  }

  function getTodaysDate() {
    const todaysDate = new Date();
    return this.formatDate(todaysDate);
  }

  function formatDate(date) {
    const time = dayjs(date).utc();
    return time.format('YYYY MMMM DD');
  }

  function roundSecconds(time) {
    return new Date(time).setSeconds(time.getSeconds() < 30 ? 0 : 30);
  }

  return {
    dateShortFormat,
    getReadableTimeInFullFormat,
    getTodaysDate,
    formatDate,
    roundSecconds,
  };
};

export default useTimeFormat;
