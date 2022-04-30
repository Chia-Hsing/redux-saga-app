import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const adapter = createEntityAdapter()

const initialState = adapter.getInitialState({ sortComparer: (a: any, b: any) => b.id - a.id })

const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        fetchData(state, action) {
            adapter.upsertMany(state, action.payload.data)
        },
    },
})

export const { selectAll } = adapter.getSelectors()
export const { fetchData } = slice.actions
export default slice.reducer
