"use strict";

//varibles;
var inputElement = document.getElementById("email");
var buttonElement = document.getElementById("button");
var succesButtonElement = document.getElementById("succes-button");
var textElement = document.getElementById("text");
var emailText = document.getElementById("succesText");
var emailTextValue = `${document.getElementById("email").value}`;

console.log(emailTextValue.bold());

// validate email function
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// Main function for keyup and colors;
email.addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    return;
  } else if (validateEmail(e.target.value)) {
    buttonElement.style["background-image"] =
      "linear-gradient(90deg, rgba(255,54,106,1) 0%, rgba(255,88,0,1) 100%)";
    buttonElement.style.boxShadow = "5px 10px 30px 1px rgba(255,54,106,1)";
    document.getElementById("button").onclick = function () {
      $(document).ready(function () {
        $(".container").hide();
      });
      $(document).ready(function () {
        $(".succes").show();
      });
      document.getElementById(
        "succesText"
      ).innerHTML = `A confirmation email has been sent to ${
        document.getElementById("email").value
      } Please open it and click the button inside to confirm your subscription.`;
      if ($(window).width() < 768) {
        emailText.style.fontFamily = "roboto-regular";
        emailText.style.lineHeight = "18px";
        emailText.style.fontSize = "15px";
        emailText.style.color = "rgb(24, 24, 44)";
      } else {
        emailText.style.fontFamily = "roboto-bold";
        emailText.style.lineHeight = "18px";
        emailText.style.fontSize = "12px";
        emailText.style.color = "rgb(24, 24, 44)";
      }
    };
  } else {
    textElement.style.color = "rgba(255, 103, 103, 0.836)";
  }
});

// In event of keydown remove color;
email.addEventListener("keydown", function (e) {
  if (e.isComposing || e.keyCode === 229) {
    return;
  } else {
    buttonElement.style["background-image"] =
      "linear-gradient(90deg, rgb(24, 24, 44) 0%, rgb(24, 24, 44) 100%)";
    buttonElement.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
    textElement.style.color = "rgba(0, 0, 0, 0)";
  }
});

// Prevent "enter" on input;
inputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

// Mouseevents over button;
succesButtonElement.addEventListener("mouseover", mouseOver);
succesButtonElement.addEventListener("mouseout", mouseOut);

function mouseOver() {
  succesButtonElement.style["background-image"] =
    "linear-gradient(90deg, rgba(255,54,106,1) 0%, rgba(255,88,0,1) 100%)";
  succesButtonElement.style.boxShadow = "5px 10px 30px 1px rgba(255,54,106,1)";
}

function mouseOut() {
  succesButtonElement.style["background-image"] =
    "linear-gradient(90deg, rgb(24, 24, 44) 0%, rgb(24, 24, 44) 100%)";
  succesButtonElement.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
}

succesButtonElement.onclick = function () {
  location.href = "index.html";
};

//
//
// MADE BY: APPODEV (PELEA RAUL-DANIEL)
//
//
