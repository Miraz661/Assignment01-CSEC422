const register = document.querySelector(".register");
const form = document.getElementsByClassName("formBody")[0];


register.addEventListener("click",()=>{
    location.href="/Front-end/Registration/registration.html";
})


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let user = e.target.user.value;
    let pass = e.target.pass.value;
    if(user != localStorage.getItem("user")){
        alert("Wrong user name...");
        return;
    }
    if(pass != localStorage.getItem("pass")){
        alert("Wrong password...");
        return;
    }

    location.href="/Front-end/Home/home.html";
})