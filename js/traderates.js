
var traderatio=new Array()


traderatio["wood"]=new Array()
traderatio["mineral"]=new Array()
traderatio["food"]=new Array()
traderatio["copper"]=new Array()
traderatio["iron"]=new Array()
traderatio["steel"]=new Array()
traderatio["sand"]=new Array()
traderatio["chemicals"]=new Array()
traderatio["tin"]=new Array()
traderatio["coal"]=new Array()

traderatio["wood"]["mineral"]=0.8;
traderatio["wood"]["food"]=0.5;
traderatio["wood"]["iron"]=0.0016;
traderatio["wood"]["coal"]=0.001;


traderatio["mineral"]["wood"]=0.8;
traderatio["mineral"]["food"]=0.6;
traderatio["mineral"]["iron"]=0.002;
traderatio["mineral"]["steel"]=0.0003;
traderatio["mineral"]["copper"]=0.003;


traderatio["food"]["mineral"]=1;
traderatio["food"]["iron"]=0.0022;
traderatio["food"]["coal"]=0.0015;
traderatio["food"]["steel"]=0.00045;
traderatio["food"]["gold"]=0.0008;


traderatio["copper"]["wood"]=80;
traderatio["copper"]["mineral"]=70;
traderatio["copper"]["food"]=50;
traderatio["copper"]["iron"]=0.6;
traderatio["copper"]["coal"]=0.25;
traderatio["copper"]["steel"]=0.06;
traderatio["copper"]["gold"]=0.05;
traderatio["copper"]["tin"]=0.35;

traderatio["iron"]["wood"]=120;
traderatio["iron"]["mineral"]=100;
traderatio["iron"]["food"]=80;
traderatio["iron"]["coal"]=0.4;
traderatio["iron"]["steel"]=0.1;

traderatio["tin"]["mineral"]=175;
traderatio["tin"]["food"]=100;
traderatio["tin"]["coal"]=0.7;
traderatio["tin"]["iron"]=1.3;

traderatio["coal"]["mineral"]=200;
traderatio["coal"]["food"]=150;
traderatio["coal"]["tin"]=1.1;
traderatio["coal"]["iron"]=1;
traderatio["coal"]["gold"]=0.1;

traderatio["steel"]["wood"]=1200;
traderatio["steel"]["mineral"]=1000;
traderatio["steel"]["food"]=800;
traderatio["steel"]["iron"]=5;
traderatio["steel"]["coal"]=1.7;
traderatio["steel"]["tin"]=2.5;

traderatio["sand"]["wood"]=8.5;
traderatio["sand"]["food"]=6.5;
traderatio["sand"]["iron"]=0.02;
traderatio["sand"]["copper"]=0.04;
traderatio["sand"]["tin"]=0.01;

traderatio["chemicals"]["wood"]=1800;
traderatio["chemicals"]["mineral"]=1500;
traderatio["chemicals"]["food"]=1200;
traderatio["chemicals"]["iron"]=10;
traderatio["chemicals"]["coal"]=4;
traderatio["chemicals"]["steel"]=2.5;

var tradetrain=new Array()

tradetrain["wood"]=500;
tradetrain["mineral"]=400;
tradetrain["food"]=300;
tradetrain["copper"]=3;
tradetrain["iron"]=2;
tradetrain["coal"]=1;
tradetrain["tin"]=1;
tradetrain["steel"]=0.25;


function refreshselect(){
	$(".selgive").html("")
		for(gives in traderatio){
		if(items[gives]>0)
		{
   		    $(".selgive").append("<option value='"+gives+"'>"+gives+"</option>")
		}
   	}
}
function refreshselecttrain(){
	$(".tradetrainselect").html("")
	 $(".tradetrainselect").append("<option value='nothing'>Stop trading</option>")
		for(gets in tradetrain){
   		    $(".tradetrainselect").append("<option value='"+gets+"'>"+gets+"</option>")
   	}
}
function refreshtrain(){
if($(".tradetrainselect").val()!="nothing")
{
trademission["trainbuy"]=$(".tradetrainselect").val()
$(".tradetrainlog").html("Trading "+tradetrain[trademission["trainbuy"]]+" "+trademission["trainbuy"]+" per coin.")
}
else
{
trademission["trainbuy"]=$(".tradetrainselect").val()
$(".tradetrainlog").html("Trading stopped")	
}
}
function refreshtrade(){
		amount=$(".tradeamount").val()
		amountget=amount*traderatio[$(".selgive").val()][$(".selget").val()]
		var cost=0;
		cost+=people["galley"]*1
		cost+=people["galleon"]*10
		cost+=people["caravel"]*3
		var crew=0;
		crew+=people["galley"]*2
		crew+=people["galleon"]*5
		crew+=people["caravel"]*3
		$(".ratiotrade").html(traderatio[$(".selgive").val()][$(".selget").val()])
		$(".traderecieve").html("You get "+intToString(amountget)+" "+$(".selget").val()+"<br><br>Supplies: "+cost+" Crew: "+crew)

}


function maxtrade(){

	var maxresources=0;


	maxresources+=people["galley"]*5000*(bonus["shipcargo"]+1)
	maxresources+=people["galleon"]*25000*(bonus["shipcargo"]+1)
	maxresources+=people["caravel"]*10000*(bonus["shipcargo"]+1)

	resources=items[$(".selgive").val()]

	if (resources>maxresources){
		resources=maxresources
	}

	$(".tradeamount").val((resources-0.001).toFixed(2))
	refreshtrade();

}

var trademission=new Array()


trademission["get"]=0;
trademission["resourceget"]=0;
trademission["time"]=0;
trademission["trainbuy"]="nothing";


var tickinterval;
function tradeship(){


	var maxresources=0;

	maxresources+=people["galley"]*5000*(bonus["shipcargo"]+1)
	maxresources+=people["galleon"]*25000*(bonus["shipcargo"]+1)
	maxresources+=people["caravel"]*10000*(bonus["shipcargo"]+1)

	resources=items[$(".selgive").val()]
	resourcestrade=$(".tradeamount").val()

	amountget=resourcestrade*traderatio[$(".selgive").val()][$(".selget").val()]

	if($(".selget").val()=="nothing"){
		$(".docklog").html("No resource selected.")
		return;

	}
	if(resourcestrade==0){
		$(".docklog").html("Specify an amount.")
		return;

	}
	if(resourcestrade<0){
		$(".docklog").html("You cant send negative amounts, that's madness.")
		return;

	}
	if(isNaN($(".tradeamount").val()))
	{
		$(".docklog").html("Incorrect trade amount.")
		return;

	}


		
	if (resourcestrade>resources){
		$(".docklog").html("Not enough resources for this trade.")
		return;
	}


	if (resourcestrade>maxresources || amountget>maxresources){
		$(".docklog").html("Not enough cargo capacity for this trade route.")
		return;
	}

	var cost=0;
	cost+=people["galley"]*1
	cost+=people["galleon"]*10
	cost+=people["caravel"]*3
	if (craft["supplies"]<cost){
		$(".docklog").html("Not enough supplies for the mission.")
		return;
	}

	var crew=0;
	crew+=people["galley"]*2
	crew+=people["galleon"]*5
	crew+=people["caravel"]*3

	if(people["sailor"]<crew){
		$(".docklog").html("Not enough  crew to support the fleet.")
		return;
	}

	craft["supplies"]-=cost;

		trademission["time"]=Math.ceil((300-bonus["shipspeed"])/((people["caravel"]*0.05)+1));
		trademission["get"]=amountget;
		trademission["resourceget"]=$(".selget").val();

		items[$(".selgive").val()]-=resourcestrade

		tickinterval = setInterval(function(){ ticktrade()}, 1000);

		$(".docklog").html("Trade Mission<br>Time remaining: "+totime(trademission["time"]));
		$(".tradego").hide()

	}



function ticktrade(){

trademission["time"]--
$(".docklog").html("Trade Mission<br>Time remaining: "+totime(trademission["time"]));


if(trademission["time"]<1){

items[trademission["resourceget"]]+=trademission["get"];

clearInterval(tickinterval);

var docklog="The fleet is back!<br> You recieve "+intToString(trademission["get"])+" "+trademission["resourceget"]+"<br> "

$(".tradego").show()
if(Math.random()>0.90){
docklog+=("You also get 1 lock<br>");
craft["lock"]++

}
if(technologies["culturaltrade"]==1 && Math.random()>0.70){
var gainings=0;
gainings+=people["galley"]*15
gainings+=people["galleon"]*50
gainings+=people["caravel"]*20

gainings=Math.random()*gainings
docklog+=("While you were there, you also learnt some things about their culture, +"+intToString(gainings)+" knowledge<br>");
items["knowledge"]+=gainings;

}
$(".docklog").html(docklog);
trademission["get"]=0;
trademission["resourceget"]=0;
trademission["time"]=0;

}




}






$(document).ready(function(){

	$(".selgive").on("change",function(){

		$(".selget").html("")

		for(key in traderatio[$(this).val()])
		{
			$(".selget").append("<option value='"+key+"'>"+key+"</option>")
		}
		refreshtrade()
	})

	$(".tradetrainselect").on("change",function(){

		refreshtrain();

	})

	$(".selget").on("change",function(){
		refreshtrade()
	});

	$(".tradeamount").on("change",function(){
		refreshtrade()
	});
	$(".tradeamount").keydown("change",function(){
		refreshtrade()
	});
});
