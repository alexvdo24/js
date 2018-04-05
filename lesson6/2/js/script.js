let openBtn = document.getElementById('open-btn');
let nameValue = document.getElementsByClassName('name-value')[0];
let budgetValue = document.getElementsByClassName('budget-value')[0];
let goodsValue = document.getElementsByClassName('goods-value')[0];
let itemsValue = document.getElementsByClassName('items-value')[0];
let employersValue = document.getElementsByClassName('employers-value')[0];
let discountValue = document.getElementsByClassName('discount-value')[0];
let isopenValue = document.getElementsByClassName('isopen-value')[0];
let goodsItem = document.getElementsByClassName('goods-item');
let goodsBtn = document.getElementsByTagName('button')[1];
let budgetBtn = document.getElementsByTagName('button')[2];
let employersBtn = document.getElementsByTagName('button')[3];
let chooseItem = document.querySelector('input.choose-item');
let goodsItems = document.querySelector('input.goods-item');
let timeValue = document.querySelector('input.time-value');
let countBudget = document.querySelector('.count-budget-value');
let personal = document.querySelectorAll('.hire-employers-item');

console.log(employersBtn);

let money,
    price;
    name;


openBtn.addEventListener('click', () => {
money = prompt('Ваш бюджет?', "");

while (isNaN(money) || money == "" || money == null) {
	money = prompt('Ваш бюджет?', "");
}
budgetValue.textContent = money;
nameValue.textContent = prompt('Название магазина?', "").toUpperCase();

});

goodsBtn.addEventListener('click', () => {

     for (let i = 0; i < goodsItem.length; i++) {
     	let a = goodsItem[i].value;
     	if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
     		mainList.shopGoods[i] = a;
     		goodsValue.textContent = mainList.shopGoods;
     		console.log('Всё верно!');
	       }

	       else {
         i--;
    	}
}
});

chooseItem.addEventListener('change', () => {

let items = chooseItem.value;

 if (isNaN(items) && items != '') {
mainList.shopItems = items.split(",");
mainList.shopItems.sort();
itemsValue.textContent = mainList.shopItems;
}
else {
	alert("Ошибка");
}

// arrItems = mainList.shopItems

// arrItems.forEach(function(item, i, arrItems) {

//   console.log("У нас вы можете купить: " + i + item);

// });

// let num = 0;

// for (let key in mainList.shopItems) {
// 	num++;
// 	alert(num+ ". "+"В наличии есть " +mainList.shopItems[key]);
// }

});


timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	 if (time < 0) {
	     	console.log('unreal!');
	     	mainList.open = false;
	     } else if (time > 8 && time < 20) {
	     	console.log("Время работать");
	     	mainList.open = true;
	     } else if (time < 24) {
	     	console.log("Уже слишком поздно");
	     	mainList.open = false;
	     } else {
	     	console.log("В сутках лишь 24 часа");
	     	mainList.open = false;
	     };

if (mainList.open == true) {
	isopenValue.style.backgroundColor = "green";
}
else {
	isopenValue.style.backgroundColor = "red";
}

});

budgetBtn.addEventListener('click', () => {

countBudget.value = money / 30;

});



var mainList = {
	budget: money,
 shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],


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
}

employersBtn.addEventListener('click', () => {


for (let i = 0; i < personal.length; i++) {
   let persName = personal[i].value;
   mainList.employers[i] = persName;
   employersValue.textContent += mainList.employers[i] + ", ";
}

});

