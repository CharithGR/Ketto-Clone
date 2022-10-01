

 let ActiveUser=JSON.parse(localStorage.getItem("ActiveUser"))||[];
 let FundraiseNav=document.getElementById("FundraiseNav").addEventListener("change",function(){
  if(!isLoggedIn){
   location.href="./fundraise.html"
  }else{
    location.href="./startFundraise.html"
  }
 }) 
let startFund=document.querySelector("#startFund");
startFund.addEventListener("click",function(){
  if(!isLoggedIn){
    location.href="./fundraise.html"
   }else{
     location.href="./startFundraise.html"
   }
})
 
 let isLoggedIn=localStorage.getItem("isLoggedIn") || false;
 let SignInElement=document.getElementById("SignInElement");
 SignInElement.addEventListener("click",function(){
   if(SignInElement.innerText=="Sign In"){
     location.href="./signIn.html"
   }else {
     let SignInElementSelect=document.getElementById("SignInElementSelect");
     console.log(SignInElementSelect.value)
     SignInElementSelect.addEventListener("change",function(){
    if(SignInElementSelect.value=="Logout"){
     isLoggedIn=false;
     localStorage.removeItem("isLoggedIn")
     localStorage.removeItem("ActiveUser")
     window.location.reload();
    }
   })
   }
 })
 if(isLoggedIn){
   
     SignInElement.innerHTML=`<i class="fa fa-user" aria-hidden="true"></i>`
      let select =document.createElement("select"); 
      select.setAttribute("id","SignInElementSelect"); 
       let name=document.createElement("option");
       name.innerText=ActiveUser.name;
       let profile=document.createElement("option");
       profile.innerText="Profile";       
       let LogOut= document.createElement("option");
       LogOut.value="Logout"
       LogOut.innerText="Log Out";
       select.append(name,profile,LogOut);
       SignInElement.append(select)  
   
 }
 