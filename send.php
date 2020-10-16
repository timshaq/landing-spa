<?php

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: info@verandagroup.ru\r\n";

$name   = $_POST["name"];
$tel    = $_POST["tel"];
$email  = $_POST["email"];
$block  = $_POST["block"];

// $to          = "info@verandagroup.ru";
$to          = "timur53shakirov@mail.ru";
$subject     = "Заявка На Бассейн";

$text        = $name;
$text       .= " оставил(-а) заявку на сайте ($block)";

if (!empty($tel)) {
	$text .= "<br>";
	$text .= "Номер: ";
	$text .= $tel;
}

if (!empty($email)) {
	$text .= "<br>";
	$text .= "Mail: ";
	$text .= $email;
}

$sendToMail  = mail($to,$subject,$text,$headers);

if ($sendToMail) {
  echo "ok";
}

?>