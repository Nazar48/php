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

if (isset($_GET['add_to_cart'])) {
    $resource = query_db('select price from products where id=' . $_GET['add_to_cart'] . ';');

    while ($row = mysql_fetch_assoc($resource)) {
        echo $row['price'];
    }
} elseif (isset($_GET['jsonp'])) { // index.php?ajax=1&category=Аминокислоты
    if (isset($_GET['search'])) {
        $resource = query_db('select * from products where name like "%' . $_GET['search'] . '%" or producer like "%' . $_GET['search'] . '%" or description like "%' . $_GET['search'] . '%" or category like "%' . $_GET['search'] . '%";');
    } elseif (isset($_GET['category'])) {
        $resource = query_db('select * from products where category="' . $_GET['category'] . '";');
    }
    $data = array();
    while ($row = mysql_fetch_assoc($resource)) {
        array_push($data, $row);
    }

    echo $_GET['jsonp'] . '(' . json_encode($data) . ');';
} else {

    // меню категории

    $resource = query_db('select distinct category from products');

    $sorted_categories = array();

    while ($row = mysql_fetch_assoc($resource)) {
        array_push($sorted_categories, $row['category']);
    }
    sort($sorted_categories, SORT_STRING);

    if (isset($_GET['search'])) {
        $content = 'grid';
        $request = array( 'search' => $_GET['search'] );
    } elseif (isset($_GET['category'])) {
        $content = 'grid';
        $request = array( 'category' => $_GET['category'] );
    } elseif (isset($_GET['delivery'])) {
        $content = 'delivery';
    } else {
        $content = 'slider';
    }
    require_once('templates/index.tmpl');
}

?>
