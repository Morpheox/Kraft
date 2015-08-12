
var traderatio=new Array()


traderatio["wood"]=new Array()
traderatio["mineral"]=new Array()
traderatio["food"]=new Array()
traderatio["iron"]=new Array()
traderatio["steel"]=new Array()

traderatio["wood"]["mineral"]=0.7;
traderatio["wood"]["food"]=0.4;
traderatio["wood"]["iron"]=0.001;
traderatio["wood"]["coal"]=0.0003;
traderatio["wood"]["steel"]=0.0001;

traderatio["mineral"]["wood"]=0.7;
traderatio["mineral"]["food"]=0.45;
traderatio["mineral"]["iron"]=0.0012;
traderatio["mineral"]["coal"]=0.00034;
traderatio["mineral"]["steel"]=0.00015;


traderatio["food"]["wood"]=1;
traderatio["food"]["mineral"]=0.9;
traderatio["food"]["iron"]=0.0015;
traderatio["food"]["coal"]=0.00045;
traderatio["food"]["steel"]=0.00018;


traderatio["iron"]["wood"]=100;
traderatio["iron"]["mineral"]=80;
traderatio["iron"]["food"]=50;
traderatio["iron"]["coal"]=0.1;
traderatio["iron"]["steel"]=0.05;


traderatio["steel"]["wood"]=1000;
traderatio["steel"]["mineral"]=880;
traderatio["steel"]["food"]=600;
traderatio["steel"]["iron"]=4;
traderatio["steel"]["coal"]=1.5;

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

$(".docklog").html("The fleet its back!<br> You recieve "+trademission["get"]+" "+trademission["resourceget"]);
$(".tradego").show()

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
