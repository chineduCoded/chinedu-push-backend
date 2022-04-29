import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    works: [],
    users: []
}

export const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {
        getWorks: (state) => {
            // Get works
        }
    }
})

export const { getWorks } = workSlice.actions
export default workSlice.reducer