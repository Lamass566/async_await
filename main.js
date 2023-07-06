let btn = document.querySelector(".btn");
let info = document.querySelector(".info");

async function getId(data){
    let response = await fetch(data);
    let json = await response.json();
    return json;
}

class InfoUser {
    constructor({continent, region, city}){
        this.continent = continent;
        this.region = region;
        this.city = city;
    }
    showInfoUser(){
        info.textContent += 
        `continent: ${this.continent}
         region: ${this.region}
         city: ${this.city}
        `;
    }
}

btn.addEventListener("click", async()=>{
let id = await getId("https://api.ipify.org/?format=json");
let info = await getId(`http://ip-api.com/json/${id.ip}`);

if(info.textContent!=undefined)
{
new InfoUser(info).showInfoUser();
console.log(info.textContent)
}
else{
info.textContent="";
new InfoUser(info).showInfoUser();
}
})