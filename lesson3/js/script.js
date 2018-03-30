let money,
name,
price,
time

function start() {
money = prompt('Ваш бюджет?');
while (isNaN(money) || money == "" || money == null) {
	money = prompt('Ваш бюджет?');
}
market = prompt('Название магазина?').toUpperCase();
price = prompt('Какой прайс за вещь?')
time = 21;
}
start();


var mainList = {
	cash: money,
	name: market,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
}




function discCount() {
mainList.discount = confirm("Скидку н-н-нада?!");
if (mainList.discount == true) {
console.log(priceDisc = price*0.8);
console.log('Всё получилось!!!');
}
else {
	console.log('Неожиданно от нашей скидки отказались..');
}
}
discCount();


function hiringEmployees() {

for (let i = 1; i < 5; i++) {
	let a = prompt('Как зовут сотрудника?');

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		mainList.employers[i] = [i]+". "+a;
		console.log('Всё верно!');
	}

	else {
  i--;
  mainList.employers[i] = a;

	}
}
}

hiringEmployees();

function chooseGoods() {

for (let i = 0; i < 5; i++) {
	let a = prompt('Какой тип товаров будем продавать?');

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		mainList.shopGoods[i] = a;
		console.log('Всё верно!');
	}

	else {
  i--;
  mainList.shopGoods[i] = a;

	}
}
}

chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('unreal!');
	} else if (time > 8 && time < 20) {
		console.log("Время работать");
	} else if (time < 24) {
		console.log("Уже слишком поздно");
	} else {
		console.log("В сутках лишь 24 часа");
	}
}
workTime(18);

function moneyDay() {
let dayMoney = money/30;
alert("Ежедневный бюджет: " + dayMoney);
}
moneyDay();


console.log(mainList);