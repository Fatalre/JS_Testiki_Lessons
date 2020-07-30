const User = {
    name:'Alex',
    surname: undefined,
    'user-adress': {
        country: 'Russia',
        city: 'Moscow',
    },
};

let value = User.name;
value = User['name'];

let OldUser = new Object();
OldUser = new Object(User);


let NewUser = Object.create(User);
value = NewUser.name;
NewUser.name = 'Serg';


value = Object.getPrototypeOf(NewUser);

User.email = 'example@gmail.com';
delete User.name;

/*console.log(User);
console.log(OldUser);
console.log(NewUser);
console.log(value);*/

let User1 = {
    name:'Alex',
    surname: undefined,
    'user-adress': {
        country: 'Russia',
        city: 'Moscow',
    },
};


/*console.log(User1.name === undefined);
console.log(User1.surname === undefined);
console.log('surname' in User1);*/

value = Object.keys(User1);
value = Object.keys(User1['user-adress']);


value = Object.entries(User1);

//console.log(value)


const  MyObject = {
    name: 'Alex',
    age: 15
};

console.log('MyObject ', MyObject);

let LitObj = {};
let NewObj = new Object();
let CreatObj = Object.create(null);

LitObj = {MyObject};
NewObj = new Object(MyObject);
CreatObj = Object.create(MyObject);


console.log(MyObject === NewObj);
NewObj.name = 'Serg';

console.log('MyObject ', MyObject);

console.log('LitObj', LitObj);
console.log('NewObj', NewObj);
console.log('CreatObj', CreatObj);