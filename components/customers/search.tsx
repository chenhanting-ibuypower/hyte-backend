import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { Card, InputAdornment, OutlinedInput, SvgIcon } from "@mui/material";

import { Column, Table as ReactTable } from "@tanstack/react-table";

export const CustomersSearch = ({
  column,
  table,
}: {
  column: Column<any, any>;
  table: ReactTable<any>;
}) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <Card
      sx={{
        p: 2,
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(17, 25, 39)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 2px",
        overflow: "hidden",
        borderRadius: "20px",
        padding: "16px",
      }}
    >
      <OutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Search customer"
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action" fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        }
        value={(columnFilterValue ?? "") as string}
        onChange={(e) => column.setFilterValue(e.target.value)}
        sx={{ maxWidth: 500 }}
      />
    </Card>
  );
};
