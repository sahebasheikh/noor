function validateForm() {
     var email = document.getElementById('email').value;
     if ( email == "") {
      alert("Please fill in all fields.");
      return false;
     }

   }
   document.getElementById('main-btn').addEventListener('click', function() {
    document.getElementById('orderForm').style.display = 'block';
});