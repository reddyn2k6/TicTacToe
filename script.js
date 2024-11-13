let playerscore=document.querySelector("#playerscore");
let compscore=document.querySelector("#compscore");
let ps=0;
let cs=0;
let result=document.querySelector("#resultss"); 
let choices=document.querySelectorAll(".choices");

const showwinner = (userwin,userchoice,compop)=> {
    if(userwin) {
        ps++;
        playerscore.innerText=ps;
        result.innerText=`You win! Your ${userChoice} beats ${compChoice}`; 
        result.style.backgroundColor="green";
    }
    else {
        cs++;
        compscore.innerText=cs;
        result.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        result.style.backgroundColor="red";
    }
};
const compchoice= () => {
    let choicearry=["rock","paper","scissors"];
    return choicearry[Math.floor(3*(Math.random()))];
};
const draw= () => {
    result.innerText="Game Draw";
    result.style.backgroundColor="#081b31";
};
const playgame = (userchoice)=> {
let compop=compchoice();
if(userchoice===compop) {
 draw();
} else {
let userwin=true;
if(userchoice==="rock") { 
    userwin = (compchoice==="scissors")? true : false;
}
else if(userchoice==="paper") {
    userwin = (compchoice==="rock")? true : false;
}
else if(userchoice==="scissors") {
    userwin = (compchoice==="paper")? true : false;
}
showwinner(userwin , userchoice ,compop);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click" ,()=> {
let userchoice=choice.getAttribute("id");
playgame(userchoice);
    });
});