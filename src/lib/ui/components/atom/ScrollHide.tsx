import { Slide, useScrollTrigger } from "@mui/material";

interface ScrollHideProps {
  threshold: number;
  window?: () => Window;
  children: React.ReactElement;
}
export const ScrollHide: React.FC<ScrollHideProps> = (props) => {
  const { children, window, threshold } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={true} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
