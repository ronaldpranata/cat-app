export default {
  getCatBreedColumn() {
    return ['Image', 'Name'];
  },
  getCatBreed(state) {
    return state.catBreeds;
  },
  getCatDetail(state) {
    return state.catDetail;
  },
  getOriginMap(state) {
    return state.catOriginMap;
  },
};
