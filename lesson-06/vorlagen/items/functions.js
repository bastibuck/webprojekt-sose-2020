function addItem() {
  var newItem = document.createElement("li");
  var items = document.querySelectorAll("li").length;

  switch (items) {
    case 3:
      newItem.textContent = "Rust";
      break;
    case 4:
      newItem.textContent = "Python";
      break;
    case 5:
      newItem.textContent = "C#";
      break;
  }

  if (items < 6) {
    document.querySelector("#coding-languages").appendChild(newItem);
    items++;
  }
}
