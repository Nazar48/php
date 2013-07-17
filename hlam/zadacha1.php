 <?php
$countKm = 0;
$Dni =  (isset($_GET['Dni']) && (int)$_GET['Dni'])?(int)($_GET['Dni']):7;
$Kilometri =(isset($_GET['Kilometri']) && (int)$_GET['Kilometri'])?(int)($_GET['Kilometri']):10;
$Procenti = (isset($_GET['Procenti']))?(int)($_GET['Procenti']):0;
for ($i=0 ; $i <$Dni; $i++){
    $countKm=$countKm+$Kilometri;
    $Kilometri=$Kilometri + $Kilometri*($Procenti/100);
}
echo "<p> Пробежал $countKm км</p>";
?>
<html>
    <body>
        <div>
            <form>
                <p><input value="<?=$_GET["Kilometri"];?>" type="text" name="Kilometri" /> Нужно пробежать километров</p>
                <p><input value="<?=$_GET["Procenti"];?>" type="text" name="Procenti" /> Увеличить расстояние в процентах</p>
                <p><input value="<?=$_GET["Dni"];?>" type="text" name="Dni" /> Дней будете бежать</p>
                <input type="submit" name="submit" value="Обработать"/>
            </form>
        </div> 
    </body>
</html>
