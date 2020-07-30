const myUser = {
    name: "Alex",
    age: null,
    id: undefined,
};

createUser = Object.create(myUser);
objectUser = new Object(myUser);

console.log(Number(createUser.id) == +(objectUser.id));