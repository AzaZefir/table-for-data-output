import { $api } from "./api";

export const fetchMovies = async (sortBy, filter) => {
  const response = await $api.get(
    `api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&sort_by=${sortBy}&page=1&with_genres=${filter}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
      },
    }
  );
  return response.data;
};
