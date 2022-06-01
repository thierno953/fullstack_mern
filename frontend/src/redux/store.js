import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import blogSlice from "./features/blogSlice";


export default configureStore({
    reducer: {
        auth: AuthReducer,
        blog: blogSlice
    },
});
