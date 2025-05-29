// Завдання 1
console.log("ЗАВДАННЯ 1");

// Використати деструктуризацію об’єктів у всіх завданнях з попередньої ДЗ

// Завдання 1.1
console.log("ЗАВДАННЯ 1.1");

// Напиши скрипт, який, для об'єкта user, послідовно:
// - додає поле mood зі значенням 'happy';
// - замінює значення hobby на 'skydiving';
// - замінює значення premium на false;
// - виводить вміст об'єкта user в форматі ключ:
// значення використовуючи Object.keys() і for...of.

const user = {
    name: "Somberino",
    age: 22,
    hobby: "painting",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";

const keys = Object.keys(user);

for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
};

// Деструктуризація об'єкта
console.log("Деструктуризація об'єкта");

const {name, age, hobby, premium, mood} = user;

console.log(name);
console.log(age);
console.log(hobby);
console.log(premium);
console.log(mood);




// Завдання 1.2
console.log("ЗАВДАННЯ 1.2");

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. 
// Функція повертає число — кількість властивостей.

const capitals = {
    ukraine: "Kyiv",
    uk: "London",
    france: "Paris",
    hungary: "Budapest",
    poland: "Warszawa",
    germany: "Berlin",
};

const countProps = (obj) => {
    const values = Object.values(obj).length;
    return values;
};

console.log(countProps(capitals));

// Деструктуризація об'єкта
console.log("Деструктуризація об'єкта");

const {ukraine, uk, france, hungary, poland, germany} = capitals;

console.log(ukraine);
console.log(uk);
console.log(france);
console.log(hungary);
console.log(poland);
console.log(germany);



// Завдання 1.3
console.log("ЗАВДАННЯ 1.3");

// Напиши функцію findBestEmployee(employees), 
// яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). 
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const employees = {
    "Nykodym": "6",
    "Mstyslav": "13",
    "Lukian": "9",
    "Danylo": "2",
};

const findBestEmployee = (employees) => {
    const array = Object.entries(employees);
    let mostTasks = Number(array[0][1]);
    for (let i = 0; i < array.length; i += 1) {
        if (Number(array[i][1]) > mostTasks) {
            const mostProductive = array[i][0];
            return `${mostProductive} виконав(ла) найбільше задач`;
        };
    };
};

console.log(findBestEmployee(employees));

// Деструктуризація об'єкта
console.log("Деструктуризація об'єкта");

const {Nykodym, Mstyslav, Lukian, Danylo} = employees;

console.log(Nykodym);
console.log(Mstyslav);
console.log(Lukian);
console.log(Danylo);



// Завдання 1.4
console.log("ЗАВДАННЯ 1.4");

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
// Функція рахує загальну суму зарплати працівників і повертає її. 
// Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const salary = {
    "Dmytro": "13000",
    "Mykola": "14000",
    "Mark": "23000",
    "Emma": "22500",
    "Alex": "43000",
};

const countTotalSalary = (employees) => {
    const salaries = Object.values(employees);
    let sum = 0;
    for (let i = 0; i < salaries.length; i += 1) {
        const numbers = Number(salaries[i]);
        sum += numbers;
    };
    return sum;
};

console.log(countTotalSalary(salary));

// Деструктуризація об'єкта
console.log("Деструктуризація об'єкта");

const {Dmytro, Mykola, Mark, Emma, Alex} = salary;

console.log(Dmytro);
console.log(Mykola);
console.log(Mark);
console.log(Emma);
console.log(Alex);



// Завдання 1.5
console.log("ЗАВДАННЯ 1.5");

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const array = [
    { city: "Lviv", country: "Ukraine", population: 710606,},
    { city: "Krakow", country: "Poland", population: 804237,},
    { city: "Brno", country: "Czechia", population: 400566,},
    { city: "Munich", country: "Germany", population: 1604384,},
    { city: "Liverpool", country: "United Kingdom", population: 496770,}
];

const getAllPropValues = (arr, prop) => {
    const newArray = [];
    for (const element of arr) {
        if (element[prop]) {
            newArray.push(element[prop]);
        };
    };
    return newArray;
};

console.log(getAllPropValues(array, "city"));

// Деструктуризація об'єкта
console.log("Деструктуризація об'єкта");

const [{city: city1, country: country1, population: population1}, {city: city2, country: country2, population: population2}, {city: city3, country: country3, population: population3}, {city: city4, country: country4, population: population4}, {city: city5, country: country5, population: population5}] = array;

console.log(city1);
console.log(country1);
console.log(population1);
console.log(city2);
console.log(country2);
console.log(population2);
console.log(city3);
console.log(country3);
console.log(population3);
console.log(city4);
console.log(country4);
console.log(population4);
console.log(city5);
console.log(country5);
console.log(population5);



// Завдання 1.6
console.log("ЗАВДАННЯ 1.6");

// Напиши функцію calculateTotalPrice(allProducts, productName), 
// яка отримує масив об'єктів та ім'я продукту (значення властивості name). 
// Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

const products = [
    { name: "mango", price: 30, amount: 23, },
    { name: "orange", price: 36, amount: 13, },
    { name: "avocado", price: 43, amount: 93, },
    { name: "egg", price: 3, amount: 46, },
    { name: "candy", price: 60, amount: 53, }
];

const calculateTotalPrice = (allProducts, productName) => {
    for (let i = 0; i < allProducts.length; i += 1) {
        if (allProducts[i].name === productName) {
            const result = `Загальна вартість продукту: ${allProducts[i].price * allProducts[i].amount} грн`;
            return result;
        };
    };
};

console.log(calculateTotalPrice(products, "candy"));

// Деструктуризація об'єкта
console.log("Деструктуризація об'єкта");

const [{name: product1, price: price1, amount: amount1}, {name: product2, price: price2, amount: amount2}, {name: product3, price: price3, amount: amount3}, {name: product4, price: price4, amount: amount4}, {name: product5, price: price5, amount: amount5}] = products;

console.log(product1);
console.log(price1);
console.log(amount1);
console.log(product2);
console.log(price2);
console.log(amount2);
console.log(product3);
console.log(price3);
console.log(amount3);
console.log(product4);
console.log(price4);
console.log(amount4);
console.log(product5);
console.log(price5);
console.log(amount5);



// Завдання 2
console.log("ЗАВДАННЯ 2");

// Напиши сценарій керування особистим кабінетом інтернет-банку. 
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

const transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0, // Початковий баланс рахунку
    transactions: [], // Історія транзакцій
    id: 1,

    // Метод, який створює саму транзакцію, приймає кошти і тип транзакції(поповнення або зняття)
    createTransaction(amount, type) {
        // Об'єкт транзакції
        const newTransaction = {
            amount: amount, // кількість грошей
            type: type, // зняття або поповнення
            newId: this.id,
        };
        this.id += 1;
        return newTransaction;
    },

    // Приймає кошти(додає гроші)
    deposit(amount) { 
        this.balance += amount;
        const depTransaction = this.createTransaction(amount, transaction.DEPOSIT);
        this.transactions.push(depTransaction);
    },

    // Метод відповідає за зняття суми з балансу
    withdraw(amount) {
        // Перевіряємо чи достатньо коштів на разунку
        if (this.balance < amount) {
            alert("Недостатньо коштів на рахунку");
            // Якщо умова дійсна, то виходить із функції
            return;
        };
        this.balance -= amount;
        const withTransaction = this.createTransaction(amount, transaction.WITHDRAW);
        this.transactions.push(withTransaction);
    },

    // Повертає поточний баланс
    getBalance() {
        return this.balance;
    },

    // Метод шукає і повертає об'єкт транзакції по id
    getTransactionDetails(id) {
        for (const el of this.transactions) {
            if (el.newId === id) {
                return el;
            };
        };
        return null;
    },

    // Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій
    getTransactionTotal(type) {
        let total = 0;
        for (const el of this.transactions) {
            console.log(el.amount);
            if (el.type === type) {
                total += el.amount;
            };
        };
        return total;
    },
};

account.deposit(200);
account.deposit(80);
account.deposit(7886);
account.withdraw(88);
account.withdraw(2);
account.withdraw(700);

console.log(account.getBalance());
console.log(account.transactions);

console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(transaction.DEPOSIT));