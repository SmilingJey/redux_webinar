import { deleteTaskById, getProjectTasks, addTask as addTaskApi } from "../../utils/todoist-api";

export const TASKS_LOAD_SUCCESS = "TASKS_LOAD_SUCCESS"

export const ADD_TASK_SUCCESS = "TASK/ADD_SUCCESS";
export const ADD_TASK_REQUIEST = "TASK/ADD_REQUIEST";
export const ADD_TASK_ERROR = "TASK/ADD_ERROR";

export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";

export const addTask = (payload) => (dispatch) => {
    dispatch({
        type: ADD_TASK_REQUIEST,
    })
    return addTaskApi(payload)
     .then((res) => {
         dispatch({
            type: ADD_TASK_SUCCESS,
            payload: res
        })
     })
     .catch( (err)=> {
        dispatch({
            type: ADD_TASK_ERROR,
            payload: err.message
        })
     })
};

export const deleteTask = (payload) => (dispatch) => {
    deleteTaskById(payload)
     .then(() => {
         dispatch({
            type: DELETE_TASK_SUCCESS,
            payload
         })
     })
};

export const loadTasks = () => (dispatch) => {
    getProjectTasks()
     .then(res => {
        dispatch({
            type: TASKS_LOAD_SUCCESS,
            payload: res
        })
     })
};