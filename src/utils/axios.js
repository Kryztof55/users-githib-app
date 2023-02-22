import axios from "axios";

export const axiosGetUrl = axios.create({
  baseURL: "https://api.github.com/search",
});

export const axiosGetUser = axios.create({
  baseURL: "https://api.github.com/users",
});

export const getUsersPage = async (query = "A", page = 1, per_page = 12) => {
  const response = await axiosGetUrl.get(
    `users?q=${query}&page=${page}&per_page=${per_page}`
  );
  return response.data;
};

export const getUserDetail = async (username) => {
  const response = await axiosGetUser.get(`${username}`);
  return response.data;
};
