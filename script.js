let container = document.querySelector(".container");
let inp1 = document.querySelector(".inp1");
let search = document.querySelector(".search");
let resultdiv = document.querySelector(".resultdiv");
let message = document.querySelector(".message");
let imagePhoto = document.querySelector(".imagePhoto");
let namme = document.querySelector(".namme");
let agee = document.querySelector(".agee");
let nation = document.querySelector(".nation");
let cluuub = document.querySelector(".cluuub");
let networth = document.querySelector(".networth");
let tropy = document.querySelector(".tropy");
let goal = document.querySelector(".goal");
let player = [
{namee1 : "Cristiano Ronaldo", namee2 : "cristiano ronaldo", age : 40, Nationality : "Portugal", Club : "Al-Nasser", NetWorth : "$800M", Tropies : 33, Goals : 933, photoUrl : "https://i.redd.it/3tm0yd43e41c1.jpg"},
{namee1 : "Lionel Messi" , namee2 : "messi", age : 38, Nationality : "Argentina", Club : "Inter Miami CF", NetWorth : "$850M", Tropies : 46, Goals : 858, photoUrl : "https://i.pinimg.com/736x/13/fb/ff/13fbff1dc5c89a448149f8cc895edb93.jpg"},
{namee1 : "Neymar jr", namee2 : "neymar", age : 33, Nationality : "Brazil", Club : "Santos FC", NetWorth : "$350M", Tropies : 35, Goals : 476},
]
search.addEventListener("click",()=>{
let input = inp1.value;
if(input === ""){
message.innerHTML = `Enter Name`
}else{
let match = player.find(p => p.namee1 === input || p.namee2 === input) 
if(match){
imagePhoto.src = match.photoUrl;
namme.innerHTML = `Name : ${match.namee1}`;
agee.innerHTML = `Age : ${match.age}`
nation.innerHTML = `Nationality : ${match.Nationality}`
cluuub.innerHTML = `Club : ${match.Club}`
networth.innerHTML = `Net-Worth : ${match.NetWorth}`
tropy.innerHTML = `Tropies : ${match.Tropies}`
goal.innerHTML = `Goals : ${match.Goals}`
}
}
});















