// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:




const isNull = (data) => data === null;
const isUndef = (data) => data === undefined;
const isFunc = (data) => typeof data === 'function';
const isObj = (data) => typeof data === 'object';
const isBool = (data) => typeof data === 'boolean';
const isNum = (data) => typeof data === 'number';
const isArr = (data) => Array.isArray(data);

const isStr = (data) => typeof data === 'string';
const nonStringables = [isUndef, isFunc];
const stringables = [isBool, isNull, isNum];
const byRefs = [isArr, isObj];



const stringifyJSON = function(obj) {
  let JSONobj = '';

  function renderItems(iterator) {
  iterator.forEach((item, i) => {
    JSONobj += stringifyJSON(item);
      if (i !== iterator.length - 1) {
        JSONobj += ',';
      }
    }); 
  }  

  
  
  if(nonStringableDataTypes.some(function(objType) {
    return 
  })) {
    JSONobj = undefined;
  } else if (dataType === 2) {
    JSONobj += '"' + obj + '"'
  } else if (dataType < 6) {
    JSONobj += String(obj);

  } else if(isArr(obj)) {
    JSONobj += '[';
    renderItems(obj);
    JSONobj += ']';

  } else if (isObj(obj)) {
    const properties = Object.keys(obj).map(function(key){
      return  key + ':' + obj[key];
    });

    JSONobj += '{';
    renderItems(properties);
    JSONobj += '}';
  } 
  return JSONobj;
  // your code goes here
};
console.log(stringifyJSON(2))


//THE TEST-SUITE

function test(data, testValue) {
  console.log(stringifyJSON(data) === JSON.stringify(data), 'should work for ' + testValue);
}

function compare(data) {
  console.log('  this is the result of your function: ',stringifyJSON(data));
  console.log('  this is the result of JSON.stringify() : ', JSON.stringify(data));
}

// //primitive value support
// test(null, 'null');
// test(true, 'true');
// test(false, 'false');
// test(1, 'numbers');
// test(1.2, 'decimal numbers');
// test('hello', 'strings');

//undefined values support
// test(undefined, 'undefined')
// test(function(){}, 'functions');


//array support
test(['hello', 'world'], 'arrays with strings');
test([1,2, 1.2, 0, -1, 0.0000056], 'arrays with numbers');
test([false, true], 'arrays with boolean values');

test([null, undefined], 'arrays with null and undefined values');
compare([null, undefined]);




//object support
test({ a: 'hello', adele: 'world'}, 'objects with strings');
compare({ a: 'hello', adele: 'world'})
test({ b: 2, c: 1.2}, 'objects with numbers');
compare({ b: 2, c: 1.2})
test({d: true, e: false}, 'objects with booleans');
test({f: undefined, g: null}), 'objects with undefined or null values'
test({ h: function(){} }, 'functions(should not render)');

/*
  JSON.stringify should
    (1)receive any JSON accepted items (the function only works upon the collection
       in the first argument slot of the parameters).

       JSON accepted items:
       (a) arrays
       (b) object literals
       (c) value : string, number, object, array, true, false, or null
       (d) string --> develop this more
       (e) number --> develop this more http://json.org/
    (2)  if the object has properties it will iterate over each key and check for values
    (3)  for each property it will turn the property into a string

    (4) if the value of the property is an array, or object, run the function
      again on the elements of that collection, and return the result as a string


    (finally) turn the entirety of the object or array into a string.
*/
