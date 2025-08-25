let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turn0=true;      //playerX   player 0

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,4,8],
    [0,4,8],
];

const resetgame= () => {
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

let disableboxes= () => {
     for(box of boxes){
        box.disabled=true;
     }
    };
    
     let enableboxes= () => {
        for(box of boxes){
           box.disabled=false;
           box.innerText="";
        }
};

boxes.forEach( (box) => {
    box.addEventListener("click",() =>{
    //  console.log("box was clicked");
     if(turn0){
        box.innerText="0";
        turn0=false;
     }
     else{
        box.innerText="X";
        turn0=true;
     }
     box.disabled=true;

     checkWinner();

    });
});

const showWinner=(winner) =>{
    msg.innerText="Congratulations!!! \n You Are The Winner";
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkWinner= () =>{
      for(pattern of winpattern){    
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
        }
      }
}
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);