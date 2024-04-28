import { useEffect, useState } from "react";
import { fetchMovies } from "../api/fetchMovies";

export const useFetchMovies = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [filter, setFilter] = useState(28);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Вызываем функцию fetchMovies для получения данных
        const data = await fetchMovies(sortBy, filter);
        // Обновляем состояние films с данными из ответа
        setFilms(data);
        setLoading(false);
      } catch (error) {
        // Обработка ошибок
        console.error("Error fetching films:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [sortBy, filter]);

  return { films, loading, sortBy, setSortBy, filter, setFilter };
};
