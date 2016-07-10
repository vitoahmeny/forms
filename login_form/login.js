document.addEventListener('DOMContentLoaded', function() {
	// body...
var form = document.getElementsByTagName('form')[0];
var userName = document.querySelector('.text_input');
var passWord = document.querySelector('.password_input');
var error = document.querySelector('#error');

userName.addEventListener('keyup', function (event) {
	error.innerHTML = "";
});

passWord.addEventListener('keyup', function (event) {
	error.innerHTML = "";
});

form.addEventListener("submit", function (event) {
	event.preventDefault();
	if (validator.isEmpty(userName.value) || (validator.isEmpty(userName.value) && validator.isEmpty(passWord.value))) {
    	error.innerHTML = "Username can't be empty.";
	}
	else if (validator.isEmpty(passWord.value)) {
		error.innerHTML = "Password can't be empty.";
	}
});
});

