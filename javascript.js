function btnOne() {
    var x = document.getElementById("popOne");
    if (x.style.display==="none") {
        x.style.display="block"
    }else{
        x.style.display="none"
    }
}
function btnTwo() {
    var x = document.getElementById("popTwo");
    if (x.style.display==="none") {
        x.style.display="block"
    }else{
        x.style.display="none"
    }
}
function btnThree() {
    var x = document.getElementById("popThree");
    if (x.style.display==="none") {
        x.style.display="block"
    }else{
        x.style.display="none"
    }
}

setTimeout(showWelcome,10000);
let welcoming=document.getElementById("welcome");
function showWelcome() {
    welcoming.style.display="none";
}