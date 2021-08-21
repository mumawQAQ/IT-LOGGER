import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};
export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      console.log(actions.payload);
      return {
        ...state,
        error: actions.payload,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: actions.payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, actions.payload],
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== actions.payload),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: actions.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === actions.payload.id ? actions.payload : log
        ),
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs: actions.payload,
      };
    default:
      return state;
  }
};
