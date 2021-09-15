// Define function
console.log("hi everyone");
function formValidation(){
 var nae =document.login.firstid;
 var rae=document.login.tele;
 var nat=document.login.nation;
 var drae=document.login.com; 
if (firstid_validation(nae, 3, 20)) {
    }
    if(validateEmail(drae)){

    }
    
   
    
  if (allnumeric(rae)) {
    }
    if(countryselect(nat)){

    }
    
    return false; 
}
//Defining method firstid_validation with parameters
function firstid_validation(nae, mx, my) {
    var nae_len = nae.value.length;
    if (nae_len == 0 || nae_len >= my || nae_len < mx) {
      alert("Firstname has issues" + " " + mx + " to " + "my");

      
      
      nae.style.border = '3px solid red';
      nae.focus();
      return false;
    }
    return true;
}
  //Defining method allnumeric with parameter
function allnumeric(tele) {
    var numbers = /^[0-9]+$/;
    if (tele.value.match(numbers)) {
      return true;
    } else {
      alert("Telephone number must be numeric");
      return false;
    }
  }
  function validateEmail(drae){
  
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(drae.value.match(mailformat))
  {
  alert("Valid email address!");
  
  return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  
  return false;}
  }

  function countryselect(nat){
    if (nat.value == 'Default'){
        alert('Please select your nationality');
        return false;
    } else {
      return true;
    }
  }
   




