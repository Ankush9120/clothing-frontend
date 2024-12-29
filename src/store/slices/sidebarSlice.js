import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: false
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen
    },
    setSidebar: (state, action) => {
      state.isOpen = action.payload
    }
  }
})

export const { toggleSidebar, setSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
