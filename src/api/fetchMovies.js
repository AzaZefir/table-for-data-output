import { $api } from "./api";
export const fetchMovies = async () => {
  const response = await $api.get(`account/11734084/favorite/movies`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
    },
  });
  return response.data;
};
