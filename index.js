let images = ["dice.png", 
"dice1.png", 
"dice2.png",
"dice3.png",
"dice4.png",
"dice5.png",
"dice6.png"];

let dice = document.querySelectorAll("img");

function roll(){
    
     dice.forEach(function(die){
         die.classList.add("shake");
     })

     setTimeout(function(){
         dice.forEach(function(die){
             die.classList.remove("shake");
         });

         let dieOneValue = Math.floor(Math.random()*(7-1)+1);
         let dieTwoValue = Math.floor(Math.random()*(7-1)+1);
         let dieThirdValue = Math.floor(Math.random()*(7-1)+1);

         console.log(dieOneValue,dieTwoValue,dieThirdValue)

         document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
         document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
         document.querySelector("#die-3").setAttribute("src", images[dieThirdValue]);

         document.querySelector("#score1").innerHTML = dieOneValue
         document.querySelector("#score2").innerHTML = dieTwoValue
         document.querySelector("#score3").innerHTML = dieThirdValue

         if(dieOneValue > dieTwoValue  && dieOneValue > dieThirdValue)
         {
             
             document.querySelector("#win").innerHTML = "Member A is Winner"
             document.getElementById("member1").style.backgroundColor="green"
             document.getElementById("member2").style.backgroundColor="white";
             document.getElementById("member3").style.backgroundColor="white";
             
         }
         else if(dieTwoValue > dieOneValue && dieTwoValue > dieThirdValue)
         {
            document.querySelector("#win").innerHTML = "Member B is Winner"
            document.getElementById("member1").style.backgroundColor="white";
            document.getElementById("member2").style.backgroundColor="green";
            document.getElementById("member3").style.backgroundColor="white";
         }
         else if(dieThirdValue > dieOneValue && dieThirdValue > dieTwoValue)
         {

            document.querySelector("#win").innerHTML = "Member C is Winner"
            document.getElementById("member1").style.backgroundColor="white";
            document.getElementById("member2").style.backgroundColor="white";
            document.getElementById("member3").style.backgroundColor="green";
         }
         else if(dieOneValue == dieTwoValue || dieOneValue == dieThirdValue)
         {
            document.querySelector("#win").innerHTML = "AGAIN ROLL THE DICE";
            document.getElementById("member1").style.backgroundColor="white";
            document.getElementById("member2").style.backgroundColor="white";
            document.getElementById("member3").style.backgroundColor="white";
         }
         else if(dieTwoValue == dieOneValue || dieTwoValue == dieThirdValue)
         {
            document.querySelector("#win").innerHTML = "AGAIN ROLL THE DICE"
            document.getElementById("member1").style.backgroundColor="white";
            document.getElementById("member2").style.backgroundColor="white";
            document.getElementById("member3").style.backgroundColor="white";
         }
         else if(dieThirdValue == dieTwoValue || dieThirdValue == dieOneValue)
         {
            document.querySelector("#win").innerHTML = "AGAIN ROLL THE DICE"
            document.getElementById("member1").style.backgroundColor="white";
            document.getElementById("member2").style.backgroundColor="white";
            document.getElementById("member3").style.backgroundColor="white";
         }
         if(dieOneValue < dieTwoValue && dieOneValue > dieThirdValue)
             {
                document.getElementById("member1").style.backgroundColor="yellow"
                document.getElementById("member2").style.backgroundColor="green";
                document.getElementById("member3").style.backgroundColor="red";
             }
         if(dieOneValue < dieTwoValue && dieOneValue < dieThirdValue)
             {
                document.getElementById("member1").style.backgroundColor="red"
                document.getElementById("member2").style.backgroundColor="green";
                document.getElementById("member3").style.backgroundColor="yellow";
             }
         if(dieOneValue > dieTwoValue && dieTwoValue > dieThirdValue)
             {
                document.getElementById("member1").style.backgroundColor="green"
                document.getElementById("member2").style.backgroundColor="yellow";
                document.getElementById("member3").style.backgroundColor="red";
             }
         if(dieThirdValue > dieTwoValue && dieOneValue < dieTwoValue)
             {
                document.getElementById("member1").style.backgroundColor="red"
                document.getElementById("member2").style.backgroundColor="yellow";
                document.getElementById("member3").style.backgroundColor="green";
             }
         if(dieThirdValue > dieOneValue && dieOneValue > dieTwoValue)
             {
                document.getElementById("member1").style.backgroundColor="yellow"
                document.getElementById("member2").style.backgroundColor="red";
                document.getElementById("member3").style.backgroundColor="green";
             }
         if(dieOneValue > dieThirdValue && dieTwoValue < dieThirdValue)
             {
                document.getElementById("member1").style.backgroundColor="green"
                document.getElementById("member2").style.backgroundColor="red";
                document.getElementById("member3").style.backgroundColor="yellow";
             }
     },
     1000
     );
}



