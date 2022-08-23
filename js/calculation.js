const playerNames =[];


function addPlayerName(names){
   
     const playerList = document.getElementById('player-list');
     playerList.innerHTML = '';
        //validation and alart for 5 player selection
        if(playerNames.length == 6){
          alert('you alrady select 5 player')
     }
     for(let i=0; i <names.length; i++){
          const NameSelect = playerNames[i].players;

          const ul = document.createElement('ul');
          ul.innerHTML = `
          <ul>
                <li>${i+1} .${NameSelect} </li>
              </ul>
          `
          playerList.appendChild(ul);
     }
}

// function selectButton(){
//      clickedBtnlist =  document.querySelector('a')
//      let clickedlist;
//      for(let i = 0; i<clickedBtnlist.langth; i++){
//         clickedlist = clickedBtnlist[i]
//         console.log(clickedlist)
//      }
//      return clickedlist;
     
// }



//evetn function
function btnClick(element){    
 
     const playerName = element.parentNode.children[0].innerText;
     const PlayerNameCollection = {
          players : playerName,
     }
     playerNames.push(PlayerNameCollection);
     
     document.getElementById('selection-number').innerText = playerNames.length;

     addPlayerName(playerNames)
     const clickedBtn =  document.querySelector('a');
     for (let i = 0; i <clickedBtn.length; i++){
          const element = clickedBtn[i];
          
     }    
     element.style.pointerEvents = 'none';
     element.style.backgroundColor = 'lightgray';
   

   

}

//get input fild valule function
function getInputFildValueWithId(inputFlidId){    
     const inputFildValue = document.getElementById(inputFlidId);
     const inputFldValueSring = inputFildValue.value;
     const getInputValue = parseInt(inputFldValueSring);
     forValidation(getInputValue)
     return getInputValue;
     
}

//validation function
function forValidation(inputValue){
   if(isNaN(inputValue)){
     alert('plese give valid number')
   }
   else if(inputValue == 'string'){
     alert('plese give valid number')
   }
   else if((Math.sign(inputValue) === -1)){
     alert('plese give valid number')
   }
}

//calculation function
function playerExpenses(){
     const inputFldParPlayer =  getInputFildValueWithId('Per-player');
     const perPlayerCost = playerNames.length * inputFldParPlayer;
     const playerExpenses = document.getElementById('player-Expenses');
     playerExpenses.innerHTML = perPlayerCost;
     return perPlayerCost;

}



document.getElementById('calculate-btn').addEventListener('click', function(){
     
     playerExpenses() 
      
     
})

//calculate fanction
document.getElementById('calculate-Total').addEventListener('click', function(){

     const parplayerExpns = playerExpenses()
     const ManagerConst = getInputFildValueWithId('manager-Cost');
     const CoachCost = getInputFildValueWithId('coach-cost');
     const totalcostallExpenses = ManagerConst + CoachCost + parplayerExpns;
     
     const subTotal = document.getElementById('sub-total');
     subTotal.innerText = totalcostallExpenses;
})


