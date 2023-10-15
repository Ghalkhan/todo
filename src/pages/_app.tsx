import { theme } from "$/utils/mui/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/effect-cards";
import "$/globals.css";
import { NextIntlProvider } from "next-intl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [rtl, setRtl] = useState(locale === "fa" ? true : false);
  useEffect(() => {
    setRtl(locale === "fa" ? true : false);
  }, [locale]);
  return (
    <ThemeProvider theme={theme}>
      {/* <NextIntlProvider messages={pageProps.messages}> */}
      {/* <div dir={rtl ? "rtl" : "ltr"}> */}
      <Component {...pageProps} />
      {/* </div> */}
      {/* </NextIntlProvider> */}
    </ThemeProvider>
  );
}
