let userdata = JSON.parse(localStorage.getItem("userdata")) || [];

let form = document.querySelector("form");
let OTP;
let count = 0;
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let obj = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    mobile: form.mobile.value,
  };

  if (obj.name == "") {
    alert("Please enter a name");
    return;
  }
  if (obj.email == "") {
    alert("Please enter an email");
    return;
  }
  if (obj.password == "") {
    alert("Please enter a password");
    return;
  }
  if (obj.mobile == "") {
    alert("Please enter a mobile number");
    return;
  }
  let s1 = obj.password;
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num = "0123456789";
  let specialChar = "~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/";
  let s = ["Your password must include"];
  if (s1.length < 8) {
    alert("Password length too low,enter password with atleast 8 characters");
    return;
  }
  for (let i = 0; i < s1.length; i++) {
    if (lowerCase.includes(s1[i])) {
      break;
    }
    if (i == s1.length - 1) {
      s.push("lower case characters,");
    }
  }
  for (let i = 0; i < s1.length; i++) {
    if (upperCase.includes(s1[i])) {
      break;
    }
    if (i == s1.length - 1) {
      s.push("upper case characters,");
    }
  }
  for (let i = 0; i < s1.length; i++) {
    if (num.includes(s1[i])) {
      break;
    }
    if (i == s1.length - 1) {
      s.push("number,");
    }
  }
  for (let i = 0; i < s1.length; i++) {
    if (specialChar.includes(s1[i])) {
      break;
    }
    if (i == s1.length - 1) {
      s.push("special characters.");
    }
  }
  if (s.length > 1) {
    alert(s.join(" "));
    return
  }

  if (obj.mobile < 1000000000 || obj.mobile > 9999999999) {
    alert("Please enter a valid mobile number");
    return;
  }
  if (form.sub.value == "Next") {
    userdata.forEach(function (el) {
      if (el.email == obj.email) {
        alert("An account already exists with this email address");
        count++;
        return;
      }
    });
  }

  if (form.sub.value == "Next" && count == 0) {
    OTP = document.createElement("input");
    OTP.placeholder = "Enter OTP";
    document.querySelector("#formOtp").append(OTP);
    form.sub.value = "Sign Up";
    return;
  } else {
    console.log(OTP.value);
    if (OTP.value == "1234") {
      alert("Congrats! You are a part of Ketto.");
      form.sub.value = "Next";
    } else {
      alert("Invalid OTP");
      return;
    }
  }

  userdata.push(obj);
  localStorage.setItem("userdata", JSON.stringify(userdata));
  localStorage.setItem("ActiveUser", JSON.stringify(obj));
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("ActiveUser", JSON.stringify(userdata[userdata.length-1]));

  location.href = "./index.html";
});