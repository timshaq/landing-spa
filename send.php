<?php

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: noreply@veranda-spa.com\r\n";

$name   = $_POST["name"];
$tel    = $_POST["tel"];
$email  = $_POST["email"];

$to          = "op-web2@region-media-yug.ru";
$subject     = "Заявка На Бассейн";

$text        = $name;
$text       .= " оставил(-а) заявку на сайте <br>";
$text       .= "Номер: ";
$text       .= $tel;

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