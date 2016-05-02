

var heirlooms = new Array()
heirlooms[0]=0;
heirlooms[1]=0;
heirlooms[2]=0;
heirlooms[3]=0;
heirlooms[4]=0;
heirlooms[5]=0;
heirlooms[6]=0;
heirlooms[7]=0;
function createheirloom(x){

var rnd1=Math.random()*100
var rnd2=Math.random()*100
var rnd3=Math.random()*300
var rnd4=Math.random()*1000

var rarity=1;
var value=1;
var name="";

if(rnd1<10){
name="Broken ";
value=0.3;
rarity=1;
}
else if(rnd1<20){
name="Used ";
value=1;
}else if(rnd1>99){
name="Misterious ";
value=5;
rarity=5;
}else if(rnd1>95){
name="Pristine ";
value=2.5;
rarity=2;
}else if(rnd1>85){
name="Untouched ";
value=2;
rarity=1;
}else if(rnd1>75){
name="New ";
value=1.5;
rarity=1;
}


if(rnd2<10){
name+="Shoes ";
value*=0.4;
rarity*=1;
}
else if(rnd2<20){
name+="Dress ";
value*=0.5;
rarity*=1;
}else if(rnd2<30){
name+="Chest ";
value*=3;
rarity*=1;
}else if(rnd2<30){
name+="Coin ";
value*=2;
rarity*=1;
}else if(rnd2<40){
name+="Sword ";
value*=1;
rarity*=1;
}else if(rnd2<50){
name+="Shield ";
value*=1;
rarity*=1;
}else if(rnd2<60){
name+="Mace ";
value*=1;
rarity*=1;
}else if(rnd2<70){
name+="Bow ";
value*=1;
rarity*=1;
}else if(rnd2<80){
name+="Spear ";
value*=1;
rarity*=1;
}else if(rnd2<85){
name+="Necklace ";
value*=5;
rarity*=2;
}else if(rnd2<90){
name+="Ring ";
value*=6;
rarity*=2;
}else if(rnd2<93){
name+="Staff ";
value*=8;
rarity*=3;
}else if(rnd2<96){
name+="Crown ";
value*=10;
rarity*=3;
}else if(rnd2<98){
name+="Fossil ";
value*=15;
rarity*=4;
}else if(rnd2<99.5){
name+="Relic ";
value*=20;
rarity*=5;
}
else
{
name+="Enigma ";
value*=30;
rarity*=15;
}



if(rnd3<20){
name+="of the Beggar ";
value*=0.5;
rarity*=2;
}
else if(rnd3<40){
name+="of the Bandit ";
value*=1;
rarity*=2;
}else if(rnd3<55){
name+="of the Lady ";
value*=1.5;
rarity*=2.5;
}else if(rnd3<65){
name+="of the Traveler ";
value*=1.5;
rarity*=2.5;
}else if(rnd3<75){
name+="of the Ancient ";
value*=2;
rarity*=2.5;
}else if(rnd3<85){
name+="of the Noble ";
value*=2.5;
rarity*=5;
}else if(rnd3<93){
name+="of the Queen ";
value*=4;
rarity*=6;
}else if(rnd3<99){
name+="of the King ";
value*=5;
rarity*=8;
}else if(rnd3<100){
name+="of the Sun ";
value*=15;
rarity*=15;
}


if(rnd3<100){
if(rnd4<1){
name+="God";
value*=100;
rarity*=100;
}
else if(rnd4<10){
name+="Hero";
value*=25;
rarity*=25;
}
else if(rnd4<100){
name+="Master";
value*=25;
rarity*=25;
}else if(rnd4<200){
name+="Teacher";
value*=10;
rarity*=10;
}
}
value=Math.ceil(value)
rarity=Math.ceil(rarity)


if(heirlooms[1]>0)
{
craft["diamond"]+=heirlooms[1];
}

heirlooms[0]=name;
heirlooms[1]=value;
heirlooms[2]=rarity;
heirlooms[3]=0;

drawheirlooms();
}



function getRarityColor(x){


if(x<=3){
return "white";
}
else if(x<=20){
return "#1eff00";
}
else if(x<=75){
return "#0070dd";
}else if(x<=150){
return "#a335ee";
}else if(x<=250){
return "#ff8000";
}
else
{
return "red ";	
}



}


function drawheirlooms(){
if(heirlooms[1]>0){
$(".heirloomslog").html("<div style='background-color:#272822;font-weight:700;padding:5px; color:"+getRarityColor(heirlooms[2])+"' >"+heirlooms[0]+"</div> Value: "+heirlooms[1]+" Rarity: "+heirlooms[2])
$("#sellheirloombutton").text("Sell ("+heirlooms[1]+" diamonds)")
}
else
{
	$(".heirloomslog").html(" ");
	$("#sellheirloombutton").text("Sell")
}
if(heirlooms[5]>0){
$(".heirloomslog2").html("<div style='background-color:#272822;font-weight:700;padding:5px; color:"+getRarityColor(heirlooms[6])+"' >"+heirlooms[4]+"</div> Value: "+heirlooms[5]+" Rarity: "+heirlooms[6])
}
else
{
$(".heirloomslog2").html(" ")
}

}


function swapheirlooms(){

swap1=heirlooms[0]
swap2=heirlooms[1]
swap3=heirlooms[2]
swap4=heirlooms[3]

heirlooms[0]=heirlooms[4]
heirlooms[1]=heirlooms[5]
heirlooms[2]=heirlooms[6]
heirlooms[3]=heirlooms[7]

heirlooms[4]=swap1
heirlooms[5]=swap2
heirlooms[6]=swap3
heirlooms[7]=swap4

drawheirlooms();
}

function sellheirloom(){


craft["diamond"]+=heirlooms[1];
heirlooms[0]=0;
heirlooms[1]=0;
heirlooms[2]=0;
heirlooms[3]=0;

drawheirlooms();
}