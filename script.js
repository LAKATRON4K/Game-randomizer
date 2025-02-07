var Reg = document.getElementById('register')
var Name = document.getElementById('name')
var Easy = document.getElementById('easy')
var p1=document.getElementById('p1')
var p = document.getElementById('p')
var Res = document.getElementById('reset')
let PL = 0
let II = 0
let HP =0
Reg.onclick= function(){
    Name.style.display = "block"
    Reg.innerHTML = "Log out"
}
Reg.ondblclick= function(){
    Name.style.display = "none"
    Reg.innerHTML = "Register"
}
Easy.onclick = function(){
    let b =prompt('write number 0 or 1')
    if(b==Math.floor(Math.random() * 2)){
        p1.innerHTML = PL++
        
    }else{
        p.innerHTML = II++
    }
    
}
Res.onclick = function(){
    PL=0
    II=0
    p.innerHTML = HP
    p1.innerHTML = HP
}