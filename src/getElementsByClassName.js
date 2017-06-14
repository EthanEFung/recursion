// You should use document.body, element.childNodes, and element.classList
function currentNodeHasClass(node, className) {

  let hasClass = false;

  if(node.classList !== undefined) { 
    let classValues = node.classList.values();
    for(let val of classValues) {
      if (val === className) {
        hasClass = true;
      }
    }
  } 

  return hasClass;

}


function renderCollection(node, className, collection) {
  
  if(currentNodeHasClass(node, className)) {
    collection.push(node);
  } 

  if(node.hasChildNodes()) { // Recursive Case
    for(let childNode of node.childNodes.values()) {
      renderCollection(childNode, className, collection);
    }
  } else {  // Base Case
    return collection;
  } 

}


function getElementsByClassName(className) {
  let elements = [];   
  elements.concat(renderCollection(document.body, className, elements));
  return elements;
};



// //TEST SUITE

// function test(className, testName) {

//   let actualFunc = (className) => document.getElementsByClassName(className);
//   let myFunc = (className) => getElementsByClassName(className);
  
//   let test = myFunc(className).every((val, i) => val === actualFunc(className).item(i));
  
//   console.log(test, testName);

//   if (test === false) {
//   console.log('  result of actual func: ', document.getElementsByClassName(className));
//   console.log('  result of written func: ', getElementsByClassName(className));
//   };
// }

// //render the tests after the DOM has loaded
// $(document).ready( function(){
//   test("targetClassName", 'className "targetClassName"');
//   test('progress', 'className is "progress"');
//   test('suite', 'className is "suite"');
//   test('test fail', 'className is "test" and "fail"');
// });



