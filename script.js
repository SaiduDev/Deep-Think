let answer = document.getElementById("input");
let correctAnswer = 0;
let wrongAnswer =0;
let i = 1;
document.getElementById("level").innerHTML = "level: "+ i;
// Play Button
let play = document.getElementById("play").addEventListener("click", ()=>{

    // level 1
    if(i == 1 ){
        if(answer.value.toLowerCase() == "map".trim()){
    document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
    setTimeout(()=>{
        document.getElementById("feedback").style.visibility = "hidden";
     }, 2000);

     i = i+1;
     document.getElementById("level").innerHTML = "level: "+ i;
     correctAnswer = correctAnswer + 1;
     document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
    }
 
    }

    if(i == 2 ){
        document.getElementById("dashboard").innerHTML = "I G L R";
        if(answer.value.toLowerCase() == "girl".trim()){
            document.getElementById("feedback").style.visibility = "visible";
    document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
    setTimeout(()=>{
        document.getElementById("feedback").style.visibility = "hidden";
     }, 2000);
     correctAnswer = correctAnswer + 1;
     document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
     i = i+1;
     document.getElementById("level").innerHTML = "level: "+ i;
    }
    
 
    }

//Level 3
if(i == 3 ){
    document.getElementById("dashboard").innerHTML = "H C E A G N";
    if(answer.value.toLowerCase() == "change".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}

//Level 4

if(i == 4 ){
    document.getElementById("dashboard").innerHTML = "C M U P T O N I G";
    if(answer.value.toLowerCase() == "computing".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}
// level 5
if(i == 5 ){
    document.getElementById("dashboard").innerHTML = "A I M G N G";
    if(answer.value.toLowerCase() == "gaming".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}
//levl 6
if(i == 6 ){
    document.getElementById("dashboard").innerHTML = "D E T E S C L E";
    if(answer.value.toLowerCase() == "selected".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}

//level 7
if(i == 7){
    document.getElementById("dashboard").innerHTML = "E E S T W";
    if(answer.value.toLowerCase() == "sweet".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}

// level 8
if(i == 8 ){
    document.getElementById("dashboard").innerHTML = "R O P R M A I G N G M";
    if(answer.value.toLowerCase() == "programming".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}
// level 9
if(i == 9 ){
    document.getElementById("dashboard").innerHTML = "R A T L V E R E ";
    if(answer.value.toLowerCase() == "traveler".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}

//level 10

if(i == 10 ){
    document.getElementById("dashboard").innerHTML = "A N E N I O T I R N L T A";
    if(answer.value.toLowerCase() == "international".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}

//level 11
if(i == 11){
    document.getElementById("dashboard").innerHTML = "A T I G N N P I";
    if(answer.value.toLowerCase() == "painting".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}

// level 12

if(i == 12 ){
    document.getElementById("dashboard").innerHTML = "A T D E";
    if(answer.value.toLowerCase() == "date".trim() || answer.value.toLowerCase() == "ated".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}
// level 13
if(i == 13){
    document.getElementById("dashboard").innerHTML = "E H T R A";
    if(answer.value.toLowerCase() == "heart".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}
// level 14
if(i == 14){
    document.getElementById("dashboard").innerHTML = "O L E C E L G";
    if(answer.value.toLowerCase() == "college".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Level "+i+" Completed";
setTimeout(()=>{
    document.getElementById("feedback").style.visibility = "hidden";
 }, 2000);
 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}

//level 15
if(i == 15){
    document.getElementById("dashboard").innerHTML = "A E L D C R N E";
    if(answer.value.toLowerCase() == "calender".trim()){
        document.getElementById("feedback").style.visibility = "visible";
document.getElementById("feedback").innerHTML = "Thank You For your Time";

 correctAnswer = correctAnswer + 1;
 document.getElementById("correctAnswer").innerHTML = "Correct Answer: "+correctAnswer;
 i = i+1;
 document.getElementById("level").innerHTML = "level: "+ i;
}

}
    // FIANL DISPLAY
    if(i == 16){
        document.getElementById("dashboard").innerHTML = "Game Over"+"<br>"+ "Thank You For Playing";

    
    }
    answer.value = "";
});

// Shuffle Button
let shuffleButton = document.getElementById("shuffle").addEventListener("click", ()=>{
 if(i == 1){
    document.getElementById("dashboard").innerHTML = "P A M";

 }else if(i == 2){
    document.getElementById("dashboard").innerHTML = "L I G R";

 }else if (i == 3) {
    document.getElementById("dashboard").innerHTML = "H E C G N A ";

 }else if(i == 4){
    document.getElementById("dashboard").innerHTML = "T N G C I M O U P";

 }else if (i == 5) {
    document.getElementById("dashboard").innerHTML = "M G I A N G";

 }else if(i == 6){
    document.getElementById("dashboard").innerHTML = "E C L S T E E D";

 }else if (i == 7) {
    document.getElementById("dashboard").innerHTML = "T E W S E";

 }else if(i == 8){
    document.getElementById("dashboard").innerHTML = "R O P G R G M I M A N ";

 }else if (i == 9) {
    document.getElementById("dashboard").innerHTML = "R L R E V T A E";

 }else if(i == 10){
    document.getElementById("dashboard").innerHTML = "I N I N A O T E R N L T A";

 }else if (i == 11) {
    document.getElementById("dashboard").innerHTML = "A T I N N I G P";

 }else if(i == 12){
    document.getElementById("dashboard").innerHTML = "E A T D";

 }else if (i == 13) {
    document.getElementById("dashboard").innerHTML = "R A T E H";

 }else if(i == 14){
    document.getElementById("dashboard").innerHTML = "L O C E G E L";

 }else if (i == 15) {
    document.getElementById("dashboard").innerHTML = "A E L N C R E D";

 }
});

// reset Button

let resetButton = document.getElementById("toggle").addEventListener("click",()=>{
    if(toggle.textContent == "Light Theme"){
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("body").style.color = "black";
    document.getElementById("dashboard").style.color = "black";
    document.querySelector(".dashboard").style.border = "2px solid black";
    document.querySelector(".dashboard").style.boxShadow = "-2px -2px 5px blue, 3px 5px 5px yellow";
    toggle.textContent = "Dark Theme";

    }else if(toggle.textContent == "Dark Theme"){
        document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("body").style.color = "white";
    document.getElementById("dashboard").style.color = "white";
    document.querySelector(".dashboard").style.border = "2px solid yellow";
    document.querySelector(".dashboard").style.boxShadow = "-2px -3px 7px red, 3px 5px 5px green";
    toggle.textContent = "Light Theme";
    }
});