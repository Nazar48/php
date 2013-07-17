<?php
// userName=123&userPass=123&submit=Login
if ($_POST["userName"] == "mad" && $_POST["userPass"] == 123) {
    include("index.php");
}
else{
    echo "пароль не правильный";
    
}
?>
