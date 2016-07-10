document.addEventListener('DOMContentLoaded', function() {
	var form = document.getElementsByTagName('form')[0];
	var name = document.getElementById('name');
	var cardNumber = document.getElementById('cardNumber');
	var notEnoughNumbers = document.getElementById('notEnoughNumbers');
	var cvv_explained = document.getElementById('cvv_explained');
	var securityCode = document.getElementById('securityCode');
	var date = document.getElementById('date');
	var cvvImg = document.getElementById('cvvImg');
	var inputs = document.getElementsByTagName('input');
	var error = document.getElementById('error');

	cardNumber.addEventListener('keyup', function (event) {
		if (!validator.isCreditCard(this.value)) {
			notEnoughNumbers.innerHTML = 'A 16 digits number';
			cardNumber.className = 'invalidInput';
		}
		else
		{
			notEnoughNumbers.innerHTML = "";
			cardNumber.className = 'valid';
		}
	});

	cvv_explained.addEventListener('mouseover', function (event) {
		cvvImg.style.display = 'inline';
	});

	cvv_explained.addEventListener('mouseleave', function (event) {
		cvvImg.style.display = 'none';
	});

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		for (var i = inputs.length - 1; i >= 0; i--) {
			if (validator.isEmpty(inputs[i].value)) {
				error.innerHTML = "Valid " + inputs[i].getAttribute('name') + " required";
			}
		}
	});
});