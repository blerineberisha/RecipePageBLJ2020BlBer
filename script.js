document.body.id = localStorage.getItem("toggler");

document.getElementById("toggler").on-click = function(){
if(document.body.id=="null"){
document.body.id="light";
localStorage.setItem("toggler","light");
}
if(document.body.id=="light"){
document.body.id="dark";
localStorage.setItem("toggler", "dark");
}
else{
    document.body.id="light";
    localStorage.setItem("toggler","light");
}
}