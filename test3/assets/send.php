<?php 


if(isset($_POST) and !empty($_POST['name']) and !empty($_POST['phone']) and !empty($_POST['message'])) {
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];

	$name = htmlspecialchars($name);
	$phone = htmlspecialchars($phone);
	$message = htmlspecialchars($message);

	$name = urldecode($name);
	$phone = urldecode($phone);
	$message = urldecode($message);

	$name = trim($name);
	$phone = trim($phone);
	$message = trim($message);
	if (!preg_match('/\d{9}/',$_POST['phone'])) {
		echo 2;
		die();
	}

	$to = 'shavo_soad@ukr.net' . ", ";
	// $to .= 'reception.tcde@gmail.com' . ", ";
	// $to .= 'rosi@dmail1.net' . ", ";
	// $to .= 'tehcde@gmail.com';
	$from = 'shavo_soad@ukr.net';
	$headers = "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "From: <reception.tcde@gmail.com>\r\n"; 
	$headers .= "Reply-To: reception.tcde@gmail.com\r\n"; 
	$subject = 'Форма обратной связи itcde.org';


	$email_body = "<h4>Здравствуйте!<h4> <br>
		<p style='margin: 0 0 15px'><b>$name отправил форму обратной связи.<b></p>
		<ul style='border-right: 2px solid black'>
		<li><p style='margin: 0 0 15px'>Имя клиента: $name</p></li>
		<li><p style='margin: 0 0 15px'>Номер телефона: $phone</p></li>
		<li><p style='margin: 0 0 15px'>Сообщение: $message</p></li>
		</ul>";


	if ( mail($to, $subject, $email_body, $headers) ) {
	    echo 1;
		} else {
		    echo 0;
		}
	} else  {
		echo 0;
	}

