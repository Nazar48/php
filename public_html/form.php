<?php
//обьявляю переменную для ошибки
function _fail($n) {
    exit("Ошибка $n");
}
//проверка"если не существуют или пустые поля,выводим фейл 1
if(!isset($_GET['contactname']) || $_GET['contactname'] == '') {
    _fail(1);
}
//проверка"если не существуют или пустые поля,выводим фейл 2
if(!isset($_GET['phone']) || $_GET['phone'] == '') {
    _fail(2);
}
//имейл куда будет приходить письмо
//$recipient = 'mystic48@mail.ru';
//создаем переменную куда будут приходить данные из инпута контактнейм
$contactname = trim(addslashes($_GET['contactname']));
//создаем переменную куда будут приходить данные из инпута телефон
$phone = ucwords(trim(addslashes($_GET['phone'])));
//все это впихиваем в переменную бади
$body = 'Контактное лицо:  ' . $_GET['contactname'] . "\n" . 'Телефон:  ' . $_GET['phone'];

//проверка если не отправилено письмо,выводим фейл 3
if (!mail('Sitemaker88@gmail.com, mystic48@mail.ru', 'Contacts:', $body, 'Content-Type: text/plain; charset=UTF-8')) {
    _fail(3);
}

//если все успешно отправлено выводим Имя введенное в форму и благодарим за ваше сообщение!
echo $_GET['contactname'] . '  благодарим за ваше сообщение!';

?>

