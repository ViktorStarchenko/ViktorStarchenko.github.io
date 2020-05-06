<?php 



	$name = $_POST['name'];
	$phone = $_POST['phone'];
	// $message = $_POST['message'];

	$name = htmlspecialchars($name);
	$phone = htmlspecialchars($phone);
	$message = htmlspecialchars($message);

	$name = urldecode($name);
	$phone = urldecode($phone);
	$message = urldecode($message);
	
	$name = trim($name);
	$phone = trim($phone);
	$message = trim($message);


	$tel = preg_replace("/[^0-9]/", '', $phone);
	$telLength = strlen($tel);
	// if ( empty($tel) or $telLength < 12) {
	// 	echo $tel;
	// 	die();
	// }
	$response = array();
	$success = array();
	// $to = 'shavo_soad@ukr.net' . ", ";
	// $to .= 'reception.tcde@gmail.com' . ", ";
	// $to .= 'rosi@dmail1.net' . ", ";
	$to .= 'shavo_soad@ukr.net';
	$from = 'shavo_soad@ukr.net';
	$headers = "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "From: <reception.tcde@gmail.com>\r\n"; 
	$headers .= "Reply-To: reception.tcde@gmail.com\r\n"; 
	$subject = 'Форма обратной связи ';


	$email_body = "<h4>Здравствуйте!<h4> <br>
		<p style='margin: 0 0 15px'><b>$name отправил форму обратной связи.<b></p>
		<ul style='border-right: 2px solid black'>
		<li><p style='margin: 0 0 15px'>Имя клиента: $name</p></li>
		<li><p style='margin: 0 0 15px'>Номер телефона: $phone</p></li>
		</ul>";

if(isset($_POST)) {
		if(empty($name) or !isset($name)) {
			$response['error'] = 'Пожалуйста у кажите Ваше имя';
		} else {
			if(!isset($tel) or $telLength < 12) {
				$response['error'] = 'Пожалуйста у кажите Ваш номер телефона';
			} else {
				mail($to, $subject, $email_body, $headers);
			}
		}

		if (empty($response['error'])) {
			$response['success'] = 'Сообщение успешно отправлено';
			print_r(json_encode($response));
		} else {
			print_r(json_encode($response));
		}

	} 




