<?php
// Подключение и выбор БД
$db = mysqli_connect('localhost', 'root', '', 'grid');
# ВНИМАНИЕ!!!
# Данный код не имеет проверок запрашиваемых данных
# что может стать причиной взлома!
# Обязательно проверяйте все данные
# поступающие от клиента

if ($db) {
	echo 'Есть';
} else {
	echo 'error';
}


$result = mysqli_query($db, "SELECT * FROM `cities`");

$cities = array();
if ($result)
    foreach ($result as $city)
        $cities[] = $city;


// print_r($cities);
