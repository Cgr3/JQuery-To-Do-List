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
  li.on("dblclick", () => {
    li.toggleClass("strike");
  });

  //Adding delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('     X'));
  li.append(crossOutButton);

  crossOutButton.on("click", () => {
    li.addClass("delete")
  });

  //Reorder list
  $('#list').sortable();
}
