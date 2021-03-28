const binarySearch = require('@src/binarySearch');

describe('binarySearch', ()=>{
  it('should return -1 for [], 1', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });
  it('should return 0 for [1], 1', () => {
    expect(binarySearch([1], 1)).toBe(0);
  });
  it('should return -1 for [1], 0', () => {
    expect(binarySearch([1], 0)).toBe(-1);
  });
  it('should return -1 for [1], 2', () => {
    expect(binarySearch([1], 2)).toBe(-1);
  });
  it('should return 0 for [1,2], 2', () => {
    expect(binarySearch([1, 2], 2)).toBe(1);
  });
  it('should return 2 for [1,2,3,4,5,6], 3', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 3)).toBe(2);
  });
});
