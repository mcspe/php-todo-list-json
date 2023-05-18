<?php
  $toDoString = file_get_contents('toDoList.json');
  $toDoList = json_decode($toDoString, true);

  $toDoList[] = [
    'text' => 'fare put content per passarlo al file json',
    'done' => false
  ];

  $passString = json_encode($toDoList);
  file_put_contents('toDoList.json', $passString);

?>