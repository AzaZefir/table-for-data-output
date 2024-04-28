import "./App.css";
import { Container, Typography } from "@mui/material";
import { MuiDataTable } from "./MuiDataTable";
import { useFetchMovies } from "./hooks/useFetchMovies";

const App = () => {
  const { films, loading, sortBy, setSortBy, filter, setFilter } =
    useFetchMovies();
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 2, mt: 3 }}
        align="center"
      >
        Фильмы
      </Typography>
      <MuiDataTable
        loading={loading}
        films={films}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filter={filter}
        setFilter={setFilter}
      />
    </Container>
  );
};

export default App;
