<?php
// Подключение и выбор БД
$db = mysqli_connect('localhost', 'root', '', 'grid');
# ВНИМАНИЕ!!!
# Данный код не имеет проверок запрашиваемых данных
# что может стать причиной взлома!
# Обязательно проверяйте все данные
# поступающие от клиента

// Номер запрашиваемой страницы
$page = $_GET['page'];

// Количество запрашиваемых записей
$limit = $_GET['rows'];

// Номер элемента массива по которому
// следует производить сортировку
// Проще говоря поле, по которому
// следует производить сортировку 
$sidx = $_GET['sidx']; 



// Направление сортировки
$sord = $_GET['sord'];                         

// Если не указано поле сортировки,
// то производить сортировку по первому полю
if(!$sidx) $sidx =1;                 

// Выполним запрос, который
// вернет суммарное кол-во записей в таблице
$result = mysqli_query($db, "SELECT COUNT(*) AS count FROM cities");

print_r($result);
$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
 // Теперь эта переменная хранит кол-во записей в таблице
$count = $row['count'];                   

// Рассчитаем сколько всего страниц займут данные в БД
if( $count > 0 && $limit > 0) {
    $total_pages = ceil($count/$limit);
} else {
    $total_pages = 0;
}                   

// Если по каким-то причинам клиент запросил
if ($page > $total_pages) $page=$total_pages;                   

// Рассчитываем стартовое значение для LIMIT запроса
$start = $limit*$page - $limit;                   

// Зашита от отрицательного значения
if($start < 0) $start = 0;                   

// Запрос выборки данных
$query = "SELECT id, country_code, region_code, city, latitude, longitude, nbip FROM cities ORDER BY ".$sidx." ".$sord." LIMIT ".$start.", ".$limit;
$result = mysqli_query($db, $query);                   

echo $result;
// Начало xml разметки
$s = "<?xml version='1.0' encoding='utf-8'?>";
$s .=  "<rows>";
$s .= "<page>".$page."</page>";
$s .= "<total>".$total_pages."</total>";
$s .= "<records>".$count."</records>";                   

// Строки данных для таблицы
// Не забудьте обернуть
//текстовые данные в <![CDATA[]]>                   

while($row = mysqli_fetch_assoc($result)) {
  $s .= "<row id='". $row[id]."'>";
  $s .= "<cell><![CDATA[". $row[country_code]."]]></cell>";
  $s .= "<cell>". $row[region_code]."</cell>";
  $s .= "<cell><![CDATA[". $row[city]."]]></cell>";
  $s .= "<cell>". $row[latitude]."</cell>";
  $s .= "<cell>". $row[longitude]."</cell>";
  $s .= "<cell>". $row[nbip]."</cell>";
  $s .= "</row>";
}
$s .= "</rows>";                   

// Перед выводом не забывайте выставить header
// с типом контента и кодировкой
header("Content-type: text/xml;charset=utf-8");                 

echo $s;
?>