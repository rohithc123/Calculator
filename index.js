var print = "",
  num = "",
  operator = "";

function getValue(item) {
  num = item;
}

function getOperator(item) {
  operator = item;
}

document.querySelectorAll(".number").forEach((item) => {
  item.addEventListener("click", () => {
    if (!print) print = "";
    print += num;
    document.getElementById("result").innerHTML = print;
  });
});

document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", () => {
    print += " ";
    print += operator;
    print += " ";

    document.getElementById("result").innerHTML = print;
  });
});

document.getElementById("btn_ac").addEventListener("click", () => {
  console.log("ac clicked");
  print = "";
  document.getElementById("result").innerHTML = print;
});

function calculate() {
  print = print.trim();
  const arr = print.split(" ");
  console.log(arr);
  let num1 = arr[0];
  let num2 = arr[2];
  switch (operator) {
    case "+":
      print = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      print = parseInt(num1) - parseInt(num2);
      break;
    case "*":
      print = parseInt(num1) * parseInt(num2);
      break;
    case "/":
      print = parseInt(num1) / parseInt(num2);
      break;
    case "%":
      print = parseInt(num1) % parseInt(num2);
      break;
  }

  return print;
}

document.getElementById("btn_equal").addEventListener("click", () => {
  print = calculate();
  operator = "";
  document.getElementById("result").innerHTML = print;
});
