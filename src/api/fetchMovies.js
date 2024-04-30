import { $api } from "./api";

export const fetchMovies = async () => {
  const response = await $api.get(`api_key=${import.meta.env.VITE_API_KEY}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
    },
  });
  return response.data;
};
