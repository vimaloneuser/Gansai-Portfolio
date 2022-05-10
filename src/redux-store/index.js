import { configureStore } from '@reduxjs/toolkit'
import common from '../redux-store/redux-slices/common'

 const store = configureStore({
  reducer: {
    common
  },
})
export default store;