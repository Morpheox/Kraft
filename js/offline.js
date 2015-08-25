function warp(){

var warping=100000;

for(var w=0;w<warping;w++){
	var production =new Array()
	for(key in items){
		production[key]=0;
	}
	var consumption =new Array()
	for(key in items){
		consumption[key]=0;
	}
//buildings
production["wood"]+=buildings["lumbermill"]/20;
production["mineral"]+=buildings["mine"]/20;
production["water"]+=buildings["fountain"]/10;
production["gold"]+=buildings["casino"]/1000;
production["knowledge"]+=buildings["scienceoutpost"]/200;
production["gold"]+=buildings["tradeoutpost"]/400;
production["clay"]+=buildings["quarry"]/400;

if (items["water"]>=buildings["pasture"]/20 && buildstatus["pasture"]==1)
{
	consumption["water"]+=buildings["pasture"]/20
	production["food"]=buildings["pasture"]/20;
}
if (items["mineral"]>=buildings["foundry"]/8 && buildstatus["foundry"]==1)
{
	consumption["mineral"]+=buildings["foundry"]/8
	production["iron"]=buildings["foundry"]/200;
	if(technologies["bronze"]>0){
		production["tin"]=buildings["foundry"]/800;
	}
}
if (items["wood"]>=buildings["kiln"]/2 && buildstatus["kiln"]==1)
{
	consumption["wood"]+=buildings["kiln"]/2
	production["coal"]=buildings["kiln"]/400;

}
if (items["wood"]>=buildings["shipyard"]*10 && buildstatus["shipyard"]==1)
{
	consumption["wood"]+=buildings["shipyard"]*10
	craft["plank"]+=buildings["shipyard"]/80;
}
if (items["gold"]>=buildings["bank"]/40 && buildstatus["bank"]==1)
{
	consumption["gold"]+=buildings["bank"]/40
	craft["coin"]+=buildings["bank"]/200;
}
if(buildings["library"]>=8){
	production["knowledge"]+=buildings["library"]/400;
}
if (items["mineral"]>=buildings["crusher"]*2.5 && buildstatus["crusher"]==1)
{
	consumption["mineral"]+=buildings["crusher"]*2.5;
	production["sand"]=buildings["crusher"]/8;

}
if (items["wood"]>=buildings["blockyard"] && items["mineral"]>=buildings["blockyard"]*2 && buildstatus["blockyard"]==1)
{
	consumption["wood"]+=buildings["blockyard"]
	consumption["mineral"]+=buildings["blockyard"]*2
	craft["block"]+=buildings["blockyard"]/100;
}

if (items["wood"]>=buildings["carpentry"]*1.25 && items["iron"]>=buildings["carpentry"]*0.025 && buildstatus["carpentry"]==1)
{
	consumption["wood"]+=buildings["carpentry"]*1.25
	consumption["iron"]+=buildings["carpentry"]*0.025 
	craft["structure"]+=buildings["carpentry"]/800;
}
//people
production["food"]+=people["farmer"]/10;

if (items["food"]>=people["woodcutter"]/40)
{
	consumption["food"]+=people["woodcutter"]/40
	production["wood"]+=people["woodcutter"]/4
}
if (items["food"]>=people["miner"]/40)
{
	consumption["food"]+=people["miner"]/40
	production["mineral"]+=people["miner"]/4
	if(technologies["multitasking"]==1){
		production["clay"]+=people["miner"]/80
	}
}

if (items["food"]>=people["sailor"]/20)
{
	consumption["food"]+=people["sailor"]/20
}

if (items["mineral"]>=people["smelter"]/20 && items["food"]>=people["smelter"]/40)
{
	consumption["mineral"]+=people["smelter"]/20
	consumption["food"]+=people["smelter"]/40
	production["copper"]+=people["smelter"]/400
	if(technologies["metallurgy"]>0){
		production["gold"]+=people["smelter"]/4000
	}
}
if (craft["coin"]>=people["scientist"]/400 && items["food"]>=people["scientist"]/20)
{
	craft["coin"]-=people["scientist"]/400
	consumption["food"]+=people["scientist"]/20
	production["knowledge"]+=people["scientist"]/200

	if(buildings["laboratory"]>=1 && buildstatus["laboratory"]==1){
		if(craft["bottle"]>=(buildings["laboratory"]*people["scientist"]*0.00025)){
			craft["bottle"]-=(buildings["laboratory"]*people["scientist"]*0.00025)
			maximums["water"]-=(buildings["laboratory"]*people["scientist"]*0.00025)
			production["knowledge"]+=(buildings["laboratory"]*people["scientist"]*0.00125)
			production["chemicals"]+=(buildings["laboratory"]*people["scientist"]*0.00025)
		}

	}
}

if (items["iron"]>=people["foundryman"]/100 && items["food"]>=people["foundryman"]/40 && items["coal"]>=people["foundryman"]/200)
{
	consumption["iron"]+=people["foundryman"]/100
	consumption["coal"]+=people["foundryman"]/200
	consumption["food"]+=people["foundryman"]/40
	production["steel"]+=people["foundryman"]/400

}

if (items["food"]>=people["pikeman"]/40)
{
	consumption["food"]+=people["pikeman"]/40
	production["morale"]+=people["pikeman"]/200
}

if (items["food"]>=people["swordman"]/10)
{
	consumption["food"]+=people["swordman"]/10
	production["morale"]+=people["swordman"]/400
}

if (items["food"]>=people["knight"]/2)
{
	consumption["food"]+=people["knight"]/2
	production["morale"]+=people["knight"]/100
}

consumption["food"]+=people["medic"]/10

if (items["food"]>=people["bersek"]/5 && items["gold"]>=people["bersek"]/400)
{
	consumption["food"]+=people["bersek"]/5
	consumption["gold"]+=people["bersek"]/400
	production["morale"]+=people["bersek"]/25
}

if (items["food"]>=people["warelephant"]*2.5 && items["water"]>=people["warelephant"]/2)
{
	consumption["food"]+=people["warelephant"]*2.5;
	consumption["water"]+=people["warelephant"]/2;
	production["morale"]+=people["warelephant"]/200;
}

if (bonus["invest"]>=0.025)
{
	bonus["invest"]-=0.025
	craft["coin"]+=0.025
}

for(key in items){

	var result=(production[key]*(bonus[key]+bonus["global"]+1))-consumption[key]

	if((items[key]+result)<(maximums[key]*(bonus["storage"]+1))){
		items[key]+=(production[key]*(bonus[key]+bonus["global"]+1))-consumption[key];
	}
	else
	{
		items[key]=(maximums[key]*(bonus["storage"]+1))
	}

}

}

}