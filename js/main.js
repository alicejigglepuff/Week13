// // var whatever = document.getElementById('button');

// // function someFunction(){
// // 	//
// // }

// // whatever.addEventListener('onclick', someFunction(), false)

// // var crawshack = {
// // 	name: 'crawshack',
// // 	food: 'shrimp',
// // 	cost: 12,
// // 	amount: 4,
// // 	price: function(){
// // 		return this.cost*this.amount
// // 	}
// // }

// //1. Display a random number in the console between 1-20
// var number = Math.random()*20;
// console.log(number)

// //2. Create an app that selects a random name from an array of names and displays the selected name in the console
// var nameArray = ['Danny', 'Dtao', 'Growlithe', 'LittleDog', 'Cutie']
// var num	= Math.random()*nameArray.length;
// var i = Math.floor(num);
// console.log(nameArray[i]);

// //3. Display the full year in the console using the Date() object
// var today = new Date();
// console.log(today.getFullYear())

// //4. MOdify the previous program so the date displays after 2 seconds;
// setTimeout(function(){alert(today.getFullYear());}, 2000)

// //5. Modify the previous program so it initiates using a DOM event listener
// var el = document.getElementById('body');
// function domListenerEvent(){
// 	// el.textContent = today.getFullYear();
// 	setTimeout(function(){el.textContent = today.getFullYear();}, 2000);
// }
// el.addEventListener('onload', domListenerEvent(), false);

// var	name= ' Michael Jordan '
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(5));
// console.log(name.indexOf('ae'));

// var dan = ' Danny is a little growlithe who agrees that Mian should apply mascara on him';
// document.write(dan)
// console.log(dan.indexOf('Mian'));

// console.log(name.split(""));
// console.log(dan.replace('growlithe', 'dratini'));
// document.write(dan.replace('growlithe', 'dratini'))

// var text = 'Java script is not Java or Script. Javascript Java Script is a language in its own'
// var regex = /Java\s*Script/ig
// console.log(text.replace(regex, "Javascript"))

function validateEmail(){
	var emailInput = document.getElementById('email').value
	var regEx = /^[a-z0-9._%-] + @[a-z0-9.-]+\.[a-z]{2,5}$/
	console.log(regEx.test(emailInput))
}

document.getElementById('button').addEventListener('click', validateEmail, false)