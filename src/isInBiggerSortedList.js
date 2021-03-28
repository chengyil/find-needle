module.exports = function isInBiggerSortedList(pivot, hay) {
  const current = hay[pivot];
  const first = hay[0];
  return current >= first;
};
