<!-- HTML скелет обязателен всегда -->

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title></title>
		<style type="text/css">
			div { padding: 3px; border: 1px solid; margin: 3px; }
		</style>
	</head>
	<body>
<?php
	if (isset($_GET["hours"], $_GET["amoebas"], $_GET["coof"], $_GET["step"])) {
		echo "	<div>\n";
		for ($hour = 0; $hour <= $_GET["hours"]; $hour += $_GET["step"]) {
			echo "		<p>Прошло часов: ${hour}ч., амёб в пробирке: ". $_GET["amoebas"] . "</p>\n";
			$_GET["amoebas"] *= $_GET["coof"];
		}
		echo "	</div>\n";
	}
?>
		<div><form>
			<p><input type="text" name="hours" /> сколько часов наблюдать за амёбами</p>
			<p><input type="text" name="amoebas" /> сколько амёб у нас есть до начала эксперимента</p>
			<p><input type="text" name="coof" /> сколько амёб образуется в результате деления</p>
			<p><input type="text" name="step" /> каждые сколько часов делятся амёбы</p>
			<input type="submit" name="submit" value="Отправить"/>
                </form></div>
	</body>
</html>
