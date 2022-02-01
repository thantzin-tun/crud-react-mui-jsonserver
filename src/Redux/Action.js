import { Command } from "./Type";
import axios from "axios";

export const Request = () => {
  return {
    type: Command.request,
  };
};

export const Success = (server) => {
  return {
    type: Command.success,
    jsonData: server,
  };
};
export const Failure = (errMessage) => {
  return {
    type: Command.failure,
    err: errMessage,
  };
};

export const fetchStudent = () => {
  return (dispatch) => {
    dispatch(fetchStudent);
    axios
      .get("http://localhost:3001/student")
      .then((res) => {
        const students = res.data;
        dispatch(Success(students));
      })
      .catch((err) => {
        dispatch(Failure(err));
      });
  };
};

export const editStudent = (newStudent) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/student", newStudent)
      .then((response) => {
        dispatch(fetchStudent());
      })
      .catch((err) => {
        dispatch(Failure(err));
      });
  };
};

export const deleteStudent = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/student/${id}`)
      .then((response) => {
        dispatch(fetchStudent());
      })
      .catch((error) => {
        alert("Connection Problem or something");
        console.log(error);
      });
  };
};

export const putStudent = (id, newStudent) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/student/${id}`, newStudent)
      .then((response) => {
        dispatch(fetchStudent());
      })
      .catch((error) => {
        alert("Connection Problem or something");
        console.log(error);
      });
  };
};
