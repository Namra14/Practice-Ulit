<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';
require 'phpmailer/SMTP.php';
// Adjust the path if needed

// Include database connection
include('../include/config.php');

if (!isset($_GET['id']) || empty($_GET['id'])) {
    die("Invalid request.");
}

$userId = intval($_GET['id']);

// Fetch student details
$sql = "SELECT name, email, parent_email, violation_date, violation_description FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if (!$user) {
    die("User not found.");
}

// Email details
$subject = "Violation Notification for " . $user['name'];
$message = "
    <h3>Violation Alert</h3>
    <p>Dear Parent/Guardian,</p>
    <p>Your child, <strong>{$user['name']}</strong>, has committed a violation.</p>
    <p><strong>Date of Violation:</strong> {$user['violation_date']}</p>
    <p><strong>Description:</strong> {$user['violation_description']}</p>
    <p>Please contact the school administration for further details.</p>
    <p>Regards, <br> School Administration</p>
";

$recipients = [$user['email'], $user['parent_email']];

$mail = new PHPMailer(true);

try {
    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Use your SMTP provider
    $mail->SMTPAuth = true;
    $mail->Username = 'lechugaschristian@gmail.com'; // Replace with your email
    $mail->Password = 'axjr giwm ghpk jmmm'; // Use an App Password (not your actual password)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('lechugaschristian@gmail.com', 'School Admin');
    
    foreach ($recipients as $email) {
        if (!empty($email)) {
            $mail->addAddress($email);
        }
    }

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $message;

    if ($mail->send()) {
        echo "<script>alert('Notification sent successfully.'); window.location.href = 'admin_dashboard.php';</script>";
    } else {
        echo "<script>alert('Failed to send notification.'); window.location.href = 'admin_dashboard.php';</script>";
    }
} catch (Exception $e) {
    echo "<script>alert('Mailer Error: " . $mail->ErrorInfo . "'); window.location.href = 'admin_dashboard.php';</script>";
}

$conn->close();
?>
