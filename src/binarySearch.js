function binarySearchStep(lowerIndex, upperIndex, hay, needle) {
  if (lowerIndex > upperIndex) {
    return -1;
  }
  const pivot = Math.floor((lowerIndex + upperIndex) / 2);
  const current = hay[pivot];
  if (current === needle) {
    return pivot;
  }
  if (current > needle) {
    return binarySearchStep(lowerIndex, pivot - 1, hay, needle);
  } else if (needle > current) {
    return binarySearchStep(pivot + 1, upperIndex, hay, needle);
  }
}
module.exports = function binarySearch(hay, needle) {
  return binarySearchStep(0, hay.length -1, hay, needle);
};
