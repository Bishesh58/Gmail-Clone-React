import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
    count: 0,
  },
  reducers: {

    selectedMail: (state, action) =>{
      state.selectedMail = action.payload;
    },

    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    },
    coutTotalMail: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const {openSendMessage, closeSendMessage, selectedMail, coutTotalMail } = mailSlice.actions;

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export const selectOpenMail = state => state.mail.selectedMail;


export default mailSlice.reducer;
