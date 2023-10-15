import { Slide, useScrollTrigger } from "@mui/material";

interface ScrollShowProps {
  threshold: number;
  window?: () => Window;
  children: React.ReactElement;
}
export const ScrollShow: React.FC<ScrollShowProps> = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold,
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
};
