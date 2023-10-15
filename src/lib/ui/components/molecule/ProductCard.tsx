import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Theme } from "@mui/material";
import { theme } from "$/utils/mui/theme";
import { ShowIcon } from "../../../../../public/svgs";

export default function ProductCard() {
  return (
    <Card sx={sxStyleCard}>
      <Button
        sx={{
          position: "absolute",
          top: "10px",
          right: "-40px",
          overflow: "visible",
          transition: "right 0.3s .1s",
        }}
      >
        <ShowIcon />
      </Button>
      <CardMedia
        component="img"
        height="140"
        image="/home/red/Projects/Arcaan/my-store/public/webp/19.webp"
        alt="green iguana"
      />

      <CardContent sx={sxStyleCardContent}>
        <Typography
          gutterBottom
          variant="subtitle2"
          component="p"
          sx={{ color: "#2B3445", fontWeight: 400, m: 0 }}
        >
          Yellow Casual Sweater
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#2B3445",
            fontSize: 17,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: 1.5,
            py: "4px",
          }}
        >
          $140.00
        </Typography>

        <CardActions sx={sxStyleCardActions}>
          <Button sx={sxStyleButton} variant="outlined" size="large">
            add to cart
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

// const CardButton = styled(Button)``;

const sxStyleCard = {
  position: "relative",
  maxWidth: 300,
  m: "4rem",
  border: "solid 1px #F6F9FC",
  borderRadius: "3px",
  "&:hover": { borderColor: "black" },
  transition: (theme: Theme) => theme.transitions.create(["border-color"]),
};

const sxStyleCardContent = {
  textAlign: "center",
  "&:last-child": {
    paddingBottom: "16px",
  },
};

const sxStyleCardActions = {
  p: 0,
};

const sxStyleButton = {
  width: "100%",
  textAlign: "center",
  textTransform: "capitalize",
  margin: 0,
  px: "15px",
  py: "5px",
  color: "#222",
  borderColor: " rgba(34, 34, 34, 0.5)",
  borderRadius: "3px",
  fontSize: "0.875rem",
  lineHeight: 1.75,
  fontWeight: 600,
  "&:hover": {
    color: "white",
    backgroundColor: "#222",
    borderColor: " rgba(34, 34, 34, 0.5)",
  },
};
