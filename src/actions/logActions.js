import {
  GET_LOGS,
  ADD_LOG,
  SET_LOADING,
  LOGS_ERROR,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./types";
// export const getLogs = () => {
//   return async (dispatch, getState) => {
//     setLoading();
//
//     const res = await fetch("./logs");
//     const data = await res.data();
//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("./logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText,
    });
  }
};
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`./logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("./logs", {
      method: "post",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText,
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`./logs/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = (log) => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`./logs/${log.id}`, {
      method: "put",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText,
    });
  }
};
