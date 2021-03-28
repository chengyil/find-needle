module.exports = function isInSmallerSortedList(pivot, hay) {
  const current = hay[pivot];
  const first = hay[0];
  return first > current;
};
