import { configureStore } from '@reduxjs/toolkit'
import searchReducer from "../feature/search/searchSlice"
import contentReducer from "../feature/content/contentSlice"
export const store = configureStore({
  reducer: {
    search: searchReducer,
    content: contentReducer,

  },
})