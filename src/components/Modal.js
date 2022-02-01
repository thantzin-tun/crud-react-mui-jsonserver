import React, { useEffect, useState } from "react";

import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  IconButton,
  Fab,
} from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import RestoreIcon from "@material-ui/icons/Restore";

import { makeStyles } from "@material-ui/core";

import "./table.css";

import { useSelector, useDispatch } from "react-redux";

import { putStudent } from "../Redux/Action";

import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      padding: theme.spacing(2),
      marginTop: "50px",
    },
    textField: {
      margin: theme.spacing(2),
    },
    diver: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
});

function Modal({ updateID, setBolOne }) {
  const classes = useStyles();
  const student = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  let handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  let handleSubmit = (e) => {
    const { name, roll_no, section, phone, major } = data;
    e.preventDefault();
    if (name && roll_no && section && phone && major) {
      dispatch(putStudent(updateID, data));
      setData({
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

  let myfunc = () => {
    let updateStudent = student.find((data) => data.id === updateID);
    // console.log(updateStudent);
    setData(updateStudent);
    //
  };

  useEffect(() => {
    myfunc();
  }, []);

  return (
    <>
      <motion.div
        className="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Grid container justifyContent="center">
          <Paper elevation={2} className={classes.paper} square>
            <div className={classes.diver}>
              <Typography variant="h5" align="center" className={classes.text}>
                Edit Student
              </Typography>
              <Fab color="secondary" size="medium">
                <ExitToAppIcon onClick={() => setBolOne(false)} />
              </Fab>
            </div>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Name"
                className={classes.textField}
                name="name"
                value={data.name}
                onChange={handleChange}
              ></TextField>
              <TextField
                variant="outlined"
                label="Roll-No"
                value={data.roll_no}
                name="roll_no"
                className={classes.textField}
                onChange={handleChange}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Section"
                value={data.section}
                name="section"
                className={classes.textField}
                onChange={handleChange}
              ></TextField>
              <Select
                variant="outlined"
                name="major"
                value={data.major}
                className={classes.textField}
                onChange={handleChange}
              >
                <MenuItem value="CS" name="CS">
                  CS
                </MenuItem>
                <MenuItem value="CT" name="CT">
                  CT
                </MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                label="Phone"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                className={classes.textField}
              ></TextField>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                endIcon={<RestoreIcon />}
              >
                Edit
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </motion.div>
    </>
  );
}

export default Modal;
