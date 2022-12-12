// if statemernt
// input
//alert

document.getElementById("Login").addEventListener("click", Login);

function Login() {
  let username = document.getElementById("user").value;

  let password = document.getElementById("psw").value;

  if (username === "admin" && password === "psw") {
    Login = "Valid Login Credentials!";
    console.log("Valid Login Creds");
  } else if (username === "admin") {
    Login = "Invalid Passowrd!";
  } else if (password === "psw") {
    Login = "Inavlid Username";
  } else {
    Login = "Enter Username and Password";
  }
  document.getElementById("LoginO").innerHTML = `${Login}`;
}
