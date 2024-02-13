

let arr=[];

function addEvent(){
    let eName=document.getElementById("EventName").value;
    let eDate=document.getElementById("EventDate").value;
    console.log(eDate);
    arr.push({eName,eDate});
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    document.getElementById("EventName").value='';
    document.getElementById("EventDate").value='';
}

function DisplayEvent(){
    console.log("Display Event");
    document.getElementById("resultTable").innerHTML="";    
    let table=document.getElementById("resultTable");
    var header=table.insertRow(-1);
    header.insertCell(0).innerHTML="Event Name";
    header.insertCell(1).innerHTML="Event Date";
    for(var i=0;i<arr.length;i++){
        if(arr[i].eName=="")
            continue;
        var row=table.insertRow(-1);
        var cell0=row.insertCell(0);
        var cell1=row.insertCell(1);
        cell0.innerHTML=arr[i].eName;
        cell1.innerHTML=arr[i].eDate;
    }
    table.style.marginLeft="40%";
    var height=Number(arr.length*20 + 300);
    if(arr.length<1)
        height=Number(300);
    document.getElementsByClassName("container")[0].style.height=height+"px";
    console.log(document.getElementsByClassName("container"));
}


function Events(name, date, venue)
{
    
    this.name = name;
    this.date = date;
    this.venue = venue;
}

function array1()
{
    var arr1 =  new Array();
    var data= new Events("Marriage","22/7/2018","KV Mahal");
    arr1.push(data);
    var data1= new Events("Birthday Parties","20/2/2018","HR Palace");
    arr1.push(data1);
    return arr1;
}

function array2()
{
    var arr2 =  new Array();
    var data= new Events("Webinar","5/6/2018","Auditorium");
    arr2.push(data);
    var data1= new Events("Corporate Events","10/2/2018","KVM hotel");
    arr2.push(data1);
    return arr2;
}

function array3()
{
    var arr3 =  new Array();
    var data= new Events("Award Ceremony","8/2/2018","Auditorium");
    arr3.push(data);
    var data1= new Events("Product Launches","21/2/2018","Lemerdian Hotel");
    arr3.push(data1); 
    return arr3;
}

function merge() 
{
var mergedArray = array1().concat(array2(), array3());
var merge1=array1().concat(array2());
console.log(mergedArray);
console.log(merge1);

mergedArray.sort((a, b) => {
  
    var dateA = new Date(a.date.split("/").reverse().join("-"));
    var dateB = new Date(b.date.split("/").reverse().join("-"));

    return dateA - dateB;
});
console.log(mergedArray);
}

let HandleEvents=[];

function createEvent1(){
    console.log("Create Event");
    let eName=document.getElementById("eName").value;
    let eVenue=document.getElementById("eVenue").value;
    let eDate=document.getElementById("eDate").value;
    let eCost=Number(document.getElementById("eCost").value);
    HandleEvents.push({eName,eVenue,eDate,eCost});
}

function displayEvent(){
    console.log("Display Event");
    let table=document.getElementById("eTable");    
    table.innerHTML="";
    let header=table.insertRow(-1);
    header.insertCell(0).innerHTML="Event Name";
    header.insertCell(1).innerHTML="Event Venue";
    header.insertCell(2).innerHTML="Event Date";
    header.insertCell(3).innerHTML="Event Cost";
    HandleEvents.sort((a,b)=>a.eCost-b.eCost);
    for(var i=0;i<HandleEvents.length;i++){
        let row=table.insertRow();
        row.insertCell(0).innerHTML=HandleEvents[i].eName;
        row.insertCell(1).innerHTML=HandleEvents[i].eVenue;
        row.insertCell(2).innerHTML=HandleEvents[i].eDate;
        row.insertCell(3).innerHTML=HandleEvents[i].eCost;
    }

    document.getElementsByClassName("EventSort")[0].style.height=(300+(HandleEvents.length*30))+"px";
}