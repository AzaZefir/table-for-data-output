import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          sx={{
            "@media (max-width: 992px)": {
              display: "none",
            },
          }}
        >
          Фильмы
        </TableCell>
        <TableCell align="left">Описание</TableCell>
        <TableCell
          align="left"
          sx={{
            minWidth: "200px",
            "@media (max-width: 576px)": {
              display: "none",
            },
          }}
        >
          Дата выхода
        </TableCell>
        <TableCell
          sx={{
            "@media (max-width: 576px)": {
              display: "none",
            },
          }}
          align="left"
        >
          Понравилось
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
