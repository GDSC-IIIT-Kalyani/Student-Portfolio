<?php
// Check if the form is submitted
if (isset($_POST['submit'])) {
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Validate the form data
  if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    // Display an error message if any field is empty
    echo "Please fill out all the fields.";
  } else {
    // Validate the email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      // Display an error message if the email is invalid
      echo "Please enter a valid email address.";
    } else {
      // Set the recipient email address
      $to = "recipient@example.com";

      // Set the email headers
      $headers = "From: $name <$email>\r\n";
      $headers .= "Reply-To: $email\r\n";
      $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

      // Send the email
      if (mail($to, $subject, $message, $headers)) {
        // Display a success message if the email is sent
        echo "Thank you for contacting us. We will get back to you soon.";
      } else {
        // Display an error message if the email is not sent
        echo "Sorry, something went wrong. Please try again later.";
      }
    }
  }
}
?>
