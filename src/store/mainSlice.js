// Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

const initialState = {
    system_name: "CS-System",
    user_info: {
        access_token: "",
        // company: "",
        // email: "",
        name: "",
        cs_id: "",
    },
    snackbar:{
        isOpen: false,
        msg:""
    },
    isLogin:false,
    topbar:{
        title:"",
    },
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setUserInfo(state, action) {
            state.user_info = action.payload
            Cookies.set('access_token', state.user_info.access_token)
            // Cookies.set('company', state.user_info.company)
            // Cookies.set('email', state.user_info.email)
            Cookies.set('name', state.user_info.name)
            Cookies.set('cs_id', state.user_info.cs_id)
        },
        removeUserInfo(state, action) {
            state.user_info = {}
            Cookies.remove('access_token')
            // Cookies.remove('company')
            // Cookies.remove('email')
            Cookies.remove('name')
            Cookies.remove('cs_id')
        },
        setSnackbar(state, action) {
            state.snackbar = action.payload
        },
        setIsLogin(state, action) {
            state.isLogin = action.payload.value
        },
        setTopbar(state, action) {
            state.topbar = action.payload
        },
    },
})

export const { setUserInfo, 
    removeUserInfo, 
    setSnackbar, 
    setIsLogin, 
    setTopbar, 
} = mainSlice.actions

export default mainSlice.reducer