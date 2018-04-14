window.addEventListener('DOMContentLoaded', function() {
	
	let tab = document.getElementsByClassName('info-header-tab');
	let tabContent = document.getElementsByClassName('info-tabcontent');
	let info = document.getElementsByClassName('info-header')[0];


	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
					tabContent[i].classList.remove('show');
					tabContent[i].classList.add('hide');
		}
	}
hideTabContent(1);

function showTabContent(b) {
	if(tabContent[b].classList.contains('hide')) {
		hideTabContent(0);
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');

	}
}

info.addEventListener('click', function(event) {
	let target = event.target;
	if(target.className == 'info-header-tab') {
   for (let i = 0; i < tab.length; i++) {
   	if (target == tab[i]) {
   		showTabContent(i);
   		break;
   	}
   }
	}
});

//Timer
let deadline = '2018-04-22';
function getTimeRemaining(endtime) {
	let t = Date.parse(endtime) - Date.parse(new Date());
  seconds = Math.floor( (t/1000) % 60 ),
  minutes =  Math.floor( (t/1000/60) % 60),
  hours = Math.floor( (t/(1000*60*60)) );

	return {
		'total': t,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
};

function setClock(id, endtime) {

 let timer = document.getElementById(id),
   hours = timer.querySelector('.hours'),
   minutes = timer.querySelector('.minutes'),
   seconds = timer.querySelector('.seconds');

   function updateClock() {
   	let t = getTimeRemaining(endtime);
   	hours.innerHTML = t.hours;
   	minutes.innerHTML = t.minutes;
   	seconds.innerHTML = t.seconds;

   	if (t.total <= 0) {
   		clearInterval(timeInterval);
   	}
   };

   updateClock();
   let timeInterval = setInterval(updateClock, 1000);
};

setClock('timer', deadline);

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

}

});

