
let userdata = JSON.parse(localStorage.getItem('userdata'))||[];

let loginViaPassword = document.getElementById("login-via-password");
let form = document.querySelector("form");
loginViaPassword.addEventListener("click", function (event) {
  
  form.innerHTML = "";
  if (loginViaPassword.innerText == "Login via Password") {
    let emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.placeholder = "Email address";

    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.placeholder = "Password";

    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "sub");
    submitButton.value = "Log In";

    form.append(emailInput, passwordInput, submitButton);

    loginViaPassword.innerText = "Login via OTP";
  } else {
    let emailInput = document.createElement("input");
    emailInput.setAttribute("type", "text");
    emailInput.placeholder = "Email/Mobile Number";

    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "sub");
    submitButton.value = "Get OTP";
    form.append(emailInput, submitButton);

    loginViaPassword.innerText = "Login via Password";
  }
});


form.addEventListener("submit", function(event) {
    event.preventDefault();


    if(loginViaPassword.innerText == "Login via Password"){
        let count=0
        let email=form.email.value
        userdata.forEach(function(el){
            if(el.email == email || el.mobile ==email){
                loginViaPassword.innerText=""
                form.innerHTML=""
                let otp= document.createElement("input");
                otp.setAttribute("type", "number");
                otp.setAttribute("id", "otp");
                otp.placeholder="Enter OTP"

                let submitButton = document.createElement("input");
                submitButton.setAttribute("type", "submit");
                submitButton.setAttribute("id", "sub");
                submitButton.value = "Log In";
                form.append(otp,submitButton); 
                localStorage.setItem("ActiveUser",JSON.stringify(el))
            }
            else{
                count++
            }           
              
                
        })
        if(count==userdata.length){
            alert("Invalid email/mobile number")
        }

    }else if(loginViaPassword.innerText == "Login via OTP"){
        let count=0
        let email=form.email.value
        let password=form.password.value
        userdata.forEach(function(el){
            console.log(el.password, el.email)
            if(el.email == email && el.password == password){
               alert("Logged In")
               localStorage.setItem("isLoggedIn",true)
               localStorage.setItem("ActiveUser",JSON.stringify(el))
               location.href = "./index.html"
               
            }else{
                count++
            }
        });
        if(count==userdata.length){
            alert("Invalid email/password")

        }

    }else{
        if(form.otp.value==1234){
            alert("Logged In")
            localStorage.setItem("isLoggedIn",true)
            location.href = "./index.html"
            
        }else{
            alert("Incorrect OTP")
        }
    }
});