import Head from "next/head";

import { ReactComponentProps } from "$/utils/react";
import {
  MainLayoutContent,
  MainLayoutFooter,
  MainLayoutHeader,
} from "./main-layout-components";

interface MainLayoutProps extends ReactComponentProps {
  title: string;
}
export function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <MainLayoutHeader />
      <MainLayoutContent>{props.children}</MainLayoutContent>
      <MainLayoutFooter />
    </>
  );
}
