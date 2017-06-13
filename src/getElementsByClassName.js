// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className) {
  return document.body;
};


//TEST SUITE

function test(className, testName) {
  let test = document.getElementsByClassName(className) === getElementsByClassName(className);

  console.log(test, testName);
  if (test === false) {
  	console.log('  result of actual func: ', document.getElementsByClassName(className));
  	console.log('  result of written func: ', getElementsByClassName(className));
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