import API from "./index";

export const _register = async (data) => {
  const response = await API.post("/register", data);
  return response;
};
