let inputValue = document.getElementById("input-box");

let buttons = document.getElementsByTagName("button");

let str = "";

for (let i = 0; i < buttons.length; i++) {
  let buttonValue = buttons[i];
  buttonValue.addEventListener("click", (e) => {
    let buttonText = e.target.innerHTML;

    if (buttonText === "AC") {
      str = "";
    } else if (buttonText === "DEL") {
      str = str.substring(0, str.length - 1);
    } else if (buttonText === "=") {
      str = eval(str);
    } else {
      str += buttonText;
    }

    inputValue.value = str;
  });
}
