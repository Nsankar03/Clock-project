//-------------------Function to print the date and time-----------------------
const t=document.getElementById("time");
const d=document.getElementById("date");
printDateFormat();
function printDateFormat(){
    const date=new Date()
    let day = date.getDate();
    let month=date.getMonth();
    let year=date.getFullYear();
    let da=day;
    let mo=month+1;
    let ye=year;
    if(da<=9)
    {
        da=`0${da}`;
    }
    if(mo<=9)
    {
        mo=`0${mo}`;
    }
    d.innerHTML=`${da} - ${mo} - ${year}`;
}
//--------------------time interval to change the seconds--------------------
setInterval(()=>{
    const time=new Date().toLocaleTimeString();
    t.innerHTML=time;
},1000);
//------------------------Task bar button functions----------------------
document.querySelector(".s1").onmouseover = ()=>changeDif(document.querySelector(".s1"));
document.querySelector(".s1").onmouseout = ()=>changeNor(document.querySelector(".s1"));
document.querySelector(".s1").onclick = ()=>changecli(document.querySelector(".s1"),"s1");

document.querySelector(".s2").onmouseover = ()=>changeDif(document.querySelector(".s2"));
document.querySelector(".s2").onmouseout = ()=>changeNor(document.querySelector(".s2"));
document.querySelector(".s2").onclick = ()=>changecli(document.querySelector(".s2"),"s2");

document.querySelector(".s3").onmouseover = ()=>changeDif(document.querySelector(".s3"));
document.querySelector(".s3").onmouseout = ()=>changeNor(document.querySelector(".s3"));
document.querySelector(".s3").onclick = ()=>changecli(document.querySelector(".s3"),"s3");

let ala=document.querySelector(".s2");

let stop=document.querySelector(".s3");

let timer=document.querySelector(".s4");

//--------------------------Functions-----------------------------

function changeNor(element)
{
    element.style.backgroundColor="rgba(0, 255, 204, 0.812)"
    element.style.color="black";
    element.style.boxShadow= "0 0 0px black";
}
function changeDif(element)
{
    element.style.backgroundColor="rgb(5, 19, 180)";
    element.style.color="white";
}
function changecli(element,s)
{
    if(s=="s1")
    {
        document.querySelector(".C").scrollIntoView();
        changeOn(element);
    }
    else if(s=="s2")
    {
        changeOn(element);
        document.querySelector(".A").scrollIntoView();
        
    }
    else if(s=="s3")
    {
        document.querySelector(".S").scrollIntoView();
        changeOn(element);
    }
    else if(s=="s4")
    {
        document.querySelector(".T").scrollIntoView();
        changeOn(element);
    }
}
function changeOn(element)
{
   element.style.backgroundColor="lavender";
   element.style.color="black";
   element.style.boxShadow= "0 0 20px black";
}

//-----------------------------------Alarm---------------------------------//


let count=1;
let hours;
let minutes;
let options;

console.log(hours+" "+minutes+" "+options);
document.getElementById("add").onclick=function() {
    setAlarm();
}
document.getElementById("set").onclick=function(){
    document.getElementById("alarmlist").style.display="block";
    document.getElementById("editAlarm").style.display="block";
    document.getElementById("hid").style.display="none";
    hours=document.getElementById("h").value;
    minutes=document.getElementById("m").value;
    options = document.getElementById("opt").options[document.getElementById("opt").selectedIndex].text;
    checkAlarm(hours,minutes,options);
}
document.getElementById("editAlarm").onclick=function(){
   hidemsg();
   hideEdit();
   setAlarm();
   
}
function setAlarm()
{
    document.getElementById("hid").style.display="block"; 
}
function hidemsg()
{
    document.getElementById("alarmlist").style.display="none";
}
function hideEdit()
{
    document.getElementById("editAlarm").style.display="none";
}
function checkAlarm(hrs,min,flag){
    
    setInterval(()=>{
        console.log(`${hrs} ${min} ${flag}`)
        let time=new Date().toLocaleTimeString();
        time=time.replace(' ',':');
        let t=time.split(":");
        console.log(t);
        if(t[0]==hrs && t[1]==min && t[3]==flag && t[2]<10)
        {
            setTimeout(()=>
            {
                document.getElementById("song").play();
            },1)
           // window.alert("WAkeeeeeee its time!!!");
        }
    },1000); 
  }


  //-------------------------------StopWatch-------------------------------------

  let hrs=0;
  let min=0;
  let sec=0;
  document.getElementById("stoptimer").innerHTML=`00 : 00 : 00`;
  let flag=true;
  let f=true;
  document.getElementById("start").onclick=function(){
    if(flag)
    {
        let interval = setInterval(increment,10);
        flag=false;
      function increment(){
        if(min==60)
        {
            hrs++;
            min=0;
        }
        if(sec==99)
        {
            min++;
            sec=0;
        }
        let h=hrs;
        let m=min;
        let s=sec++;
        if(hrs<10)
        {
        h=`0${hrs}`;
        }
        if(min<10)
        {
        m=`0${min}`;
        }
        if(sec<10)
        {
        s=`0${sec}`;
        }
        document.getElementById("stoptimer").innerHTML=`${h} : ${m} : ${s}`;
        }
        document.getElementById("pause").onclick=function(){
            if(f)
            {
                f=false;
                document.getElementById("pause").innerHTML="Resume";
                clearInterval(interval);
            }
            else
            {
                f=true;
                document.getElementById("pause").innerHTML="Pause";
                interval=setInterval(increment,10);
            }
        }
        document.getElementById("reset").onclick=function(){
            hrs=0;
            min=0;
            sec=0;
            flag=true;
            document.getElementById("stoptimer").innerHTML=`00 : 00 : 00`;
            clearInterval(interval);
        }
        
       
        
    }
    
    

}



 
