import React from "react";
import { Box, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ListMenu from "./component/ListMenu";
import { typeData } from "./type";
function App() {
  const [selectedItems, setSelectedItems] = React.useState<typeData[]>([]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box margin={10}>
      <Button
        variant="outlined"
        onClick={handleClick}
        endIcon={open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      >
        {selectedItems.length > 0 ? selectedItems.map((item: typeData) => item.label).join(" / ") : "Chọn ngành hàng"}
      </Button>
      <ListMenu setSelectedItems={setSelectedItems} selectedItems={selectedItems} anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </Box>
  );
}

export default App;
