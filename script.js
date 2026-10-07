const button = document.getElementById("modeBtn");

button.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        button.textContent="☀️";
    }else{
        button.textContent="🌙";
    }

});

const form=document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thanks! Your message has been sent.");

    form.reset();

});





