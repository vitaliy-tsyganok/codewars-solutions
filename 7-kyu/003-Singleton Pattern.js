/* https://www.codewars.com/kata/534fcca5edb124cfe6000f60

In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

Create an Singleton pattern, so there is one object in system.

Example:

var obj1 = new Singleton();
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1
 */

const Singleton = (function () {
	let instance = null;

	return function () {
		return instance || (instance = this);
	};
})();
