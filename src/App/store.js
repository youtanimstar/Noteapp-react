import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../Features/notesSlice"

const store = configureStore({
    reducer: noteReducer
});

export default store;