function warp(){



datenew=parseInt(serverTime())
dateold= bonus["savetime"]

warping=datenew-dateold

if (warping>604800){
warping=604800
}

warptime(warping)
}

function warptime(t){

	var energypro=0;
	var energycon=0;

for(var w=0;w<t;w++){

	var production =new Array()
	for(key in items){
		production[key]=0;
	}
	var consumption =new Array()
	for(key in items){
		consumption[key]=0;
	}
//buildings

if(items["coal"]>=people["cargotrain"]*0.02){
	consumption["coal"]+=people["cargotrain"]*0.02
	if(trademission["trainbuy"]!="nothing" && craft["coin"]>=people["cargotrain"]*0.05){
		craft["coin"]-=people["cargotrain"]*0.05
		production[trademission["trainbuy"]]+=people["cargotrain"]*tradetrain[trademission["trainbuy"]]*0.05
	}
}

if(buildstatus["workshop"]==1 && items["coal"]>=buildings["workshop"]*0.03 && items["chemicals"]>=buildings["workshop"]*0.01){

	consumption["coal"]+=buildings["workshop"]*0.03
	consumption["chemicals"]+=buildings["workshop"]*0.01
	bonus["auto"]=buildings["workshop"]*0.10
}
else
{
bonus["auto"]=0
}


if (items["coal"]>=buildings["powerplant"]*0.05 &&  items["water"]>=buildings["powerplant"]*2 && buildstatus["powerplant"]==1)
{
	consumption["water"]+=buildings["powerplant"]*2
	consumption["coal"]+=buildings["powerplant"]*0.05
	bonus["energy"]+=(1/3.6)*buildings["powerplant"];
}
else if(buildings["powerplant"]>0)
{
		buildstatus["powerplant"]=0;
		$(".build_powerplant").addClass("off")
}

if (items["mineral"]>=buildings["cementkiln"]*100  &&  items["clay"]>=buildings["cementkiln"]*2 &&  bonus["energy"]>=(0.03/3.6)*buildings["cementkiln"] && buildstatus["cementkiln"]==1)
{
	consumption["mineral"]+=buildings["cementkiln"]*100
	consumption["clay"]+=buildings["cementkiln"]*2
	production["cement"]+=buildings["cementkiln"]*0.1
	bonus["energy"]-=(0.3/3.6)*buildings["cementkiln"];
}
else if(buildings["cementkiln"]>0)
{
		buildstatus["cementkiln"]=0;
		$(".build_cementkiln").addClass("off")
}
if (bonus["energy"]>=(0.5/3.6)*buildings["university"] && buildstatus["university"]==1)
{
	craft["book"]+=buildings["university"]*0.0001*(bonus["auto"]+1);
	production["knowledge"]+=buildings["university"]*0.05
	energycon+=(0.5/3.6)*buildings["university"];
	bonus["energy"]-=(0.5/3.6)*buildings["university"];
}
else if(buildings["university"]>0)
{
		buildstatus["university"]=0;
		$(".build_university").addClass("off")
}
if (items["mineral"]>=buildings["concretemixer"]*50  &&  items["water"]>=buildings["concretemixer"]*10 && items["cement"]>=buildings["concretemixer"]*0.5 &&  bonus["energy"]>=(0.5/3.6)*buildings["concretemixer"] && buildstatus["concretemixer"]==1)
{
	consumption["mineral"]+=buildings["concretemixer"]*50
	consumption["water"]+=buildings["concretemixer"]*10
	consumption["cement"]+=buildings["concretemixer"]*2
	production["concrete"]+=buildings["concretemixer"]*0.05
	energycon+=(0.5/3.6)*buildings["concretemixer"];
	bonus["energy"]-=(0.5/3.6)*buildings["concretemixer"];
}
else if(buildings["concretemixer"]>0)
{
		buildstatus["concretemixer"]=0;
		$(".build_concretemixer").addClass("off")
}
if (items["steel"]>=buildings["toolfactory"]*2 && items["copper"]>=buildings["toolfactory"]*5 &&  bonus["energy"]>=(1/3.6)*buildings["toolfactory"] && buildstatus["toolfactory"]==1)
{
	consumption["steel"]+=buildings["toolfactory"]*2
	consumption["copper"]+=buildings["toolfactory"]*5
	craft["pickaxe"]+=buildings["toolfactory"]*0.5*(bonus["auto"]+1);
	craft["toolbox"]+=buildings["toolfactory"]*0.001*(bonus["auto"]+1);
	energycon+=(1/3.6)*buildings["toolfactory"];
	bonus["energy"]-=(1/3.6)*buildings["toolfactory"];
}
else if(buildings["toolfactory"]>0)
{
		buildstatus["toolfactory"]=0;
		$(".build_toolfactory").addClass("off")
}
production["wood"]+=buildings["lumbermill"]/5;
production["mineral"]+=buildings["mine"]/5;
production["water"]+=buildings["fountain"]/2.5;
production["gold"]+=buildings["casino"]/250;
production["knowledge"]+=buildings["scienceoutpost"]/50;
production["gold"]+=buildings["tradeoutpost"]/100;
production["clay"]+=buildings["quarry"]*0.20;

craft["token"]+=(buildings["share"]/10)*(bonus["auto"]+1);
if(technologies["safestorage"]==1){
production["nickel"]+=buildings["quarry"]/1000;
}
if(technologies["mineralcoal"]==1){
production["coal"]+=buildings["quarry"]*0.02;
}
if (items["water"]>=buildings["pasture"]/5 && buildstatus["pasture"]==1)
{
	consumption["water"]+=buildings["pasture"]/5
	production["food"]+=buildings["pasture"]/5;
}
if (items["mineral"]>=buildings["foundry"]/2 && buildstatus["foundry"]==1)
{
	consumption["mineral"]+=buildings["foundry"]/2
	production["iron"]=buildings["foundry"]/50;
	if(technologies["bronze"]>0){
		production["tin"]+=buildings["foundry"]/200;
	}
}
if (items["wood"]>=buildings["kiln"]*2 && buildstatus["kiln"]==1)
{
	consumption["wood"]+=buildings["kiln"]*2
	production["coal"]+=buildings["kiln"]/100;

}
if (items["wood"]>=buildings["shipyard"]*40 && buildstatus["shipyard"]==1)
{
	consumption["wood"]+=buildings["shipyard"]*40
	craft["plank"]+=(buildings["shipyard"]/20)*(bonus["auto"]+1);
}
if (items["gold"]>=buildings["bank"]/10 && buildstatus["bank"]==1)
{
	consumption["gold"]+=buildings["bank"]/10
	craft["coin"]+=(buildings["bank"]/50)*(bonus["auto"]+1);
}
if(buildings["library"]>=8){
	production["knowledge"]+=buildings["library"]/100;
}
if (items["mineral"]>=buildings["crusher"]*10 && buildstatus["crusher"]==1)
{
	consumption["mineral"]+=buildings["crusher"]*10;
	production["sand"]+=buildings["crusher"]/2;

}
if (items["wood"]>=buildings["blockyard"] && items["mineral"]>=buildings["blockyard"]*8 && buildstatus["blockyard"]==1)
{
	consumption["wood"]+=buildings["blockyard"]*4
	consumption["mineral"]+=buildings["blockyard"]*8
	craft["block"]+=(buildings["blockyard"]/25)*(bonus["auto"]+1);
}

if (items["wood"]>=buildings["carpentry"]*5 && items["iron"]>=buildings["carpentry"]*0.1 && buildstatus["carpentry"]==1)
{
	consumption["wood"]+=buildings["carpentry"]*5
	consumption["iron"]+=buildings["carpentry"]*0.1
	craft["structure"]+=(buildings["carpentry"]/200)*(bonus["auto"]+1);
}
//people
production["food"]+=people["farmer"]/2.5;

if (items["food"]>=people["woodcutter"]/10)
{
	consumption["food"]+=people["woodcutter"]/10
	production["wood"]+=people["woodcutter"]/1
}
if (items["food"]>=people["miner"]/10)
{
	consumption["food"]+=people["miner"]/10
	production["mineral"]+=people["miner"]/1
	if(technologies["multitasking"]==1){
		production["clay"]+=people["miner"]/20
	}
}

if (items["food"]>=people["sailor"]/5)
{
	consumption["food"]+=people["sailor"]/5
}

if (items["mineral"]>=people["smelter"]/5 && items["food"]>=people["smelter"]/40)
{
	consumption["mineral"]+=people["smelter"]/5
	consumption["food"]+=people["smelter"]/10
	production["copper"]+=people["smelter"]/100
	if(technologies["metallurgy"]>0){
		production["gold"]+=people["smelter"]/1000
	}
}
if (craft["coin"]>=people["scientist"]/100 && items["food"]>=people["scientist"]/10)
{
	craft["coin"]-=people["scientist"]/100
	consumption["food"]+=people["scientist"]/5
	production["knowledge"]+=people["scientist"]/50

	if(buildings["laboratory"]>=1 && buildstatus["laboratory"]==1){
		if(craft["bottle"]>=(buildings["laboratory"]*people["scientist"]*0.001)){
			craft["bottle"]-=(buildings["laboratory"]*people["scientist"]*0.001)
			maximums["water"]-=(buildings["laboratory"]*people["scientist"]*0.001)
			production["knowledge"]+=(buildings["laboratory"]*people["scientist"]*0.005)
			production["chemicals"]+=(buildings["laboratory"]*people["scientist"]*0.001)
		}

	}
}


if (craft["coin"]>=people["marketer"]*0.05 && items["food"]>=people["marketer"]/5)
{
	craft["coin"]-=people["marketer"]*0.05
	consumption["food"]+=people["marketer"]/5
	craft["bronze"]+=0.001*people["marketer"]*(bonus["auto"]+1)
	craft["brick"]+=0.0005*people["marketer"]*(bonus["auto"]+1)
	craft["glass"]+=0.0005*people["marketer"]*(bonus["auto"]+1)
}


if (items["iron"]>=people["foundryman"]/20 && items["food"]>=people["foundryman"]/10 && items["coal"]>=people["foundryman"]/50)
{
	consumption["iron"]+=people["foundryman"]/20
	consumption["coal"]+=people["foundryman"]/50
	consumption["food"]+=people["foundryman"]/10
	production["steel"]+=people["foundryman"]/100
	if(buildings["blastfurnace"]>=1 && buildstatus["blastfurnace"]==1){
		if(items["mineral"]>=(buildings["blastfurnace"]*people["foundryman"]*0.25)){
			consumption["mineral"]+=(buildings["blastfurnace"]*people["foundryman"]*0.25)
			production["iron"]+=(buildings["blastfurnace"]*people["foundryman"]*0.01)
		}

	}
}

if (items["food"]>=people["pikeman"]/10)
{
	consumption["food"]+=people["pikeman"]/10
	production["morale"]+=people["pikeman"]/50
}

if (items["food"]>=people["swordman"]/2.5)
{
	consumption["food"]+=people["swordman"]/2.5
	production["morale"]+=people["swordman"]/100
}

if (items["food"]>=people["knight"]*2)
{
	consumption["food"]+=people["knight"]*2
	production["morale"]+=people["knight"]/25
}

consumption["food"]+=people["medic"]/2.5

if (items["food"]>=people["bersek"]/1.25 && items["gold"]>=people["bersek"]/100)
{
	consumption["food"]+=people["bersek"]/1.25
	consumption["gold"]+=people["bersek"]/100
	production["morale"]+=people["bersek"]/6.25
}

if (items["food"]>=people["warelephant"]*10 && items["water"]>=people["warelephant"]*2)
{
	consumption["food"]+=people["warelephant"]*10;
	consumption["water"]+=people["warelephant"]*2;
	production["morale"]+=people["warelephant"]*50;
}

if (items["food"]>=people["musketeer"]/2.5)
{
	consumption["food"]+=people["musketeer"]/2.5;
	production["morale"]+=people["musketeer"]*0.05;
}

if (bonus["invest"]>=0.1)
{
	bonus["invest"]-=0.1
	craft["coin"]+=0.1
}
var rushbonus=1
if(bonus["rush"]>=4){
	bonus["rush"]-=4
	rushbonus=2
}
for(key in items){

	var result=(production[key]*(bonus[key]+bonus["global"]+1)*rushbonus)-consumption[key]

	if((items[key]+result)<(maximums[key]*(bonus["storage"]+1))){
		items[key]+=(production[key]*(bonus[key]+bonus["global"]+1)*rushbonus)-consumption[key];
	}
	else
	{
		items[key]=(maximums[key]*(bonus["storage"]+1))
	}

}

if(bonus["energy"]<0){
	bonus["energy"]=0;
}
if(bonus["energy"]>maximums["energy"]){
	bonus["energy"]=maximums["energy"];
}


}












}

function legacywarp(){
treasurecost = Math.floor(Math.pow(1.5,(bonus["warpcost"]))*5)

if(prestige["treasure"]>=treasurecost){
prestige["treasure"]-=treasurecost

warptime(1800)
bonus["warpcost"]++

}
}
