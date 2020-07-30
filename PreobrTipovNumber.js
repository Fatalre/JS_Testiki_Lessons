let Value;
let MyString = '20';
let MyNumber = 15;
let MyBoolean = true;
const MyArray = [1, 4, 5, 7];
const  MyObj = {name:'Alex'};

Value = Number(MyString);
Value = Number(MyNumber);
Value = Number(MyBoolean);
Value = Number(MyArray);
Value = Number(MyObj);

Value = Number('wee');
Value = Number('');
Value = Number('20 ');
Value = Number(NaN);
Value = Number(null);
Value = Number(undefined);

Value = parseInt('200.76%');
Value = parseFloat('200.76%');

Value = 40 + '5';

Value = +MyBoolean;
Value = +'200.76';

console.log(Value, typeof Value);