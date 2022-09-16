let div=document.createElement("div");
div.setAttribute("id","align");
div.style.textAlign="center";
div.style.color="black";

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.style.marginTop="30px";
active.style.fontFamily="Arial";
active.setAttribute("id","active");

let death=document.createElement("div");
death.setAttribute("id","death");
death.style.fontFamily="Arial";

let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");
recovered.style.fontFamily="Arial";

div.append(input,button,active,death,recovered);
document.body.append(div);
document.body.style.backgroundColor="lightblue";

async function foo(){
    let countryname=document.getElementById("country").value;
    let url=`https://api.covid19api.com/dayone/country/${countryname}`
    let res=await fetch(url);
    let res1=await res.json();
    let index=res1.length-1;
    console.log(res1[index].Active);
    active.innerHTML=`Total Active Cases: ${res1[index].Active}`;
    death.innerHTML=`Total Deaths: ${res1[index].Deaths}`;
    recovered.innerHTML=`Total Recovered Cases: ${res1[index].Recovered}`;
}