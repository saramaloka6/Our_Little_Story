// =========================
// Password
// =========================

const PASSWORD = "OURLOVE";

const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");

const pages = document.querySelectorAll(".page");

function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}

unlockBtn.addEventListener("click",()=>{

    if(passwordInput.value===PASSWORD){

        passwordInput.value="";

        error.innerHTML="";

        showPage("welcomePage");

    }

    else{

        error.innerHTML="Wrong Password 🤍";

    }

});

passwordInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        unlockBtn.click();

    }

});

// =========================
// Continue Buttons
// =========================

const nextButtons=document.querySelectorAll(".nextBtn");

nextButtons.forEach(button=>{

button.addEventListener("click",()=>{

const next=button.dataset.next;

showPage(next);

window.scrollTo({

top:0,

behavior:"smooth"

});

});

});

// =========================
// Final Restart
// =========================

const final=document.querySelector(".final");

const restart=document.createElement("button");

restart.innerHTML="♡ One More Time";

restart.style.marginTop="40px";

final.appendChild(restart);

restart.addEventListener("click",()=>{

showPage("passwordPage");

});