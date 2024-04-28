import "./App.css";
import { Container, Typography } from "@mui/material";
import { MuiDataTable } from "./MuiDataTable";
import { useFetchMovies } from "./hooks/useFetchMovies";

const App = () => {
  const { films, loading } = useFetchMovies();

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
      <MuiDataTable loading={loading} films={films} />
    </Container>
  );
};

export default App;
