// Solution:
function grow(x){
  return x.reduce((acc, item) => acc * item, 1)
}

// Test Cases:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {  
    assert.strictEqual(grow([1, 2, 3]), 6);
    assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
    assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 
  });
})
