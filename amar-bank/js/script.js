document.getElementById("form_submit").addEventListener("click", function () {
    // console.log("form button worked");
    
    const emailField = document.getElementById("user-email");
    
    const email = emailField.value;
  

    const passwordField = document.getElementById("user-password");

    const password = passwordField.value;
    console.log(email, password)


    if (email === 'internbangla@gmail.com' && password === '123456') {
        window.location.href = "bank.html"
    } else {
        window.location.href="error.html"
    }
});



