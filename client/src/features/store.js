import { configureStore } from "@reduxjs/toolkit"
import workReducer from "./workSlice"
import { worksApi } from "./worksApi"

export const store = configureStore({
    reducer: {
        work: workReducer,
        [worksApi.reducerPath]: worksApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(worksApi.middleware)
})