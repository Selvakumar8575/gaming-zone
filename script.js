function registerUser(event){

event.preventDefault();

let fullname=document.getElementById("fullname").value;
let email=document.getElementById("email").value;
let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

let user={
fullname:fullname,
email:email,
username:username,
password:password
}

localStorage.setItem(username,JSON.stringify(user));

alert("Register Successfully");

window.location="index.html";

}


function loginUser(event){

event.preventDefault();

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

let user=localStorage.getItem(username);

if(user==null){

alert("User not found");

return;

}

let data=JSON.parse(user);

if(password===data.password){

localStorage.setItem("loggedUser",username);

/* ADD THIS PART */
localStorage.setItem("username", username);
localStorage.setItem("email", data.email);
localStorage.setItem("loginTime", new Date().toLocaleString());
/* END */

alert("Login Successful");

window.location="index.html";

}
else{

alert("Wrong Password");

}

}

function showUser(username){

let panel=document.getElementById("userPanel");

let now=new Date();

let time=now.toLocaleString();

panel.innerHTML=

`
<div class="user-menu">

Welcome, ${username} <br>
${time}

<div class="dropdown">

<a href="profile.html">Profile</a><br>
<a href="index.html" onclick="logout()">Logout</a>

</div>

</div>
`;

}

function logout(){

localStorage.removeItem("loggedUser");

location.reload();

}

let loggedUser = localStorage.getItem("loggedUser");

if(loggedUser){
showUser(loggedUser);
let loginBtn = document.getElementById("loginBtn");
let registerBtn = document.getElementById("registerBtn");

if(loginBtn) loginBtn.style.display="none";
if(registerBtn) registerBtn.style.display="none";
}

function openGame(game){

if(game=="snake"){
window.location="games/Snake_Game/index.html";
}

if(game=="tictactoe"){
window.location="games/Tic_Tac_Toe/index.html";
}

if(game=="car"){
window.location="games/Highway_404/index.html";
}


if(game=="chess"){
window.location="games/Chess_Game_computer/index.html";
}



if(game=="racing"){
window.location="games/racing/index.html";
}


if(game=="Flappy_Bird"){
window.location="games/Flappy_Bird/index.html";
}

if(game=="Bubble_Blast_Game"){
    window.location="games/Bubble_Blast_Game/index.html";   
}

if(game=="Candy_Crush_Saga"){
    window.location="games/Candy_Crush_Saga/index.html";
}

if(game=="Rock_Paper_Scissors"){
    window.location="games/Rock_Paper_Scissors/index.html";
}

if(game=="Doodle_Jump"){
    window.location="games/Doodle_Jump/index.html";     
}

if(game=="JavaScript-Quiz-App-Game"){
    window.location="games/JavaScript-Quiz-App-master/index.html";  
}

if(game=="Whack_a_Mole"){
    window.location="games/Whack_a_Mole/index.html";
}

}

function goBack(){
window.location="../../home.html";
}

function toggleMusic(){
let music = document.getElementById("bgMusic");

if(music.paused){
music.play();
}else{
music.pause();
}
}

// start music after first click
document.addEventListener("click", function(){
let music = document.getElementById("bgMusic");
music.play();
},{ once:true });

window.onload = function(){

let music = document.getElementById("bgMusic");

music.volume = 0.5;   // sound level
music.play().catch(function(){
console.log("Autoplay blocked by browser");
});

}

function saveScore(game,score){

let scores=JSON.parse(localStorage.getItem("leaderboard"))||[];

scores.push({
game:game,
score:score,
date:new Date().toLocaleString()
});

scores.sort((a,b)=>b.score-a.score);

localStorage.setItem("leaderboard",JSON.stringify(scores));

}

function saveRecent(game){

let recent=JSON.parse(localStorage.getItem("recentGames"))||[];

if(!recent.includes(game)){
recent.push(game);
}

localStorage.setItem("recentGames",JSON.stringify(recent));

}

function addRecentGame(gameName){
let recent = JSON.parse(localStorage.getItem("recentGames")) || [];

if(!recent.includes(gameName)){
recent.unshift(gameName);
}

recent = recent.slice(0,5); // last 5 games only
localStorage.setItem("recentGames", JSON.stringify(recent));
}

function addRecentGame(gameName){
let recent = JSON.parse(localStorage.getItem("recentGames")) || [];

if(!recent.includes(gameName)){
recent.unshift(gameName);
}

recent = recent.slice(0,5); // last 5 games only
localStorage.setItem("recentGames", JSON.stringify(recent));
}

window.onload = function(){
addRecentGame("Horse Racing");
};


function searchGames(){

let input=document.getElementById("gameSearch").value.toLowerCase();

let games=document.getElementsByClassName("game-card");

for(let i=0;i<games.length;i++){

let gameName=games[i].innerText.toLowerCase();

if(gameName.includes(input)){
games[i].style.display="block";
}
else{
games[i].style.display="none";
}

}

}

function openSearch(){

document.getElementById("searchPage").style.display="block";
document.getElementById("homeSection").style.display="none";

}

function closeSearch(){

document.getElementById("searchPage").style.display="none";
document.getElementById("homeSection").style.display="block";

}

function filterCategory(category){

let games=document.querySelectorAll(".game-card");

let results=document.getElementById("searchResults");

results.innerHTML="";

games.forEach(function(game){

if(game.dataset.category===category){

let result=game.cloneNode(true);

results.appendChild(result);

}

});

}
document.getElementById("restart").addEventListener("click", function(){
location.reload();
});

document.addEventListener("touchstart", function() {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }));
});

let user = localStorage.getItem("username");
let email = localStorage.getItem("email");
let time = localStorage.getItem("logintime");

document.getElementById("username").innerText = user;
document.getElementById("email").innerText = email;
document.getElementById("time").innerText = time;

localStorage.setItem("username", username);
localStorage.setItem("email", email);
localStorage.setItem("logintime", new Date().toLocaleString());