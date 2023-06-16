//alert("hi")
var l=document.querySelectorAll(".dum").length;
document.addEventListener("keypress",function(ev) {
    sound(ev.key)
    flash(ev.key)
})
function sound(k){
    if(k=="l")
    new Audio("bas.mp3").play()
    else if(k=='d')
    new Audio("cym.mp3").play()
    else if(k=='s')
    new Audio("guitar1.wav").play()
    else if(k=='a')
    new Audio("snare.mp3").play()
    else if(k=='f')
    new Audio("flu.wav").play()
    else if(k=='g')
    new Audio("guitar.wav").play()
    else if(k=='h')
    new Audio("gut.wav").play()
    else if(k=='k')
    new Audio("flute1.wav").play()
    else if(k=='j')
    new Audio("new.wav").play()
}
for (let index = 0; index < l; index++) {
   var t=document.querySelectorAll(".dum")[index];
   t.addEventListener("click",function(){
    sound(this.innerHTML)
    flash(this.innerHTML)
   })
}
/*function House(age,gen,name){
    this.age=age;
    this.gen=gen;
    this.name=name;
 }*/
 flash=(ck)=>{
    var t=document.querySelector("."+ck);
    t.classList.add("press")
    setTimeout(function(){
        t.classList.remove("press")
    },300)
 }