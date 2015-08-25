trademission["merchanttime"]=0;
trademission["merchantcraft"]="";
trademission["marchantratio"]=0;
trademission["merchantnumber"]=0;
trademission["done"]=0;

var mratio = new Array();

mratio["spear"]=1
mratio["sword"]=2
mratio["block"]=0.5
mratio["structure"]=3
mratio["bronze"]=5
mratio["supplies"]=2
mratio["frame"]=500
mratio["token"]=1
mratio["glass"]=50
mratio["plank"]=10
mratio["brick"]=20

function newDeal(){
trademission["done"]=0;
trademission["merchanttime"]=600
trademission["merchantcraft"]=randomKey(mratio)
trademission["marchantratio"]=(Math.random()*mratio[trademission["merchantcraft"]])+(mratio[trademission["merchantcraft"]]/2)
trademission["merchantnumber"]=(Math.random()*maximums["gold"]*10)/mratio[trademission["merchantcraft"]]

$(".deallog").html("A merchant arrived at your market<br><br>I Offer you this fine "+intToString(trademission["merchantnumber"])+" "+trademission["merchantcraft"]+"<br>For only "+intToString(trademission["merchantnumber"]*trademission["marchantratio"])+" coins.")

$(".btndeal").show()
}

function tickdeal(){

trademission["merchanttime"]--
$(".dealtime").html("A new merchant arrives in "+totime(trademission["merchanttime"]))

if(trademission["merchanttime"]<1){
newDeal();
}

}

function fillDeal(){
if(trademission["done"]==0)
{
$(".deallog").html("A merchant arrived at your market<br><br>I Offer you this fine "+intToString(trademission["merchantnumber"])+" "+trademission["merchantcraft"]+"<br>For only "+intToString(trademission["merchantnumber"]*trademission["marchantratio"])+" coins.")
$(".btndeal").show()
}
else
{
$(".deallog").html("Wait for another merchant to arrive.");
$(".btndeal").hide()
}

}

function deal(){


coinscost=(trademission["merchantnumber"]*trademission["marchantratio"])

if(craft["coin"]>=coinscost){
craft["coin"]-=coinscost
craft[trademission["merchantcraft"]]+=trademission["merchantnumber"]

if(Math.random()>0.5)
{
$(".deallog").html("Thanks for the buy, we will see again.");
}
else if(Math.random()>0.5)
{
$(".deallog").html("You will enjoy my wares, i promise.");
}
else 
{
$(".deallog").html("I leave now before you change your mind.");
}
trademission["done"]=1;
$(".btndeal").hide()
}





}