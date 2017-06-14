// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// You should use document.body, element.childNodes, and element.classList
function nodeHasClass(node, className) {
  let classes = node.classList;
  let hasClass = false;

  if(classes !== undefined) { 
    let values = classes.values()
    for(let val of values) {
      if (val === className) {
        hasClass = true;
      }
    }
  } 
  return hasClass;
}

function checkCurrNodeForClass(node, className, collection) {
  
  let classes = node.classList;
  
  if(nodeHasClass(node, className)) {
    collection.push(node);
  } 

  if(node.hasChildNodes()) {
    //recursive case
    
    for(let child of node.childNodes.values()) {
      checkCurrNodeForClass(child, className, collection);
    }

  } else {
    //base case
    return collection;
  } 
  //check the class of the current node, and push the nodes that have the classList
  //if the node has children, run the function for the children
  //if the node has no more children, return the collection.
}


function getElementsByClassName(className) {

  let elements = [];   
  elements.concat(checkCurrNodeForClass(document.body, className, elements));
  return elements;
};



//TEST SUITE

function test(className, testName) {

  let doc = (className) => document.getElementsByClassName(className);
  let func = (className) => getElementsByClassName(className);
  
  let test = func(className).every((val, i) => val === doc(className).item(i));
  
  console.log(test, testName);

  if (test === false) {
  console.log('  result of actual func: ', document.getElementsByClassName(className));
  console.log('  result of written func: ', getElementsByClassName(className));
  }
}

$(document).ready( function(){
  test("targetClassName", 'className "targetClassName"');
  test('progress', 'className is "progress"');
  test('suite', 'className is "suite"');
  test('test fail', 'className is "test" and "fail"');
});



