import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getSortLabel } from "./../../../helper/getSortLabel";

const SortData = ({ sortBy, setSortBy }) => {
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: 280,
        "@media (max-width: 576px)": {
          width: "100%",
        },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {getSortLabel(sortBy)}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label={getSortLabel(sortBy)}
          onChange={handleChange}
        >
          <MenuItem value="popularity.desc">
            По популярности (убывание)
          </MenuItem>
          <MenuItem value="release_date.desc">По дате (убывание)</MenuItem>
          <MenuItem value="release_date.asc">По дате (возростание)</MenuItem>
          <MenuItem value="title.asc">По алфавиту (возростание)</MenuItem>
          <MenuItem value="title.desc">По алфавиту (убывание)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortData;
