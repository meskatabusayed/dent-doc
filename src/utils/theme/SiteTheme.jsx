import { ThemeProvider, createTheme } from "@mui/material";



const theme = createTheme({
    palette : {
        primary : {
            main : "#01BDB2",
            contrastText : "white"
        },
        secondary : {
            main : "#142959"
        }
    }

})

const SiteTheme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    
        
    );
};

export default SiteTheme;