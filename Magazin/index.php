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

if (isset($_GET['jsonp'])) { // index.php?ajax=1&category=Аминокислоты
    if (isset($_GET['category'])) {
        $resource = query_db('select name,producer,description,price from products where category="' . $_GET['category'] . '";');

        $data = array();
        while ($row = mysql_fetch_assoc($resource)) {
            array_push($data, $row);
        }

        echo $_GET['jsonp'] . '(' . json_encode($data) . ');';
    }
} else {

    // меню категории

    $resource = query_db('select distinct category from products');

    $sorted_categories = array();

    while ($row = mysql_fetch_assoc($resource)) {
        array_push($sorted_categories, $row['category']);
    }
    sort($sorted_categories, SORT_STRING);

    if (!isset($_GET['category'])) {
        $content = 'slider';
    } else {
        $content = 'grid';
        $category = $_GET['category'];
    }
    require_once('templates/index.tmpl');
}

?>
