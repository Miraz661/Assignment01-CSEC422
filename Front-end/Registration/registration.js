const loginPage = document.getElementsByClassName("login")[0];
const form = document.getElementById("form");

loginPage.addEventListener("click",()=>{
    location.href="../Login/index.html";
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let fName = form.fName.value;
    let lName = form.lName.value;
    let email = form.email.value;
    let pass = form.pass.value;
    let cPass = form.cPass.value;
    // let validEmail = email.split("@");
    // validEmail = validEmail[1];
    // if(validEmail != "uttarauniversity.edu.bd"){
    //     alert("Invalid Email adderess!");
    //     return;
    // }
    // if(pass != cPass){
    //     alert("Password and confirm password didn't match!");
    //     return;
    // }
    // let passformat = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // if(!passformat.test(pass)){
    //     alert("Include at least one uppercase letter and one number.");
    //     return;
    // }
    localStorage.clear();
    localStorage.setItem("user",email);
    localStorage.setItem("pass",pass);
    alert("Registration succesful...");
    location.href="../Login/index.html";
})