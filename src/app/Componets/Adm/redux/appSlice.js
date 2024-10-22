import { createSlice } from '@reduxjs/toolkit'




const appSlice = createSlice({
    name: "app",
    initialState: {
      msgText: "",
      msgType: "",
      msgShow: false,
      username: "",
      fullname: "",
    },
    reducers: {
      showMsg: (state, action) => {
        state.msgText = action.payload.msgText;
        state.msgType = action.payload.msgType || "success";
        state.msgShow = true;
      },
      hideMsg: (state) => {
        state.msgShow = false;
      },
      setProfile: (state, action) => {
        state.username = action.payload.username;
        state.fullname = action.payload.fullname;
      },
    },
  });
  
  export const { showMsg, hideMsg, setProfile } = appSlice.actions;
  export default appSlice.reducer;
  