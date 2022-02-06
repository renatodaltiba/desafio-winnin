import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { SwitchThemeProvider, useSwitchTheme } from "@hooks/switchTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useSwitchTheme();

  return (
    <SwitchThemeProvider>
      <Component {...pageProps} />
    </SwitchThemeProvider>
  );
}

export default MyApp;
