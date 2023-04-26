<!DOCTYPE html>
<html>
<head>
    <title>Climate Quiz results</title>
</head>
<body>
<h1>Climate Quiz results</h1>

<?php
$q1_answer = $_POST["q1"];
$q2_answer = $_POST["q2"];
$q3_answer = $_POST["q3"];
$q4_answer = $_POST["q4"];

$correct_answers = array("d", "c", "b", "d");

$num_correct = 0;
if ($q1_answer == $correct_answers[0]) {
    $num_correct++;
    echo "<p>Question 1: Correct!</p>";
} else {
    echo "<p>Question 1: Incorrect.</p>";
}
if ($q2_answer == $correct_answers[1]) {
    $num_correct++;
    echo "<p>Question 2: Correct!</p>";
} else {
    echo "<p>Question 2: Incorrect.</p>";
}
if ($q1_answer == $correct_answers[2]) {
    $num_correct++;
    echo "<p>Question 3: Correct!</p>";
} else {
    echo "<p>Question 3: Incorrect.</p>";
}
if ($q2_answer == $correct_answers[3]) {
    $num_correct++;
    echo "<p>Question 4: Correct!</p>";
} else {
    echo "<p>Question 4: Incorrect.</p>";
}

echo "<p>You got $num_correct out of 4 questions correct.</p>";
?>

<form action="view.php" method="post">

    <input type="submit" value="View Information">
</form>
</body>
</html>
