import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const Primary = "#83A515";
const Secondary = "#1F2640";
const BodyBG = "#fafafa";


export const theme = () => {
  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1440,
        xl: 1440
      }
    },
    palette: {
      primary: {
        main: Primary,
        contrastText: "#fff"
      },
      secondary: {
        main: Secondary,
        contrastText: "#000"
      },
      background: {
        default: BodyBG
      },
      text: {
        primary: "#42484b",
        secondary: "#7788A3",
        placeholder: "#b3b3b3"
      }
    },
    typography: {
      fontFamily: '"Roboto"'
    }
  });
};

const MUITheme = props => {
  return (
    <MuiThemeProvider theme={theme()}>
        {props.children}
    </MuiThemeProvider>
  );
};

export default MUITheme
