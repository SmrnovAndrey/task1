'use strict';

/*let money,
    time;

    function start() {
        money = +prompt("Ваш бюджет на месяц?", '');
        time = prompt("Введите дату в формате YYYY-MM-DD", '');
        while(isNaN(money) || money == '' || money == null ) {
            money = +prompt("Ваш бюджет на месяц?", '');
        }
    }
//start();

let appData = {
        budget : money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        choseExpenses: function() {
            for ( let i=0; i<2; i++){
                let a = prompt("Введите статью расходов", ''),
                 b = prompt("Введите сколько Вы тратите на эту статью", '');
                 if ( typeof(a) === 'string' && typeof(b) != 
                 null && typeof(a) != null && 
                 a != '' && b != '') {
                     appData.expenses[a] = b;
                     console.log('done');
                 } else{
                     i--;
                     console.log('bad answer');
                 }
             }
        },
        detectDayBudget: function() {                                            
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert ("Бюджет на 1 день составляет " + 
            appData.moneyPerDay + "руб.");
        },
        checkSaving: function() {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?",''),
                present = +prompt("Какой процент?");
        
            appData.monthIncoming = save*present/12/100;
            alert("Сумма накоплений в месяц =" +appData.monthIncoming);
            }
        },
        detectLevel: function() {
            if (appData.moneyPerDay < 100) {
                console.log ("Это минимальный уровень достатка!");
            } else if (appData.moneyPerDay > 100 && 
                appData.moneyPerDay < 2000) {
                console.log ("Это средний уровень достатка!");
            } else if (appData.moneyPerDay > 2000) {
                console.log ("Это высокий уровень достатка!");
            } else {
                console.log ("Произошла ошибка");
           
 }
        },
        chooseOptExpenses: function () {                            

            for (let i = 1; i <= 3; i++) {
                let questionOptExpenses = 
                prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses);
            }
        
        
        },
        chooseIncome: function(){
            let items = prompt("Что принесет доп доход?( перечислите через запятую)",'');
            while(typeof(items) != "string" || items == '' || items == null ) {
                alert("Вы ввели не буквенные значения или оставили строчку пустой");
                items = prompt("Что принесет доп доход?( перечислите через запятую)",'');
            }
            appData.income = items.split(',');
            console.log(appData.income);
            appData.income.push(prompt("Что-то еще?",''));
            console.log(appData.income);
            appData.income.sort();
            appData.income.forEach(function(kup, i){
                alert("Способы зароботка: " +(i+1) + "-" + kup);
            });
        }
};

for( let app in appData){
    console.log(appData[app]);
}

appData.chooseIncome();*/


let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'),
    oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';
















