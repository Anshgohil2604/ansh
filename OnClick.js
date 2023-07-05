import React from 'react'

export const  OnClick = () => {
  return (
    function switchForm() {

        <button onclick="switchForm()">Switch</button> 
        
        var Textform = document.getElementById("Textform");
        var Signup= document.getElementById("Signup");
    
        if (Textform.style.display === "none") {
            Textform.style.display = "block";
            Signup.style.display = "none";
        } else {
            Textform.style.display = "none";
            Signup.style.display = "block";
      }
    }
  )
}
