<?php
  header('Content-Type: application/json');
  $toDoString = file_get_contents('toDoList.json');
  $toDoList = json_decode($toDoString, true);

  if(isset($_POST['indexToToggle'])) {
    $toDoList[$_POST['indexToToggle']]['done'] = !$toDoList[$_POST['indexToToggle']]['done'];
  }

  $passString = json_encode($toDoList);
  echo $passString;
  file_put_contents('toDoList.json', $passString);

?>