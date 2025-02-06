var Reg = document.getElementById('register')
var Name = document.getElementById('name')
var Easy = document.getElementById('easy')
var p1=document.getElementById('p1')
var p = document.getElementById('p')
let c = 0
Reg.onclick= function(){
    Name.style.display = "block"
    Reg.innerHTML = "Log out"
}
Reg.ondblclick= function(){
    Name.style.display = "none"
    Reg.innerHTML = "Register"
}
Easy.onclick = function(){
    let b =prompt('write number 1 or 2')
    let c = 0
    if(b==1){
        p1.innerHTML = c+1
        p.innerHTML = c
        
    }else{
        p.innerHTML = c+1
        p1.innerHTML = c
    }
}