prestige= new Array();

prestige["number"]=0;
prestige["upgrades"]=0;
prestige["treasure"]=0;
prestige["legacy"]=0;
prestige["motivation"]=0;
prestige["depot"]=0;
prestige["vengeance"]=0;
prestige["aegis"]=0;
prestige["bargain"]=0;
prestige["mastery"]=0;
prestige["learning"]=0;

function lega(b){

if(prestige[b]==0){
	legacycost=Math.pow(5,(prestige["upgrades"]))*1
}
else{
	legacycost=Math.ceil(Math.pow(1.2,(prestige[b])))
}

if( legacycost<=prestige["legacy"]){

prestige["legacy"]-=legacycost;

if(prestige[b]==0){
prestige["upgrades"]++
}

if(b=="motivation"){

	bonus["global"]+=0.01
	prestige["motivation"]++
}
else if(b=="depot"){
	bonus["storage"]+=0.01
	prestige["depot"]++
}
else if(b=="mastery"){
	bonus["craft"]+=0.01
	prestige["mastery"]++
}
else if(b=="vengeance"){
	bonus["power"]+=0.05
	prestige["vengeance"]++
}
else if(b=="aegis"){
	bonus["hp"]+=0.05
	prestige["aegis"]++
}
else if(b=="bargain"){
	bonus["trade"]+=0.05
	prestige["bargain"]++
}
else if(b=="learning"){
	bonus["knowledge"]+=0.05
	prestige["learning"]++
}
}
}
function tooltipsprestige(b){
if(prestige[b]==0){
	legacycost=Math.pow(5,(prestige["upgrades"]))*1
}
else{
	legacycost=Math.ceil(Math.pow(1.2,(prestige[b])))
}

if(prestige["legacy"]<legacycost){
	$(".legacy_"+b).addClass("unavailable")
}
else
{
	$(".legacy_"+b).removeClass("unavailable")
}
$(".legacy_"+b).html(capitalize(b)+" ("+prestige[b]+")");
$(".legacy_"+b).attr('tooltip', 'Legacy: '+ prestige["legacy"]+" / "+Math.round(legacycost))

switch(b){
	case "motivation":$(".legacy_"+b).attr('tooltip3', 'Global production +1%');break;
	case "depot":$(".legacy_"+b).attr('tooltip3', 'All storages +1%');break;
	case "mastery":$(".legacy_"+b).attr('tooltip3', 'Craft effiency +1%');break;
	case "vengeance":$(".legacy_"+b).attr('tooltip3', 'Military power +5%');break;
	case "aegis":$(".legacy_"+b).attr('tooltip3', 'Troops hp +5%');break;
	case "bargain":$(".legacy_"+b).attr('tooltip3', 'Market ratios +5%');break;
	case "learning":$(".legacy_"+b).attr('tooltip3', 'Knowledge production +5%');break;
}


}


function resetgame(){

$(".nav-tabs a[href='#build']").tab("show");

prestige["number"]++
prestige["treasure"]+=Math.floor(craft["chest"]);

var legacyadd=0;

legacyadd+=maximums["population"]/10;
legacyadd+=maximums["ships"];
legacyadd+=craft["diamond"];
legacyadd+=people["sucellus"]+people["eredal"]+people["khrysos"]+people["elisia"]+people["xochiquetzal"]+people["warmuk"]+bonus["title"]
legacyadd+=(bonus["economy"]+bonus["science"]+bonus["military"])/1000
legacyadd+=(Math.pow(1.4,(buildings["library"]))*1)-1

prestige["legacy"]+=Math.floor(legacyadd);


items["wood"]=10;
items["mineral"]=5;
items["sand"]=0;
items["clay"]=0;
items["concrete"]=0;
items["water"]=0;
items["food"]=0;
items["copper"]=0;
items["gold"]=0;
items["iron"]=0;
items["coal"]=0;
items["tin"]=0;
items["steel"]=0;
items["chemicals"]=0;
items["morale"]=0;
items["knowledge"]=0;
bonus["global"]=0;
bonus["trade"]=0;
bonus["craft"]=0;
bonus["title"]=0;
bonus["power"]=0;
bonus["hp"]=0;
bonus["healing"]=0;
bonus["storage"]=0;
bonus["economy"]=0;
bonus["science"]=0;
bonus["military"]=0;
bonus["reespeccost"]=0;
bonus["territory"]=0;

for(key in items){
	bonus[key]=0;
	maximums[key]=0;
}

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
buildings["statue"]=0;
buildings["towncenter"]=0;
buildings["workbench"]=0;
buildings["castle"]=0;
buildings["relic"]=0;
buildings["shipyard"]=0;
buildings["docks"]=0;
buildings["bank"]=0;
buildings["crusher"]=0;
buildings["blockyard"]=0;
buildings["bunker"]=0;
buildings["laboratory"]=0;
buildings["tradeoutpost"]=0;
buildings["scienceoutpost"]=0;
buildings["militaryoutpost"]=0;
maximums["population"]=0;
maximums["ships"]=0;
maximums["bet"]=0;
maximums["wood"]=50
maximums["mineral"]=20
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
technologies["bronze"]=0
technologies["bronzetools"]=0
technologies["charcoal"]=0
technologies["centralisation"]=0
technologies["steel"]=0
technologies["manufacturing"]=0
technologies["steeltools"]=0
technologies["husbandry"]=0
technologies["cavalry"]=0
technologies["leadership"]=0
technologies["armament"]=0
technologies["gambling"]=0
technologies["redeem"]=0
technologies["wrapping"]=0
technologies["shipyard"]=0
technologies["sailing"]=0
technologies["trade"]=0
technologies["cache"]=0
technologies["specialization"]=0
technologies["geology"]=0
technologies["funding"]=0
technologies["tactics"]=0
technologies["healing"]=0
technologies["savings"]=0
technologies["studies"]=0
technologies["organization"]=0
technologies["culturaltrade"]=0
technologies["intelligence"]=0
technologies["crushing"]=0
technologies["floatglass"]=0
technologies["contracts"]=0
technologies["galleon"]=0
technologies["wareconomy"]=0
technologies["glassblowing"]=0
technologies["rampage"]=0
technologies["domestication"]=0
technologies["construction"]=0
technologies["architecture"]=0
technologies["chemistry"]=0
technologies["risk"]=0
technologies["elephantry"]=0
technologies["undergroundstorage"]=0
technologies["expansion"]=0
people["woodcutter"]=0
people["smelter"]=0
people["farmer"]=0
people["miner"]=0
people["foundryman"]=0
people["sailor"]=0
people["scientist"]=0
people["pikeman"]=0
people["swordman"]=0
people["knight"]=0
people["medic"]=0
people["bersek"]=0
people["warelephant"]=0
people["sucellus"]=0
people["eredal"]=0
people["khrysos"]=0
people["elisia"]=0
people["xochiquetzal"]=0
people["warmuk"]=0
people["galley"]=0
people["galleon"]=0
craft["chest"]=0
craft["diamond"]=0
craft["bottle"]=0
craft["pickaxe"]=0
craft["spear"]=0
craft["sword"]=0
craft["block"]=0
craft["coin"]=0
craft["bronze"]=0
craft["structure"]=0
craft["armor"]=0
craft["frame"]=0
craft["horse"]=0
craft["token"]=0
craft["plank"]=0
craft["supplies"]=0
craft["lock"]=0
craft["glass"]=0
craft["greatsword"]=0
craft["elephant"]=0
population=0;
ships=0;
for(key in technologies){

$(".tech_"+key).removeClass("researched");

}
for(key in unlocked){

	unlocked[key]=0;
}

	$("#militarypane, #jobspane, #craftingpane, #technologiespane, #casinopane, #marketpane, #leaderpane, #dockpane").addClass("invisible");
	$(".block, .fire, .population,.toggle ,.titles,.craftamount,.encounter,.casinogame2,.ships,.tradesea").hide()
	$(".legacy_motivation, .legacy_depot, .legacy_vengeance,.legacy_aegis ,.legacy_bargain,.legacy_mastery,.legacy_learning").show()

	$(".build_lumbermill").show()
	unlocked[".build_lumbermill"]=1;

	$(".reespec").show()
	unlocked[".reespec"]=1;

	$("#legacypane").removeClass("invisible")
	unlocked["#legacypane"]=1;

	unlocked[".legacy_motivation"]=1;
	unlocked[".legacy_depot"]=1;
	unlocked[".legacy_vengeance"]=1;
	unlocked[".legacy_aegis"]=1;
	unlocked[".legacy_bargain"]=1;
	unlocked[".legacy_mastery"]=1;
	unlocked[".legacy_learning"]=1;

	$(".countdown").show();
	unlocked[".countdown"]=1;

	bonus["global"]+=prestige["motivation"]*0.01
	bonus["storage"]+=prestige["depot"]*0.01
	bonus["craft"]+=prestige["mastery"]*0.01
	bonus["power"]+=prestige["vengeance"]*0.05
	bonus["hp"]+=prestige["aegis"]*0.05
	bonus["trade"]+=prestige["bargain"]*0.05
	bonus["knowledge"]+=prestige["learning"]*0.05
	prestige["number"]++


}

