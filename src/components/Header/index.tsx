import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styles } from "./styles";
import logo from "../../Assets/images/logo.png";

// const pages = ["Charts Page", "Map Page", "User Comments Page"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({ sx = {} }) {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#F0F0F0",
        width: "100vw",
        padding: 0,
        ...sx,
      }}
    >
      <Container maxWidth="xl" sx={styles.container}>
        <Toolbar disableGutters sx={styles.headerContainer}>
          <img src={logo} alt="Logo" width="150" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              marginLeft: 4,
              mr: 2,
              display: { xs: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#1976d2",
              textDecoration: "none",
            }}
          >
            EVALUATION TASK
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
