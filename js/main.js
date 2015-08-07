
var items=new Array()


items["wood"]=10;
items["mineral"]=5;
items["water"]=0;
items["food"]=0;
items["copper"]=0;
items["gold"]=0;
items["iron"]=0;
items["coal"]=0;
items["steel"]=0;
items["morale"]=0;

var bonus =new Array()
for(key in items){
bonus[key]=0;
}
bonus["trade"]=0;

var buildings=new Array();

buildings["lumbermill"]=0;
buildings["mine"]=0;
buildings["warehouse"]=0;
buildings["fountain"]=0;
buildings["pasture"]=0;
buildings["house"]=0;
buildings["library"]=0;
buildings["banner"]=0;
buildings["foundry"]=0;
buildings["barn"]=0;
buildings["casino"]=0;
buildings["market"]=0;
buildings["kiln"]=0;

var buildstatus =new Array()
for(key in buildings){
buildstatus[key]=1;
}

var maximums=new Array()

maximums["population"]=0;
maximums["bet"]=0;

for(key in items){
maximums[key]=0;
}
maximums["wood"]=50
maximums["mineral"]=20

var population=0;




var technologies=new Array()

technologies["coppertools"]=0
technologies["pickaxe"]=0
technologies["spear"]=0
technologies["exploration"]=0
technologies["ironfoundry"]=0
technologies["metallurgy"]=0
technologies["sword"]=0
technologies["storage"]=0
technologies["currency"]=0
technologies["coin"]=0
technologies["exchange"]=0
technologies["charcoal"]=0

var people=new Array();
people["woodcutter"]=0
people["smelter"]=0
people["farmer"]=0
people["miner"]=0
people["pikeman"]=0
people["swordman"]=0

var craft=new Array();

craft["pickaxe"]=0
craft["spear"]=0
craft["sword"]=0
craft["block"]=0
craft["coin"]=0

var unlocked=new Array();




function toggle(t){

if (buildstatus[t]==0){
	buildstatus[t]=1;
	$(".build_"+t).removeClass("off")
}
else
{
	buildstatus[t]=0;
	$(".build_"+t).addClass("off")

}



}
function expedition(){
power=0
power+=people["pikeman"]*5
power+=people["swordman"]*10

foodcost=power*2
watercost=power
moralecost=power/5

if(power>0 && items["food"]>=foodcost && items["water"]>=watercost && items["morale"]>=moralecost){


items["food"]-=foodcost;
items["water"]-=watercost;
items["morale"]-=moralecost;






if(Math.random()>0.1){


reward="The expedition found:<br>";


if(Math.random()>0.40){
rnd=(Math.random()*power)*25;
reward+=parseFloat(rnd).toFixed(2) + " wood<br>";
items["wood"]+=rnd;
}
if(Math.random()>0.60){
rnd=(Math.random()*power)*15;
reward+=parseFloat(rnd).toFixed(2) + " minerals<br>";
items["mineral"]+=rnd;
}
if(Math.random()>0.85){
rnd=(Math.random()*power)*5;
reward+=parseFloat(rnd).toFixed(2) + " food<br>";
items["food"]+=rnd;
}
if(Math.random()>0.95){
rnd=(Math.random()*power)/5;
reward+=parseFloat(rnd).toFixed(2) + " copper<br>";
items["copper"]+=rnd;
}
if(Math.random()>0.975){
rnd=(Math.random()*power)/8;
reward+=parseFloat(rnd).toFixed(2) + " iron<br>";
items["iron"]+=rnd;
}
if(Math.random()>0.99){
rnd=(Math.random()*power)/20;
reward+=parseFloat(rnd).toFixed(2) + " gold<br>";
items["gold"]+=rnd;
}
if(Math.random()>0.95 && technologies["spear"]==1){
rnd=Math.round((Math.random()*power)/50)+1;
reward+=parseFloat(rnd).toFixed(2) + " spear<br>";
craft["spear"]+=rnd;
}
if(Math.random()>0.99 && technologies["sword"]==1){
rnd=Math.round((Math.random()*power)/50)+1;
reward+=parseFloat(rnd).toFixed(2) + " sword<br>";
craft["sword"]+=rnd;
}
if(Math.random()>0.995 && technologies["storage"]==1){
rnd=Math.round((Math.random()*power)/200)+1;
reward+=parseFloat(rnd).toFixed(2) + " block<br>";
craft["block"]+=rnd;
}
if(Math.random()>0.999 && technologies["coin"]==1){
rnd=Math.round((Math.random()*power)/1000)+1;
reward+=parseFloat(rnd).toFixed(2) + " coin<br>";
craft["coin"]+=rnd;
}
if(reward!="The expedition found:<br>")
{
$(".expeditionresult").html(reward)
}
else
{

$(".expeditionresult").html("The expedition didn´t find anything useful.")
}


}
else
{
$(".expeditionresult").html("The expedition didn´t find anything useful.")
}




}
}
function crafting(b){

if (b=="pickaxe"){

woodcost=20;
coppercost=1;

if (items["copper"]>=coppercost && items["wood"]>=woodcost){

	items["copper"]-=coppercost;
	items["wood"]-=woodcost;
	craft["pickaxe"]++;

}

}
else if (b=="spear"){

woodcost=50;
coppercost=3;

if (items["copper"]>=coppercost && items["wood"]>=woodcost){

	items["copper"]-=coppercost;
	items["wood"]-=woodcost;
	craft["spear"]++;

}

}
else if (b=="sword"){

ironcost=10;

if (items["iron"]>=coppercost && items["iron"]>=ironcost){

	items["iron"]-=ironcost;
	craft["sword"]++;

}

}
else if (b=="block"){

woodcost=100;
mineralcost=200;

if (items["wood"]>=woodcost && items["mineral"]>=mineralcost){

	items["mineral"]-=mineralcost;
	items["wood"]-=woodcost;
	craft["block"]++;

}

}
else if (b=="coin"){

goldcost=5

if (items["gold"]>=goldcost){

	items["gold"]-=goldcost;

	craft["coin"]++;

}

}


}

function research(b){

if (b=="coppertools"){

coppercost=1;

if (items["copper"]>=coppercost && technologies["coppertools"]==0){
	items["copper"]-=coppercost;
	bonus["wood"]+=0.20;
	bonus["mineral"]+=0.20;
	technologies["coppertools"]++
}

}
else if (b=="pickaxe"){

woodcost=100;
coppercost=3;


if (items["wood"]>=woodcost && items["copper"]>=coppercost && technologies["pickaxe"]==0){
	items["copper"]-=coppercost;
	items["wood"]-=woodcost;
	technologies["pickaxe"]++
	$("#craftingpane").removeClass("invisible")
	$(".craft_pickaxe").show()
	$(".hire_miner").show()
        unlocked["#craftingpane"]=1;
        unlocked[".craft_pickaxe"]=1;
        unlocked[".hire_miner"]=1;
}


}
else if (b=="spear"){

woodcost=200;
coppercost=5;


if (items["wood"]>=woodcost && items["copper"]>=coppercost && technologies["spear"]==0){
	items["copper"]-=coppercost;
	items["wood"]-=woodcost;
	technologies["spear"]++
	$("#craftingpane").removeClass("invisible")
	$("#militarypane").removeClass("invisible")
	$(".craft_spear").show()
	$(".hire_pikeman").show()
        unlocked["#craftingpane"]=1;
        unlocked["#militarypane"]=1;
        unlocked[".craft_spear"]=1;
        unlocked[".hire_pikeman"]=1;
}


}
else if (b=="exploration"){

foodcost=100;

if (items["food"]>=foodcost && technologies["exploration"]==0){

	items["food"]-=foodcost;
	technologies["exploration"]++
	$(".expedition").show()
        unlocked[".expedition"]=1;

}

}
else if (b=="ironfoundry"){

woodcost=1000;
mineralcost=500;
foodcost=200;


if (items["wood"]>=woodcost  && items["mineral"]>=mineralcost  && items["food"]>=foodcost  && technologies["ironfoundry"]==0){

	items["wood"]-=woodcost;
	items["mineral"]-=mineralcost;
	items["food"]-=foodcost;

	technologies["ironfoundry"]++
	$(".build_foundry").show()
        unlocked[".build_foundry"]=1;
}

}
else if (b=="metallurgy"){

foodcost=200;
coppercost=10;
ironcost=5;


if (items["iron"]>=ironcost  && items["copper"]>=coppercost  && items["food"]>=foodcost  && technologies["metallurgy"]==0){

	items["iron"]-=ironcost;
	items["copper"]-=coppercost;
	items["food"]-=foodcost;

	bonus["iron"]+=0.10;
	bonus["copper"]+=0.10;

	technologies["metallurgy"]++

}

}
else if (b=="sword"){

foodcost=500
ironcost=10

if (items["food"]>=foodcost && items["iron"]>=ironcost && technologies["sword"]==0){

	items["food"]-=foodcost;
	items["iron"]-=ironcost;
	technologies["sword"]++
	$("#craftingpane").removeClass("invisible")
	$("#militarypane").removeClass("invisible")
	$(".craft_sword").show()
	$(".hire_swordman").show()
        unlocked["#craftingpane"]=1;
        unlocked["#militarypane"]=1;
        unlocked[".craft_sword"]=1;
        unlocked[".hire_swordman"]=1;
}

}
else if (b=="storage"){

woodcost=500
mineralcost=500
ironcost=20

if (items["iron"]>=ironcost  && items["mineral"]>=mineralcost  && items["wood"]>=woodcost  && technologies["storage"]==0){

	items["wood"]-=foodcost;
	items["mineral"]-=mineralcost;
	technologies["storage"]++

	$("#craftingpane").removeClass("invisible")
	$(".craft_block").show()
	$(".build_barn").show()
        unlocked["#craftingpane"]=1;
        unlocked[".craft_block"]=1;
        unlocked[".build_barn"]=1;
}

}
else if (b=="currency" && technologies["currency"]==0){

goldcost=2;

if (items["gold"]>=goldcost){

	items["gold"]-=goldcost;

	technologies["currency"]++


	$(".build_casino").show()
        unlocked[".build_casino"]=1;
}

}
else if (b=="coin" && technologies["coin"]==0){

ironcost=20;
goldcost=10;

if (items["gold"]>=goldcost && items["iron"]>=ironcost){

	items["gold"]-=goldcost;
	items["iron"]-=ironcost
	technologies["coin"]++

	$(".craft_coin").show()
    unlocked[".craft_coin"]=1;
}

}
else if (b=="exchange" && technologies["exchange"]==0){

foodcost=800
coincost=3

if (craft["coin"]>=coincost && items["food"]>=foodcost){

	craft["coin"]-=coincost;
	items["food"]-=foodcost
	technologies["exchange"]++

	$(".build_market").show()
    unlocked[".build_market"]=1;
}

}
else if (b=="charcoal" && technologies["charcoal"]==0){

woodcost=4000
mineralcost=2000

if (items["wood"]>=woodcost && items["mineral"]>=mineralcost){

	items["wood"]-=woodcost;
	items["mineral"]-=mineralcost
	technologies["exchange"]++

	$(".build_kiln").show()
    unlocked[".build_kiln"]=1;
}

}
}

function hire(b){
if (population<maximums["population"]){

if (b=="woodcutter"){

foodcost=50;

if (items["food"]>=foodcost){
	items["food"]-=foodcost;
	people["woodcutter"]+=1
	population++
	$(".fire_woodcutter").show()
        unlocked[".fire_woodcutter"]=1;
}

}
else if (b=="smelter"){

foodcost=50;

if (items["food"]>=foodcost){
	items["food"]-=foodcost;
	people["smelter"]+=1
	population++
	$(".fire_smelter").show()
        unlocked[".fire_smelter"]=1;
}

}
else if (b=="farmer"){

woodcost=50;

if (items["wood"]>=woodcost){
	items["wood"]-=woodcost;
	people["farmer"]+=1
	population++
	$(".fire_farmer").show()
        unlocked[".fire_farmer"]=1;
}

}
else if (b=="miner"){

foodcost=50;
pickaxecost=1;

if (items["food"]>=foodcost && craft["pickaxe"]>=pickaxecost){
	items["food"]-=foodcost;
	craft["pickaxe"]-=spearcost
	people["miner"]+=1
	population++
	$(".fire_miner").show()
        unlocked[".fire_miner"]=1;
}

}
else if (b=="pikeman"){

foodcost=50;
spearcost=1;

if (items["food"]>=foodcost && craft["spear"]>=spearcost){
	items["food"]-=foodcost;
	craft["spear"]-=spearcost
	people["pikeman"]+=1
	population++
	$(".fire_pikeman").show()
        unlocked[".fire_pikeman"]=1;
}

}

else if (b=="swordman"){

foodcost=150;
swordcost=1;

if (items["food"]>=foodcost && craft["sword"]>=swordcost){
	items["food"]-=foodcost;
	craft["sword"]-=swordcost
	people["swordman"]+=1
	population++
	$(".fire_swordman").show()
        unlocked[".fire_swordman"]=1;
}

}
}


}
function fire(b){


if (people[b]>0){

	people[b]-=1
	population--
	if (people[b]==0){
	$(".fire_"+b).hide()
        unlocked[".fire_"+b]=0;
	}
}
}
function build(b){
if (b=="lumbermill"){

woodcost= Math.pow(1.3,(buildings["lumbermill"]))*3

if (items["wood"]>=woodcost){
	items["wood"]-=woodcost;
	buildings["lumbermill"]+=1
	$(".build_mine").show()
        unlocked[".build_mine"]=1;
}

}
else if (b=="mine"){

woodcost= Math.pow(1.3,(buildings["mine"]))*2
mineralcost=Math.pow(1.3, (buildings["mine"]))*5

if (items["wood"]>=woodcost && items["mineral"]>=mineralcost){
	items["wood"]-=woodcost;
	items["mineral"]-=mineralcost
	buildings["mine"]+=1
	$(".build_warehouse").show()
        unlocked[".build_warehouse"]=1;


}

}
else if (b=="warehouse"){

woodcost= Math.pow(1.8,(buildings["warehouse"]))*20
mineralcost=Math.pow(1.8, (buildings["warehouse"]))*10

if (items["wood"]>=woodcost && items["mineral"]>=mineralcost){
	items["wood"]-=woodcost;
	items["mineral"]-=mineralcost

	maximums["wood"]+=200;
	maximums["mineral"]+=200;
	maximums["food"]+=100;
	maximums["copper"]+=5;
	maximums["gold"]+=1;
	maximums["iron"]+=5;
	maximums["coal"]+=5;
	maximums["steel"]+=3;

	buildings["warehouse"]+=1
	$(".build_fountain").show()
	$(".build_pasture").show()
        unlocked[".build_fountain"]=1;
        unlocked[".build_pasture"]=1;
}

}
else if (b=="fountain"){

mineralcost=Math.pow(1.4, (buildings["fountain"]))*6

if (items["mineral"]>=mineralcost){
	items["mineral"]-=mineralcost
	buildings["fountain"]+=1
	maximums["water"]+=5;
}

}
else if (b=="pasture"){

woodcost= Math.pow(1.4,(buildings["pasture"]))*10

if (items["wood"]>=woodcost){
	items["wood"]-=woodcost;
	buildings["pasture"]+=1
	$(".build_house").show()
	$(".toggle_pasture").show()
        unlocked[".build_house"]=1;
        unlocked[".toggle_pasture"]=1;
}

}
else if (b=="house"){

woodcost= Math.pow(1.9,(buildings["house"]))*20
mineralcost=Math.pow(1.9, (buildings["house"]))*50
foodcost=Math.pow(1.9, (buildings["house"]))*15
if (items["wood"]>=woodcost && items["mineral"]>=mineralcost && items["food"]>=foodcost ){
	items["wood"]-=woodcost;
	items["mineral"]-=mineralcost
	items["food"]-=foodcost
	buildings["house"]+=1
	maximums["population"]+=3;
	$(".build_library").show()
	$(".population").show()
	$(".hire_woodcutter").show()
	$(".hire_smelter").show()
	$(".hire_farmer").show()
	$("#jobspane").removeClass("invisible")
        unlocked[".build_library"]=1;
        unlocked[".population"]=1;
        unlocked[".hire_woodcutter"]=1;
        unlocked[".hire_smelter"]=1;
        unlocked[".hire_farmer"]=1;
        unlocked["#jobspane"]=1;
}

}
else if (b=="library"){

woodcost= Math.pow(2,(buildings["library"]))*300
mineralcost=Math.pow(2, (buildings["library"]))*100

if (items["wood"]>=woodcost && items["mineral"]>=mineralcost){
	items["wood"]-=woodcost;
	items["mineral"]-=mineralcost;
	buildings["library"]+=1;

	switch(buildings["library"]){
		case 1: $(".tech_coppertools").show();unlocked[".tech_coppertools"]=1;$(".tech_pickaxe").show();unlocked[".tech_pickaxe"]=1;$("#technologiespane").removeClass("invisible");unlocked["#technologiespane"]=1;break;
		case 2: $(".build_banner").show();unlocked[".build_banner"]=1;$(".tech_spear").show();unlocked[".tech_spear"]=1;$(".tech_exploration").show();unlocked[".tech_exploration"]=1;break;
		case 3: $(".tech_ironfoundry").show();unlocked[".tech_ironfoundry"]=1;$(".tech_metallurgy").show();unlocked[".tech_metallurgy"]=1;$(".tech_sword").show();unlocked[".tech_sword"]=1;$(".tech_storage").show();unlocked[".tech_storage"]=1;break;
		case 4: $(".tech_currency").show();unlocked[".tech_currency"]=1;$(".tech_exchange").show();unlocked[".tech_exchange"]=1;$(".tech_coin").show();unlocked[".tech_coin"]=1;break;
		case 5: $(".tech_charcoal").show();unlocked[".tech_charcoal"]=1;break;
	}
	
}

}
else if (b=="banner"){


woodcost= Math.pow(1.7,(buildings["banner"]))*100;
coppercost=Math.pow(1.7, (buildings["banner"]))*1;

if (items["copper"]>=coppercost && items["wood"]>=woodcost){
	items["wood"]-=woodcost;
	items["copper"]-=coppercost;
	buildings["banner"]+=1;
	maximums["morale"]+=1;

}

}
else if (b=="foundry"){


mineralcost= Math.pow(1.6,(buildings["foundry"]))*500;
coppercost=Math.pow(1.6, (buildings["foundry"]))*5

if (items["copper"]>=coppercost && items["mineral"]>=mineralcost){
	items["mineral"]-=mineralcost;
	items["copper"]-=coppercost;
	buildings["foundry"]+=1;
	$(".toggle_foundry").show()
        unlocked[".toggle_foundry"]=1
}

}
else if (b=="barn"){

blockcost= Math.pow(1.5,(buildings["barn"]))*5


if (craft["block"]>=blockcost){
	craft["block"]-=blockcost;

	maximums["wood"]+=500;
	maximums["mineral"]+=500;

	buildings["barn"]+=1


}
}
else if (b=="casino"){

blockcost= Math.pow(1.7,(buildings["casino"]))*3
goldcost= Math.pow(1.7,(buildings["casino"]))*1

if (craft["block"]>=blockcost && items["gold"]>=goldcost){
	craft["block"]-=blockcost;
	items["gold"]-=goldcost

	maximums["gold"]+=1;
	maximums["bet"]+=0.5;

	$("#casinopane").removeClass("invisible")
        unlocked["#casinopane"]=1
	buildings["casino"]+=1


}
}
else if (b=="market"){

woodcost= Math.pow(1.6,(buildings["market"]))*500
coincost= Math.pow(1.6,(buildings["market"]))*1

if (items["wood"]>=woodcost && craft["coin"]>=coincost){
	items["wood"]-=woodcost;
	craft["coin"]-=coincost

	bonus["trade"]+=0.05

	$("#marketpane").removeClass("invisible")
    unlocked["#marketpane"]=1
	buildings["market"]+=1


}
}
else if (b=="kiln"){

blockcost= Math.pow(1.6,(buildings["kiln"]))*15
mineralcost= Math.pow(1.6,(buildings["kiln"]))*2000

if (items["mineral"]>=mineralcost && craft["block"]>=blockcost){
	items["mineral"]-=mineralcost;
	craft["block"]-=blockcost;
    $(".toggle_kiln").show()
	unlocked[".toggle_kiln"]=1
	buildings["kiln"]+=1


}
}
}

function calculatecost(){


//Buildings
woodcost= Math.pow(1.3,(buildings["lumbermill"]))*3
$(".build_lumbermill").html("Lumbermill ("+buildings["lumbermill"]+")");
$(".build_lumbermill").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_lumbermill").attr('tooltip2', "Wood production: 0.20/s");

woodcost= Math.pow(1.3,(buildings["mine"]))*2
mineralcost=Math.pow(1.3, (buildings["mine"]))*5
$(".build_mine").html("Mine ("+buildings["mine"]+")");
$(".build_mine").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2) )
$(".build_mine").attr('tooltip2',"Minerals: "+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2) )
$(".build_mine").attr('tooltip3', "Mineral production: 0.20/s");

woodcost= Math.pow(1.8,(buildings["warehouse"]))*20
mineralcost=Math.pow(1.8, (buildings["warehouse"]))*10
$(".build_warehouse").html("Warehouse ("+buildings["warehouse"]+")");
$(".build_warehouse").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2) )
$(".build_warehouse").attr('tooltip2',"Minerals: "+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2) )
$(".build_warehouse").attr('tooltip3', "Increments storage space for basic materials");


mineralcost=Math.pow(1.4, (buildings["fountain"]))*6
$(".build_fountain").html("Fountain ("+buildings["fountain"]+")");
$(".build_fountain").attr('tooltip',"Minerals: "+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2) )
$(".build_fountain").attr('tooltip2', "Water production: 0.40/s");
$(".build_fountain").attr('tooltip3', "Water storage: 5");

woodcost= Math.pow(1.4,(buildings["pasture"]))*10
$(".build_pasture").html("Pasture ("+buildings["pasture"]+")");
$(".build_pasture").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_pasture").attr('tooltip2', "Water comsumption: -0.20/s");
$(".build_pasture").attr('tooltip3', "Food production: 0.20/s");

woodcost= Math.pow(1.9,(buildings["house"]))*20
mineralcost=Math.pow(1.9, (buildings["house"]))*50
foodcost=Math.pow(1.9, (buildings["house"]))*15
$(".build_house").html("House ("+buildings["house"]+")");
$(".build_house").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_house").attr('tooltip2', 'Minerals: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".build_house").attr('tooltip3', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".build_house").attr('tooltip4', "Max population +3");

woodcost= Math.pow(2,(buildings["library"]))*300
mineralcost=Math.pow(2, (buildings["library"]))*100

$(".build_library").html("Library ("+buildings["library"]+")");
$(".build_library").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_library").attr('tooltip2', 'Minerals: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".build_library").attr('tooltip3', 'Unlock powerful technologies each level');

woodcost= Math.pow(1.7,(buildings["banner"]))*100;
coppercost=Math.pow(1.7, (buildings["banner"]))*1;

$(".build_banner").html("Banner ("+buildings["banner"]+")");
$(".build_banner").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_banner").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".build_banner").attr('tooltip3', 'Max morale +1');

mineralcost= Math.pow(1.6,(buildings["foundry"]))*500;
coppercost=Math.pow(1.6, (buildings["foundry"]))*5
$(".build_foundry").html("Foundry ("+buildings["foundry"]+")");
$(".build_foundry").attr('tooltip', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".build_foundry").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".build_foundry").attr('tooltip3', "Mineral comsumption: -0.50/s");
$(".build_foundry").attr('tooltip4', "Iron production: 0.02/s");

blockcost= Math.pow(1.5,(buildings["barn"]))*5
$(".build_barn").html("Barn ("+buildings["barn"]+")");
$(".build_barn").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".build_barn").attr('tooltip2', 'Max wood +500');
$(".build_barn").attr('tooltip3', 'Max mineral +500');

blockcost= Math.pow(1.7,(buildings["casino"]))*3
goldcost= Math.pow(1.7,(buildings["casino"]))*1
$(".build_casino").html("Casino ("+buildings["casino"]+")");
$(".build_casino").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".build_casino").attr('tooltip2', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".build_casino").attr('tooltip3', 'Allows betting in the casino');
$(".build_casino").attr('tooltip4', 'Gold production +0.002/s');
$(".build_casino").attr('tooltip5', 'Max bet +0.5');
$(".build_casino").attr('tooltip6', 'Max gold +1');

woodcost= Math.pow(1.6,(buildings["market"]))*500
coincost= Math.pow(1.6,(buildings["market"]))*1
$(".build_market").html("Market ("+buildings["market"]+")");
$(".build_market").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_market").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".build_market").attr('tooltip3', 'Allows trading');
$(".build_market").attr('tooltip4', '+5% market trade effiency');

blockcost= Math.pow(1.6,(buildings["kiln"]))*15
mineralcost= Math.pow(1.6,(buildings["kiln"]))*2000

$(".build_kiln").html("Kiln ("+buildings["kiln"]+")");
$(".build_kiln").attr('tooltip', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".build_kiln").attr('tooltip2', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".build_kiln").attr('tooltip3', 'Wood comsumption: -2/s');
$(".build_kiln").attr('tooltip4', 'Coal production: 0.01/s');



//People
foodcost=50;
$(".hire_woodcutter").html("Woodcutter ("+people["woodcutter"]+")");
$(".hire_woodcutter").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_woodcutter").attr('tooltip2', "Food comsumption: -0.10/s");
$(".hire_woodcutter").attr('tooltip3', "Wood production: 1.00/s");

foodcost=50;
$(".hire_smelter").html("Smelter ("+people["smelter"]+")");
$(".hire_smelter").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_smelter").attr('tooltip2', "Mineral comsumption: -0.20/s");
$(".hire_smelter").attr('tooltip3', "Food comsumption: -0.10/s");
$(".hire_smelter").attr('tooltip4', "Copper production: 0.01/s");
if(technologies["metallurgy"]>0){
$(".hire_smelter").attr('tooltip5', "Gold production: 0.001/s");	
}

woodcost=50
$(".hire_farmer").html("Farmer ("+people["farmer"]+")");
$(".hire_farmer").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_farmer").attr('tooltip2', "Food production: 0.40/s");

foodcost=50
pickaxecost=1
$(".hire_miner").html("Miner ("+people["miner"]+")");
$(".hire_miner").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_miner").attr('tooltip2', 'Pickaxe: '+ parseFloat(craft["pickaxe"]).toFixed(2)+" / "+parseFloat(pickaxecost).toFixed(2))
$(".hire_miner").attr('tooltip3', "Food comsumption: -0.10/s");
$(".hire_miner").attr('tooltip4', 'Mineral production +1/s');

foodcost=50
spearcost=1
$(".hire_pikeman").html("Pikeman ("+people["pikeman"]+")");
$(".hire_pikeman").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_pikeman").attr('tooltip2', 'Spear: '+ parseFloat(craft["spear"]).toFixed(2)+" / "+parseFloat(spearcost).toFixed(2))
$(".hire_pikeman").attr('tooltip3', "Food comsumption: -0.10/s");
$(".hire_pikeman").attr('tooltip4', 'morale production +0.01/s');
$(".hire_pikeman").attr('tooltip5', 'Power: 5');

foodcost=150
swordcost=1
$(".hire_swordman").html("Swordman ("+people["swordman"]+")");
$(".hire_swordman").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_swordman").attr('tooltip2', 'Sword: '+ parseFloat(craft["sword"]).toFixed(2)+" / "+parseFloat(swordcost).toFixed(2))
$(".hire_swordman").attr('tooltip3', "Food comsumption: -0.40/s");
$(".hire_swordman").attr('tooltip4', 'morale production +0.02/s');
$(".hire_swordman").attr('tooltip5', 'Power: 10');
//Technologies

coppercost=1;
$(".tech_coppertools").html("Copper tools" + (technologies["coppertools"] >0 ? " (researched)" : ""));
$(".tech_coppertools").attr('tooltip', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".tech_coppertools").attr('tooltip2', "Increments wood and mineral production by 20%");

woodcost=100;
coppercost=3;

$(".tech_pickaxe").html("Pickaxe" + (technologies["pickaxe"] >0 ? " (researched)" : ""));
$(".tech_pickaxe").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_pickaxe").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".tech_pickaxe").attr('tooltip3', "Allows the crafting of pickaxes and hiring of miners");

woodcost=200;
coppercost=5;
$(".tech_spear").html("Basic weapons" + (technologies["spear"] >0 ? " (researched)" : ""));
$(".tech_spear").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_spear").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".tech_spear").attr('tooltip3', "Allows the crafting of spears and hiring of pikeman");

foodcost=100;
$(".tech_exploration").html("Exploration" + (technologies["exploration"] >0 ? " (researched)" : ""));
$(".tech_exploration").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_exploration").attr('tooltip2', "Allows exploration expeditions");

woodcost=1000;
mineralcost=500;
foodcost=200;
$(".tech_ironfoundry").html("Iron Foundry" + (technologies["ironfoundry"] >0 ? " (researched)" : ""));
$(".tech_ironfoundry").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_ironfoundry").attr('tooltip2', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_ironfoundry").attr('tooltip3', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_ironfoundry").attr('tooltip4', "Allows the construction of foundrys");

foodcost=200;
coppercost=10;
ironcost=5;
$(".tech_metallurgy").html("Metallurgy" + (technologies["metallurgy"] >0 ? " (researched)" : ""));
$(".tech_metallurgy").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_metallurgy").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".tech_metallurgy").attr('tooltip3', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_metallurgy").attr('tooltip4', "Provides 10% bonus to copper and iron production");
$(".tech_metallurgy").attr('tooltip5', "Allows smelters to smelt a bit of gold");

foodcost=500;
ironcost=10;
$(".tech_sword").html("Iron Sword" + (technologies["sword"] >0 ? " (researched)" : ""));
$(".tech_sword").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_sword").attr('tooltip2', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_sword").attr('tooltip3', "Allows the crafting of Iron Swords and the hiring of swordman");



woodcost=500
mineralcost=500
ironcost=20
$(".tech_storage").html("Storage management" + (technologies["storage"] >0 ? " (researched)" : ""));
$(".tech_storage").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_storage").attr('tooltip2', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_storage").attr('tooltip3', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_storage").attr('tooltip4', "Unlocks better storage methods");


goldcost=2;
$(".tech_currency").html("Currency" + (technologies["currency"] >0 ? " (researched)" : ""));
$(".tech_currency").attr('tooltip', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".tech_currency").attr('tooltip2', "Unlocks casinos");

ironcost=20;
goldcost=10;
$(".tech_coin").html("Coin forging" + (technologies["coin"] >0 ? " (researched)" : ""));
$(".tech_coin").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_coin").attr('tooltip', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".tech_coin").attr('tooltip2', "Allows forging gold coins");

foodcost=800
coincost=3
$(".tech_exchange").html("Exchange" + (technologies["exchange"] >0 ? " (researched)" : ""));
$(".tech_exchange").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_exchange").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_exchange").attr('tooltip3', "Allow the construction of markets");


woodcost=4000
mineralcost=2000
$(".tech_charcoal").html("Charcoal" + (technologies["charcoal"] >0 ? " (researched)" : ""));
$(".tech_charcoal").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_charcoal").attr('tooltip2', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_charcoal").attr('tooltip3', "Unlocks kilns");


//crafting
woodcost=20;
coppercost=1;
$(".craft_pickaxe").html("Pickaxe");
$(".craft_pickaxe").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".craft_pickaxe").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".craft_pickaxe").attr('tooltip3', "Basic copper pickaxe");

woodcost=50;
coppercost=3;
$(".craft_spear").html("Spear");
$(".craft_spear").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".craft_spear").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".craft_spear").attr('tooltip3', "Spear made of wood and copper");


ironcost=10
$(".craft_sword").html("Sword");
$(".craft_sword").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".craft_sword").attr('tooltip3', "Strong Iron sword");

woodcost=100
mineralcost=200
$(".craft_block").html("Block");
$(".craft_block").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".craft_block").attr('tooltip2', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".craft_block").attr('tooltip3', "Compact building material");

goldcost=5
$(".craft_coin").html("Coin");
$(".craft_coin").attr('tooltip', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".craft_coin").attr('tooltip3', "Gold refined into a coin for future use.");
//Others

power=0
power+=people["pikeman"]*5
power+=people["swordman"]*10

foodcost=power*2
watercost=power
moralecost=power/5
$(".expedition").html("Expedition");
$(".expedition").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".expedition").attr('tooltip2', 'Water: '+ parseFloat(items["water"]).toFixed(2)+" / "+parseFloat(watercost).toFixed(2))
$(".expedition").attr('tooltip3', 'morale: '+ parseFloat(items["morale"]).toFixed(2)+" / "+parseFloat(moralecost).toFixed(2))
$(".expedition").attr('tooltip4', "Send your soldiers in a expedition");

tradewood=500*(bonus["trade"]+1)
trademineral=400*(bonus["trade"]+1)
tradefood=300*(bonus["trade"]+1)

$(".trade_wood").html("Wood: " + tradewood);
$(".trade_mineral").html("Mineral: " + trademineral);
$(".trade_food").html("Food: " + tradefood);
}



function refresh(){


var production =new Array()
for(key in items){
production[key]=0;
}
var comsumption =new Array()
for(key in items){
comsumption[key]=0;
}
//buildings
production["wood"]+=buildings["lumbermill"]/20;
production["mineral"]+=buildings["mine"]/20;
production["water"]+=buildings["fountain"]/10;
production["gold"]+=buildings["casino"]/2000;

if (items["water"]>=buildings["pasture"]/20 && buildstatus["pasture"]==1)
{
comsumption["water"]+=buildings["pasture"]/20
production["food"]=buildings["pasture"]/20;
}
if (items["mineral"]>=buildings["foundry"]/8 && buildstatus["foundry"]==1)
{
comsumption["mineral"]+=buildings["foundry"]/8
production["iron"]=buildings["foundry"]/200;

}
if (items["wood"]>=buildings["kiln"]/2 && buildstatus["kiln"]==1)
{
comsumption["wood"]+=buildings["kiln"]/2
production["coal"]=buildings["kiln"]/400;

}
//people
production["food"]+=people["farmer"]/10;

if (items["food"]>=people["woodcutter"]/40)
{
comsumption["food"]+=people["woodcutter"]/40
production["wood"]+=people["woodcutter"]/4
}
if (items["food"]>=people["miner"]/40)
{
comsumption["food"]+=people["miner"]/40
production["mineral"]+=people["miner"]/4
}
if (items["mineral"]>=people["smelter"]/20 && items["food"]>=people["smelter"]/40)
{
comsumption["mineral"]+=people["smelter"]/20
comsumption["food"]+=people["smelter"]/40
production["copper"]+=people["smelter"]/400
if(technologies["metallurgy"]>0){
production["gold"]+=people["smelter"]/4000
}
}

if (items["food"]>=people["pikeman"]/40)
{
comsumption["food"]+=people["pikeman"]/40
production["morale"]+=people["pikeman"]/400
}

if (items["food"]>=people["swordman"]/10)
{
comsumption["food"]+=people["swordman"]/10
production["morale"]+=people["swordman"]/200
}


var inv_text=""
for(key in items){
if(items[key]!=0){
inv_text+=key+": "+parseFloat(items[key]).toFixed(2)+" / "+ maximums[key]+" ("+parseFloat(4*((production[key]*(bonus[key]+1))-comsumption[key])).toFixed(2)+") ";
if (bonus[key]>0){
	inv_text+= "+ "+parseFloat(bonus[key]*100).toFixed(2)+"%";
}

inv_text+="<br>"
}
}
$(".inventory").html(inv_text);
$(".population").html("Population: "+population+" / "+ +maximums["population"]);


var inv_text=""
for(key in craft){
if(craft[key]!=0){
inv_text+=key+": "+parseFloat(craft[key]).toFixed(2);
inv_text+="<br>"
}
}
$(".inventory_craft").html(inv_text);
/*var people_text=""
for(key in people){
if(people[key]!=0){
people_text+=key+": "+people[key]+" <br>";
}
}
$(".people").html("Population: "+population+" / "+ +maximums["population"]+"<br>"+people_text);
var build_text=""
for(key in buildings){
if(buildings[key]!=0){
build_text+=key+": "+buildings[key]+"<br>"
}
}
$(".buildings").html(build_text);*/

$(".betamount").attr("max",maximums["bet"]);

for(key in items){

var result=(production[key]*(bonus[key]+1))-comsumption[key]

if((items[key]+result)<maximums[key]){
items[key]+=(production[key]*(bonus[key]+1))-comsumption[key];
}
else
{
items[key]=maximums[key]
}

}



calculatecost();


}
function trade(b){


if (craft["coin"]>=1){
tradewood=500*(bonus["trade"]+1)
trademineral=400*(bonus["trade"]+1)
tradefood=300*(bonus["trade"]+1)

if(b=="wood"){
	items["wood"]+=Math.round(tradewood)
	craft["coin"]-=1
}
else if(b=="mineral"){
	items["mineral"]+=Math.round(trademineral)
	craft["coin"]-=1
}
else if(b=="food"){
	items["food"]+=Math.round(tradefood)
	craft["coin"]-=1
}

}






}
function bet(b){

    var amountbet=parseFloat($(".betamount").val()).toFixed(2);
    if(maximums["bet"]>=amountbet && items["gold"]>=amountbet){
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
function save(){
	
document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

Cookies.set( 'items', JSON.stringify(items) ,{ expires: 9999 });
Cookies.set( 'bonus', JSON.stringify(bonus) ,{ expires: 9999 });
Cookies.set( 'buildings', JSON.stringify(buildings) ,{ expires: 9999 });
Cookies.set( 'maximums',JSON.stringify( maximums) ,{ expires: 9999 });
Cookies.set( 'technologies', JSON.stringify(technologies) ,{ expires: 9999 });
Cookies.set( 'people', JSON.stringify(people) ,{ expires: 9999 });
Cookies.set( 'craft', JSON.stringify(craft) ,{ expires: 9999 });
Cookies.set( 'unlocked', JSON.stringify(unlocked) ,{ expires: 9999 });
Cookies.set('population', population,{ expires: 9999 });
}

function load(){
    

items = update(items,JSON.parse(Cookies.get( 'items')));
bonus = update(bonus,JSON.parse(Cookies.get( 'bonus')));
buildings = update(buildings,JSON.parse(Cookies.get( 'buildings')));
maximums = update(maximums,JSON.parse(Cookies.get( 'maximums')));
technologies = update(technologies,JSON.parse(Cookies.get( 'technologies')));
people = update(people,JSON.parse(Cookies.get( 'people')));
craft = update(craft,JSON.parse(Cookies.get( 'craft')));
unlocked = update(unlocked,JSON.parse(Cookies.get( 'unlocked')));
population = Cookies.get('population');
population=people["woodcutter"]+people["smelter"]+people["farmer"]+people["pikeman"]+people["swordman"]
for(key in unlocked){
    if (unlocked[key]==1)
    {
    $(key).show().removeClass("invisible")
    }
}
	switch(buildings["library"]){
		case 1: $(".tech_coppertools").show();unlocked[".tech_coppertools"]=1;$(".tech_pickaxe").show();unlocked[".tech_pickaxe"]=1;$("#technologiespane").removeClass("invisible");unlocked["#technologiespane"]=1;break;
		case 2: $(".build_banner").show();unlocked[".build_banner"]=1;$(".tech_spear").show();unlocked[".tech_spear"]=1;$(".tech_exploration").show();unlocked[".tech_exploration"]=1;break;
		case 3: $(".tech_ironfoundry").show();unlocked[".tech_ironfoundry"]=1;$(".tech_metallurgy").show();unlocked[".tech_metallurgy"]=1;$(".tech_sword").show();unlocked[".tech_sword"]=1;$(".tech_storage").show();unlocked[".tech_storage"]=1;break;
		case 4: $(".tech_currency").show();unlocked[".tech_currency"]=1;$(".tech_exchange").show();unlocked[".tech_exchange"]=1;$(".tech_coin").show();unlocked[".tech_coin"]=1;break;
		case 5: $(".tech_charcoal").show();unlocked[".tech_charcoal"]=1;break;
	}
	
	if(maximums["moral"]!=0 && maximums["moral"]!=null)
	{
	maximums["morale"]=maximums["moral"]
    maximums["moral"]=0
	items["morale"]=items["moral"]
	items["moral"]=0;
	}

save()
} 

function update(array1, array2){

for (key in array2){
array1[key]=array2[key]
}

return array1
}