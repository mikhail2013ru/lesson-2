let money = 30000,
    income = 20000,
    addExpenses = 'Интернет, такси, коммуналка',
    deposit = false,
    mission = 100000,
    period = 8;

console.log(typeof money, typeof income, typeof deposit);
console.log('Длина строки - addExpenses: ' + addExpenses.length + ' символов');
console.log(`“Период равен (period) месяцев: ${period}" \n“Цель заработать (mission) рублей: ${mission} рублей"`);

let Expenses = addExpenses.toLowerCase();
let ArrExpenses = Expenses.split(',').reverse();
let Result = ArrExpenses.join()

console.log(Result);

let budgetDay = money / 30;

console.log(`budgetDay: ${budgetDay}`);


