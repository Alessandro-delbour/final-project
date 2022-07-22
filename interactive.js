function tel(e) {
	e.preventDefault()

	return alert("vous êtes sur un ordinateur. S'il vous plait veuillez nous appeller sur votre téléphone au +216 29 896 632.");
}

function validateForm(e) {
 	e.preventDefault()

 	let name = document.loginForm.name.value
 	let email = document.loginForm.email.value
 	let age = document.loginForm.age.value
 	let tel = document.loginForm.tel.value

	if (name.length==0)
 		return alert(`vous devez entrer un nom`)

	if (email.length<6)
		 return alert(`entre un mail correcte (doit contenir @ et .com`)

	if (age<18)
		return alert(`vous n'avez pas l'age requie (*o*)`)
	if (tel.length<15)
		return alert(`entrer un numéro correcte (doit contenir +*** et espacer avec des espaces`)

	if (name.length>0 && email.length>6 && age>=18 && tel.length==15)
		return alert(`votre insription a bien été transmise !!`)
}

//this is a difficulte

let output = document.querySelector('.x');
let confirm = document.querySelector('.comfirm');

confirm.addEventListener('click',function(){

	let day = document.querySelector('#input-1').value;
	let month = document.querySelector('#input-2').value;
	let year = document.querySelector('#input-3').value;
	let visite = document.querySelector('#input-4').value;
	let date = document.querySelector('#input-5').value;
	console.log(day);

	if (date>31)
		return alert("entrer un date correcte (ne peut pas être supérieur a 31)")
	else
		output.innerHTML="vous avez un rendez au pré la"+' '+day+' '+date+' '+month+' '+' '+year+' pour un '+visite
		alert("Votre rendez vous a correctement était envoyer a l'équipe, merci 👌")
})
