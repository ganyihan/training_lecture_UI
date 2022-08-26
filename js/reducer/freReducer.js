import { createSlice } from '@reduxjs/toolkit'

const freReducer = createSlice({
    name: 'frequency',
    initialState: {value: 'ID'},
    reducers: {
        setFrequency(state, action) {
            state.value = action.payload
        }
    }
})