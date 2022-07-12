// import everything from actions in api file as api
import * as api from '../api'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";

// Action Creators : return action (obj)
export const getPosts = () => async (dispatch) => { //redux thunk allows to add extra arrow function (func returns func)
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data })
    } 
    catch (error) {
        console.log(error.message)
    }
    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch(action)
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: CREATE, payload: data })
    } 
    catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data });
    } 
    catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } 
    catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({type: LIKE, payload: data})
    } 
    catch (error) {
        console.log(error);
        
    }
}