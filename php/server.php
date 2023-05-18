<?php
  header('Content-Type: application/json');
  $toDoString = file_get_contents('toDoList.json');
  $toDoList = json_decode($toDoString, true);

  // toggle done attribute
  if(isset($_POST['indexToToggle'])) {
    $toDoList[$_POST['indexToToggle']]['done'] = !$toDoList[$_POST['indexToToggle']]['done'];
  }

  // add task
  if(isset($_POST['add'])) {
    $toDoList[] = [
      'text' => $_POST['add'],
      'done' => false
    ];
  }

  // remove task
  if(isset($_POST['remove'])) {
    array_splice($toDoList, $_POST['remove'], 1);
    // $toDoList[] = [
    //   'text' => $_POST['remove'],
    //   'done' => false
    // ];
  }

  $passString = json_encode($toDoList);
  echo $passString;
  file_put_contents('toDoList.json', $passString);

?>