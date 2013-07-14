<?php

function query_db($query) {
	if (!mysql_connect('localhost', 'user', 'pass')) {
		_error('could not connect');
	}
	if (!mysql_select_db('mad') {
		_error('could not select db');
	}
	$result = mysql_query($query);
	mysql_close();

	return $result;
}

$data = query_db('select * from products where category="Аминокислоты"');

$menu = query_db('select distinct category from products');

// $menu = array( 0 => 100, 1 => 200, 2 => 1000 );

for ($menu as $key => $val) {
	echo '<li><a  href="#">' + $val + '</a></li>\n';
}


?>