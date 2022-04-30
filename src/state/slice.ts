import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'slice',
    initialState: { data: [] },
    reducers: {
        fetchData(state, action) {
            state.data = action.payload.data
        },
    },
})

export const { fetchData } = slice.actions
export default slice.reducer
