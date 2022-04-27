import {createSlice} from '@reduxjs/toolkit'
import { createStructuredSelector } from 'reselect'

const slice = createSlice({
    name: "auth", 
    initialState: {
        admin : false,
        loggedIn : false,

    },
    reducers: {
        signIn:(state,action)=>{
                const {name, password} = action.payload;
                state.loggedIn = true;
                state.admin = true;
        },
        signOut:(state)=>
        {
                state.loggedIn = false;
                state.admin = false;
        },
        createUser:(state,action)=>{

        }
    }
    //functions
})


export default slice.reducer;

export const {signIn, signOut, createUser}= slice.actions;