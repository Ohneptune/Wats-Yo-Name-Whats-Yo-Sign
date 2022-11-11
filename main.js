// tarot card page
// name the list of cards
function zodiac(){
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
    var result = "unkown because you didnmt put a valid date";


if (birthmonth == 12&& birthday >= 22 || birthmonth == 1 && birthday <= 19){
    result = ("Capricorn");
    document.getElementById("characteristic").innerHTML= "Earth","factual and very black and white. successful but also cold.";
}
if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18) { 
    result = ("Aquarius");
    document.getElementById("characteristic").innerHTML=11,"Air", "feel your feelings ya freak, super weird.";
}
if (birthmonth == 2&& birthday >= 19 || birthmonth == 3 && birthday <= 20){
    result = ("Pisces");
    document.getElementById("characteristic").innerHTML=12,"Water","baby emotion bootcakes, physically very bubbly and cute.";
}
if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
    result =("Aries");
    document.getElementById("characteristic").innerHTML=1, "Fire", "Loud AF, always gotta argue just to hear themselves win.";
}
 if (birthmonth == 4&& birthday >= 20 || birthmonth == 5 && birthday <= 20){
    result = ("Taurus");
    document.getElementById("characteristic").innerHTML=2, "Earth", "glutton pigs, love comfort, stubborn but caring.";
 }
if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20){
    result = ("Gemini");
    document.getElementById("characteristic").innerHTML=3,"Air", "socialite, fake, flighty, comes across and looks young.";
}
if (birthmonth == 6&& birthday >= 21 || birthmonth == 7 && birthday <= 22){
    result =("Cancer")
    document.getElementById("characteristic").innerHTML=4,  "Water", "emotional baby but not sweet like pisces, mean, caring, meh.";
}
if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
    result =("Leo")
    document.getElementById("characteristic").innerHTML=5, "Fire","me,me,me,me.......oh and ME";
}
if (birthmonth == 8&& birthday >= 23 || birthmonth == 9 && birthday <= 22){
    result =("Virgo")
    document.getElementById("characteristic").innerHTML=6, "Earth","meticulous, boring, family focused, who cares.";
}
if (birthmonth == 9&& birthday >= 23 || birthmonth == 10 && birthday <= 22){
    result =("Libra")
    document.getElementById("characteristic").innerHTML= 7, "Air", "is a freaking scale but struggles with balance, nurturing to an extent";
}
if (birthmonth == 10&& birthday >= 23 || birthmonth == 11 && birthday <= 18){
    result =("Scorpio")
    document.getElementById("characteristic").innerHTML=8, "Water","All about the energies and shiz, darkness deep in there be warned, LOYAL";
}
if (birthmonth == 11&& birthday >= 22 || birthmonth == 12 && birthday <= 21){
    result = ("Sagitarrius")
    document.getElementById("characteristic").innerHTML=9,"Fire", "Inconsistent beyond all belief, constantly needs change but never works on shit";

} else if (birthmonth>12||birthday>31){
    alert("please enter an accurate date!");
}
document.getElementById("output").innerHTML= result;
}
    
