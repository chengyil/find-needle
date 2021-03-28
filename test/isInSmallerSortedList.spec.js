const isInSmallerSortedList = require('@src/isInSmallerSortedList');

describe('isInSmallerSortedList', ()=>{
  it('should be false if pivot is 1 in [1]', () => {
    expect(isInSmallerSortedList(0, [1])).toBe(false);
  });
  it('should be false if pivot is 1 in [1, 2]', () => {
    expect(isInSmallerSortedList(1, [1, 2])).toBe(false);
  });
  it('should be false if pivot is 1 in [4,5,6,1,2,3]', () => {
    expect(isInSmallerSortedList(1, [4, 5, 6, 1, 2, 3])).toBe(false);
  });
  it('should be true if pivot is 4 in [4,5,6,1,2,3]', () => {
    expect(isInSmallerSortedList(4, [4, 5, 6, 1, 2, 3])).toBe(true);
  });
});
