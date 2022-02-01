import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    app: {
      backgroundColor: "#ffff",
      color: "black",
    },
    div: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  };
});

function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <AppBar className={classes.app}>
        <Toolbar className={classes.div}>
          <Typography variant="h4" onClick={() => history.push("/")}>
            ADD
          </Typography>
          <Typography variant="h4" onClick={() => history.push("/information")}>
            INFORMATION
          </Typography>
        </Toolbar>
      </AppBar>

      <div>{children}</div>
    </>
  );
}

export default Layout;
