
let userdata=JSON.parse(localStorage.getItem('userdata')) ||[];


let form = document.querySelector("form");


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
  }

  if (obj.mobile < 1000000000 || obj.mobile > 9999999999) {
    alert("Please enter a valid mobile number");
    return;
  }

  userdata.forEach(function(el){
    if(el.email==obj.email){
        alert("An account already exists with this email address")
        return
    }
  })
   userdata.push(obj)
   localStorage.setItem("userdata", JSON.stringify(userdata))
    localStorage.setItem("ActiveUser",JSON.stringify(obj));
});
