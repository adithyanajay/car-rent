import { createSlice } from "@reduxjs/toolkit";
import { cars } from "../../../Api/data";

export const contentSlice = createSlice({
    name: "content",
    initialState: {
        data: cars,
        empty: false
    },
    reducers: {
        defaultContent: (state)=>{
            state.data = cars,
            state.empty = false
        },
        updateContent: (state, action) => {
            state.data = cars.filter(data=>(data.carName.replace(/\s/g, "").toLowerCase().includes(action.payload.replace(/\s/g, "").toLowerCase()))),
            state.empty= state.data.length==0?true:false
        }
    }
})


export const { updateContent, defaultContent } = contentSlice.actions;
export default contentSlice.reducer;

