var emailInput = document.querySelector("#email");                //input variable itself (effectively empty string until user inputs)
var passwordInput = document.querySelector("#password");          //input variable itself (effectively empty string until user inputs)
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");          //Actual Value of email input 
var userPasswordSpan = document.querySelector("#user-password");    //Actual Value of password input 

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // Fill in code here to retrieve the last email and password.
  // If they are null, return early from this function
  // Else set the text of the userEmailSpan and userPasswordSpan 
  // to the corresponding values form local storgage
  var email = localStorage.getItem("email")           //I got this right!
  var password = localStorage.getItem("password")     //I got this right!

  if (email && passwrd === null) {
    return;
  }

  userEmailSpan.textContent = email
  userPasswordSpan.textContent = password

  
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // Save email and password to localStorage and render the last registered.
  }
});
