import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  note: [],
  currentNote: {
    id: Date.now(),
    title: "",
    description: "",
  },
};

const notesSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state,action)=>{
        const data = {
            id: Date.now(),
            title: action.payload.title,
            description: action.payload.description,
        }
        state.note.push(data);
        const ele = state.note.filter((ele)=>ele.id===data.id);
        state.currentNote = ele[0];

    },
    deleteNote: (state,action)=>{
        state.note= state.note.filter((ele)=>ele.id!==action.payload);

    },
    updateNote: (state,action)=>{
        state.note = state.note.map((ele)=>ele.id===action.payload.id?ele=action.payload:ele);
    },
    setCurrentNote: (state,action)=>{
        const ele = state.note.filter((ele)=>ele.id===action.payload);
        state.currentNote = ele[0];    
    },
    getAllData: (state,action)=>{
      state.note = action.payload;
    },
    setAllData: (action)=>{
      localStorage.setItem("note",JSON.stringify(action.payload));
    }
  }
});

export const {addNote,deleteNote,updateNote,filterNote,setCurrentNote,currentNote, getAllData,setAllData} = notesSlice.actions;

export default notesSlice.reducer;
