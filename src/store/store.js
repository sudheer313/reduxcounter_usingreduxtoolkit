import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./index";

export default configureStore({
  reducer: {
    counterData: counterReducer,
  },
});
