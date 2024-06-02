//front
await services.get(`/posts/1`);

//back
postsRoutes.route('/posts/:id').get(async (req, res) => {
  console.log(req.params.id);
});

//******************DIFFERENCE BETWEEN QUERY AND PARAMS***************
// https://www.webmound.com/get-query-string-params-express-nodejs-route/?fbclid=IwAR3BDTJv-uaiOIcm5iVaboB8LWT42ci_Gr5u7n0bOPtrPLwkG2NldFdEj0A
