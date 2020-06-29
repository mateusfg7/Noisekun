import dotenv from "dotenv";
dotenv.config();

const HOST =
  process.env.REACT_APP_DEFAULT_HOST ?? "https://noisekun-server.herokuapp.com";

export { HOST };
