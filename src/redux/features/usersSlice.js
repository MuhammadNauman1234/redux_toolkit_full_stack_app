import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// add agency to database
export const agency = createAsyncThunk("createUser",async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5001/addagency", {
        data: formData,
      });
      const result = response.data;

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// retrieve agency from database
export const getUsers = createAsyncThunk(
  "getUsersData",
  async (orgs, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5001/agency");
      const result = response.data;
      return result;
    } catch (error) {
      return rejectWithValue("Opps found an error");
    }
  }
);

// Delete agency from database
export const deleteAgency = createAsyncThunk("createUser",async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:5001/deleteagency/${id}`);
      const result = response.data;

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// agencies Slice
export const users = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [agency.pending]: (state) => {
        state.loading = true;
    },

    [agency.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },

    [agency.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [getUsers.pending]: (state) => {
      state.loading = true;
    },

    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },

    [getUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [deleteAgency.pending]: (state) => {
        state.loading = true;
    },

    [deleteAgency.fulfilled]: (state, action) => {
      state.loading = false;
       const id = action.payload.id;
       if(id){
        console.log(id);
        state.users = state.users.filter((ele)=> ele._id !== id);
        console.log()
       }
    },

    [deleteAgency.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default users.reducer;
