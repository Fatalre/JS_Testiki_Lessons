let str_1 = 'Одинарные';
let str_2 = "Двойные";
let str_3 = `Шаблонный литерал, 
а не ${str_1}`;

let  value = str_1 + ' ' + str_2;

value = str_1.concat(' ',str_2, ' ', str_3);

/*console.log(str_1);
console.log(str_2);
console.log(str_3);*/

value = str_1[1];
value = str_1[str_1.length-1].toUpperCase();
value = str_1[0].toLowerCase();

let Names = 'Alex, Olga, Serg, Kostia';

value = Names.split(', ');
value = Names.split(', ',3);


value = Names.indexOf('Olga');
value = Names.includes('Olga');

value = Names.slice(6,10);

value = 'a'.localeCompare('A','en',{caseFirst:'lower'});
value = 'Alex'.localeCompare('Alex ');

value = ' Hello '.trim();

value = 'Hello '.repeat(0);

console.log(Names);
console.log(value);
