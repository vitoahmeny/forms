document.addEventListener('DOMContentLoaded', function() {

	var form = document.getElementsByTagName('form')[0];
	var firstName = document.getElementById('firstName');
	var lastName = document.getElementById('lastName');
	var birthDate = document.getElementById('birthDate');
	var email = document.getElementById('email');
	var password = document.getElementById('password');
	var inputs = document.getElementsByTagName('input');

	var error = document.getElementById('error');
	var invalidFirstName = document.getElementById('invalidFirstName');
	var invalidLastName = document.getElementById('invalidLastName');
	var invalidDate = document.getElementById('invalidDate');
	var invalidEmail = document.getElementById('invalidEmail');
	var invalidPassword = document.getElementById('invalidPassword');

firstName.addEventListener('keyup', function (event) {
	if (validator.isLength(firstName.value, 1)) {
		invalidFirstName.innerHTML = 'At least two characters';
	}
	else 
		invalidFirstName.innerHTML = "";
	error.innerHTML = "";
});

lastName.addEventListener('keyup', function (event) {
	if (validator.isLength(lastName.value, 1)) {
		invalidLastName.innerHTML = 'At least two characters';
	}
	else 
		invalidLastName.innerHTML = "";
		error.innerHTML = "";

});

birthDate.addEventListener('keyup', function (event) {
	if (!validator.isDate(birthDate.value)) {
		invalidDate.innerHTML = 'Valid date required (1988-02-14)';
	}
	else
		invalidDate.innerHTML = "";
		error.innerHTML = "";
});

email.addEventListener('keyup', function (event) {
	if (!validator.isEmailAddress(email.value)) {
		invalidEmail.innerHTML = "Valid email required (jsmith@example.com)";
	}
	else {
		invalidEmail.innerHTML = "";
			error.innerHTML = "";
	}
});

password.addEventListener('keyup', function (event) {
	if (validator.isLength(password.value, 7)) {
		invalidPassword.innerHTML = "At least 8 characters";
	}
	else 
		invalidPassword.innerHTML = "";
		error.innerHTML = "";
});

form.addEventListener("submit", function (event) {
		event.preventDefault();
		for (var i = inputs.length - 1; i >= 0;  i--) {
			if (validator.isEmpty(inputs[i].value)) {
				error.innerHTML = inputs[i].getAttribute('name') + " required";
			}
		}
});
});