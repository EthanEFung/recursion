const type = {

  isStr : (data) => typeof data === 'string',
  isNull : (data) => data === null,
  isUndef : (data) => data === undefined,
  isFunc : (data) => typeof data === 'function',
  isObj : (data) => typeof data === 'object',
  isBool : (data) => typeof data === 'boolean',
  isNum : (data) => typeof data === 'number',
  isArr : (data) => Array.isArray(data)

}


const stringifyJSON = function(obj) {

};


//THE TEST-SUITE

function test(data, testValue) {
  console.log(stringifyJSON(data) === JSON.stringify(data), 'should work for ' + testValue);
}

function compare(data) {
  console.log('  this is the result of your function: ',stringifyJSON(data));
  console.log('  this is the result of JSON.stringify() : ', JSON.stringify(data));
}

//primitive value support
test({}, 'objects');
test(true, 'true');
test('hello', 'strings');
test(null, 'null');

test(1, 'numbers');
test(1.2, 'decimal numbers');


//undefined values support
// test(undefined, 'undefined')
// test(function(){}, 'functions');


// //array support
// test(['hello', 'world'], 'arrays with strings');
// test([1,2, 1.2, 0, -1, 0.0000056], 'arrays with numbers');
// test([false, true], 'arrays with boolean values');

// test([null, undefined], 'arrays with null and undefined values');
// compare([null, undefined]);




//object support
test({ a: 'hello', adele: 'world'}, 'objects with strings');
compare({ a: 'hello', adele: 'world'})
test({ b: 2, c: 1.2}, 'objects with numbers');
compare({ b: 2, c: 1.2})
test({d: true, e: false}, 'objects with booleans');
test({f: undefined, g: null}), 'objects with undefined or null values'
test({ h: function(){} }, 'functions(should not render)');


/*
  let JSONobj = '';

  const dataIsNotStringable = [type.isUndef, type.isFunc].some((test) => test(obj));
  const dataIsStringable = [type.isBool, type.isNull, type.isNum].some((test) => test(obj));

  function renderItems(collection) {
    collection.forEach((item, i) => {
      JSONobj += stringifyJSON(item);

      let itemIsntLast = (i !== collection.length -1);
      if (itemIsntLast) {
        JSONobj += ',';
      }
    }); 
  }  


  
  if(type.isStr(obj)) {
    JSONobj += '"' + obj + '"';
  } else if(dataIsNotStringable) {
    JSONobj = undefined;
  } else if (dataIsStringable) {
    JSONobj += obj;
  


  } else if(type.isArr(obj)) {
    JSONobj += '[';
      renderItems(obj);
    JSONobj += ']';
  } else if (type.isObj(obj)) {

    const properties = Object.keys(obj).map(function (key) {  
      if(type.isStr(obj[key])) {
        obj[key] + obj[key];
      }
      return ['"' + key + '":"' +  obj[key] + '"']
    });
    
    
    JSONobj += '{';
    JSONobj += properties.join(',');
    JSONobj += '}';
  } 
  return JSONobj;
  // your code goes here

*/