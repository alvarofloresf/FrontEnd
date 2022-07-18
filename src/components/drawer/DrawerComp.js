import React, { Fragment, useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const PAGES = ["Home", "Users", "About"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <ListItem>
            <SignIn />
          </ListItem>
          <ListItem>
            <SignUp />
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "White", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
};

export default DrawerComp;
