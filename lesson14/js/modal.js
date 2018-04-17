function modal () {
	
	let morel = document.getElementsByClassName('morel');

let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup-close');


for (i=0; i<5; i++) {
morel[i].addEventListener('click', function () {
	 this.classList.add('more-splash');
   overlay.style.display="block";
   document.body.style.overflow = 'hidden';
   i++;
 
});
};


close.addEventListener('click', function () {

overlay.style.display = "none"; 

morel[0].classList.remove('more-splash');
document.body.style.overflow = 'auto';

let status = document.querySelector('.status');

if (status.type == null) {
  status.style.display = 'none';
}


});

let message = new Object();
message.loading = "Загрузка";
message.success = "Спасибо! Мы вам перезвоним";
message.failure = "Ошибка! Что-то не так";



for(i=0; i<2; i++) {

let form = document.getElementsByClassName('main-form')[i];
let input = form.getElementsByTagName('input');
let statusMessage = document.createElement('div');

statusMessage.classList.add('status');


form.addEventListener('submit', function(event) {
event.preventDefault();
form.appendChild(statusMessage);
let request = new XMLHttpRequest();
request.open('POST', 'server.php');
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
let formData = new FormData(form);

request.send(formData);

request.onreadystatechange = function() {
  if (request.readyState < 4) {
    statusMessage.innerHTML = message.loading;
  } 

  else if (request.readyState == 4) {
    if (request.status == 200 && request.status < 300) {
  statusMessage.innerHTML = message.success;
}
else {
  statusMessage.innerHTML = message.failure;
}
}

}

for (let i = 0; i < input.length; i++) {
  input[i].value = '';
}
});

};

}

module.exports = modal;