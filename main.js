const inputArea = document.getElementById("problem-input");
const buttons = document.getElementsByClassName("button");

function handleInput(e) {
  inputArea.value += e.target.innerHTML;
}

function handleSolve(e) {
  inputArea.value = eval(inputArea.value);
}

for (const button in buttons) {
  buttons[button].onclick = (e) => {
    const id = e.target.id;

    switch (id) {
      case "button-equal":
        handleSolve(e);
        break;

      case "button-clear":
        inputArea.value = "";
        break;

      default:
        handleInput(e);
        break;
    }
  };
}

const validKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "+", "*", "/"];

document.onkeydown = (e) => {
  switch (e.key) {
    case "Enter":
      handleSolve(e);
      break;

    case "c":
    case "C":
      inputArea.value = "";
      break;

    default:
      validKeys.forEach((i) => {
        if (e.key == i) {
          inputArea.value += e.key;
          return;
        }
      });
  }
};
