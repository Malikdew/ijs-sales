const user = {username:"malik",password:"123456",nama:"Malik"};


function login(){
if(u.value==user.username && p.value==user.password){
localStorage.setItem("user",JSON.stringify(user));
location="index.html";
} else alert("Login salah");
}


function cek(){
if(!localStorage.getItem("user")) location="login.html";
}


function logout(){
localStorage.clear();
location="login.html";
}