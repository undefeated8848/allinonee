// javascript part 


  const boxes = document.querySelectorAll(".box");
  const turnMessage = document.querySelector(".turn-message");
  const resetButton = document.querySelector(".reset-btn");
  const newButton = document.querySelector(".new-btn");

  //winpatterns given below

  let winPattern = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
  ];

  let turnX = true;

  // function to click on boxes
  boxes.forEach((box) => {
   
    box.addEventListener("click", function(){
        console.log("oooo");
        if(turnX){
            box.innerText = "X";
            turnX = false;
            box.style.color = "blue";
            turnMessage.innerText = "PLAYER O's Turn";
            turnMessage.style.color = "Red";
        }else{
            box.innerText = "O";
            turnX = true;
            box.style.color = "red";
            turnMessage.innerText = "PLAYER X's Turn";
            turnMessage.style.color = "Blue";
        }

       box.style.pointerEvents = "none";

        checkWinner(); // function to check Winner

    })
  })
   
  function checkWinner (){
    for(let pattern of winPattern){
     pos1 = boxes[pattern[0]].innerText;
     pos2 = boxes[pattern[1]].innerText;
     pos3 = boxes[pattern[2]].innerText;

     if(pos1 != "" && pos1 === pos2 && pos2 === pos3){
        setTimeout(() => {
            alert(`Hurray !!! Player ${pos1} wins`);
        },100);
        newGame();
        return;
    }
}
  
 // draw
  let isDraw = true;
  boxes.forEach((box) => {
    if(box.innerText === ""){
        isDraw = false;
    }
  });

  if(isDraw){
    setTimeout(() => {
        alert("It's a Draw");
        newGame();
    },200);
   
  }

}

 // reset game
 resetButton.addEventListener("click", resetGame);
   function resetGame (){
    boxes.forEach((box) => {
         box.innerText = "";
        box.style.pointerEvents = "auto";
    })
   }
    
// newGame
newButton.addEventListener("click", newGame);
function newGame() {
    boxes.forEach((box) => {
      box.innerText = "";
      box.style.pointerEvents = "auto";
    });
  
    turnX = true; // Important: X always starts first!
    turnMessage.innerHTML = `<span>FIRST</span> Player X's <span>TURN</span>`;
    turnMessage.style.color = "blue";
  }
  
