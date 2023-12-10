const serialize = (err) => JSON.stringify(err, Object.getOwnPropertyNames(err));

export default serialize;
