function myReplace(before, after, myString){
    if (!before || !after || !myString){
        console.error('Проверьте аргументы');
    }
    if (typeof before != "string" || typeof after != "string" || typeof myString != "string"){
        console.error('Аргументы должны быть типа "string"!!!!');
    }
    let razbivArray = before.split(', ');
    return myString.replace(before,after);
}

let Str = myReplace('конь, дом, машина','велосипед','Это мой велосипед!');

console.log(Str);