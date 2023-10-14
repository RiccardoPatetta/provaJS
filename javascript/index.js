"use strict"

let ripetizioni = 0;
let _refInterval;
let colors = ["bg-warning","bg-success","bg-primary","bg-danger"];
let marche = ["Fiat","Renault","Ford","Peugeot"];

window.onload = function() {
    // #region Generazione wrapper superiore
    
    let titolo = document.createElement("h1");
    titolo.innerHTML = "Verifica di Javascript";
    titolo.classList.add("text-center");
    document.getElementsByTagName("body")[0].appendChild(titolo);

    let wrapperVal = document.createElement("div");
    wrapperVal.id = "wrapperVal";
    wrapperVal.classList.add("mx-auto","bg-light");
    document.getElementsByTagName("body")[0].appendChild(wrapperVal);

    let wrapper = document.createElement("div");
    wrapper.id = "wrapper";
    wrapper.classList.add("mx-auto");
    document.getElementsByTagName("body")[0].appendChild(wrapper);

    let rowVal = document.createElement("div");
    rowVal.classList.add("row");
    wrapperVal.appendChild(rowVal);

    let numMarca = document.createElement("div");
    numMarca.classList.add("col-sm-6");
    rowVal.appendChild(numMarca);
    
    let numVal = document.createElement("div");
    numVal.classList.add("col-sm-6");
    rowVal.appendChild(numVal);

    let labelMarca = document.createElement("h3");
    labelMarca.innerHTML = "Marca";
    numMarca.appendChild(labelMarca);
    
    let labelVal = document.createElement("h3");
    labelVal.innerHTML = "Auto vendute";
    numVal.appendChild(labelVal);

    let simboloMarca = document.createElement("div");
    simboloMarca.classList.add("col-sm-6","simboli");
    simboloMarca.id = "divMarca";
    numMarca.appendChild(simboloMarca);
    
    let simboloVal = document.createElement("div");
    simboloVal.classList.add("col-sm-6","simboli");
    simboloVal.id = "divVal";
    numVal.appendChild(simboloVal);
    
    


    // #endregion

    // #region Generazione grafico

    let rowGrafico = document.createElement("div");

    for(let i=0;i<4;i++){
        let divG = document.createElement("div");
        divG.id=marche[i];
        divG.innerHTML = marche[i];
        divG.style.border="1px solid black";
        divG.style.margin = "1px"
        divG.style.width="246px";
        divG.style.textAlign = "center"
        divG.style.bottom = "0px";
        divG.style.display = "inline-block";
        divG.style.position = "absolute";
        divG.style.left = (i*250)+"px";
        divG.classList.add(colors[i]);
        divG.style.height = "30px";
        divG.style.lineHeight = "30px";
        divG.style.fontSize = "20pt";
        divG.style.fontWeight = "bold";
        divG.addEventListener("mouseover",function(){showValue(this)});
        divG.addEventListener("mouseout",function(){hideValue()});
        rowGrafico.appendChild(divG);
    }
    wrapper.appendChild(rowGrafico);

    // #endregion

    // #region Generazione button

    let btnGioca = document.createElement("button");
    btnGioca.classList.add("btn","btn-success");
    btnGioca.id = "btnGioca";
    document.getElementsByTagName("body")[0].appendChild(btnGioca);
    btnGioca.innerHTML = "START - ANALISI VENDITE";
    btnGioca.addEventListener("click",gioca);

    let divRis = document.createElement("div");
    divRis.id = "divRis";
    divRis.classList.add("mx-auto");
    document.getElementsByTagName("body")[0].appendChild(divRis);
    divRis.style.visibility = "hidden";

    // #endregion
}

function gioca(){
    ripetizioni = 0;
    _refInterval = setInterval(genera,100);
}

function genera(){
    if(ripetizioni<10){
        document.getElementById("divMarca").innerHTML = marche[Math.floor(Math.random()*4)];
        document.getElementById("divVal").innerHTML = Math.floor(Math.random()*50)+1;
        ripetizioni++;
    }
    else
    {
        clearInterval(_refInterval);
        document.getElementById(document.getElementById("divMarca").innerHTML).style.height = parseInt(document.getElementById("divVal").innerHTML)+parseInt(document.getElementById(document.getElementById("divMarca").innerHTML).style.height)  + "px";
        document.getElementById(document.getElementById("divMarca").innerHTML).innerHTML = document.getElementById("divMarca").innerHTML + " - " + document.getElementById(document.getElementById("divMarca").innerHTML).style.height.split("px")[0];
        if(controllaVincita()){//messaggio
        }
        else
            setTimeout(gioca,1000);
    }
}

function showValue(div){
    document.getElementById("divRis").style.visibility = "visible";
    document.getElementById("divRis").innerHTML = div.innerHTML;
}

function hideValue(){
    document.getElementById("divRis").style.visibility = "hidden";
    document.getElementById("divRis").innerHTML ="";
}