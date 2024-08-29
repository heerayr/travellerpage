// Select the buttons and container
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Add event listener to the "Register" button
sign_up_btn.addEventListener("click", () => {
  // When "Register" button is clicked, add the "sign-up-mode" class
  container.classList.add("sign-up-mode");
});

// Add event listener to the "Login" button
sign_in_btn.addEventListener("click", () => {
  // When "Login" button is clicked, remove the "sign-up-mode" class
  container.classList.remove("sign-up-mode");
});

// Password validation logic
const password = document.getElementById('reg-password');
const confirm_password = document.getElementById('reg-retype-password');

function validatePassword() {
    if (password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Passwords don't match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

// Ensure password validation happens on change and keyup events
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// Handle form submission
document.querySelector('.sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    if (password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Passwords don't match");
        alert("Passwords do not match.");
    } else {
        confirm_password.setCustomValidity('');
        alert("Registration successful!");
        // You can also submit the form programmatically if needed
        // this.submit(); // Uncomment if you want to submit the form
    }
});
