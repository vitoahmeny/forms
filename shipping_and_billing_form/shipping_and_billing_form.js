document.addEventListener('DOMContentLoaded', function() {
	var form = document.getElementsByTagName('form')[0];
	var inputs = document.getElementsByTagName('input');
	var saveContinue = document.getElementById('saveContinue');
	var error = document.getElementById('error');

	saveContinue.addEventListener('click', function (event) {
		event.preventDefault();
		for (var i = inputs.length - 1; i >= 0; i--) {
			if (validator.isEmpty(inputs[i].value) && (inputs[i].getAttribute('id') !== 'addressLine2')) {
				error.innerHTML = "* Requires valid " + inputs[i].getAttribute('name');
			}
		}
	});

	for (var i = inputs.length - 1; i >= 0; i--) {
		inputs[i].addEventListener('keyup', function (event) {
			if (error.innerHTML) {
				error.innerHTML = '';
			}
		});
	}

});