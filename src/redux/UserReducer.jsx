import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../components/Data";

const userSlice = createSlice({
  name: "users",
  initialState: [{ id: +"", name: "", email: "" }],
  // initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      //   console.log("action==>", action);
      //   console.log("state==>", state);
    },
    updateUser: (state, action) => {
      // console.log("update reducers =", action);

      const { id, name, email } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
