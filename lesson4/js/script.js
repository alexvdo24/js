let money,
name,
price,
time

function start() {
money = prompt('Ваш бюджет?', "");
while (isNaN(money) || money == "" || money == null) {
	money = prompt('Ваш бюджет?', "");
}
market = prompt('Название магазина?', "").toUpperCase();
price = prompt('Какой прайс за вещь?', "")
time = 21;
}
// start();


var mainList = {
	cash: money,
	// name: market,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {

     for (let i = 0; i < 5; i++) {
     	let a = prompt('Какой тип товаров будем продавать?', "");
     	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
     		mainList.shopGoods[i] = a;
     		console.log('Всё верно!');
	       }

	       else {
         i--;
         mainList.shopGoods[i] = a;

	}
}
},

workTime: function workTime(time) {
	     if (time < 0) {
	     	console.log('unreal!');
	     } else if (time > 8 && time < 20) {
	     	console.log("Время работать");
	     	mainList.open = true;
	     } else if (time < 24) {
	     	console.log("Уже слишком поздно");
	     } else {
	     	console.log("В сутках лишь 24 часа");
	     }
},

discCount: function discCount() {
mainList.discount = confirm("Скидку н-н-нада?!");
if (mainList.discount == true) {
console.log(priceDisc = price*0.8);
console.log('Всё получилось!!!');
}
else {
	console.log('Неожиданно от нашей скидки отказались..');
}
},

hiringEmployees: function hiringEmployees() {

for (let i = 1; i < 5; i++) {
	let a = prompt('Как зовут сотрудника?', "");

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		mainList.employers[i] = [i]+". "+a;
		console.log('Всё верно!');
	}

	else {
  i--;
  mainList.employers[i] = a;

	}
}
},

moneyDay: function moneyDay() {
let dayMoney = money/30;
alert("Ежедневный бюджет: " + dayMoney);
},

chooseShopItems: function chooseShopItems() {

let items = prompt("Перечислите ваши товары через запятую");
 if ((typeof(items)) == 'string' && (typeof(items)) != null && items != '' && items.length < 50) {
mainList.shopItems = items.split(",");
mainList.shopItems.push(prompt("Подождите ещё ", ""));
mainList.shopItems.sort();
}
else {
	alert("Ошибка");
}
arrItems = mainList.shopItems
arrItems.unshift(0);
arrItems.forEach(function(item, i, arrItems) {

  console.log("У нас вы можете купить: " + item);

});

for (let key in mainList.shopItems) {
	console.log("В наличии есть "+mainList.shopItems[key]);
}
}

}





// discCount();

// hiringEmployees();

// chooseGoods();

// workTime(18);

// moneyDay();


console.log(mainList);