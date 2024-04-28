import { useEffect, useState } from "react";
import { fetchMovies } from "../api/fetchMovies";

export const useFetchMovies = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Вызываем функцию fetchMovies для получения данных
        const data = await fetchMovies();
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

    // Cleanup-функция, вызываемая при размонтировании компонента
    return () => {
      // Мы не используем AbortController здесь, потому что fetchData будет завершено автоматически при размонтировании компонента
    };
  }, []);

  return { films, loading };
};
