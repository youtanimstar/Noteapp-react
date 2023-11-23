import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  note: [
    // {
    //   id: Date.now(),
    //   title: "lorem Ipsam dolor",
    //   description:
    //     "Now, your React app is set up with Redux. You can dispatch actions, update the state, and connect components to the Redux store as needed. Adjust the file and folder structure based on the complexity of your application.",
    // },
  ],
  currentNote: {
    id: Date.now(),
    title: "",
    description: "",
  },
  // currentID: Date.now(),
};

const notesSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state,action)=>{
        const data = {
            id: Date.now(),
            // id: action.payload.id,
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
    // filterNote: (state,action)=>{
    //     state.note = state.note.filter((ele)=>ele.title.toLowerCase().includes(action.payload.toLowerCase()));
    // },
    setCurrentNote: (state,action)=>{
        const ele = state.note.filter((ele)=>ele.id===action.payload);
        state.currentNote = ele[0];    
    },
    getAllData: (state)=>{
      state.note=JSON.parse(localStorage.getItem("note"));
    },
    setAllData: (state,action)=>{
      localStorage.setItem("note",JSON.stringify(state.note));
    }
  }
});

export const {addNote,deleteNote,updateNote,filterNote,setCurrentNote,currentNote, getAllData,setAllData} = notesSlice.actions;

export default notesSlice.reducer;
