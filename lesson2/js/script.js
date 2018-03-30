let money = prompt('Ваш бюджет?');
let market = prompt('Название магазина?');

let mainList = {
	cash: money,
	name: market,
	shopGoods: [],
	employers: {},
	open: false
}

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

// var i = 0;
// while (i < 5) {
// 	let a = prompt('Какой тип товаров будем продавать?');
//  mainList.shopGoods[i] = a;
//  i++;

// 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		
// 		console.log('Всё верно!');
// 	}

// 	else {
//   i--;
//   mainList.shopGoods[i] = a;
// 	}
// }

// 	var i = 0;
//  do {
//  let a = prompt('Какой тип товаров будем продавать?');
// 	mainList.shopGoods[i] = a;
// 	i++;
 
// 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
// 		console.log('Всё верно!');  
// 	}
// 	else {
//   i--;
//   mainList.shopGoods[i] = a;
// 	}
// }
// while (i < 5);



let dayMoney = money/30;

alert(dayMoney);

console.log(mainList);