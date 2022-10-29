import { createTheme } from "@mui/material/styles";

/* Override css styles globally */
export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "rgb(229, 247, 60)",
          background: "linear-gradient(#6774ad 90%, #5262ab 30%)",
          width: "50%",
          height: "50px",
          padding: "5px",
          fontWeight: "bold",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          color: "rgb(229, 247, 60)",
          backgroundColor: "#1b2345",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
            color: "#5262ab",
            background: "linear-gradient(#d8dcec 90%, #6774ad 30%)",
          fontWeight: "bold",
        },
      },
    },
  },
});
