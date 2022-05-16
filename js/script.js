function newItem() {

  //Adding new item
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if(inputValue === '') {
    alert('Give me something');
  } else {
    $('#list').append(li);
  }

  //Crossing out items
  function crossOut() {
  li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  //Adding delete button
  let crossOutButton = $('<crossedOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('     X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete")
  };
  //Reorder list
  $('#list').sortable();
}
