import { AppBarHeaderHide, AppBarHeaderShow } from "$/lib/ui";
import { Box, CssBaseline, Toolbar } from "@mui/material";

export function MainLayoutHeader() {
  return (
    <Box>
      <CssBaseline />
      <Toolbar />
      <AppBarHeaderHide />
      <AppBarHeaderShow title="Test" />
    </Box>
  );
}
