


const type = {

  isStr : (data) => typeof data === 'string',
  isNull : (data) => data == null,
  isUndef : (data) => data === undefined,
  isFunc : (data) => typeof data === 'function',
  isObj : (data) => typeof data === 'object',
  isBool : (data) => typeof data === 'boolean',
  isNum : (data) => typeof data === 'number',
  isArr : (data) => Array.isArray(data)

}

function renderArr(array) {

}

const stringifyJSON = function(val) {
  
  let JSONobj = '';

  const dataIsNotStringable = [type.isUndef, type.isFunc].some((test) => test(val));
  const dataIsStringable = [type.isBool, type.isNull, type.isNum].some((test) => test(val));
  
  //Check to see if the value is a primative value
  if(type.isStr(val)) {
    JSONobj += '"' + val + '"';
  } else if(dataIsNotStringable) {
    JSONobj = undefined;
  } else if (dataIsStringable) {
    JSONobj += val;
  

  //Then check the reference values
  } else if(type.isArr(val)) {
    JSONobj += '[';

    val.forEach(function(item, i) {

      if(item === undefined || typeof item === 'function') {
        item = null;
      }

      JSONobj += stringifyJSON(item);

      let itemIsntLast = (i !== val.length -1);
      if (itemIsntLast) {
        JSONobj += ',';
      }
    });

    JSONobj += ']';

  } else if (type.isObj(val)) {
    let properties = [];

    Object.keys(val).forEach(function(key) {
      let item = val[key];
      if (item === undefined || typeof item === 'function') { 
        //ignore
      } else {
      	properties.push(stringifyJSON(key) + ':' + stringifyJSON(val[key]));
      };
    });
    
    JSONobj += '{' + properties.join(',') + '}';
  } 

  return JSONobj;
};


// //THE TEST-SUITE

// function test(data, testValue) {
//   console.log(stringifyJSON(data) === JSON.stringify(data), 'should work for ' + testValue);
// }

// function compare(data) {
//   console.log('  this is the result of your function: ',stringifyJSON(data));
//   console.log('  this is the result of JSON.stringify() : ', JSON.stringify(data));
// }

// //primitive value support
// test({}, 'objects');
// test(true, 'true');
// test('hello', 'strings');
// test(null, 'null');

// test(1, 'numbers');
// test(1.2, 'decimal numbers');


// // undefined values support
// test(undefined, 'undefined')
// test(function(){}, 'functions');


// //array support
// test(['hello', 'world'], 'arrays with strings');
// test([1,2, 1.2, 0, -1, 0.0000056], 'arrays with numbers');
// test([false, true], 'arrays with boolean values');

// test([null, undefined], 'arrays with null and undefined values');
// compare([null, undefined]);


// //object support
// test({ a: 'hello', adele: 'world'}, 'objects with strings');

// test({ b: 2, c: 1.2}, 'objects with numbers');

// test({d: true, e: false}, 'objects with booleans');
// test({f: undefined, g: null}, 'objects with undefined or null values');

// test({ h: function(){} }, 'functions in objects(should not render)');
// compare({ h: function(){} })
// test([function(){}], 'functions in arrays should not render')
// compare([function(){}])


