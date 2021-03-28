const isInBiggerSortedList = require('@src/isInBiggerSortedList');

describe('isInBiggerSortedList', ()=>{
  it('should be true if pivot is 1 in [1]', () => {
    expect(isInBiggerSortedList(0, [1])).toBe(true);
  });
  it('should be false if pivot is 1 in [4,5,6,1,2,3]', () => {
    expect(isInBiggerSortedList(4, [4, 5, 6, 1, 2, 3])).toBe(false);
  });
  it('should be false if pivot is 5 in [4,5,6,1,2,3]', () => {
    expect(isInBiggerSortedList(1, [4, 5, 6, 1, 2, 3])).toBe(true);
  });
  it('should be true if pivot is 4 in [4,5,6,1,2,3]', () => {
    expect(isInBiggerSortedList(0, [4, 5, 6, 1, 2, 3])).toBe(true);
  });
});
