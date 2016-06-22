var form = document.getElementsByTagName('form')[0];
var userName = document.querySelector('.text_input');
var passWord = document.querySelector('.password_input');
var error = document.querySelector('.error')


form.addEventListener("submit", function (event) {
	if (validator.isEmpty(userName.value) && validator.isEmpty(passWord.value)) {
		error.innerHTML = "Please enter your Username and Password."
	}
	else if (validator.isEmpty(userName.value)) {
    	error.innerHTML = "Username can't be empty."
	}
	else if (validator.isEmpty(passWord.value)) {
		error.innerHTML = "Password can't be empty."
	}
	
} );




