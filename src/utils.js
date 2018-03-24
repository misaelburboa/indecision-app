console.log("utils.js is running");
//1. name export
export const square = (x) => x * x;
export const add = (a, b) => a + b;

//2. default export
export default (a, b) => a - b;

//exports: default export - named exports
//1. name export
//export { square, add };

//2. Only can be one default export
//export { square, add, subtract as default };
