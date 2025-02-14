'use client';

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from 'next-themes';
import { useMemo } from 'react';

export function Providers({ children }) {
  const { theme } = useTheme();

  // Create MUI theme based on the current theme
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme === 'dark' ? 'dark' : 'light',
        },
      }),
    [theme]
  );

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MUIThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </NextThemesProvider>
  );
}