// simple arrow function expression
var sayHello = ( name ) => {
    return `Hello, ${ name }.`;
}

let person = 'Ross Geller';
let result = sayHello( person );

console.log( 'result ->', result );