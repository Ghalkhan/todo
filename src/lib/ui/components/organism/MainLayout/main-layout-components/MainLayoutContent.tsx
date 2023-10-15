import { ReactComponentProps } from "$/utils/react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { device } from "$/lib/ui/components/design";

export function MainLayoutContent(props: ReactComponentProps) {
  return <$ container>{props.children}</$>;
}
const $ = styled(Grid)`
  min-height: calc(100vh - 3.75rem);
  flex-direction: column;

  @media (${device("min", "md")}) {
    min-height: calc(100vh - 5.625rem);
  }
`;
