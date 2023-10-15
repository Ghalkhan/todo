import React from "react";
import { Box, Divider, Drawer, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import { ShoppingCard } from "../surfaces/ShoppingCard";
import { useSelector } from "react-redux";
import { ButtonMenu } from "./menu";
// import { selectCart } from "../../store/slice/cart-slice";

interface CustomDrawerProps {
  openDrawer: boolean;
  onClose: () => void;
}
export function CustomDrawer(props: CustomDrawerProps) {
  // const cart = useSelector(selectCart);
  // const cartQuantity = cart.totalQuantity;
  // const cartItem = cart.items;
  return (
    <>
      <Drawer
        open={props.openDrawer}
        onClose={props.onClose}
        anchor="right"
        sx={{ width: "380px" }}
      >
        <Box
          sx={{
            height: "74px",
            width: "340px",
            display: "flex",
            alignItems: "center",
            padding: "12px",
            gap: "10px",
          }}
        >
          <ShoppingBagOutlinedIcon sx={{ fontSize: "28px", margin: 0 }} />
          <Typography
            variant="caption"
            sx={{ color: "#000", fontSize: "18px" }}
          >
            {1} Item
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            height: "inherit",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            {/* {cartItem.map((item: any) => {
              return (
                <ShoppingCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  totalPrice={item.totalPrice}
                  srcImage={item.srcImage}
                />
              );
            })} */}
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "10px",
            }}
          >
            <ButtonMenu
              variant="contained"
              showIconButton={false}
              style={{ width: "100%", textTransform: "none" }}
            >
              Checkout Now (${})
            </ButtonMenu>
            <ButtonMenu
              variant="outlined"
              showIconButton={false}
              style={{ width: "100%", textTransform: "none" }}
            >
              View Cart
            </ButtonMenu>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
