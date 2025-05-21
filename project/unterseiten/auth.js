// auth.js

// Registrierung speichern
function registerUser(event) {
  event.preventDefault();
  const userName = document.getElementById("reg-User").value;
  const password = document.getElementById("reg-password").value;

  if (localStorage.getItem(userName)) {
    alert("Benutzer existiert bereits.");
    return;
  }

  localStorage.setItem(userName, JSON.stringify({ password }));
  alert("Registrierung erfolgreich!");
  window.location.href = "login.html";
}

// Login überprüfen
function loginUser(event) {
  event.preventDefault();
  const userName = document.getElementById("login-userName").value;
  const password = document.getElementById("login-password").value;

  const user = JSON.parse(localStorage.getItem(userName));

  if (user && user.password === password) {
    localStorage.setItem("loggedInUser", userName);
    alert("Login erfolgreich!");
    window.location.href = "../index.html";
  } else {
    alert("Falsche Zugangsdaten!");
  }
}

// Logout (optional, z. B. in der index.html)
function logoutUser() {
  localStorage.removeItem("loggedInUser");
  window.location.reload();
}
