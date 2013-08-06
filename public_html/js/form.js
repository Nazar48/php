function _send() {
	var contactname, contactnames, i, phone, phones;

	contactnames = document.getElementsByName('contactname');
	phones = document.getElementsByName('phone');

	for (i = 0; i < contactnames.length; i++) {
		if (contactnames[i].value != 'Введите ваше имя:') {
			contactname = contactnames[i].value;
			break;
		}
	}

	for (i = 0; i < phones.length; i++) {
		if (phones[i].value != 'Введите ваш телефон:') {
			phone = phones[i].value;
			break;
		}
	}

	if (contactname == undefined || phone == undefined) {
		// error
		return false;
	}

	$.ajax({
		url: 'form.php',
		data: { 'contactname': contactname, 'phone' : phone },
		success: function(data) { window.alert(data); }
	});

	return false;
}

window.onload = function() {
	var submits;

	submits = document.getElementsByTagName('form');

	for (i in submits) {
		submits[i].onsubmit = function() { return _send(); };
	}
}




/*

window.addEvent('domready', function() {
    $('submit').addEvent('click', function(){
 
    });
});
 $('form2').get('send', {
      method: 'get',
      url: 'form.php',      
      onRequest: function(){
        $('form2').set('html', img)
      },
      onSuccess: function(responseText){
        (function(){ $('form2').set('text', responseText) }).delay(3000);
      }
 
    }).send();

*/
