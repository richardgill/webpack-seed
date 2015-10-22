// This puts a <style> tag in <head> of page with transpiled css.
require('../styles/main.scss')

console.log('Hello World')

//ES6 feature
var helloWorld1 = () => 'Hello World1'

//Another ES6 feature
var stringWithVar = `${helloWorld1()} 1234`
console.log(stringWithVar)

throw 'I deliberately threw this exception. Check the line numbers to the right work :)'
