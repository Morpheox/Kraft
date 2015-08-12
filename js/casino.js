function bet(b){

    var amountbet=parseFloat($(".betamount").val()).toFixed(2);
    if(amountbet>0 && maximums["bet"]>=amountbet && items["gold"]>=amountbet){
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
    $(".casinolog").html("Maximum bet is "+maximums["bet"]+" gold")
}
    
    
    
}
var arrprice=new Array();
for(var i=0;i<9;i++){
    arrprice[i]=new Array();
}
var remaining=0;
function playgame2(){



if(craft["coin"]>=5){
craft["coin"]-=5;
$(".tablero").show();
stringtablero="<table class='tabgame'>"
for(var i=0;i<9;i++){
stringtablero+="<tr>";

for(var j=0;j<9;j++){
    if(Math.random()>0.30)
    {
    arrprice[i][j]=Math.random()*2

    }
    else if(Math.random()>0.50)
    {
    arrprice[i][j]="X" 
    }
    else
    {
    arrprice[i][j]="GG"
    } 

stringtablero+="<td data-x='"+i+"' data-y='"+j+"' class='tablerotd'><button onclick='openbox("+i+","+j+")' >O</button></td>"
}

stringtablero+="</tr>";
}

stringtablero+="</table>";

remaining=5;
$(".tablero").html(stringtablero)
$(".playgame2").html(remaining)

}
}
var totalwon=0;

function openbox(x,y){


if(arrprice[x][y]!="X" && arrprice[x][y]!="GG"){
$("td[data-x="+x+"][data-y="+y+"]").html(intToString(arrprice[x][y]))

totalwon+=arrprice[x][y];
remaining--

}
else if(arrprice[x][y]!="GG")
{
$("td[data-x="+x+"][data-y="+y+"]").html("X")
remaining--
}
else
{
$("td[data-x="+x+"][data-y="+y+"]").html("+1")
remaining++  
}

$(".totalwon").html("Total Won: "+intToString(totalwon));
$(".playgame2").html(remaining)
if(remaining<1){

    $(".tablero").html("<div class='lose'>You Won "+intToString(totalwon)+" tokens</div>")
    craft["token"]+=totalwon;
    totalwon=0;
    $(".totalwon").html("")
    $(".playgame2").html("Play")
}

}