import React from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { listMenuProps, typeData } from "../type";
import data from "../config/data";

export default function ListMenu(props: listMenuProps) {
  const { anchorEl, open, handleClose, setSelectedItems, selectedItems } =
    props;
  const [newSelectedItems, setNewSelectedItems] =
    React.useState<typeData[]>(selectedItems);
  const handleItemClick = (item: typeData) => {
    if (item.level <= newSelectedItems.length) {
      const _newSelectedItems = [...newSelectedItems].slice(0, item.level - 1);
      setNewSelectedItems(() => [..._newSelectedItems, item]);
    } else {
      setNewSelectedItems((prev: typeData[]) => [...prev, item]);
    }
  };
  const handleSubmit = () => {
    setSelectedItems(newSelectedItems);
    handleClose();
  };
  React.useEffect(() => {
    setNewSelectedItems(newSelectedItems);
  }, [selectedItems]);
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={() => {
        handleClose();
        setNewSelectedItems(selectedItems);
      }}
    >
      <Box display={"flex"}>
        <Box display={"flex"} flexDirection={"column"}>
          {data?.map((option: typeData) => (
            <MenuItem
              onMouseEnter={() => handleItemClick(option)}
              style={{
                color:
                  newSelectedItems[0]?.id === option?.id ? "#1976d2" : "black",
              }}
            >
              {option.label}
              {option?.children ? <KeyboardArrowRightIcon /> : null}
            </MenuItem>
          ))}
        </Box>

        {newSelectedItems.map((item: typeData, index: number) => (
          <Box display={"flex"} flexDirection={"column"}>
            {item?.children?.map((chil: typeData) => {
              return (
                <MenuItem
                  onMouseEnter={() => handleItemClick(chil)}
                  onClick={handleSubmit}
                  style={{
                    color:
                      newSelectedItems[index + 1]?.id === chil?.id
                        ? "#1976d2"
                        : "black",
                  }}
                >
                  {chil.label}
                  {chil?.children ? <KeyboardArrowRightIcon /> : null}
                </MenuItem>
              );
            })}
          </Box>
        ))}
      </Box>
    </Menu>
  );
}
