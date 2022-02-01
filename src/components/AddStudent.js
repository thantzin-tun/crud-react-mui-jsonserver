import React, { useState } from "react";

import {
  Button,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

import { useDispatch } from "react-redux";

import { editStudent } from "../Redux/Action";

const useStyles = makeStyles((theme) => {
  return {
    textField: {
      marginBottom: "17px",
    },
    btn: {
      marginTop: "20px",
      [theme.breakpoints.down("sm")]: {
        backgroundColor: "yellow",
        color: "black",
      },
    },
    grid: {
      marginTop: "100px",
    },
  };
});

function AddStudent() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [student, setStudent] = useState({
    id: "",
    name: "",
    roll_no: "",
    major: "",
    section: "",
    phone: "",
  });

  let handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  let handleSubmit = (e) => {
    const { name, roll_no, section, phone, major } = student;
    e.preventDefault();
    if (name && roll_no && section && phone && major) {
      dispatch(editStudent(student));
      setStudent({
        name: "",
        roll_no: "",
        major: "",
        section: "",
        phone: "",
      });
    } else {
      alert("Try again!");
    }
  };
  return (
    <>
      <Grid container justifyContent="center" className={classes.grid}>
        <Grid item xs={10} sm={6} md={8}>
          <Typography variant="h4" align="left" color="textSecondary">
            Add New Student
          </Typography>
          <TextField
            variant="standard"
            label="Name"
            color="primary"
            fullWidth
            type="text"
            value={student.name}
            className={classes.textField}
            name="name"
            autoComplete="off"
            onChange={handleChange}
          ></TextField>
          <TextField
            variant="standard"
            label="Roll No"
            color="primary"
            fullWidth
            type="text"
            className={classes.textField}
            value={student.roll_no}
            name="roll_no"
            onChange={handleChange}
          ></TextField>

          <Select
            labelId="demo-simple-select-label"
            variant="standard"
            value={student.major}
            onChange={handleChange}
            name="major"
            className={classes.textField}
            fullWidth
          >
            <MenuItem value="CS" name="CS">
              CS
            </MenuItem>
            <MenuItem value="CT" name="CT">
              CT
            </MenuItem>
          </Select>

          <TextField
            variant="standard"
            label="Section"
            color="primary"
            fullWidth
            type="text"
            className={classes.textField}
            value={student.section}
            name="section"
            onChange={handleChange}
          ></TextField>
          <TextField
            variant="standard"
            label="Phone"
            color="primary"
            fullWidth
            type="text"
            value={student.phone}
            name="phone"
            onChange={handleChange}
          ></TextField>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default AddStudent;
