function bet(b){

    var amountbet=parseFloat($(".betamount").val()).toFixed(2);

    maximbet=maximums["bet"]
    if(technologies["luck"]==1){
         maximbet=maximums["bet"]*1000;
    }
    if(amountbet>0 && maximbet>=amountbet && items["gold"]>=amountbet){
    items["gold"]-=amountbet;
    var rnd=Math.round(Math.random()*999)
    
    $(".betresult").html(rnd)
    if(b=="high" && rnd>=500){
        amountwon=amountbet*2;
        $(".casinolog").html("You win! \n You won "+amountwon+" gold");
        items["gold"]+=amountwon;
    } 
    else if(b=="low" && rnd<500)
    {
        amountwon=amountbet*2;
        $(".casinolog").html("You win! \n You won "+amountwon+" gold");
        items["gold"]+=amountwon;
        
    }
    else
    {
        $(".casinolog").html("Sorry you lost, try again!");
    }
}else
{
    $(".casinolog").html("Maximum bet is "+maximbet+" gold")
}
    
    
    
}
var arrprice=new Array();
for(var i=0;i<9;i++){
    arrprice[i]=new Array();
}
var remaining=0;
var coinsplayed=0;
function playgame2(b){

coinsplayed=b;

if(craft["coin"]>=coinsplayed){
craft["coin"]-=coinsplayed;
$(".tablero").show();
stringtablero="<table class='tabgame'>"
for(var i=0;i<9;i++){
stringtablero+="<tr>";

for(var j=0;j<9;j++){
    if(Math.random()>0.80)
    {
    arrprice[i][j]=Math.random()
    }
    else if(Math.random()>0.15)
    {
    arrprice[i][j]="X" 
    }
    else if(Math.random()>0.35)
    {
    if(Math.random()>0.5)
    {
    arrprice[i][j]="GG"
    }
    else if(Math.random()>0.5)
    {
    arrprice[i][j]="bomb"
    }
    else
    {
    arrprice[i][j]="lines"
    }
    }
    else if(Math.random()>0.35)
    {
    arrprice[i][j]="GGG"
    }
    else
    {
    arrprice[i][j]="L"   
    }

stringtablero+="<td data-x='"+i+"' data-y='"+j+"' class='tablerotd'><button onclick='openbox("+i+","+j+",0)' >O</button></td>"
}

stringtablero+="</tr>";
}

stringtablero+="</table>";
opened=0;
remaining=5;
$(".tablero").html(stringtablero)
$(".playgame2").html(remaining)

}
}
var totalwon=0;
var locks=0;
var opened=0;
function openbox(x,y,z){

if(x<0 || y<0 || x>8 || y>8){
    return
}
if(arrprice[x][y]=="opened"){
    return
}
if(!isNaN(arrprice[x][y])){

if(coinsplayed<100){
$("td[data-x="+x+"][data-y="+y+"]").html(intToString(arrprice[x][y]*coinsplayed))
}
else
{
$("td[data-x="+x+"][data-y="+y+"]").html(Math.round(arrprice[x][y]*coinsplayed))
}
totalwon+=arrprice[x][y]*coinsplayed;
remaining--

}
else if(arrprice[x][y]=="X")
{
$("td[data-x="+x+"][data-y="+y+"]").html("X")
remaining--
}
else if(arrprice[x][y]=="GG")
{
$("td[data-x="+x+"][data-y="+y+"]").html("+1")
remaining++  
}
else if(arrprice[x][y]=="GGG")
{
$("td[data-x="+x+"][data-y="+y+"]").html("+5")
remaining+=5
}
else if(arrprice[x][y]=="L")
{
$("td[data-x="+x+"][data-y="+y+"]").html("<span class='lockrew'>L</span>")
locks++;
}
else if(arrprice[x][y]=="bomb")
{

arrprice[x][y]="opened"
$("td[data-x="+x+"][data-y="+y+"]").html("<span class='lockrew'>B</span>")
openbox(x+1,y+1,1)
openbox(x,y+1,1)
openbox(x+1,y,1)
openbox(x+1,y-1,1)
openbox(x-1,y+1,1)
openbox(x-1,y-1,1)
openbox(x-1,y,1)
openbox(x,y-1,1)
remaining--
}
else if(arrprice[x][y]=="lines")
{

$("td[data-x="+x+"][data-y="+y+"]").html("<span class='lockrew'>+</span>")
arrprice[x][y]="opened"
openbox(x,0,1)
openbox(x,1,1)
openbox(x,2,1)
openbox(x,3,1)
openbox(x,4,1)
openbox(x,5,1)
openbox(x,6,1)
openbox(x,7,1)
openbox(x,8,1)
openbox(0,y,1)
openbox(1,y,1)
openbox(2,y,1)
openbox(3,y,1)
openbox(4,y,1)
openbox(5,y,1)
openbox(6,y,1)
openbox(7,y,1)
openbox(8,y,1)
remaining--
}

if(z==1 && arrprice[x][y]!="opened" && arrprice[x][y]!="GG" && arrprice[x][y]!="GGG"){
remaining++
}

arrprice[x][y]="opened"
opened++
if(opened>=81){
    remaining=0;
    craft["diamond"]+=1;
    diamonize();
}
$(".totalwon").html("Total Won: "+intToString(totalwon));
$(".playgame2").html(remaining)
if(remaining<1){
if(totalwon>0){
    $(".tablero").html("<div class='lose'>You Won "+intToString(totalwon)+" tokens</div>")
    craft["token"]+=totalwon;
    totalwon=0;
}
else
{
    $(".tablero").html("<div class='lose'>Better luck next time!</div>")

}
    craft["lock"]+=locks*coinsplayed*0.2;
    locks=0;
    coinsplayed=0;
    $(".totalwon").html("")
    $(".playgame2").html("Play")
}

}

var reel=new Array();

reel[0]=new Array();
reel[1]=new Array();
reel[2]=new Array();
reel[3]=new Array();


reel[0][0]="J";
reel[0][1]="J";
reel[0][2]="J";
reel[0][3]="J";
reel[0][4]="J";
reel[0][5]="J";
reel[0][6]="Q";
reel[0][7]="Q";
reel[0][8]="Q";
reel[0][9]="Q";
reel[0][10]="Q";
reel[0][11]="K";
reel[0][12]="K";
reel[0][13]="K";
reel[0][14]="K";
reel[0][15]="A";
reel[0][16]="A";
reel[0][17]="A";
reel[0][18]="7";
reel[0][19]="7";
reel[0][20]="*";




slott=new Array();
slott[0]=new Array();
slott[1]=new Array();
slott[2]=new Array();

slott[0][0]="J"
slott[0][1]="J"
slott[0][2]="J"
slott[1][0]="J"
slott[1][1]="J"
slott[1][2]="J"
slott[2][0]="J"
slott[2][1]="J"
slott[2][2]="J"

colorcell=new Array();

colorcell["J"]="#77DD77";
colorcell["Q"]="#9932cc";
colorcell["K"]="#ffd700";
colorcell["A"]="#FF6961";
colorcell["7"]="#f00";
colorcell["*"]="#4169e1";

function drawslot(){


for(i=0;i<3;i++){
    for(j=0;j<3;j++){
        $(".slot"+j+i).html(slott[i][j]).css("background",colorcell[slott[i][j]]);

        
    }
}



}
var time=new Array()
var timem=new Array()
var slotbet=1;
var sloton=false;

function slotstart(bett){
    if(sloton==false){
        if(craft["coin"]>=bett){
            craft["coin"]-=bett;
            slotbet=bett;
        sloton=true;
time[0]=0
time[1]=0
time[2]=0
timem[0]=10;
timem[1]=30;
timem[2]=50;

slot = setInterval(function(){ 

for(i=0;i<3;i++){
    time[i]++

    if(time[i]<timem[i]){
    for(j=0;j<3;j++){
        slott[i][j]=reel[0][Math.round(Math.random()*20)]
    }
    }
}


drawslot()

if(time[0]>=timem[0] && time[1]>=timem[1] && time[2]>=timem[2]){
    clearInterval(slot);
    sloton=false;
    checkprize()
    
}

 }, 50);


}

}




}

function checkprize(){

var slotline="x"+$(".slot00").html()+$(".slot01").html()+$(".slot02").html();

var prize=0;
switch(slotline){

    case "xJJJ": prize=2;break;
    case "xQQQ": prize=3;break;
    case "xKKK": prize=5;break;
    case "xAAA": prize=10;break;
    case "x777": prize=25;break;
    case "x***": prize=100;craft["diamond"]++;break;

}

var slotline="x"+$(".slot10").html()+$(".slot11").html()+$(".slot12").html();

console.log(slotline);
switch(slotline){

    case "xJJJ": prize+=2;break;
    case "xQQQ": prize+=3;break;
    case "xKKK": prize+=5;break;
    case "xAAA": prize+=10;break;
    case "x777": prize+=25;break;
    case "x***": prize+=100;craft["diamond"]++;;break;

}

var slotline="x"+$(".slot20").html()+$(".slot21").html()+$(".slot22").html();

switch(slotline){

    case "xJJJ": prize+=2;break;
    case "xQQQ": prize+=3;break;
    case "xKKK": prize+=5;break;
    case "xAAA": prize+=10;break;
    case "x777": prize+=25;break;
    case "x***": prize+=100;craft["diamond"]++;break;

}

var slotline="x"+$(".slot20").html()+$(".slot11").html()+$(".slot02").html();

switch(slotline){

    case "xJJJ": prize+=2;break;
    case "xQQQ": prize+=3;break;
    case "xKKK": prize+=5;break;
    case "xAAA": prize+=10;break;
    case "x777": prize+=25;break;
    case "x***": prize+=100;craft["diamond"]++;break;

}

var slotline="x"+$(".slot00").html()+$(".slot11").html()+$(".slot22").html();

switch(slotline){

    case "xJJJ": prize+=2;break;
    case "xQQQ": prize+=3;break;
    case "xKKK": prize+=5;break;
    case "xAAA": prize+=10;break;
    case "x777": prize+=25;break;
    case "x***": prize+=100;craft["diamond"]++;break;

}

craft["coin"]+=prize*slotbet;
if(prize>0){
    $(".slotlog").html("Congratulations! You won "+(prize*slotbet)+" coins.")
}
else
{
     $(".slotlog").html("Try again!")
}
}