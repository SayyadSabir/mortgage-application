import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type OverviewState = {
  apiOverview: any;
}

const initialState: OverviewState = {
  apiOverview: {},
};

const overviewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {
    setApiOverview: (state, action: PayloadAction<any>) => {
      state.apiOverview = action.payload;
    },
  },
});

export const { setApiOverview } = overviewSlice.actions;
export default overviewSlice.reducer;