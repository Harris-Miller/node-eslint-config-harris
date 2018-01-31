'use strict';

class TestClass {
  _private() {

  }
}

const instance = new TestClass();

// normally this will through an error because it has a leading _
// however in a test environment, it's ok to access private properties, because testing, obviously
instance._private();

// console log should be ok in test environment
console.log('i am in a test environment');
