import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Фильмы</TableCell>
        <TableCell align="left">Описание</TableCell>
        <TableCell align="left" sx={{ minWidth: "100px" }}>
          Дата выхода
        </TableCell>
        <TableCell align="left">Понравилось</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
