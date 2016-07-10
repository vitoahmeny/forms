document.addEventListener('DOMContentLoaded', function() {
	var form = document.getElementsByTagName('form')[0];
	var date = document.getElementById('date');
	var hour = document.getElementById('hour');
	var phone = document.getElementById('phone');
	var email = document.getElementById('email');
	var errorMessage = document.getElementById('errorMessage');
	var dateCheck = document.getElementById('dateCheck');
	var inputs = document.getElementsByTagName('input');

	date.addEventListener('focusout', function (event) {
		if (!validator.isEmpty(this.value)){

		if (!validator.isDate(date.value)) {
			date.className = 'invalidInput';
			errorMessage.innerHTML = 'Valid date required';
		}
		else 
		{
			date.className = '';
			errorMessage.innerHTML = '';
			dateCheck.innerHTML = '&#10004;';
		}}
	});

	hour.addEventListener('focusout', function (event) {
		if (validator.isHour(this.value) && !(validator.isEmpty(this.value))) {
			this.value = validator.completeHour(hour.value);
		}

		else if (validator.isEmpty(this.value)) {
			this.innerHTML = '';
			this.className = '';
		}

		else

		{
			this.className = 'invalidInput';
			errorMessage.innerHTML = 'Valid hour required';
		}
	});

	phone.addEventListener('focusout', function (event) {
		if (!validator.isEmpty(this.value))
		{
			if (!validator.isPhoneNumber(this.value)) {
					this.className = 'invalidInput';
					errorMessage.innerHTML = 'Valid phone number required';
				}}
	});

	phone.addEventListener('keyup', function (event) {
		if (this.className == 'invalidInput') {
			this.className = '';
			errorMessage.innerHTML = '';
		}
	});

	email.addEventListener('focusout', function () {
		if (!validator.isEmailAddress(this.value)) {
			this.className = 'invalidInput';
			errorMessage.innerHTML = 'Valid email required';
		}
	});

	form.addEventListener('submit', function (event) {
		for (var i = inputs.length - 1; i >= 0; i--) {
			if (validator.isEmpty(inputs[i].value)) {
				errorMessage.innerHTML = 'Valid ' + inputs[i].getAttribute('id') + ' required';
			}
		}
	});
});