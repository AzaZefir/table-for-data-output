import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { genres } from "./../../../consts/index";
import { getFilterLabel } from "../../../helper/getFilterLabel";

const FilterData = ({ filter, setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: 250,
        "@media (max-width: 576px)": {
          width: "100%",
        },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {getFilterLabel(filter)}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label={getFilterLabel(filter)}
          onChange={handleChange}
        >
          {genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.name}>
              {genre.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterData;
