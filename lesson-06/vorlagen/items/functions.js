function addItem() {
  var items = document.querySelectorAll("li").length;
  console.log(items); // log amount of items to console

  if (items === 6) {
    return; // we return nothing from this function, so it ends here
  }

  var newItem = document.createElement("li");

  if (items === 3) {
    newItem.textContent = "Rust";
  }

  if (items === 4) {
    newItem.textContent = "Python";
  }

  if (items === 5) {
    newItem.textContent = "C#";
  }

  // add item to list
  document.querySelector("#coding-languages").appendChild(newItem);
}
