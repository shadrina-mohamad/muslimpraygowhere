// Need to install php mailer and configure smtp to link to mail

<?php
if (isset($_POST['submit'])) {
    // Gather form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // File upload handling
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["image"]["name"]);
    move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile);

    // Prepare email message
    $to = "muslimpraygowhere@gmail.com"; 
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message.";
    }
} else {
    echo "Form submission error.";
}
?>