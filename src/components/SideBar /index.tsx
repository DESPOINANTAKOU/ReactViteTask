import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const drawerWidth = 240;

export default function SideBar() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          sx={{
            // backgroundColor: "#e6ebe7",
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              marginTop: "4.5rem",
              backgroundColor: "#F0F0F0",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            {["Chart Page", "Map Page", "User Comments Page"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ArrowCircleRightIcon
                      sx={{ marginRight: "1rem" }}
                      color="primary"
                    />
                    <ListItemText primary={text} sx={{ color: "#1976d2" }} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <List sx={{ marginTop: "calc(100vh - 19rem)" }}>
            {["Log Out"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  {" "}
                  <ArrowCircleRightIcon
                    sx={{ marginRight: "1rem" }}
                    color="primary"
                  />
                  <ListItemText primary={text} sx={{ color: "#1976d2" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
}
