import { configureStore } from '@reduxjs/toolkit'
// import drawerReducer from './drawerSlice'
import mainReducer from './mainSlice'
// import themeSlice from './themeSlice'

// -----------------------------------------------------------------------------

export const store = configureStore({
  reducer: {
    // drawer: drawerReducer,
    main: mainReducer,
    // theme: themeSlice,
  },
})