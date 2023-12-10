//******************PARAMS***************
//front
await services.get(`/posts/postId/${postId}`);

//back
postsRoutes.route('/posts/postId/:id').get(getPost);
export const getPost = async (req, res) => {
  console.log(req.params.id); //some number, for example: 1
};

//******************QUERY***************
//front
await services.get(`/posts/user?username=${username}&order=${order}`);

//back
postsRoutes.route('/user').get(getPostsByUsername);
export const getPostsByUsername = async (req, res) => {
  console.log(req.query); //{ username: 'admin', order: 'newest' }
};

//Usedful method for creating url query

export const createUrlQuery = (url, paramsDTO) => {
  return url + '?' + new URLSearchParams(paramsDTO);
  //func call:  urlBuilder.withURLSearchParams('/quotes', {page: 1, pageSize: 5})
  //func result: /quotes?page=1&pageSize=5
};

//******************DIFFERENCE BETWEEN QUERY AND PARAMS***************
// https://www.webmound.com/get-query-string-params-express-nodejs-route/?fbclid=IwAR3BDTJv-uaiOIcm5iVaboB8LWT42ci_Gr5u7n0bOPtrPLwkG2NldFdEj0A

//******************NOTE!***************
//Next example would not work as expected:
//"/posts/user?username=someUsername&order=someOrder" always hit "/posts/:id"

//-------------Example-------------
//front
await services.get(`/posts/1`);
//back
postsRoutes.route('/posts/:id').get(getPost);
console.log(req.params.id);

//front
await services.get('/posts/user?username=someUsername&order=someOrder');
//back
postsRoutes.route('/posts/user').get(getPostsByUsername);
console.log(req.query); //{ username: 'admin', order: 'newest' }
