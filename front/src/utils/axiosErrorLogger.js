export const axiosErrorLoger = (error) => {
  if (error.response) {
    console.log(
      `Request made, but the server responded with an error, check response.data `,
      error
    );
  } else if (error.request) {
    console.log(
      `Request made but no response is received from the server, check response.request `,
      error
    );
  } else {
    console.log(`Error occured while setting up the request `, error);
  }
};
