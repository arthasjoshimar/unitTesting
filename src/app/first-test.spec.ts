describe('First Tests', () => {
  let testVariable: any;

  beforeEach(() => {
    testVariable = {};
  });

  it('should return true if a is true', () => {
    //arrange: initialice the data
    testVariable.a = false;
    //act
    testVariable.a = true;
    //assert
    expect(testVariable.a).toBe(true);
  });
});
