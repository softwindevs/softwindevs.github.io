function sendMail() {
     var fullName = document.getElementById("fullName").value;
     var email = document.getElementById("email_id").value;
     var message = document.getElementById("message").value;
     var form = document.forms["contactForm"];

     var params = {
         from_name: fullName,
         email_id: email,
         message: message,
     }
 
     if (fullName == null || fullName === "") {
         document.getElementById("fullName").focus();
     } else if (email == null || email === "") {
         document.getElementById("email_id").focus();
     } else if (message == null || message === "") {
         document.getElementById("message").focus();
     } else {
         emailjs.send("service_gn6ad1i", "template_qwb9ree", params)
             .then(function (res) {
                 // Display success snackbar
                 showSnackbar("Thank you for contacting, we will get back to you soon!");
                 form.reset();
             })
             .catch(function (error) {
                 // Display error snackbar
                 showSnackbar("Unable to send. Please try again later.");
             });
     }
 }
 
 function showSnackbar(message) {
     var snackbar = document.getElementById("snackbar");
     snackbar.className = "";
     snackbar.innerHTML = message;
     snackbar.className = "show";
 
     setTimeout(function () {
         snackbar.className = "";  
     }, 4000);
 }