export default function() {


function emailValid (mail) {
  const pat = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
  return (pat.test(mail));
}

var validStatusMail = {};

var mailInputsNL = document.querySelectorAll('input[name="email"]');
var mailInputs = Array.prototype.slice.call(mailInputsNL);

mailInputs.forEach(mail => {
		
	Inputmask({"mask": "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]"}).mask(mail); 

	var label = mail.parentElement;
		
	var reset = function reset() {
		label.classList.remove("valid");
		label.classList.remove("invalid");
	};

	mail.addEventListener('blur', function () {
		reset();
		if (mail.value.trim()) {
			if (emailValid(mail.value)) {
				label.classList.add("valid");
				validStatusMail[mail] = true
			} else {
				label.classList.add("invalid");
				validStatusMail[mail] = false
			}
		}
	});
	mail.addEventListener('change', reset);
	mail.addEventListener('keyup', reset);

})



var validStatusTel = {};

var telInputsNL = document.querySelectorAll('input[name="tel"]');
var telInputs = Array.prototype.slice.call(telInputsNL);

	telInputs.forEach(function (tel) {

		Inputmask({"mask": "+99999999999[9][9][9][9]"}).mask(tel); 

		var iti = window.intlTelInput(tel, {
		  utilsScript: "./build/lib/mask/js/utils.js",
		  preferredCountries: ['ru', 'ua']
		});
		var label = tel.parentElement.parentElement;
		
		var reset = function reset() {
			// console.log('iti.getNumber()')
			// console.log(iti.getNumber(intlTelInputUtils.numberFormat))
			// console.log(iti)
			label.classList.remove("valid");
			label.classList.remove("invalid");
		};

		tel.addEventListener('blur', function () {
			reset();
			var test = iti
			if (tel.value.trim()) {
				if (iti.isValidNumber()) {
					label.classList.add("valid");
					validStatusTel[tel] = true
				} else {
					var errorCode = iti.getValidationError();
					label.classList.add("invalid");
					validStatusTel[tel] = false
				}
			}
		});
		tel.addEventListener('change', reset);
		tel.addEventListener('keyup', reset);
	});






	var formNL = document.querySelectorAll('.same__form');
	var formList = Array.prototype.slice.call(formNL);

	formList.forEach(function (form) {
		$(form).on("submit", function (ev) {

			ev.preventDefault();
			var telInput = this.querySelector('input[name="tel"]');

			var btnSubmit = this.querySelector('button[type="submit"]');

			var mailInput = this.querySelector('input[name="tel"]');

			if (mailInput) {
				var validMail = validStatusMail[mailInput];
			}

			var validTel = validStatusTel[telInput];
			if (!validTel || !mailInput) return alert('Некорректно заполнены поля');

			var block = $(this).attr('data-block');
			var sendBody = $(this).serialize();

			if (block) {
				sendBody += "&block=".concat(block);
				// console.log('block');
				// console.log(block);
			} else {
				block = localStorage.getItem('blockNameForSend');
				sendBody += "&block=".concat(block);
				// console.log('block');
				// console.log(block);
			}

			// console.log('sendBody');
			// console.log(sendBody);
			fetch("./send.php", {
				method: "POST",
				body: sendBody,
				headers: {
				"content-type": "application/x-www-form-urlencoded"
				}
			}).then(function (res) {
				// console.log(res);

				if (res.ok) {
					alert('Заявка отправлена');
					var inputs = Array.prototype.slice.call(form.querySelectorAll('input'))
					inputs.forEach(inp => inp.value='')
					form.parentElement.remove('active');
					html.style.overflowX = 'hidden';
					html.style.overflowY = 'scroll';
				} else {
					alert('Ошибка отправки. Попробуйте позже.');
					console.error("Fetch: ".concat(res.statusText));
				}
			});
		});
	});

}