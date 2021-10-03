import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'default',
  },
  reducers: {
    darkTheme: (state) => {
      state.value = 'dark'
    },
    defaultTheme: (state) => {
      state.value = 'default'
    },
    toggleTheme: (state) => {
      state.value = state.value === 'dark' ? 'default' : 'dark'
    },
  },
})

export const { darkTheme, defaultTheme, toggleTheme } = themeSlice.actions

const themeSelector = (state) => state.theme.value

export { themeSelector }

export default themeSlice.reducer
