import React, { Fragment, useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import DrawerComp from "../drawer/DrawerComp";

const PAGES = ["Products", "Services", "Contact", "About"];

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <PetsOutlinedIcon />
          {isMatches ? (
            <>
              <Typography sx={{fontSize: "1.5rem",paddingLeft: "10%"}}>PetVeterinary</Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} />
                ))}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                {" "}
                Sign in{" "}
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                {" "}
                Sign up{" "}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
