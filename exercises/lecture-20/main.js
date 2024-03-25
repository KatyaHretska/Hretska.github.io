// 1 Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль
// 2 Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.
// 3 Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.
// 4 Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.
const person = {
    name: {
        firstName: "Katarina",
        lastName: "Hretska"
    },
    age: 26,
    bio() {
        return (person.name.firstName + " " + person.name.lastName + " - " + person.age);
    },
    introduceSelf() {
        return ("Hi! I'm " + person.name.firstName + ".");
    }
}
console.dir(person);
console.log(person.name.firstName, person.name.lastName, person.age);
console.log(person.bio());
console.log(person.introduceSelf());

// 5 Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта.
function createPerson(name) {
    return {
        name: name,
        introduceSelf() {
            return ("Hi! I'm " + name + ".");
        }
    }
}

const person1 = createPerson("Clara");
const person2 = createPerson("Jerry");
console.log(person1.introduceSelf());
console.log(person2.introduceSelf());

// 6 Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.

function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
        return ("Hi! I'm " + this.name + ".");
    };
}
const person3 = new Person("Mary");
const person4 = new Person("Tom");
console.log(person3.introduceSelf());
console.log(person4.introduceSelf());
// визначити, чи містить об'єкт mary властивість під назвою prop.
console.log(Object.hasOwn(person3, "prop")); //false

// 7 Брудний мартіні – ідеальний коктейль для любителів оливкового. Його можна приготувати на горілці чи джині за таким рецептом.

//     ingredients:
//         6 fluid ounces gin
//         1 dash dry vermouth
//         1 fluid ounce brine from olive jar
//         4 stuffed green olives

// fluid ounces - одиниця ваги avoirdupois - одна шістнадцята фунта (28.4131 грамів). Офіційно dash становить приблизно 1 мл, 10 крапель або 1/5 чайної ложки.

// Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french() При виклику методу excuse_my_french(), на консоль виводиться:

//       ingrédients:
//         170.4786 ml de gin
//         1 trait de vermouth sec (0.0351951ml)
//         28.4131 ml de saumure du pot d'olive
//         4 olives vertes farcies

// При виклику методу english_please(), на консоль виводиться:

//       ingredients:
//         6 fluid ounces gin
//         1 dash dry vermouth (0.0351951ml)
//         1 fluid ounce brine from olive jar
//         4 stuffed green olives

const DirtyMartini = {
    gin: 6,
    vermouth: 1, 
    brine_from_olive_jar: 1,
    olives: 4,
    avoirdupois: 28.4131,
    english_please() {
        return `ingredients:
        ${this.gin} fluid ounces gin
        ${this.vermouth} dash dry vermouth (0.0351951ml)
        ${this.brine_from_olive_jar} fluid ounce brine from olive jar
        ${this.olives} stuffed green olives
        `;
    },
    excuse_my_french() {
        return `ingrédients:
        ${this.gin * this.avoirdupois} ml de gin
        ${this.vermouth} trait de vermouth sec (0.0351951ml)
        ${this.brine_from_olive_jar * this.avoirdupois} ml de saumure du pot d'olive
        ${this.olives} olives vertes farcies
        `
    }
}

console.log(DirtyMartini.english_please());
console.log(DirtyMartini.excuse_my_french());