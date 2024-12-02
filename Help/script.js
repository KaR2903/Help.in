// Basic JavaScript to handle form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    alert(`Welcome, ${username}!`);
    // Redirect or process login logic
  } else {
    alert("Please enter both username and password.");
  }
});
