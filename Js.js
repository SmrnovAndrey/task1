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

for ( let i=0; i<2; i++){
   let a = prompt("Введите статью расходов", ''),
    b = prompt("Введите сколько Вы тратите на эту статью", '');
    if ( typeof(a) === 'string' && typeof(b) != null && typeof(a) != null && 
    a != '' && b != '') {
        appData.expenses[a] = b;
        console.log('done');
    } else{
        i--;
        console.log('bad answer');
    }
}

appData.moneyPerDay = appData.budget / 30;

alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}
