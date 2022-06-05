export default {
  getCatBreedColumn() {
    return ['Image', 'Name'];
  },
  getCatBreed(state) {
    return state.catBreeds;
  },
  getOriginMap(state) {
    return state.catOriginMap;
  },
};
