import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSalesSlideoverOpen: false,
    activeContextSection: null, // 'lighting', 'plants', 'budget', 'livingWall', etc.
    selectedPlantPalette: [],
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSalesSlideover: (state) => {
            state.isSalesSlideoverOpen = !state.isSalesSlideoverOpen;
            if (!state.isSalesSlideoverOpen) {
                state.activeContextSection = null;
            }
        },
        setSalesSlideoverOpen: (state, action) => {
            state.isSalesSlideoverOpen = action.payload;
            if (!action.payload) {
                state.activeContextSection = null;
            }
        },
        setActiveContextSection: (state, action) => {
            state.activeContextSection = action.payload;
        },
        setSelectedPlantPalette: (state, action) => {
            state.selectedPlantPalette = action.payload;
        },
    },
});

export const {
    toggleSalesSlideover,
    setSalesSlideoverOpen,
    setActiveContextSection,
    setSelectedPlantPalette,
} = uiSlice.actions;
export default uiSlice.reducer;
