var money = prompt('Ваш бюджет?');
var market = prompt('Название магазина?');

mainList = {
	cash: money,
	name: market,
	shopGoods: [],
	employers: {},
	open: false
};

mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?');

var dayMoney = money/30;

alert(dayMoney);


console.log(mainList.shopGoods);
console.log(mainList.cash);