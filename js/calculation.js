const playerNames =[];


function addPlayerName(names){
   
     const playerList = document.getElementById('player-list');
     playerList.innerHTML = '';
        //validation andt alart for 5 player selection
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


function btnClick(element){    
 
     const playerName = element.parentNode.children[0].innerText;
     const PlayerNameCollection = {
          players : playerName,
     }
     playerNames.push(PlayerNameCollection);
     
    document.getElementById('selection-number').innerText = playerNames.length;

     addPlayerName(playerNames)

     // element.target.setAttribute("disabled", true);

}

//get input fild valule function
function getInputFildValueWithId(inputFlidId){
     
     const inputFildValue = document.getElementById(inputFlidId);
     const inputFldValueSring = inputFildValue.value;
     const getInputValue = parseInt(inputFldValueSring);
     return getInputValue;
     
}
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

function playerExpenses(){
     const inputFldParPlayer =  getInputFildValueWithId('Per-player');
     const perPlayerCost = playerNames.length * inputFldParPlayer;
     forValidation(perPlayerCost)
     const playerExpenses = document.getElementById('player-Expenses');
     playerExpenses.innerHTML = perPlayerCost;
     return perPlayerCost;

}



document.getElementById('calculate-btn').addEventListener('click', function(){
     
     playerExpenses()  
     
})

document.getElementById('calculate-Total').addEventListener('click', function(){

     const parplayerExpns = playerExpenses()
     const ManagerConst = getInputFildValueWithId('manager-Cost');
     const CoachCost = getInputFildValueWithId('coach-cost');
     const totalcostallExpenses = ManagerConst + CoachCost + parplayerExpns;
     
     const subTotal = document.getElementById('sub-total');
     subTotal.innerText = totalcostallExpenses;
})


