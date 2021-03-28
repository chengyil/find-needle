const findNeedle = require('@src/findNeedle');

describe('findNeedle', ()=>{
  it('should return -1 for [], 1', () => {
    expect(findNeedle([], 1)).toBe(-1);
  });
  it('should return 0 for [1], 1', () => {
    expect(findNeedle([1], 1)).toBe(0);
  });
  it('should return -1 for [1], 0', () => {
    expect(findNeedle([1], 0)).toBe(-1);
  });
  it('should return -1 for [1], 2', () => {
    expect(findNeedle([1], 2)).toBe(-1);
  });
  it('should return 0 for [2,1], 2', () => {
    expect(findNeedle([2, 1], 2)).toBe(0);
  });
  it('should return 5 for [5,6,7,8,1,2,3,4], 2', () => {
    expect(findNeedle([5, 6, 7, 8, 1, 2, 3, 4], 2)).toBe(5);
  });
  it('should return 1 for [5,6,7,8,1,2,3,4], 6', () => {
    expect(findNeedle([5, 6, 7, 8, 1, 2, 3, 4], 6)).toBe(1);
  });
  it('should return 2 for [1,2,3,4,5,6], 3', () => {
    expect(findNeedle([1, 2, 3, 4, 5, 6], 3)).toBe(2);
  });
});
