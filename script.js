// Add event listener to the "Discover more" button
document.querySelector('section button').addEventListener('click', function() {
    // Redirect to the XPERIA Z3+ product page
    window.location.href = 'xperia-z3.html';
   });
   
   // Add event listener to the "Go" button
   document.querySelector('input[type="email"] + button').addEventListener('click', function() {
    // Get the user's email address
    var email = document.querySelector('input[type="email"]').value;
   
    // Validate the email address
    if (validateEmail(email)) {
    // Redirect to the MONY product page
    window.location.href = 'mony.html';
    } else {
    // Show an error message
    alert('Please enter a valid email address.');
    }
   });
   
   // Function to validate the email address
   function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   }