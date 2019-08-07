'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    let appData = {
    budget : money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let q1=prompt("Введите статью расходов" , ''),
    q2=prompt("Во скольоко это обойдется?" , ''),
    q3=prompt("Введите статью расходов" , ''),
    q4=prompt("Во скольоко это обойдется?" , '');

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;
alert(appData.budget / 30);
