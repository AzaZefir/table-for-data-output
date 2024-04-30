import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import "./App.css";
import { Container, Typography } from "@mui/material";
import { MuiDataTable } from "./MuiDataTable";
import { useFetchMovies } from "./hooks/useFetchMovies";
import { ThemeProvider } from "@mui/material/styles";
import { useThemeMode } from "./hooks/useThemeMode";
import { ColorModeContext } from "./context/ColorModeContext";

const App = () => {
  const { colorMode, theme } = useThemeMode();

  const { films, loading } = useFetchMovies();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            component="h1"
            sx={{ pb: 2, pt: 3 }}
            align="center"
          >
            Фильмы
          </Typography>
          <MuiDataTable loading={loading} films={films} />
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
