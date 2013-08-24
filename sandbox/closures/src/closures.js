#!/usr/bin/env node

// This is a really simple closure
function sayHiTo(aName) {
    var text = "Hello " + aName
    var sayHello = function()
    {
        console.log(text)
    }
    return sayHello
}

sayHiToBob = sayHiTo("Bob")
sayHiToJoe = sayHiTo("Joe")

sayHiToBob()
sayHiToJoe()

//

function foo(){
    var num = 666
    var sayNumber = function(){
        console.log(num)
    }
    num++;
    return sayNumber;
}

funct = foo();
funct(); // outputs 667
funct(); // also outputs 667
