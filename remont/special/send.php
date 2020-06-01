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
	$to .= 'anatoliielit@gmail.com' . ", ";
	$to .= 'ttd.com.ua@i.ua' . ", ";
	$to .= 'shavo_soad@ukr.net';
	$from = 'shavo_soad@ukr.net';
	$headers = "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "From: <ttd.com.ua@i.ua>\r\n"; 
	$headers .= "Reply-To: ttd.com.ua@i.ua\r\n"; 
	$subject = 'Заказать замер remprofbud.com';


	$email_body = "<div style='background-image: linear-gradient(-58deg, #c0e1ff 0%, #dce5ff 100%);padding: 10px;'>
		<a href='https://remprofbud.com/'><img style='max-width:225px; margin-bottom:30px;' src='https://remprofbud.com/assets/img/Logo.svg'></a>
		<p style='
			margin: 0 0 15px;
			color: #123965; 
		    font-size: 16px;
		    font-weight: 400;
		    line-height: 22px;'>
		    <b>$name желает заказать замер.<b>
		</p>
		<ul style='border-right: 2px solid black; list-style:none;margin-bottom:30px;'>
		<li><p style='
			margin: 0 0 15px;
			color: #0a243e;
		    font-size: 18px;
		    font-weight: 400;
		    line-height: 25px;'>Имя клиента: $name</p></li>
		<li><p style='
			margin: 0 0 15px;
			color: #0a243e;
		    font-size: 18px;
		    font-weight: 400;
		    line-height: 25px;'>Номер телефона: $phone</p></li>
		</ul>
		<span style='
				margin-bottom:30px; 
				display: inline-block;
			    color: #111111;
			    font-size: 14px;
			    font-weight: 400;
			    line-height: 22px;'>Сообщение с сайта <a style='opacity:1;cursor: pointer;color: #123965;font-size: 18px;font-weight: 700;text-decoration: none;' href='https://remprofbud.com/'>remprofbud.com</a></span>
		</div>";

if(isset($_POST)) {
		if(empty($name) or !isset($name)) {
			$response['error'] = 'Пожалуйста укажите Ваше имя';
		} else {
			if(!isset($tel) or $telLength < 12) {
				$response['error'] = 'Пожалуйста укажите Ваш номер телефона';
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




