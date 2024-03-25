//1

let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

//Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.

console.log(str1.length); //13
console.log(str2.length); //13 довжина однакова
let result1 = str1 == str2;
console.log(result1);
let result2 = str1 === str2;
console.log(result2);

//2

//Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.

let string5 = 'Hello World';
console.log(string5[0]);
console.log(string5.charAt(0));
console.log(string5.charAt(string5.length - 11));


//3

//повернути символ J рядка str3:

let str3 = "Hello Javascript";
console.log(str3[str3.indexOf('J')]);
console.log(str3[str3.length - 10]);



//4 Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
console.log(str3.slice(-1));
console.log(str3[str3.indexOf('t')]);
console.log(str3[str3.length - 1]);

//5 Напишіть три варіанти функції lastChar, що повертає останній символ рядка
let lastchar = str3;
function lastChar1(lastchar) {
    return lastchar[lastchar.length - 1];
}
console.log(lastChar1(lastchar));
function lastChar2(lastchar) {
    return lastchar.slice(-1);
}
console.log(lastChar2(lastchar));
function lastChar3(lastchar) {
    return lastchar.charAt(lastchar.length-1);
}
console.log(lastChar3(lastchar));
//6 Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey

let a = 'When candles are out,';
let b = 'all cats are grey.';
console.log(a + " " + b);
console.log(a.concat(" " + b));


//7 Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15

let fact = "Fifteen is the same as"
let a1 = 5;
let b1 = 10; 
console.log(fact.concat(" " + (a1 + b1)));

//8 Напишіть функцію getFullName, що повертає результат: "Tom Cat"

let firstName = "Tom";
let lastName = "Cat";
function getFullName(a, b) {
    return a + ' ' + b;
}
console.log(getFullName(firstName, lastName));

//9 Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!

function greeting() {
    return "Hello, " + getFullName(firstName, lastName) + "!";
}
console.log(greeting());
//10 Використовуючи функцію greeting, створити такий шаблон:

// let template = (
//     "<div>" +
//         "<h1>" + greeting() + "</h1>" +
//     "</div>"
// );

let template = `
    <div><h1>${greeting()}</h1></div>`;

console.log(template);


//11

let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
console.log(string1.trim());
// "The name of our game  "
console.log(string1.trimStart());
// "  The name of our game"
console.log(string1.trimEnd());


const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
// => '555-123'
console.log(phoneNumber.trim());
// => '555-123 \n'
console.log(phoneNumber.trimStart());
//12

let sentence = 'Always look on the bright side of life';

//Перевірити, чи містить рядок значення 'look up'
//Перевірити, чи містить рядок значення 'look on'
//Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції
console.log(sentence.includes('look up'));
console.log(sentence.includes('look on'));
console.log(sentence.includes('look on', 8));
//13

let sentence1 = 'Always look on the bright side of life';

//Знайти індекс символу 'l'
//Знайти індекс символу 'l', починаючи з 3-ї позиції
//Знайти індекс символу 'L'
console.log(sentence1.indexOf('l'));
console.log(sentence1.indexOf('l', 3));
console.log(sentence1.indexOf('l'.toUpperCase()));

//14

let sentence2 = 'Always look on the bright side of life';

//Отримати підрядок 'look on the bright side of life'
console.log(sentence2.substring(7, 38));
//Отримати підрядок 'Always'
console.log(sentence2.substring(0, 6));
//Отримати підрядок 'look'
console.log(sentence2.substring(7, 11));

//15 Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.
let pattern1 = /^[a-z, 0-9, -, _]{8, 16}$/;
//16 Створити регулярний вираз, який призначений для перевірки email на коректність.
let pattern2 = /^[a-z, 0-9, -, _]{8, 16}@[a-z]{2, 8}.[a-z]^['ru|su]{2-4}$/;
//17

let sentence3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

//Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring

let trunc = sentence3;
function truncateText1(trunc) {
    return trunc.substring(0, 50);
}
console.log(truncateText1(trunc));


//Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr

function truncateText2(trunc) {
    return trunc.substr(0, 50);
}
console.log(truncateText2(trunc));