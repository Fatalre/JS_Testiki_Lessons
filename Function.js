function sayHello (FirstName, LastName){
    if (!FirstName || !LastName) return console.error('Не введены аргументы');
    return `Hello ${FirstName} ${LastName}`;
}

//console.log(sayHello('Alex','NAV'));

let res = sayHello('Alex','NAV')+'!!!';
//console.log(res+'!');

function sayHelloDefault (FirstName="Default_1", LastName="Default_2"){
    //return `Hello ${FirstName} ${LastName}`;
    console.log(arguments);
}

//console.log(sayHelloDefault('first',null,undefined));

//console.clear();

let x=10;

function foo(){
    let x=20;
    console.log(x);
}

console.log(x);
foo();
console.log(x);