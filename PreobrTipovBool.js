let Value;
let MyString = '20';
let MyNumber = 15;
let MyBoolean = true;
const MyArray = [1, 4, 5, 7];
const  MyObj = {name:'Alex'};

Value = Boolean(MyString);
Value = Boolean('');
Value = Boolean(MyNumber);
Value = Boolean(123);
Value = Boolean(Number(MyString));
Value = Boolean('false');
Value = Boolean(MyArray);
Value = Boolean(MyObj);

Value = !!'';

if ('90'){
    console.log(6);
};


Value = true || true;
Value = MyNumber || false;
Value = false || true;
Value = !!"" || !!null;


Value = undefined && true;

Value = !null && "";

console.log(Value);

