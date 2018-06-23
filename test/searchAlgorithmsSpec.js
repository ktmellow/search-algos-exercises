'use strict'

let expect = require('chai').expect;
let Array = require('../searchAlgorithms').Array;
let positiveArr = [1,2,3,4,5,6];
let negativeArr = [-5,-4,-3,-2,-1];
let decimalArr = [1.1,2.4,5.5,5.6,5.7];

describe("#linearSearch", function(){
  
  it("does not use indexOf", function() {
    expect(positiveArr.linearSearch.toString()).to.not.contain('indexOf');
  });

  it("finds items in an array of positive numbers", function(){
    expect(positiveArr.linearSearch(3)).to.equal(2);
  });
  
  it("finds items in an array of negative numbers", function(){
    expect(negativeArr.linearSearch(-2)).to.equal(3);
  });
  
  it("finds items in an array of non-integers", function(){
    expect(decimalArr.linearSearch(1.1)).to.equal(0);
  });
  
  it("returns -1 when the item is not found", function(){
    expect(decimalArr.linearSearch(0)).to.equal(-1);
  });

});

describe("#binarySearch", function(){
  
  it("does not use indexOf", function() {
    expect(positiveArr.binarySearch.toString()).to.not.contain('indexOf');
  });
  
  it("finds items in an array of positive numbers", function(){
    expect(positiveArr.binarySearch(3)).to.equal(2);
  });
  
  it("finds items in an array of negative numbers", function(){
    expect(negativeArr.binarySearch(-2)).to.equal(3);
  });
  
  it("finds items in an array of non-integers", function(){
    expect(decimalArr.binarySearch(1.1)).to.equal(0);
  });
  
  it("returns -1 when the item is not found", function(){
    expect(decimalArr.binarySearch(0)).to.equal(-1);
  });

});