function onLoad(){
    //document.getElementById("welcomeText").innerHTML="Welcome";
        document.getElementById("heading").style.textAlign="center";
}

function getValues(){
    let type=document.getElementById("types").value;
    let bool=document.getElementById("need").value;
    let cost=0;
    let simpleCost=50000;
    let grandCost=150000;
    if(type=="Simple"){
        cost+=simpleCost;
    }
    else{
        cost+=grandCost;
    }

    if(bool=="yes"){
        cost+=20000;
    }

    let p1=
    
}