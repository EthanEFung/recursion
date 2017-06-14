// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList



function getElementsByClassName(className) {
  let elements = [];

  function checkNode(className, node) {
    console.log(node);  
    
    if(node !== null) {
      
      let classes = node.classList;
      let children = node.childNodes;
      console.log(node, children, classes)
      //first check to see if the current node has the required class
      for(let i = 0; i < classes.length; i++) {
          elements.push(node);
      }
      
      console.log(children.length)

      //then check to see if there are any child nodes
      for(let i = 0; i < children.length; i++){

        checkNode(className, children[i])
      } 
    }
  }
  checkNode(className, document.body);
  return elements
};

//TEST SUITE

const tag = (tag) => document.getElementsByTagName(tag);    
const doc = (className) => document.getElementsByClassName(className);
const func = (className) => getElementsByClassName(className);

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
