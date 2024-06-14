import { ThemeOptions, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

export const myThemeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#f97316',
            contrastText: '#FFF',
        },
    },
    typography: {
        fontFamily: 'calibri',
        fontWeightLight: 'bold',
        button: {
            fontSize: 18,
        },
    },
};

export const myTheme = createTheme(myThemeOptions);

interface ThemeComponentType {
    children: ReactNode;
}

export default function MainThemeProvider({ children }: ThemeComponentType) {
    return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
}
