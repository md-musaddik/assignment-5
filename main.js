//increasing heart count

let countDisplay = parseInt(document.getElementById("count").innerText);
let hearts=document.getElementsByClassName("heart");
for(let heart of hearts){
    heart.addEventListener("click",function(){
        countDisplay+=1;
        document.getElementById("count").innerText=countDisplay;
    })
}

