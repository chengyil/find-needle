const findIndexOfSmallerList = require('@src/findIndexOfSmallerList');

describe('findIndexOfSmallerList', () => {
  it('should return 0 if [1,2,3]', () => {
    expect(findIndexOfSmallerList([1, 2, 3])).toBe(0);
  });
  it('should return 3 if [6,7,8,1,2,3,4,5]', () => {
    expect(findIndexOfSmallerList([6, 7, 8, 1, 2, 3, 4, 5])).toBe(3);
  });
  it('should return 5 if [4,5,6,7,8,1,2,3]', () => {
    expect(findIndexOfSmallerList([4, 5, 6, 7, 8, 1, 2, 3])).toBe(5);
  });
  it('should return 4 if [5,6,7,8,1,2,3,4]', () => {
    expect(findIndexOfSmallerList([5, 6, 7, 8, 1, 2, 3, 4])).toBe(4);
  });
  it('should return 7 if [2,3,4,5,6,7,8,1]', () => {
    expect(findIndexOfSmallerList([2, 3, 4, 5, 6, 7, 8, 1])).toBe(7);
  });
});
