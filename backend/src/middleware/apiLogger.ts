// @ts-nocheck

class DateNow {
  toString() {
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getFullYear() +
      '-' +
      (current_datetime.getMonth() + 1) +
      '-' +
      current_datetime.getDate() +
      ' ' +
      current_datetime.getHours() +
      ':' +
      current_datetime.getMinutes() +
      ':' +
      current_datetime.getSeconds();
    return formatted_date;
  }
}

var num = 0;

const apiLogger = (req, res, next) => {
  //     var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var method = req.method;
  var url = req.url;

  console.log(`${++num}. Method: ${method} ${url}`);
  // console.log(`Original url: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  console.log(`Time: ${new DateNow().toString()}`);
  next();
};

export default apiLogger;
