import axios from "./_api";

export const loginUser = (userBody) => axios.post("/users/login", userBody);
export const getMe = () => axios.get("/users/me");
export const signupUser = (userBody) => axios.post("/users/signup", userBody);
export const logoutUser = () => axios.get("/users/logout");
