<?php
session_start();
include('../include/config.php');

// Check if the user is logged in as admin
if (!isset($_SESSION['is_admin']) || $_SESSION['is_admin'] !== true) {
    header('Location: signin.php');
    exit();
}

// Check if ID is provided
if (!isset($_GET['id'])) {
    die('User ID is required.');
}

// Get the user data
$id = intval($_GET['id']);
$sql = "SELECT name, student_phone, parent_phone, violation_date, violation_description FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    die('User not found.');
}

$user = $result->fetch_assoc();

// TextLocal API details
$apiKey = 'YOUR_API_KEY_HERE';
$sender = 'TXTLCL'; // Sender ID
$message = sprintf(
    "Dear Parent, your child %s has committed the following violation on %s: %s.",
    $user['name'],
    $user['violation_date'],
    $user['violation_description']
);

// Send SMS to parent
$numbers = $user['parent_phone'];
$data = [
    'apikey' => $apiKey,
    'numbers' => $numbers,
    'message' => rawurlencode($message),
    'sender' => $sender
];

// Validate phone number format (only digits, starts with 0, and 10-11 digits long)
function validatePhoneNumber($number) {
    return preg_match('/^0\d{9,10}$/', $number);
}

// Validate student's and parent's phone numbers
if (!validatePhoneNumber($user['parent_phone'])) {
    die('Invalid parent phone number.');
}
if (!validatePhoneNumber($user['student_phone'])) {
    die('Invalid student phone number.');
}

// Make API request
$ch = curl_init('https://api.txtlocal.com/send/');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

// Redirect with success message
if (strpos($response, '"status":"success"') !== false) {
    $_SESSION['success_message'] = 'SMS notification sent successfully!';
} else {
    $_SESSION['success_message'] = 'Failed to send SMS notification. Please check your API or phone number.';
}

header('Location: admin_dashboard.php');
exit();
?>
