import { createSlice } from '@reduxjs/toolkit'

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    value: false,
  },
  reducers: {
    showDialog: (state) => {
      state.value = true
    },
    hideDialog: (state) => {
      state.value = false
    },
    toggleDialog: (state) => {
      state.value = !state.value
    },
  },
})

export const { showDialog, hideDialog, toggleDialog } = dialogSlice.actions

const dialogSelector = (state) => state.dialog.value

export { dialogSelector }

export default dialogSlice.reducer
