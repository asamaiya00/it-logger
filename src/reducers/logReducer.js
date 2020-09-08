import {
  LOGS_ERROR,
  GET_LOGS,
  SET_LOADING,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  CLEAR_CURRENT,
  SET_CURRENT,
  SEARCH_LOGS,
} from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, payload],
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== payload),
        loading: false,
      };

    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) => (log.id === payload.id ? payload : log)),
      };

    case SEARCH_LOGS:
      return {
        ...state,
        logs: payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      console.log(payload);
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
