// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
};

/*
  JSON.stringify should
    (1)receive any object or array (the function only works upon the collection
       in the first argument slot of the parameters).
    (2)if the object has properties it will iterate over each key and check for values
    (3)  for each property it will turn the property into a string


    (finally) turn the entirety of the object or array into a string.
*/

const example = {
	hello: 'world!',
	fun: true, //what happens now?
	agreeable: undefined,
	adder: function(a, b) {return a + b},
	heart: 2,
	love :['tacos', 'dogs', 3],
	object: {adele: 'rocks'}
}

const example2 = ['hello', 2, false, undefined, {}, function(a, b) {return a + b}, ['hello', true]];


console.log(JSON.stringify(example));
console.log(JSON.stringify(example2));
console.log(JSON.stringify(true));