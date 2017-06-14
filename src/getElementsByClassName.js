// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList

const HTMLCol = {

}


const tag = (tag) => document.getElementsByTagName(tag);  
const doc = (className) => document.getElementsByClassName(className);
const func = (className) => getElementsByClassName(className);

let getElementsByClassName = function(className) {
  let elements = [];
  Object.setPrototypeOf(elements, HTMLCollection.prototype);
  
  
  

  
  

  

  return elements;
  //should return a collection of DOM elements that have the className.
  //each item should show what sort of node it is nested in (<div>, <body>, etc. and the className)
    //e.g div.className or body.className
};


/*
  What is the base case: There are no more nodes to look into
  What is the recursive case: There are other nodes that must be looked into
*/


//TEST SUITE

function test(className, testName) {
  let test = doc(className) === func(className);
  console.log(test, testName);

  if (test === false) {
    console.log('  result of actual func: ', doc(className));
    console.log('  result of written func: ', func(className));
  }
}

test('targetClassName', 'should work for classes of multiple DOM nodes');
test('progress', 'should work for items in a list');
test('suite', 'should work for items in a list');
test('test fail', 'should work for nested items');
/*

  The actual function renders an HTMLCollection, which is a collection of the 
    elements with the given class name.  This Collection is live, and changes
    with the deletion, or instantiation of elements with the same name.

    HTMLCollection(s) have a property of length, and has a method called .item()
    which can be called on each of the items in the collection given a 0 based
    index.  Or can used namedItem() for non-numeric based named attributes.



  Can utilze Array methods
  should check the childNodes of each node in the DOM
*/