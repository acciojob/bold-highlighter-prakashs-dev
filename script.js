const changeColor = document.querySelectorAll("strong");
function highlight() {
    //Write your code here
for (let i = 0; i < changeColor.length; i++) {
	changeColor[i].style.color = "green";
}

}

function return_normal() {
    //Write your code here
for (let i = 0; i < changeColor.length; i++) {
    changeColor[i].style.color = "black";
}
    
}
