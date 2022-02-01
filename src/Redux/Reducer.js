import { Command } from "./Type";

const initialState = {
  loading: false,
  data: [],
  err: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Command.request:
      return {
        ...state,
        loading: true,
      };
    case Command.success:
      return {
        ...state,
        loading: false,
        data: action.jsonData,
      };
    case Command.failure:
      return {
        ...state,
        loading: false,
        err: action.err,
      };
    default:
      return state;
  }
};

export default Reducer;
