"strict mode";

const User={
  name:"Alex",
  surname:"NAV",
  age:49
};

const NewUser=new Object();
const  LitUser = {};

const  BldUser = Object.create(User);

console.log(User.name);
console.log(NewUser);
console.log(LitUser);
console.log(BldUser.name);