import Axios from "axios";

const client = Axios.create({
  baseURL: "https://api.punkapi.com/v2/"
});

export default client;
