import {  createSlice } from "@reduxjs/toolkit";


const  initialState ={
    formData:[]
}

const  formSlice = createSlice({
    name:'formSlice',
    initialState,
    reducers:{
        updateForm:(state,{payload})=>{
            console.log({'updateform':payload})
            return {
                formData:payload
            }
        },
        addToForm:(state,{payload})=>{
            console.log({'addForm':payload})

            return{
                formData:[payload]
            }
        }
    }
})

export const {
    updateForm,
    addToForm
} = formSlice.actions


export const selectForm = (state)=>state.formSlice
export default formSlice.reducer;