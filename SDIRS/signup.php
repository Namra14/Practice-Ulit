<?php
// Include your database connection here
include('include/config.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $student_phone = $_POST['student_phone'];
    $parent_email = $_POST['parent_email'];
    $parent_phone = $_POST['parent_phone'];
    

    $sql = "INSERT INTO users (name, email, password, student_phone, parent_email, parent_phone) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ssssss', $name, $email, $password, $student_phone, $parent_email, $parent_phone);

    if ($stmt->execute()) {
        // Redirect to login.php with a success message
        header('Location: login.php?signup=success');
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}

?>
