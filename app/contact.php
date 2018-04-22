<?php

$errors = array(); //array to hold validation errors 
$data = array(); //array to pass back data

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'From: Change Log comic'; 
$to = 'brad@lineheight.co'; 
$subject = 'Change Log Comic -- form submission';
//$human = $_POST['human'];
//$human = 4;
  
$body = "From: $name\n \n E-Mail: $email\n \n Message:\n $message";

//validations
if (empty($_POST['name']))
  $errors['name'] = 'Please provide your name';

if (empty($_POST['email']))
  $errors['email'] = 'Please enter a valid email address';

//return a response 

//response if there are errors
if ( ! empty($errors)) {
  //if there are items in the errors array, return those errors
  $data['success'] = false;
  $data['errors'] = $errors;
} else {
  //if there are no errors, return a message
  $data['success'] = true;
  $data['message'] = 'Your message has been sent... Thanks!';
 
  mail ($to, $subject, $body, $from);
}

//return all our data to an AJAX call
echo json_encode($data);



/* - old stuff    
if ($_POST['submit'] && $human == '4') {				 
    if (mail ($to, $subject, $body, $from)) { 
    echo '<p class="submitsuccess">Your message has been sent!</p>';
    } else { 
      echo '<p class="submitfailure">Something went wrong, please try again.</p>'; 
    } 
		} else if ($_POST['submit'] && $human != '4') {
      echo '<p>You answered the anti-spam question incorrectly!</p>';
		}
				*/    
?>