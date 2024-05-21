<?php
// Connect to your database (replace placeholders with actual values)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mengirim_pesan";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data is set
if (isset($_POST['Name']) && isset($_POST['Message'])) {
    // Retrieve form data
    $Name = $conn->real_escape_string($_POST['Name']);
    $Message = $conn->real_escape_string($_POST['Message']);

    // Insert data into database
    $sql = "INSERT INTO contact (Name, Message) VALUES ('$Name', '$Message')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully<br>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
    }
} else {
    echo "Form data not submitted properly<br>";
}

// Display data from the database in an HTML table
$result = $conn->query("SELECT * FROM contact");

if ($result->num_rows > 0) {
    echo "<table border='1'>";
    echo "<tr><th>Id</th><th>Name</th><th>Message</th><th>Time</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . htmlspecialchars($row['Id']) . "</td><td>" . htmlspecialchars($row['Name']) . "</td><td>" . htmlspecialchars($row['Message']) . "</td><td>" . htmlspecialchars($row['Time']) . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

$conn->close();
?>
