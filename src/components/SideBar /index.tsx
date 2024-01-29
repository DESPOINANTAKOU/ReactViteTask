import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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
              backgroundColor: "#f2f2f0",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            {["Project Selection Page", "NLP"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <CheckCircleOutlineIcon sx={{ marginRight: "1rem" }} />
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List sx={{ marginTop: "calc(100vh - 16rem)" }}>
            {["Log Out"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  {" "}
                  <CheckCircleOutlineIcon sx={{ marginRight: "1rem" }} />
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
}