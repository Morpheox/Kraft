
var traderatio=new Array()


traderatio["wood"]=new Array()
traderatio["mineral"]=new Array()
traderatio["food"]=new Array()
traderatio["copper"]=new Array()
traderatio["iron"]=new Array()
traderatio["steel"]=new Array()

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


traderatio["iron"]["wood"]=120;
traderatio["iron"]["mineral"]=100;
traderatio["iron"]["food"]=80;
traderatio["iron"]["coal"]=0.4;
traderatio["iron"]["steel"]=0.1;


traderatio["steel"]["wood"]=1200;
traderatio["steel"]["mineral"]=1000;
traderatio["steel"]["food"]=800;
traderatio["steel"]["iron"]=5;
traderatio["steel"]["coal"]=1.7;
traderatio["steel"]["tin"]=2.5;

function refreshtrade(){
		amount=$(".tradeamount").val()
		amountget=amount*traderatio[$(".selgive").val()][$(".selget").val()]
		var cost=0;
		cost+=people["galley"]*1
		var crew=0;
		crew+=people["galley"]*2
		$(".ratiotrade").html(traderatio[$(".selgive").val()][$(".selget").val()])
		$(".traderecieve").html("You get "+intToString(amountget)+" "+$(".selget").val()+"<br><br>Supplies: "+cost+" Crew: "+crew)

}


function maxtrade(){

	var maxresources=0;

	maxresources+=people["galley"]*5000

	resources=items[$(".selgive").val()]

	if (resources>maxresources){
		resources=maxresources
	}

	$(".tradeamount").val(resources.toFixed(2))
	refreshtrade();

}

var trademission=new Array()


trademission["get"]=0;
trademission["resourceget"]=0;
trademission["time"]=0;



var tickinterval;
function tradeship(){


	var maxresources=0;

	maxresources+=people["galley"]*5000

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
	if (craft["supplies"]<cost){
		$(".docklog").html("Not enough supplies for the mission.")
		return;
	}

	var crew=0;
	crew+=people["galley"]*2
	if(people["sailor"]<crew){
		$(".docklog").html("Not enought crew to support the fleet.")
		return;
	}

	craft["supplies"]-=cost;

		trademission["time"]=300;
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

$(".docklog").html("The fleet its back!<br> You recieve "+intToString(trademission["get"])+" "+trademission["resourceget"]);
$(".tradego").show()
if(Math.random()>0.90){
$(".docklog").html("The fleet its back!<br> You recieve "+intToString(trademission["get"])+" "+trademission["resourceget"]+"<br> You also get 1 lock");
craft["lock"]++

}
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
