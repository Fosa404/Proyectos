const swtch = document.getElementById("switch");
const body = document.getElementById("body");

function nightMode () { swtch.addEventListener("click",()=>{
    body.classList.toggle("black")})
        
}

    export {nightMode}


