<?php 

/* **********************************  ********************************** */ 
$yourCustomDate = "28 октября в 20:00"; // Дату и время вводить обязательно в одну строку и в ковычках!
/* **********************************  ********************************** */ 

$connect = mysqli_connect('localhost', 'u1435642_mpleade', 'uJ2pJ6rD2xvW2l', 'u1435642_mpleader');

if(!$connect) {
  echo 'Error w/ database';
}

mysqli_set_charset($connect, "utf8mb4");

// require_once('phpmailer/PHPMailerAutoload.php');
// $mail = new PHPMailer;
// $mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$type = $_POST['claimtype'];

mysqli_query($connect, "INSERT INTO `claims` (`id`, `name`, `phone`, `type`) VALUES (NULL, '$name', '$phone', '$type')");
header('location: thanks.html');

// $mail->isSMTP();
// $mail->Host = 'smtp.yandex.ru';
// $mail->SMTPAuth = true;
// $mail->Username = 'support@artemdaniluk.ru'; 
// $mail->Password = 'mgrfzfittafipbsz'; 
// $mail->SMTPSecure = 'ssl';
// $mail->Port = 465;
// $mail->SMTPKeepAlive = true;

// $mail->setFrom('support@artemdaniluk.ru'); 
// $mail->addAddress($email);

// $mail->Subject = 'Заявка на участие в интенсиве Wildberries';

// $body = ''
// $mail->msgHTML($body);




// $mail->send();

// $mail->clearAddresses();
// $mail->addAddress("sparkereddd@gmail.com");
// $bodyAdmin = "Пользователь: " . $name . " оставил заявку. Его почта: " . $email . ". Номер телефона: " . $phone;
// $mail->msgHTML($bodyAdmin);
// $mail->send();




// if(!$mail->send()) {
//   echo 'Error w/ mailer';
//   // header('location: thank-you.html');
// } else {
//   header('location: thank-you.html');
// }

?>