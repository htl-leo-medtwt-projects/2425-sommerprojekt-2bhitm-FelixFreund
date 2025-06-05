

function registerUser(event) {
  event.preventDefault();
  let userName = document.getElementById("reg-User").value;
  let password = document.getElementById("reg-password").value;

  if (localStorage.getItem(userName)) {
    document.getElementById("text").innerHTML="Der Benutzer existiet bereits!";
    document.getElementById("bestaetigung").style.display ="block";
    return;
  }

  localStorage.setItem(userName, JSON.stringify({ password }));
   document.getElementById("text").innerHTML="Registrierung erfolgreich!";
   document.getElementById("bestaetigung").style.display ="block";
  
   setTimeout(() => {
    window.location.href = "login.html";
   },2000) 

}

// Login überprüfen
function loginUser(event) {
  event.preventDefault();
  let userName = document.getElementById("login-userName").value;
  let password = document.getElementById("login-password").value;

 let user = JSON.parse(localStorage.getItem(userName));

  if (user && user.password === password) {
    localStorage.setItem("loggedInUser", userName);
    document.getElementById("text").innerHTML="login erfolgreich!";
   document.getElementById("bestaetigung").style.display ="block";
  
   setTimeout(() => {
    window.location.href = "../index.html";
   },2000) 
  } else {
   document.getElementById("text").innerHTML="Falsche Zugangsdaten!";
   document.getElementById("bestaetigung").style.display ="block";
  
   setTimeout(() => {
   document.getElementById("bestaetigung").style.display ="none";
   document.getElementById("login-userName").value = "";
   document.getElementById("login-password").value = "";
   },2000) 
   
  }
}


function logoutUser() {
  localStorage.removeItem("loggedInUser");
  window.location.reload();
}
