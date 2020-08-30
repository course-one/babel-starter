import "core-js/stable";
import "regenerator-runtime/runtime";

// simple generator function
function* genTest() {
    yield 1;
    yield 2;
    yield 3;
}

console.log( 'genTest ->', ...( genTest() ) );

// promise test
const promise = new Promise( resolve => {
    setTimeout( () => resolve( 'Done!' ), 1000 );
} );

promise.then( console.log );