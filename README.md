# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Github:

## My process

1. I downloaded all the contents provided by the challenger!
2. I started building the index.html and style.css to get it as close to the original photo desktop-design!
3. Then I made the page responsive to mobile < width: auto; max-width: 789px; >
4. I added the red-error effects to the input using CSS when invalid-email and for the text and button color when valid-email in script.js!
5. I added a line of code in the script.js (lines:18-20) if the email is valid, when clicked to send to an another page success.html!
6. I started doing the success part and added few modifications for the success-container,etc...
7. I added a function for the success button when it's pressed to hide the original container and unhide the succes container.
8. And I've done the script for "Dismiss message" on mouseover and mouseout in javascript and change the color + shadow for these actions...
9. And finally I've made a function for when the button is pressed to make you go to index.html or the landing-page (NOT THE SUBSCRIBE PAGE).

### Built with

- Visual Studio Code
- HTML
- CSS
- JS
- Jquery

### What I learned

```html
<div class="container">
  <div class="left">
    <h2>Stay updated!</h2>
    <p>Join 60,000+ product managers receiving monthly updates on:</p>
    <div class="verifiedtxt">Product discovery and building what matters</div>
    <div class="verifiedtxt">Measuring to ensure updates are a success</div>
    <div class="verifiedtxt">And much more!</div>
    <div class="emailtxt">
      Email address
      <div class="invalidemail" id="text">Valid email required</div>
    </div>
    <form>
      <input
        id="email"
        class="email"
        type="email"
        placeholder="email@company.com"
        pattern="[a-zA-Z1-9]+@[a-zA-Z1-9]+\.[a-zA-Z]{2,}"
      />
    </form>
    <button class="btn" id="button">Subscribe to monthly newsletter</button>
  </div>
  <div class="right"></div>
</div>
```

```css
.container {
  background-color: rgb(253, 253, 253);
  display: flex;
  position: relative;
  margin: auto;
  margin-top: 150px;
  color: rgb(27, 25, 61);
  width: 700px;
  height: 489px;
  border-radius: 30px;
  box-shadow: -10px -5px 50px 12px;
}

@media only screen and (min-width: 0px) and (max-width: 768px) {
  .container {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    margin: auto;
    margin-top: 0px;
    color: rgb(27, 25, 61);
    width: auto;
    max-width: 768px;
    height: auto;
    border-radius: 0px;
    padding: 0px;
    box-shadow: 0px 0px 0px 0px;
  }
}
```

```js
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

email.addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    return;
  } else if (validateEmail(e.target.value)) {
    buttonElement.style["background-image"] =
      "linear-gradient(90deg, rgba(255,54,106,1) 0%, rgba(255,88,0,1) 100%)";
    buttonElement.style.boxShadow = "5px 10px 30px 1px rgba(255,54,106,1)";
    document.getElementById("button").onclick = function () {
      location.href = "success.html";
    };
  } else {
    textElement.style.color = "rgba(255, 103, 103, 0.836)";
  }
});
```

### Continued development

I need to make more projects.
And complete the rest of my course.

### Useful resources

- www.stackoverflow.com - I really recommend this website for Junior Developers to learn. If you forget something, it sure has the answer!

## Author

- Website - [Pelea Raul-Daniel](https://www.eslcs.ro)
- Linkedin - [Pelea Raul-Daniel](https://www.linkedin.com/in/pelearauldaniel/)
- Instagram - [@lilappoo](https://www.instagram.com/lilappoo)
- Discord - [AppoCS] (https://discord.eslcs.ro/)
