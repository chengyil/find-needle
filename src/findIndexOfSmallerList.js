const isInSmallerSortedList = require('./isInSmallerSortedList');

function findIndexOfSmallerListStep(lowerIndex, upperIndex, list) {
  const pivot = Math.floor((lowerIndex + upperIndex) / 2);

  function findLeft() {
    return findIndexOfSmallerListStep(lowerIndex, pivot - 1, list);
  }
  function findRight() {
    return findIndexOfSmallerListStep(pivot + 1, upperIndex, list);
  }
  if (isInSmallerSortedList(pivot, list)) {
    if (list[pivot - 1] > list[pivot]) {
      return pivot;
    } else {
      return findLeft();
    }
  } else {
    return findRight();
  }
}

module.exports = function findIndexOfSmallerList(list) {
  if (list[list.length - 1] > list[0]) {
    return 0;
  }
  return findIndexOfSmallerListStep(0, list.length - 1, list);
};
