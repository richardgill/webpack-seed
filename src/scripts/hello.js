var hello = function() {
  console.log('Hello World')

  //ES6 feature
  var helloWorld1 = () => 'Hello World1'

  //Another ES6 feature
  var stringWithVar = `${helloWorld1()} 12345`
  console.log(stringWithVar)

  throw 'I deliberately threw this exception. Check the line numbers to the right work :)'
}

module.exports = hello
