<?php

require_once('includes/config.inc');

//function _error($s) {
//	mail('заказчик@mail.ru', 'Ошибка на сайте.', 'На сайте произошла ошибка. Свяжитесь с разработчиком.');
//	error_log($s);
//}

function query_db($query) {
	if (!mysql_connect()) {
		error_log('DEBUG: could not connect to db: ' . mysql_error() . "\n");
	}
	if (!mysql_select_db('mad')) {
		error_log('DEBUG: could not select db: ' . mysql_error() . "\n");
	}
	$result = mysql_query($query);
	mysql_close();

	return $result;
}

$resource = query_db('select distinct category from products');

$sorted_categories = array();

while ($row = mysql_fetch_assoc($resource)) {
	array_push($sorted_categories, $row['category']);
}
sort($sorted_categories, SORT_STRING);





$resource1 = query_db('select distinct producer from products');

$sorted_producers = array();

while ($row1 = mysql_fetch_assoc($resource1)) {  
    array_push($sorted_producers, $row1['producer']);
}
 sort($sorted_producers, SORT_STRING);
 
require_once('templates/index.tmpl');



?>
