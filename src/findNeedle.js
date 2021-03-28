const binarySearch = require('./binarySearch');
const isInBiggerSortedList = require('./isInBiggerSortedList');
const isInSmallerSortedList = require('./isInSmallerSortedList');

function getPivot(lowerIndex, upperIndex) {
  return Math.floor((lowerIndex + upperIndex) / 2);
}

function needleIsInSmallerSortedArray(needle, hay) {
  const last = hay[hay.length -1];
  return last >= needle;
}

function needleIsInBiggerSortedArray(needle, hay) {
  const first = hay[0];
  return needle >= first;
}

function findNeedleStep(lowerIndex, upperIndex, hay, needle) {
  if (lowerIndex > upperIndex) {
    return -1;
  }

  const pivot = getPivot(lowerIndex, upperIndex);
  const current = hay[pivot];

  function findLeft() {
    return findNeedleStep(lowerIndex, pivot - 1, hay, needle);
  }

  function findRight() {
    return findNeedleStep(pivot + 1, upperIndex, hay, needle);
  }

  if (current === needle) {
    // Found
    return pivot;
  } else if (current > needle) {
    // Finding a smaller value than current.
    if (isInSmallerSortedList(pivot, hay)) {
      return findLeft();
    } else {
      if (needleIsInBiggerSortedArray(needle, hay)) {
        return findLeft();
      } else {
        return findRight();
      }
    }
  } else {
    // Finding a bigger value than current.
    if (isInBiggerSortedList(pivot, hay)) {
      return findRight();
    } else {
      if (needleIsInSmallerSortedArray(needle, hay)) {
        return findRight();
      } else {
        return findLeft();
      }
    }
  }
}

module.exports = function findNeedle(hay, needle) {
  if (!hay || hay.length === 0) {
    return -1;
  }
  if (hay[0] > hay[hay.length - 1]) {
    return findNeedleStep(0, hay.length - 1, hay, needle);
  } else {
    return binarySearch(hay, needle);
  }
};
