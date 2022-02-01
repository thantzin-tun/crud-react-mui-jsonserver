import React from "react";

import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";

function Editing() {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <TextField
            variant="contained"
            label="Name"
            color="primary"
          ></TextField>
          <Button variant="contained" color="primary">
            Edit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Editing;
