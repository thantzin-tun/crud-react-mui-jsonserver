import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  Button,
  Divider,
} from "@material-ui/core";

import "./table.css";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { connect } from "react-redux";

import { deleteStudent, fetchStudent } from "../Redux/Action";

import { makeStyles } from "@material-ui/core";

import { motion } from "framer-motion";

import Modal from "./Modal";

const useStyles = makeStyles((theme) => {
  return {
    grid: {
      marginTop: "100px",
    },
    table: {
      marginTop: "30px",
      fontSize: "25px",
    },
    text: {
      color: "red",
      marginBottom: "30px",
    },
    modal: {
      marginTop: "130px",
    },
    paper: {
      padding: "30px 20px",
    },
    divider: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
    div: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    btn: {
      marginRight: "20px",
    },
  };
});

function StudentInfo({ fetchStudent, student, editStudent, deleteStudent }) {
  const classes = useStyles();
  const [bol, setBol] = useState(false);
  const [deleteID, setDeleteID] = useState("");

  const [updateID, setUpdateID] = useState("");
  const [bolone, setBolOne] = useState(false);

  useEffect(() => {
    fetchStudent();
  }, []);

  let handleDelete = (id) => {
    setBol((pre) => !pre);
    setDeleteID(id);
    setTimeout(() => {
      setBol((pre) => !pre);
    }, 3000);
  };

  let handleEdit = (id) => {
    setBolOne((pre) => !pre);
    setUpdateID(id);
  };

  return (
    <>
      <Grid container justifyContent="center" className={classes.grid}>
        <Grid item xs={11}>
          <Typography variant="h3" align="center" className={classes.text}>
            Student Information
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Roll-No</TableCell>
                  <TableCell align="center">Section</TableCell>
                  <TableCell align="center">Major</TableCell>
                  <TableCell align="center">Phone</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {student.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.roll_no}</TableCell>
                    <TableCell align="center">{row.section}</TableCell>
                    <TableCell align="center">{row.major}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">
                      <Button
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={() => handleEdit(row.id)}
                      ></Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        endIcon={<DeleteIcon />}
                        onClick={() => handleDelete(row.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      {bol ? (
        <motion.div
          className="modal"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
        >
          <Grid container justifyContent="center" className={classes.modal}>
            <Grid item xs={5}>
              <Paper elevation={2} className={classes.paper}>
                <Typography variant="h6">
                  Are you sure you want to delete?
                </Typography>
                <Divider className={classes.divider}></Divider>
                <div className={classes.div}>
                  <Button
                    color="primary"
                    size="small"
                    className={classes.btn}
                    onClick={() => setBol(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    onClick={() => deleteStudent(deleteID)}
                  >
                    Delete
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      ) : null}
      {bolone ? <Modal updateID={updateID} setBolOne={setBolOne} /> : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    student: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudent: () => dispatch(fetchStudent()),
    deleteStudent: (id) => dispatch(deleteStudent(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentInfo);
