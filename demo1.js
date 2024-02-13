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

    let p1="Name : "+document.getElementById("name").value;
    let p2="Phone Number : "+document.getElementById("phoneNumber").value;
    let p3="Address : "+document.getElementById("address").value;
    let p4="Your estimated wedding cost is "+cost;

    let para1=document.createElement('p');
    para1.textContent=p1;
   
    let para2=document.createElement('p');
    para2.textContent=p2;

    let para3=document.createElement('p');
    para3.textContent=p3;

    let para4=document.createElement('p');
    para4.textContent=p4;

    let resultdiv=document.getElementById("result");
    resultdiv.innerHTML="";
    resultdiv.appendChild(para1);
    resultdiv.appendChild(para2);
    resultdiv.appendChild(para3);
    resultdiv.appendChild(para4);
}

function convertToByte(){
    console.log("Convert TO Byte");
    let value = document.getElementById("stringValue").value;
    let result="";
    for(var i=0;i<value.length;i++){
        result+=value.charCodeAt(i);
        console.log(result);
    }
    document.getElementById("ByteResult").innerHTML=result+"";
}