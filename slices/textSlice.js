import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios';

const initialState = {
    text : [],
    changeText:'false',
    modal:'false',
    random:''
}

export const dataSlice = createSlice({
    name:'textData',
    initialState,
    reducers: {
        getData : (state, action) => {
            // console.log(action.payload)
            state.text = action.payload
        },
        changeTxt : (state, action) => {
            // console.log(action.payload)
            state.changeText = action.payload
        },
        modalControl: (state, action)  => {
            state.modal = action.payload
        },
        randomNumber: (state, action) => {
            state.random = action.payload
        }
    }
});

export const getData = () => async(dispatch) => {
    try {
        const json = await axios.get('https://raw.githubusercontent.com/javialcocer/test-json/main/data.json')
        // console.log(json);
        dispatch(dataSlice.actions.getData(json.data))
    } catch (error) {
        console.log(error)
    }
}

export const changeTxt = (boolean) => (dispatch) => {
    try {
        dispatch(dataSlice.actions.changeTxt(boolean));
    } catch (error) {
        console.log(error)
    }
}

export const modalControl = (boolean) => (dispatch) => {
    try {
        dispatch(dataSlice.actions.modalControl(boolean));
    } catch (error) {
        console.log(error)
    }
}

export const randomNumber = () => (dispatch) => {

    var min = 1000;
    var max = 20000;
    var number = Math.floor(Math.random()*(max - min)+min);
    try {
       dispatch(dataSlice.actions.randomNumber(number)) ;
    } catch (error) {
        console.log(error)
    }
} 

export default dataSlice.reducer;