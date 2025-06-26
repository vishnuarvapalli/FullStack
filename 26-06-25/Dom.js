document.title="Dom in JS"
document.body.style.backgroundColor="lightblue";
document.getElementById("head1").innerHTML="Hello World!";
document.getElementById("para1").innerHTML="Welcome to DOM Manuplator";
document.getElementsByTagName("h2")[1].style.color="blue";
document.getElementsByClassName("ds")[0].style.color="red";
document.getElementsByClassName("ds")[1].style.color="blue";
document.getElementsByClassName("ds")[2].style.color="yellow";
document.getElementsByClassName("ds")[3].style.color="green";
document.getElementsByTagName("h2")[2].style.color="blue";
let vishnu=document.getElementsByClassName("em");
vishnu[0].style.color = "Red";
vishnu[1].style.color="green";
vishnu[2].style.color="grey";
document.querySelector(".dsa").style.color="red";
let depts=document.querySelectorAll(".eb");
depts[0].style.color = "lightgreen";
depts[1].style.color="grey";
depts[2].style.color="yellow";
function changeBackground(){
    if(document.body.style.backgroundColor==="red"){
        document.body.style.backgroundColor="orange";
    }
    else{
        document.body.style.backgroundColor="red";
    }
    alert("Your background colour changed");
}
function changeText(){
    document.getElementById("clg").innerHTML="Cricket,VolleyBall";
    alert("Your text and background changed");
    document.getElementById("clg").style.backgroundColor="coral";
    document.getElementById("clg").style.color="white";
    document.getElementById("clg").style.fontSize="30px";
    document.getElementById("clg").style.textAlign="center";
}