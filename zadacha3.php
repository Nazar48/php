<?php
        echo "'" . $_GET["value"] . "'<br>\n";
        $x = explode(" ", $_GET["value"]);
        $m = max($x);
        echo "$m<br>\n";
?>

        
        
<form>
  <p><input type="text" name="value" />Цыфры</p>
  <input type="submit" name="submit" value="Обработать"/>
</form>