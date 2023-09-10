const loginBtn = document.querySelector(".btn"),
form =document.querySelector(".container_overlay_content"),
formCloseBtn =document.querySelector(".container_overlay_content_closebtn"),
signupBtn = document.querySelector(".signup"),
loginForm = document.querySelector(".login"),
eyeBtn = document.getElementsByClassName("pass-hide"),
container = document.querySelector(".container");

loginBtn.addEventListener("click",()=>{
   container.classList.add("show-form");
})
formCloseBtn.addEventListener("click",()=>{
   container.classList.remove("show-form");
})

signupBtn.addEventListener("click", ()=>{
   form.classList.add("show-signup");
})
loginForm.addEventListener("click", ()=>{
   form.classList.remove("show-signup");
})

Array.from(eyeBtn).forEach((icon)=>{
   icon.addEventListener("click",()=>{
      let getPw =icon.parentElement.querySelector("input");
      if(getPw.type === "password"){
         getPw.type = "text";
         icon.classList.replace("uil-eye-slash","uil-eye");
      }else{
         getPw.type = "Password";
         icon.classList.replace("uil-eye","uil-eye-slash");

      }
      })
   })
