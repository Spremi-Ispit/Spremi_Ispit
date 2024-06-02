//front
await services.get('/posts/user?username=someUsername&order=someOrder');

//back
postsRoutes.route('/posts/user').get(async (req, res) => {
  console.log(req.query); //{ username: 'someUsername', order: 'someOrder' }
});

//----Useful method for creating url query-----

export const createUrlQuery = (url, paramsDTO) => {
  return url + '?' + new URLSearchParams(paramsDTO);
  //func call:  createUrlQuery('/quotes', {page: 1, pageSize: 5})
  //func result: /quotes?page=1&pageSize=5
};

//******************DIFFERENCE BETWEEN QUERY AND PARAMS***************
// https://www.webmound.com/get-query-string-params-express-nodejs-route/?fbclid=IwAR3BDTJv-uaiOIcm5iVaboB8LWT42ci_Gr5u7n0bOPtrPLwkG2NldFdEj0A
