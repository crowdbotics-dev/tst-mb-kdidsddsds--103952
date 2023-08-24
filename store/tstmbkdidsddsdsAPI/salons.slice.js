import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_salon_list = createAsyncThunk(
  "salons/api_v1_salon_list",
  async payload => {
    const response = await apiService.api_v1_salon_list(payload)
    return response.data
  }
)
export const api_v1_salon_create = createAsyncThunk(
  "salons/api_v1_salon_create",
  async payload => {
    const response = await apiService.api_v1_salon_create(payload)
    return response.data
  }
)
export const api_v1_salon_retrieve = createAsyncThunk(
  "salons/api_v1_salon_retrieve",
  async payload => {
    const response = await apiService.api_v1_salon_retrieve(payload)
    return response.data
  }
)
export const api_v1_salon_update = createAsyncThunk(
  "salons/api_v1_salon_update",
  async payload => {
    const response = await apiService.api_v1_salon_update(payload)
    return response.data
  }
)
export const api_v1_salon_partial_update = createAsyncThunk(
  "salons/api_v1_salon_partial_update",
  async payload => {
    const response = await apiService.api_v1_salon_partial_update(payload)
    return response.data
  }
)
export const api_v1_salon_destroy = createAsyncThunk(
  "salons/api_v1_salon_destroy",
  async payload => {
    const response = await apiService.api_v1_salon_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const salonsSlice = createSlice({
  name: "salons",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_salon_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salon_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salon_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salon_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salon_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salon_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salon_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salon_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salon_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salon_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salon_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salon_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salon_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salon_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salon_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salon_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_salon_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_salon_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_salon_list,
  api_v1_salon_create,
  api_v1_salon_retrieve,
  api_v1_salon_update,
  api_v1_salon_partial_update,
  api_v1_salon_destroy,
  slice: salonsSlice
}
