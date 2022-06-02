import { ADD_TASK_SUCCESS, DELETE_TASK_SUCCESS, TASKS_LOAD_SUCCESS, ADD_TASK_REQUIEST, ADD_TASK_ERROR } from "./actions";

const initialState = {
  data: [],
  taskSending: false,
  taskAddError: null
};

export const reducer = (state = initialState, action) => {
    console.log(state)
    console.log(action)


  switch (action.type) {
    case TASKS_LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case ADD_TASK_REQUIEST:
      return {
        ...state,
        taskSending: true,
        taskAddError: null
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        taskSending: false
      };
    case ADD_TASK_ERROR:
      return {
        ...state,
        taskAddError: action.payload,
        taskSending: false
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        data: state.data.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};