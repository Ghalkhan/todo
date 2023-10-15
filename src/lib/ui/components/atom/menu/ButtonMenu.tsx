import React, { useState } from "react";
import { Button, Menu, MenuItem, SxProps } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

interface ButtonMenuProps {
  menuItem?: string[];
  children?: any;
  style?: SxProps;
  showIconButton?: boolean;
  onMouseOver?: () => void;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained" | undefined;
}
export function ButtonMenu(props: ButtonMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        onClick={handleClick}
        endIcon={props.showIconButton && <KeyboardArrowDownOutlinedIcon />}
        variant={props.variant}
        sx={props.style}
        onMouseOver={props.onMouseOver}
      >
        {props.children}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {props.menuItem !== undefined
          ? props.menuItem.map((item: string) => (
              <MenuItem onClick={handleClose}>{item}</MenuItem>
            ))
          : []}
      </Menu>
    </>
  );
}

ButtonMenu.defaultProps = {
  showIconButton: true,
  style: {
    color: "#2B3445",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "inherit",
      color: "#E3364E",
    },
  },
  variant: "text",
};
