
 document.getElementById('button').onclick = function(){
  var password = document.getElementById("userPassword").value;
  var confirmation = document.getElementById("passwordConfirmation").value;
  
  
    if(password == confirmation){
      var theElement = document.getElementById("checking");
      theElement.innerHTML = "Correct!";
      theElement.classList.add("style");
    }
    else if(password !== confirmation){
      var theElement = document.getElementById("checking");
      theElement.innerHTML = "Password isn't right";
      theElement.classList.add("mystyle");
      theElement.classList.remove("style");
    }
  }











    