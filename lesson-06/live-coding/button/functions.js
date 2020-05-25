var isLarge = false;

function changeSize() {
  // change size of that button

  // if (isLarge === false) {
  //   document.getElementById("my-cool-btn").style.fontSize = "70px";
  //   document.getElementById("my-cool-btn").style.padding = "30px 50px";
  //   document.getElementById("my-cool-btn").classList.add("larger");
  //   isLarge = true;
  // } else {
  //   document.getElementById("my-cool-btn").style.fontSize = "50px";
  //   document.getElementById("my-cool-btn").style.padding = "20px 40px";
  //   document.getElementById("my-cool-btn").classList.remove("larger");
  //   isLarge = false;
  // }

  document.getElementById("my-cool-btn").classList.toggle("larger");
}
