'use strict';

let money,
    time;

    function start() {
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt("Введите дату в формате YYYY-MM-DD", '');
        while(isNaN(money) || money == '' || money == null ) {
            money = +prompt("Ваш бюджет на месяц?", '');
        }
    }
start();

let appData = {
        budget : money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
};

function choseExpenses() {
    for ( let i=0; i<2; i++){
        let a = prompt("Введите статью расходов", ''),
         b = prompt("Введите сколько Вы тратите на эту статью", '');
         if ( typeof(a) === 'string' && typeof(b) != null && typeof(a) != null 
         && a != '' && b != '') {
             appData.expenses[a] = b;
             console.log('done');
         } else{
             i--;
             console.log('bad answer');
         }
     }
}



choseExpenses();

function detectDayBudget() {                                            // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}

detectDayBudget();

function checkSaving () {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?",''),
        present = +prompt("Какой процент?");

    appData.monthIncoming = save*present/12/100;
    alert("Сумма накоплений в месяц =" +appData.monthIncoming);
    }
}

checkSaving();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}

detectLevel();



