export const selectFilters = (state) => state.filters;
export const selectLocation = (state) => state.filters.location;
export const selectType = (state) => state.filters.type;
export const selectFeatures = (state) => state.filters.features;
export const selectPage = (state) => state.filters.page;
export const selectLimit = (state) => state.filters.limit;

export const selectCampers = (state) => state.campers.items;
export const selectCampersLoading = (state) => state.campers.isLoading;
export const selectCampersError = (state) => state.campers.error;
