import deepClone from 'deep-clone';
import * as _ from 'lodash';

export default {
  getCatBreedColumn() {
    return ['', 'name'];
  },
  getCatBreed(state) {
    return deepClone(state.catBreeds);
  },
  getCatList(state) {
    return deepClone(state.catList);
  },
  getCatDetail(state) {
    return deepClone(state.catDetail);
  },
};
