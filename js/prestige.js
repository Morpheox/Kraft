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
prestige["memory"]=0;

function lega(b){

if(prestige[b]==0){
	legacycost=Math.pow(5,(prestige["upgrades"]))*1
}
else{
	legacycost=Math.ceil(Math.pow(1.05,(prestige[b])))
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
	bonus["storage"]+=0.005
	prestige["depot"]++
}
else if(b=="mastery"){
	bonus["craft"]+=0.015
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
else if(b=="memory"){
	bonus["legacy"]+=0.02
	prestige["memory"]++
}

}
}
function tooltipsprestige(b){
if(prestige[b]==0){
	legacycost=Math.pow(5,(prestige["upgrades"]))*1
}
else{
	legacycost=Math.ceil(Math.pow(1.05,(prestige[b])))
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
	case "depot":$(".legacy_"+b).attr('tooltip3', 'All storages +0.5%');break;
	case "mastery":$(".legacy_"+b).attr('tooltip3', 'Craft efficiency +1.5%');break;
	case "vengeance":$(".legacy_"+b).attr('tooltip3', 'Military power +5%');break;
	case "aegis":$(".legacy_"+b).attr('tooltip3', 'Troops hp +5%');break;
	case "bargain":$(".legacy_"+b).attr('tooltip3', 'Market ratios +5%');break;
	case "learning":$(".legacy_"+b).attr('tooltip3', 'Knowledge production +5%');break;
	case "memory":$(".legacy_"+b).attr('tooltip3', 'Legacy obtained +2%');break;
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
legacyadd+=craft["book"];
legacyadd+=people["sucellus"]+people["eredal"]+people["khrysos"]+people["elisia"]+people["xochiquetzal"]+people["warmuk"]+people["foehn"]+people["alfear"]+bonus["title"]
legacyadd+=(bonus["economy"]+bonus["science"]+bonus["military"])/1000
legacyadd+=(Math.pow(1.4,(buildings["library"]))*1)-1


prestige["legacy"]+=Math.floor((legacyadd)*(bonus["legacy"]+(craft["artifact"]/100)+1));




for (key in bonus){
	bonus[key]=0
}

for(key in items){
	items[key]=0;
	bonus[key]=0;
	maximums[key]=0;
}


for (key in buildings){
	buildings[key]=0
}

maximums["population"]=0;
maximums["ships"]=0;
maximums["bet"]=0;
maximums["trains"]=0;
maximums["wood"]=50
maximums["mineral"]=20
items["wood"]=10;
items["mineral"]=5;

for (key in technologies){
	technologies[key]=0
}

for (key in people){
	people[key]=0
}

for (key in craft){
	craft[key]=0
}

for (key in autotechnologies){
	autotechnologies[key]=0
}


population=0;
ships=0;
for(key in technologies){

$(".tech_"+key).removeClass("researched");

}
for(key in unlocked){

	unlocked[key]=0;
}

	$("#militarypane, #jobspane, #craftingpane, #technologiespane, #casinopane, #marketpane, #leaderpane, #dockpane, #facilitiespane").addClass("invisible");
	$(".block, .fire, .population,.toggle ,.titles,.craftamount,.encounter,.casinogame2,.ships,.tradesea,.expansionsea,.territory,.deals,.trains,.tradetrain,.currentrush").hide()
	$(".trade_sand").hide()
	$(".legacy_motivation, .legacy_depot, .legacy_vengeance,.legacy_aegis ,.legacy_bargain,.legacy_mastery,.legacy_learning,.legacy_warp,.legacy_memory").show()
	$(".block").removeClass("researched");
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
	unlocked[".legacy_warp"]=1;
	unlocked[".legacy_memory"]=1;
	$(".countdown").show();
	unlocked[".countdown"]=1;

	bonus["global"]+=prestige["motivation"]*0.01
	bonus["storage"]+=prestige["depot"]*0.005
	bonus["craft"]+=prestige["mastery"]*0.015
	bonus["power"]+=prestige["vengeance"]*0.05
	bonus["hp"]+=prestige["aegis"]*0.05
	bonus["trade"]+=prestige["bargain"]*0.05
	bonus["knowledge"]+=prestige["learning"]*0.05
	bonus["legacy"]+=prestige["memory"]*0.02
	prestige["number"]++


}

