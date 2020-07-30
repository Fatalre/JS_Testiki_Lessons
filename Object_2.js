let User ={
    name: "Alex",
    age: '30',
    car:{
        first:"Nissan",
        second:"Ford"
    }
};

let User1 ={
    name1: "Alex",
    age1: '30',
    car1:{
        first:"Nissan",
        second:"Ford"
    }
};

/*let clone = {};

for (let key in User){
  clone[key]=User[key];
};

console.log('Clone: ',clone);
clone.car.first = 'Lada';*/
//console.log('User: ',User);

let CloneObjAssign = Object.assign({},User);

CloneObjAssign.car.first = 'Kamaz';

//console.log(CloneObjAssign);

let CloneSread = {...{}, User};
console.log(CloneSread);
