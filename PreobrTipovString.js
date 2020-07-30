let Value;
let MyString = '';
let MyNumber = 15;
let MyBoolean = true;
const MyArray = [1, 4, 5, 7];
const  MyObj = {name:'Alex'};

//value = String(MyNumber);
value = MyNumber.toString();
value = 89..toString();
value = (100*9).toString();

value = MyBoolean.toString();
value = String(MyBoolean);

value = MyArray.toString();
value = [1, 4, 5, 7].toString();
value = String(MyArray);
value = String([1, 4, 5, 7]);


value = MyObj.toString();


value = 40 + "" + undefined;
value = 40 + " " + MyArray;
value = 40 + " " + {
    toString: function (){
        return Number(10);
    }
};


value = 40 - " ";


console.log(value, typeof value);
//console.log(MyNumber);