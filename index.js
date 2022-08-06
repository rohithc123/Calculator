var print = "",
  num = "",
  operator = "";
var flag = 0;

function getValue(item) {
  num = item;
}

function getOperator(item) {
  operator = item;
}

document.querySelectorAll(".number").forEach((item) => {
  item.addEventListener("click", () => {
    if (!print || flag || print === "Enter") (print = ""), (flag = 0);
    print += num;
    document.getElementById("result").innerHTML = print;
  });
});

document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", () => {
    flag = 0;
    print += " ";
    print += operator;
    print += " ";
    if (print.startsWith("Enter")) {
      print = "";
      print += operator;
      print += " ";
    }

    document.getElementById("result").innerHTML = print;
  });
});

document.getElementById("btn_ac").addEventListener("click", () => {
  console.log("ac clicked");
  print = "Enter";
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
      print = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      print = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      print = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      print = parseFloat(num1) / parseFloat(num2);
      print = print.toFixed(5);
      break;
    case "%":
      print = parseFloat(num1) % parseFloat(num2);
      break;
  }

  return print;
}

document.getElementById("btn_equal").addEventListener("click", () => {
  print = calculate();
  operator = "";

  document.getElementById("result").innerHTML = print;
  flag = 1;
});
