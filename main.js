// if statemernt
// input
//alert

document.getElementById("Login").addEventListener("click", Login);

function Login() {
  let username = document.getElementById("admin").value;

  let password = document.getElementById("PSW").value;

  if (username === "admin" && password === "PSW") {
    Login = "Valid Login Crednentials";
  } else if (username === "admim") {
    Login = "invalid Password";
  } else if (password === "PSW") {
    Login = "Invalid Username";
  } else {
    Login = "Invalid Login Credentials";
  }
}
