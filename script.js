const modeBtn = document.querySelector('.mode-btn');
const sec_one = document.querySelector('section');

const mode = () => {
    if(sec_one.className === "light"){
        sec_one.className = "dark"
        modeBtn.innerHTML = "Light"
    }else{
        sec_one.className = "light"
        modeBtn.innerHTML = "Dark"

    }
}

modeBtn.onclick = mode;


const langBtn = document.querySelector('.lang-btn');
const li = document.querySelectorAll("li");

const data = {
    en: ["Home","Blogs","About","Contact"],
    az: ["Ana sehife","Bloglar","Haqqimizda","Elaqe"]
}

const langMode = () => {
    if(langBtn.innerHTML === "AZ"){
        for(let index in data.az){
            li[index].innerHTML = data.az[index];
        }
        langBtn.innerHTML = "EN";
    }else{
        for(let index in data.en){
            li[index].innerHTML = data.en[index];
        }
        langBtn.innerHTML = "AZ";
    }
}

langBtn.onclick = langMode;



