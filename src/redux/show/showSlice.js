import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShow = createAsyncThunk('show/fetchshow', async () => {
  const resp = await axios.get('https://api.tvmaze.com/shows');
  return resp.data.map((show) => ({
    id: show.id,
    url: show.url,
    name: show.name,
    language: show.language,
    genres: show.genres,
    runtime: show.runtime,
    averageRunTime: show.averageRuntime,
    started: show.premiered,
    ended: show.ended,
    time: show.schedule.time,
    day: show.schedule.days,
    rating: show.rating.average,
    popularity: show.weight,
    image: show.image.original,
    summary: show.summary,
  }));
});

const initialState = {
  shows: [],
  error: undefined,
  loading: false,
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShow.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchShow.fulfilled, (state, action) => {
      state.loading = false;
      state.shows = action.payload;
    });
    builder.addCase(fetchShow.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default showSlice.reducer;
