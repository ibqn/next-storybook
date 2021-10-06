import { configureStore } from '@reduxjs/toolkit'

import themeReducer from 'slices/theme'
import dialogReducer from 'slices/dialog'

export default configureStore({
  reducer: {
    theme: themeReducer,
    dialog: dialogReducer,
  },
})
