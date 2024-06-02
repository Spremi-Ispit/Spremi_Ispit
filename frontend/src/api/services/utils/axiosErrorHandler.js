export default function axiosErrorHandler(error) {
  if (error.response) {
    throw new Error(
      `Request made, but the server responded with an error: ${error.response.data.response}.`
    );
  } else if (error.request) {
    throw new Error(
      `Request made but no response is received from the server. `
    );
  } else {
    throw new Error(`Error occured while setting up the request`);
  }
}
