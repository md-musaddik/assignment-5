//increasing heart count

let countDisplay = parseInt(document.getElementById("count").innerText);
let hearts=document.getElementsByClassName("heart");
for(let heart of hearts){
    heart.addEventListener("click",function(){
        countDisplay+=1;
        document.getElementById("count").innerText=countDisplay;
    })
}

//call button functionalities
let callButtons=document.getElementsByClassName("call");

for(let callBtn of callButtons){
    callBtn.addEventListener("click",function(){
        let serviceName=callBtn.parentNode.parentNode.children[1].innerText;
        let serviceNum=callBtn.parentNode.parentNode.children[3].innerText;
        let historyParent=document.getElementById("history-section");
        let coins=parseInt(document.getElementById("coins").innerText);
        let date=new Date().toLocaleTimeString();
        if(coins>=20){
            alert("Calling "+ serviceName+ " "+serviceNum+"...");
            coins-=20;
            document.getElementById("coins").innerText=coins
            historyParent.innerHTML+=`
                <div class="d-flex addedDiv">
                    <div>
                    <p style="font-weight:bold;">${serviceName}</p>
                    <p>${serviceNum}</p>
                    </div>
                    <p>${date}</p>
                </div>
            `;

            
        }else{
            alert("You don't have enough coins to Call")
        }
    })
}

//clear button
document.getElementById()

