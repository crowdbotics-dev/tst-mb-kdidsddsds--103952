import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_helloo_list = createAsyncThunk(
  "helloos/api_v1_helloo_list",
  async payload => {
    const response = await apiService.api_v1_helloo_list(payload)
    return response.data
  }
)
export const api_v1_helloo_create = createAsyncThunk(
  "helloos/api_v1_helloo_create",
  async payload => {
    const response = await apiService.api_v1_helloo_create(payload)
    return response.data
  }
)
export const api_v1_helloo_retrieve = createAsyncThunk(
  "helloos/api_v1_helloo_retrieve",
  async payload => {
    const response = await apiService.api_v1_helloo_retrieve(payload)
    return response.data
  }
)
export const api_v1_helloo_update = createAsyncThunk(
  "helloos/api_v1_helloo_update",
  async payload => {
    const response = await apiService.api_v1_helloo_update(payload)
    return response.data
  }
)
export const api_v1_helloo_partial_update = createAsyncThunk(
  "helloos/api_v1_helloo_partial_update",
  async payload => {
    const response = await apiService.api_v1_helloo_partial_update(payload)
    return response.data
  }
)
export const api_v1_helloo_destroy = createAsyncThunk(
  "helloos/api_v1_helloo_destroy",
  async payload => {
    const response = await apiService.api_v1_helloo_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const helloosSlice = createSlice({
  name: "helloos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_helloo_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_helloo_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_helloo_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_helloo_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_helloo_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_helloo_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_helloo_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_helloo_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_helloo_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_helloo_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_helloo_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_helloo_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_helloo_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_helloo_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_helloo_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_helloo_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_helloo_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_helloo_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_helloo_list,
  api_v1_helloo_create,
  api_v1_helloo_retrieve,
  api_v1_helloo_update,
  api_v1_helloo_partial_update,
  api_v1_helloo_destroy,
  slice: helloosSlice
}
