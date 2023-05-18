<?php
  $toDoString = file_get_contents('toDoList.json');
  header('Content-Type: application/json');
  echo $toDoList;
  $toDoList = json_decode($toDoString, true);

  // $passString = json_encode($toDoList);
  // file_put_contents('toDoList.json', $passString);

?>