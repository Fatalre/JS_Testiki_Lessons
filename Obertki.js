let x = 15;
x.custom = 'null'

let temp = Number(x);
temp.custom = 'null';

console.log(x);
console.log(x.custom);
console.log(typeof x);
console.log(temp);
console.log(typeof temp);

console.log(x === temp);

temp = new Object(x);
console.log(temp);
temp = new Object('x');
console.log(temp);
temp = new Object(true);
console.log(temp);

temp = String(true);
console.log(temp);