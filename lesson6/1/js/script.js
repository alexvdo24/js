let adv = document.getElementsByClassName('adv');
let menu = document.getElementsByClassName('menu')[0];
let menuItem = document.getElementsByClassName('menu-item');
let div = document.createElement('div');
let title = document.getElementById('title');
let promptAnsw = document.getElementById('prompt');
adv[0].remove();

div.classList.add('menu-item');
div.innerHTML = "Пятый пункт";
menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(div);
title.innerHTML = "Мы продаём только подлинную технику Apple";


let prm = prompt("Псс, не хотите поговорить о Стиве Джобсе? Что думаете о техние Apple?");
promptAnsw.innerHTML = prm;

let body = document.getElementsByTagName('body');
console.log(body);
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';