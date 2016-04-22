
var items=new Array()

items["wood"]=10;
items["mineral"]=5;
items["sand"]=0;
items["clay"]=0;
items["cement"]=0;
items["concrete"]=0;
items["water"]=0;
items["food"]=0;
items["copper"]=0;
items["gold"]=0;
items["iron"]=0;
items["coal"]=0;
items["tin"]=0;
items["nickel"]=0;
items["silicon"]=0;
items["lithium"]=0;
items["steel"]=0;
items["chemicals"]=0;
items["morale"]=0;
items["knowledge"]=0;


var bonus =new Array()
for(key in items){
	bonus[key]=0;
}
bonus["savetime"]=0;
bonus["global"]=0;
bonus["trade"]=0;
bonus["craft"]=0;
bonus["title"]=0;
bonus["reespeccost"]=0;
bonus["power"]=0;
bonus["hp"]=0;
bonus["healing"]=0;
bonus["storage"]=0;
bonus["economy"]=0;
bonus["science"]=0;
bonus["military"]=0;
bonus["knowledge"]=0;
bonus["territory"]=0;
bonus["expansion"]=0;
bonus["invest"]=0;
bonus["shipspeed"]=0;
bonus["shiphp"]=0;
bonus["shippower"]=0;
bonus["shipcargo"]=0;
bonus["warpcost"]=0;
bonus["theme"]=0;
bonus["exprew"]=0;
bonus["booking"]=0;
bonus["auto"]=0;
bonus["legacy"]=0;
bonus["energy"]=0;
bonus["rush"]=0;

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
buildings["quarry"]=0;
buildings["carpentry"]=0;
buildings["blastfurnace"]=0;
buildings["compressor"]=0;
buildings["share"]=0;
buildings["repository"]=0;
buildings["trainstation"]=0;
buildings["workshop"]=0;
buildings["powerplant"]=0;
buildings["cementkiln"]=0;
buildings["concretemixer"]=0;
buildings["university"]=0;
buildings["toolfactory"]=0;
buildings["barracks"]=0;

var buildstatus =new Array()
for(key in buildings){
	buildstatus[key]=1;
}

var maximums=new Array()

maximums["population"]=0;
maximums["ships"]=0;
maximums["trains"]=0;
maximums["bet"]=0;
maximums["energy"]=0;

for(key in items){
	maximums[key]=0;
}
maximums["wood"]=50
maximums["mineral"]=20

var population=0;
var ships=0;
var trains=0;

var technologies=new Array()
var autotechnologies=new Array()

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
technologies["rampage"]=0
technologies["galleon"]=0
technologies["wareconomy"]=0
technologies["canteen"]=0
technologies["glassblowing"]=0
technologies["architecture"]=0
technologies["domestication"]=0
technologies["construction"]=0
technologies["chemistry"]=0
technologies["risk"]=0
technologies["elephantry"]=0
technologies["undergroundstorage"]=0
technologies["expansion"]=0
technologies["investigation"]=0
technologies["internationalization"]=0
technologies["camps"]=0
technologies["investment"]=0
technologies["fireship"]=0
technologies["careening"]=0
technologies["deals"]=0
technologies["finding"]=0
technologies["seacaptain"]=0
technologies["openmining"]=0
technologies["masonry"]=0
technologies["woodwork"]=0
technologies["multitasking"]=0
technologies["commodities"]=0
technologies["quenching"]=0
technologies["castiron"]=0
technologies["commerce"]=0
technologies["insecticides"]=0
technologies["explosives"]=0
technologies["safes"]=0
technologies["packaging"]=0
technologies["ammunition"]=0
technologies["gunnery"]=0
technologies["wisdom"]=0
technologies["windward"]=0
technologies["mineralcoal"]=0;
technologies["carrying"]=0
technologies["shareholding"]=0
technologies["steamengine"]=0
technologies["safestorage"]=0
technologies["metalwork"]=0
technologies["armoredcombat"]=0
technologies["railtransport"]=0
technologies["industrialization"]=0
technologies["academicpublishing"]=0
technologies["patents"]=0
technologies["triforce"]=0
technologies["logistics"]=0
technologies["electricity"]=0
technologies["pyroprocessing"]=0
technologies["education"]=0
technologies["cementhydration"]=0
technologies["workforce"]=0
technologies["militarization"]=0
technologies["wargames"]=0

var people=new Array();
people["woodcutter"]=0
people["smelter"]=0
people["farmer"]=0
people["miner"]=0
people["foundryman"]=0
people["sailor"]=0
people["scientist"]=0
people["marketer"]=0

people["pikeman"]=0
people["swordman"]=0
people["knight"]=0
people["medic"]=0
people["bersek"]=0
people["warelephant"]=0
people["musketeer"]=0

people["lighttank"]=0

people["cargotrain"]=0

people["sucellus"]=0
people["eredal"]=0
people["khrysos"]=0
people["elisia"]=0
people["xochiquetzal"]=0
people["warmuk"]=0
people["foehn"]=0
people["alfear"]=0

people["galley"]=0
people["galleon"]=0
people["fireship"]=0
people["caravel"]=0

var craft=new Array();

craft["coin"]=0
craft["book"]=0
craft["plans"]=0
craft["ammo"]=0
craft["token"]=0
craft["chest"]=0
craft["bottle"]=0
craft["block"]=0
craft["structure"]=0
craft["frame"]=0
craft["brick"]=0
craft["plank"]=0
craft["glass"]=0
craft["bronze"]=0
craft["plate"]=0
craft["engine"]=0
craft["pickaxe"]=0
craft["toolbox"]=0
craft["spear"]=0
craft["sword"]=0
craft["greatsword"]=0
craft["musket"]=0
craft["armor"]=0
craft["gunpowder"]=0
craft["horse"]=0
craft["elephant"]=0
craft["supplies"]=0
craft["lock"]=0
craft["artifact"]=0
craft["diamond"]=0


var unlocked=new Array();

var enemy=new Array();
enemy["reward"]=0;
enemy["peasant"]=0;
enemy["bandit"]=0;
enemy["mercenary"]=0;
enemy["soldier"]=0;
enemy["halberdier"]=0;
enemy["warrior"]=0;
enemy["rifleman"]=0;

var techvisible=1;

function develop(b){

	bonus[b]+=items["knowledge"]-0.001


	if(b=="economy"){
		bonus["global"]+=(items["knowledge"]-0.001)/(((bonus["economy"]+(items["knowledge"]/2)+100000)))

	}
	else if(b=="science"){
		bonus["craft"]+=(items["knowledge"]*1.5)/(((bonus["science"]+(items["knowledge"]/2)+100000)))

	}
	else if(b=="military"){
		bonus["power"]+=(items["knowledge"]*2)/(((bonus["military"]+(items["knowledge"]/2)+100000)))
		bonus["hp"]+=(items["knowledge"]*2)/(((bonus["military"]+(items["knowledge"]/2)+100000)))
	}





	items["knowledge"]=0.001;
	researchunlock()
}
function reespec(){
	cost = Math.floor(Math.pow(1.7,(bonus["reespeccost"]))*5)
	if(people["xochiquetzal"]>=1){
		if(population>(maximums["population"]-(people["xochiquetzal"]*2))){
			alert('A Leader Respec would cause you to exceed the population maximum.\nFire ' + (maximums["population"]-people["xochiquetzal"]*2-population) + ' workers and try again.')
			return;

		}
	}
	if(prestige["treasure"]>=cost){
		prestige["treasure"]-=cost;
		bonus["wood"]-=0.20*people["sucellus"]
		bonus["water"]-=0.20*people["sucellus"]
		bonus["food"]-=0.20*people["sucellus"]
		maximums["water"]-=5*people["sucellus"]
		bonus["copper"]-=0.10*people["eredal"]
		bonus["iron"]-=0.10*people["eredal"]
		bonus["steel"]-=0.10*people["eredal"]
		bonus["mineral"]-=0.10*people["eredal"]
		bonus["gold"]-=0.25*people["khrysos"]
		bonus["trade"]-=0.10*people["khrysos"]
		bonus["craft"]-=0.05*people["elisia"]
		maximums["wood"]-=500*people["elisia"]
		maximums["mineral"]-=500*people["elisia"]
		maximums["population"]-=2*people["xochiquetzal"]
		bonus["hp"]-=0.05*people["xochiquetzal"]
		bonus["power"]-=0.10*people["warmuk"]
		bonus["morale"]-=0.05*people["warmuk"]
		maximums["morale"]-=2*people["warmuk"]
		bonus["shippower"]-=0.10*people["foehn"]
		bonus["shiphp"]-=0.10*people["foehn"]
		bonus["shipcargo"]-=0.15*people["foehn"]
		bonus["knowledge"]-=0.10*people["alfear"]
		maximums["knowledge"]-=100*people["alfear"]
		bonus["title"]+=people["sucellus"]+people["eredal"]+people["khrysos"]+people["elisia"]+people["xochiquetzal"]+people["warmuk"]+people["foehn"]+people["alfear"]
		people["sucellus"]=0
		people["eredal"]=0
		people["khrysos"]=0
		people["elisia"]=0
		people["xochiquetzal"]=0
		people["warmuk"]=0
		people["foehn"]=0
		people["alfear"]=0
		bonus["reespeccost"]+=1;
	}
}
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
function lead(b){


	if(bonus["title"]>=1){
		if (b=="sucellus"){

			bonus["wood"]+=0.20
			bonus["food"]+=0.20
			bonus["water"]+=0.20
			maximums["water"]+=5
			bonus["title"]--
			people["sucellus"]+=1;


		}
		else if (b=="eredal"){

			bonus["mineral"]+=0.10
			bonus["copper"]+=0.10
			bonus["iron"]+=0.10
			bonus["steel"]+=0.10

			bonus["title"]--
			people["eredal"]+=1;


		}
		else if (b=="khrysos"){

			bonus["gold"]+=0.25
			bonus["trade"]+=0.10

			bonus["title"]--
			people["khrysos"]+=1;


		}
		else if (b=="elisia"){

			bonus["craft"]+=0.05
			maximums["wood"]+=500;
			maximums["mineral"]+=500;

			bonus["title"]--
			people["elisia"]+=1;


		}
		else if (b=="xochiquetzal"){

			maximums["population"]+=2;
			bonus["hp"]+=0.05;

			bonus["title"]--
			people["xochiquetzal"]+=1;


		}
		else if (b=="warmuk"){

			bonus["power"]+=0.10;
			bonus["morale"]+=0.05;
			maximums["morale"]+=2;

			bonus["title"]--
			people["warmuk"]+=1;


		}
		else if (b=="foehn"){

			bonus["shippower"]+=0.10;
			bonus["shiphp"]+=0.10;
			bonus["shipcargo"]+=0.15;

			bonus["title"]--
			people["foehn"]+=1;


		}
		else if (b=="alfear"){

			bonus["knowledge"]+=0.10;
			maximums["knowledge"]+=100;


			bonus["title"]--
			people["alfear"]+=1;


		}



	}






}

function expedition(){
	power=0
	power+=people["pikeman"]*5
	power+=people["swordman"]*10
	power+=people["knight"]*25
	power+=people["medic"]*1
	power+=people["bersek"]*80
	power+=people["warelephant"]*100
	power+=people["musketeer"]*75


	foodcost=power*2
	watercost=power
	moralecost=power/5
	coalcost=0
	coalcost+=people["lighttank"]*50
	power+=people["lighttank"]*500
	power=power*(bonus["power"]+1)*(bonus["exprew"]+1)

	if(power>0 && items["food"]>=foodcost && items["water"]>=watercost && items["morale"]>=moralecost && items["coal"]>=coalcost){


		items["food"]-=foodcost;
		items["water"]-=watercost;
		items["morale"]-=moralecost;
		items["coal"]-=coalcost;

		$(".expeditionresult").html("")
		$(".encounter").hide()



		if(Math.random()>0.40){


			reward="The expedition found:<br>";


			if(Math.random()>0.50){
				rnd=(Math.random()*power)*25;
				reward+=parseFloat(rnd).toFixed(2) + " wood<br>";
				items["wood"]+=rnd;
			}
			if(Math.random()>0.70){
				rnd=(Math.random()*power)*15;
				reward+=parseFloat(rnd).toFixed(2) + " minerals<br>";
				items["mineral"]+=rnd;
			}
			if(Math.random()>0.80){
				rnd=(Math.random()*power)*5;
				reward+=parseFloat(rnd).toFixed(2) + " food<br>";
				items["food"]+=rnd;
			}
			if(Math.random()>0.85 && technologies["finding"]==1){
				rnd=(Math.random()*power);
				reward+=parseFloat(rnd).toFixed(2) + " sand<br>";
				items["sand"]+=rnd;
			}
			if(Math.random()>0.925){
				rnd=(Math.random()*power)/5;
				reward+=parseFloat(rnd).toFixed(2) + " copper<br>";
				items["copper"]+=rnd;
			}
			if(Math.random()>0.925){
				rnd=(Math.random()*power)/8;
				reward+=parseFloat(rnd).toFixed(2) + " iron<br>";
				items["iron"]+=rnd;
			}
			if(Math.random()>0.95){
				rnd=(Math.random()*power)/20;
				reward+=parseFloat(rnd).toFixed(2) + " gold<br>";
				items["gold"]+=rnd;
			}
			if(Math.random()>0.95 && technologies["spear"]==1){
				rnd=Math.round((Math.random()*power)/50)+1;
				reward+=parseFloat(rnd).toFixed(2) + " spear<br>";
				craft["spear"]+=rnd;
			}
			if(Math.random()>0.95 && technologies["sword"]==1){
				rnd=Math.round((Math.random()*power)/50)+1;
				reward+=parseFloat(rnd).toFixed(2) + " sword<br>";
				craft["sword"]+=rnd;
			}
			if(Math.random()>0.95 && technologies["storage"]==1){
				rnd=Math.round((Math.random()*power)/200)+1;
				reward+=parseFloat(rnd).toFixed(2) + " block<br>";
				craft["block"]+=rnd;
			}
			if(Math.random()>0.95 && technologies["coin"]==1){
				rnd=Math.round((Math.random()*power)/300)+1;
				reward+=parseFloat(rnd).toFixed(2) + " coin<br>";
				craft["coin"]+=rnd;
			}
			if(Math.random()>0.90 && technologies["finding"]==1){
				rnd=(Math.random()*power)/50;
				reward+=parseFloat(rnd).toFixed(2) + " clay<br>";
				items["clay"]+=rnd;
			}
			if(Math.random()>0.95 && technologies["finding"]==1){
				rnd=(Math.random()*power)/500;
				reward+=parseFloat(rnd).toFixed(2) + " brick<br>";
				craft["brick"]+=rnd;
			}
			if(Math.random()>0.90 && technologies["husbandry"]==1){
				rnd=Math.round((Math.random()*power)/300)+1;
				reward+=parseFloat(rnd).toFixed(2) + " horse<br>";
				craft["horse"]+=rnd;
			}
			if(Math.random()>0.95 && technologies["cache"]==1){
				rnd=Math.round((Math.random()*power)/300)+1;
				reward+=parseFloat(rnd).toFixed(2) + " lock<br>";
				craft["lock"]+=rnd;
			}
			if(Math.random()>0.95 && technologies["canteen"]==1){
				rnd=(Math.random()*power)/500;
				reward+=parseFloat(rnd).toFixed(2) + " bottle<br>";
				craft["bottle"]+=rnd;
				maximums["water"]+=rnd;
			}
			if(Math.random()>0.90 && technologies["safestorage"]==1){
				rnd=(Math.random()*power)/500;
				reward+=parseFloat(rnd).toFixed(2) + " nickel<br>";
				items["nickel"]+=rnd;
			}
			if(Math.random()>0.99 && technologies["cache"]==1){
				rnd=(Math.random()*power)/500;
				reward+=parseFloat(rnd).toFixed(2) + " chest<br>";
				craft["chest"]+=rnd;
				maximums["wood"]+=50*(rnd);
				maximums["mineral"]+=25*(rnd);
				maximums["food"]+=10*(rnd);
				maximums["copper"]+=0.3*(rnd);
				maximums["gold"]+=0.05*(rnd);
				maximums["iron"]+=0.2*(rnd);
				maximums["tin"]+=0.15*(rnd);
				maximums["coal"]+=0.15*(rnd);
				maximums["steel"]+=0.10*(rnd);

			}
			if(Math.random()>0.95 && technologies["domestication"]==1){
				rnd=Math.round((Math.random()*power)/800)+1;
				reward+=parseFloat(rnd).toFixed(2) + " elephant<br>";
				craft["elephant"]+=rnd;
			}

			if(reward!="The expedition found:<br>")

			{
				$(".expeditionresult").html(reward)
			}
			else
			{

				$(".expeditionresult").html("The expedition did not find anything useful.")
			}


		}
		else
		{
			hp=0;
			hp+=people["pikeman"]*30
			hp+=people["swordman"]*50
			hp+=people["knight"]*200
			hp+=people["medic"]*50
			hp+=people["bersek"]*100
			hp+=people["warelephant"]*1200
			hp+=people["musketeer"]*400
			hp+=people["lighttank"]*5000

			hp=hp*(bonus["hp"]+1)

			healing=0
			healing+=people["medic"]*10
			healing=healing*(bonus["healing"]+1)

			burst=0;
			burst+=people["bersek"]*80
			burst=burst*(bonus["power"]+1)

			power=power/(bonus["exprew"]+1)

			power-=people["warelephant"]*25*(bonus["power"]+1)
			power-=people["lighttank"]*250*(bonus["power"]+1)
			power+=people["musketeer"]*25*(bonus["power"]+1)

			armor=0;
			armor+=people["swordman"]*3
			armor+=people["knight"]*10
			armor+=people["lighttank"]*50

			power=(power/2)+(hp/10)+(healing/2)+(burst/10)+(armor/2)

			enemy["reward"]=0;
			enemy["peasant"]=0;
			enemy["bandit"]=0;
			enemy["mercenary"]=0;
			enemy["soldier"]=0;
			enemy["halberdier"]=0;
			enemy["warrior"]=0;
			enemy["rifleman"]=0;

			var enemytipo=Math.random()*power;
			var stringencuentro="Enemies:<br>"
			var rew=0;
			if(enemytipo<25){
				enemy["peasant"]=Math.round((Math.random()*power*0.50)+(power*0.14))+1;
				stringencuentro+=enemy["peasant"]+" Peasants (Attack:2 Hp:8)<br>";
				rew+=(Math.random()*enemy["peasant"]*0.07)+(enemy["peasant"]*0.015)
			}
			if(enemytipo>=25 && enemytipo<50){
				enemy["bandit"]=Math.round((Math.random()*power*0.22)+(power*0.070))+1;
				stringencuentro+=enemy["bandit"]+" Bandits (Attack:4 Hp:15)<br>";
				rew+=(Math.random()*enemy["bandit"]*0.14)+(enemy["bandit"]*0.03)
			}
			if(enemytipo>=50 && enemytipo<100){
				enemy["peasant"]=Math.round((Math.random()*power*0.25)+(power*0.07))+1;
				stringencuentro+=enemy["peasant"]+" Peasants (Attack:2 Hp:8)<br>";
				rew+=(Math.random()*enemy["peasant"]*0.07)+(enemy["peasant"]*0.015)
				enemy["bandit"]=Math.round((Math.random()*power*0.11)+(power*0.035))+1;
				stringencuentro+=enemy["bandit"]+" Bandits (Attack:4 Hp:15)<br>";
				rew+=(Math.random()*enemy["bandit"]*0.14)+(enemy["bandit"]*0.03)
			}
			if(enemytipo>=100 && enemytipo<150){
				enemy["mercenary"]=Math.round((Math.random()*power*0.090)+(power*0.018))+1;
				stringencuentro+=enemy["mercenary"]+" Mercenarys (Attack:9 Hp:40 armor:5)<br>";
				rew+=(Math.random()*enemy["mercenary"]*0.32)+(enemy["mercenary"]*0.07)
			}
			if(enemytipo>=150 && enemytipo<200){
				enemy["peasant"]=Math.round((Math.random()*power*0.22)+(power*0.05))+1;
				stringencuentro+=enemy["peasant"]+" Peasants (Attack:2 Hp:8)<br>";
				rew+=(Math.random()*enemy["peasant"]*0.07)+(enemy["peasant"]*0.015)
				enemy["bandit"]=Math.round((Math.random()*power*0.07)+(power*0.015))+1;
				stringencuentro+=enemy["bandit"]+" Bandits (Attack:4 Hp:15)<br>";
				rew+=(Math.random()*enemy["bandit"]*0.14)+(enemy["bandit"]*0.03)
				enemy["mercenary"]=Math.round((Math.random()*power*0.01)+(power*0.01))+1;
				stringencuentro+=enemy["mercenary"]+" Mercenarys (Attack:9 Hp:40 armor:5)<br>";
				rew+=(Math.random()*enemy["mercenary"]*0.32)+(enemy["mercenary"]*0.07)
			}
			if(enemytipo>=200 && enemytipo<280){
				enemy["soldier"]=Math.round((Math.random()*power*0.04)+(power*0.010))+1;
				stringencuentro+=enemy["soldier"]+" Soldiers (Attack:15 Hp:100 armor:10)<br>";
				rew+=(Math.random()*enemy["soldier"]*0.68)+(enemy["soldier"]*0.15)
			}
			if(enemytipo>=280 && enemytipo<420){
				enemy["halberdier"]=Math.round((Math.random()*power*0.022)+(power*0.007))+1;
				stringencuentro+=enemy["halberdier"]+" Halberdier (Attack:40 Hp:160)<br>";
				rew+=(Math.random()*enemy["halberdier"]*1.2)+(enemy["halberdier"]*0.30)
			}
			if(enemytipo>=420 && enemytipo<600){
				enemy["warrior"]=Math.round((Math.random()*power*0.011)+(power*0.005))+1;
				stringencuentro+=enemy["warrior"]+" Warrior (Attack:50 Hp:400)<br>";
				rew+=(Math.random()*enemy["warrior"]*2)+(enemy["warrior"]*0.50)
			}
			if(enemytipo>=600 && enemytipo<800){
				enemy["halberdier"]=Math.round((Math.random()*power*0.011)+(power*0.0034))+1;
				stringencuentro+=enemy["halberdier"]+" Halberdier (Attack:40 Hp:160)<br>";
				rew+=(Math.random()*enemy["halberdier"]*1.2)+(enemy["halberdier"]*0.30)
				enemy["warrior"]=Math.round((Math.random()*power*0.005)+(power*0.0024))+1;
				stringencuentro+=enemy["warrior"]+" Warrior (Attack:50 Hp:400)<br>";
				rew+=(Math.random()*enemy["warrior"]*2)+(enemy["warrior"]*0.50)
			}
			if(enemytipo>=800){
				enemy["rifleman"]=Math.round((Math.random()*power*0.005)+(power*0.0022))+1;
				stringencuentro+=enemy["rifleman"]+" Rifleman (Attack:200 Hp:400)<br>";
				rew+=(Math.random()*enemy["rifleman"]*5)+(enemy["rifleman"]*1.5)
			}
			enemy["reward"]=rew;
			stringencuentro+="Reward: "+parseFloat(rew).toFixed(2)+" Coins<br>"
			stringencuentro+="<button class='fight' onclick='fight()'>Fight</button><button class='retreat' onclick='retreat()'>Flee</button>";


			$(".encounter").show()
			$(".expeditionresult").html("Some enemies appeared in our way!")
			$(".encounter").html(stringencuentro)

		}




	}
}



function fight(){
	power=0;
	power+=people["pikeman"]*5
	power+=people["swordman"]*10
	power+=people["knight"]*25
	power+=people["medic"]*1
	power+=people["bersek"]*80

	disobey=people["warelephant"]*100*(bonus["power"]+1)

	reload=0;
	reload+=people["musketeer"]*200*(bonus["power"]+1)
	reload+=people["lighttank"]*500*(bonus["power"]+1)

	power=power*(bonus["power"]+1)

	hp=0;
	hp+=people["pikeman"]*30
	hp+=people["swordman"]*50
	hp+=people["knight"]*200
	hp+=people["medic"]*50
	hp+=people["bersek"]*100
	hp+=people["warelephant"]*1200
	hp+=people["musketeer"]*400
	hp+=people["lighttank"]*5000

	hp=hp*(bonus["hp"]+1)

	armor=0
	armor+=people["swordman"]*3
	armor+=people["knight"]*10
	armor+=people["lighttank"]*50

	armor2=0
	armor2+=enemy["mercenary"]*5
	armor2+=enemy["soldier"]*10

	burst=0;
	burst+=people["bersek"]*80

	burst=burst*(bonus["power"]+1)

	power2=0;
	power2+=enemy["peasant"]*2
	power2+=enemy["bandit"]*4
	power2+=enemy["mercenary"]*9
	power2+=enemy["soldier"]*15
	power2+=enemy["halberdier"]*40
	power2+=enemy["warrior"]*50
	power2+=enemy["rifleman"]*200

	hp2=0;
	hp2+=enemy["peasant"]*8
	hp2+=enemy["bandit"]*15
	hp2+=enemy["mercenary"]*40
	hp2+=enemy["soldier"]*100
	hp2+=enemy["halberdier"]*160
	hp2+=enemy["warrior"]*400
	hp2+=enemy["rifleman"]*400

	healing=0
	healing+=people["medic"]*10

	healing=healing*(bonus["healing"]+1)
	combatlog="The battle began!<br>"
	var ronda=0;
	for(i=0;i<=50;i++){
		dmg1=power+(Math.random()*(power/4))-(Math.random()*(power/4));
		dmg2=power2+(Math.random()*(power2/4))-(Math.random()*(power2/4));
		if(i==0 && burst>0){
		dmg1+=burst+(Math.random()*(burst/4))-(Math.random()*(burst/4));
		}

		combatlog+="Round "+(i+1)+"<br>"
		if(disobey>0 && Math.random()>0.75){
		combatlog+="The elephants stubbornly refuse to attack.<br>"
		}
		else
		{
		dmg1+=disobey+(Math.random()*(disobey/4))-(Math.random()*(disobey/4));
		}
		if(i%2!=0 && reload>0){
		dmg1+=reload+(Math.random()*(reload/4))-(Math.random()*(reload/4));
		}
		else if(reload>0 && craft["ammo"]>=(people["musketeer"]+(people["lighttank"]*4)))
		{
			if(i==0){
			combatlog+="Your troops load their weapons.<br>"
			}
			else
			{
			combatlog+="Your troops are reloading.<br>"
			}
		ammocost=0;
		ammocost+=people["musketeer"]
		ammocost+=people["lighttank"]*4
		combatlog+="-"+ammocost+" ammo <br>"
		craft["ammo"]-=ammocost;
		}
		else if(reload>0)
		{
		combatlog+="Your troops are out of ammo!<br>"
		reload=0;
		}



		if(armor>0){

			dmg2-=armor;
			if(dmg2<0){
				dmg2=0;
				combatlog+="Your troop's armor blocks all damage!<br>"
			} else {
				combatlog+="Your troop's armor blocks "+armor+" damage.<br>"
			}
		}
		if(armor2>0){

			dmg1-=armor2;
			
			if(dmg1<0){
				dmg1=0;
				combatlog+="The enemy's armor blocks all damage!<br>"
			} else {
				combatlog+="The enemy's armor blocks "+armor2+" damage.<br>"
			}
		}
		if(i==0 && burst>0){
			combatlog+="Your troops smash into the enemy lines and deal "+intToString(dmg1)+" damage!<br>"
		} else if(dmg1>power*1.1){
			combatlog+="Your troops find a weak spot and deal "+intToString(dmg1)+" damage!<br>"
		} else if(dmg1<power*.9){
			combatlog+="Your troops hesitate, and only deal "+intToString(dmg1)+" damage.<br>"
		} else {
			combatlog+="Your troops deal "+intToString(dmg1)+" damage.<br>"
		}
		if(dmg2>power2*1.1){
			combatlog+="The enemy finds a weak spot and deals "+intToString(dmg2)+" damage!<br>"
		} else if(dmg2<power2*.9){
			combatlog+="The enemy hesitates, and only deals "+intToString(dmg2)+" damage.<br>"
		} else {
			combatlog+="The enemy deals "+intToString(dmg2)+" damage.<br>"
		}		

		if(healing>0){
			healed=healing+(Math.random()*(healing/8))-(Math.random()*(healing/8));
			hp+=healed;
			combatlog+="Your medics restore "+intToString(healed)+" hp.<br>"
		}

		hp2-=dmg1;
		hp-=dmg2;
		combatlog+="Your hp: "+Math.round(hp) +" / Enemy hp: "+Math.round(hp2)+"<br><br>";
		if(hp<0){
			combatlog+="You lost the combat...<br>"
			if(people["pikeman"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["pikeman"]-1))+1
				people["pikeman"]-=losses;
				population-=losses;
				combatlog+="You lost "+losses+" pikeman.<br>"
			}
			if(people["swordman"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["swordman"]-1))+1
				people["swordman"]-=losses;
				population-=losses;
				combatlog+="You lost "+losses+" swordman.<br>"
			}
			if(people["knight"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["knight"]-1))+1
				people["knight"]-=losses;
				population-=losses;
				combatlog+="You lost "+losses+" knights.<br>"
			}
			if(people["medic"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["medic"]-1))+1
				people["medic"]-=losses;
				population-=losses;
				combatlog+="You lost "+losses+" medics.<br>"
			}
			if(people["bersek"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["bersek"]-1))+1
				people["bersek"]-=losses;
				population-=losses;
				combatlog+="You lost "+losses+" berseks.<br>"
			}
			if(people["warelephant"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["warelephant"]-1))+1
				people["warelephant"]-=losses;
				population-=losses;
				combatlog+="You lost "+losses+" war elephants.<br>"
			}
			if(people["musketeer"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["musketeer"]-1))+1
				people["musketeer"]-=losses;
				population-=losses;
				combatlog+="You lost "+losses+" musketeers.<br>"
			}
			if(people["lighttank"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["lighttank"]-1))+1
				people["lighttank"]-=losses;
				population-=losses*3;
				combatlog+="You lost "+losses+" light tanks.<br>"
			}
			break;
		}
		else if(hp2<0){
			var reward="";
			combatlog+="Your troops won the combat!<br><br>";
			combatlog+="You won "+ intToString(enemy["reward"])+" coins<br>";
			$(".encounter").hide()
			craft["coin"]+=enemy["reward"];
			if(Math.random()>0.80 && technologies["cache"]==1){
				rnd=(Math.random()*((power/2)+(hp/15)))/300;
				reward+=parseFloat(rnd).toFixed(2) + " chest<br>";
				craft["chest"]+=rnd;
				combatlog+="You took "+ intToString(rnd)+" chests that they were carrying.<br>";
				maximums["wood"]+=50*(rnd);
				maximums["mineral"]+=25*(rnd);
				maximums["food"]+=10*(rnd);
				maximums["copper"]+=0.3*(rnd);
				maximums["gold"]+=0.05*(rnd);
				maximums["iron"]+=0.2*(rnd);
				maximums["tin"]+=0.15*(rnd);
				maximums["coal"]+=0.15*(rnd);
				maximums["steel"]+=0.10*(rnd);
			}
			if(Math.random()>0.80 && technologies["cache"]==1){
				rnd=Math.floor(power/300)+1;
				reward+=parseFloat(rnd).toFixed(2) + " lock<br>";
				craft["lock"]+=rnd;
				combatlog+="You found "+ Math.round(rnd)+" locks.<br>";
			}
			if(Math.random()>0.80 && technologies["canteen"]==1){
				rnd=(Math.random()*((power/2)+(hp/15)))/400;
				combatlog+="You found "+ intToString(rnd)+" bottles.<br>";
				craft["bottle"]+=rnd;
				maximums["water"]+=rnd;
			}
			if(Math.random()>0.70 && technologies["intelligence"]==1){
				rnd=(Math.random()*((power/2)+(hp/15)))/4;
				reward+=parseFloat(rnd).toFixed(2) + " knowledge<br>";
				items["knowledge"]+=rnd;
				combatlog+="Your intelligence service stole "+ Math.round(rnd)+" knowledge from the enemy.<br>";
			}
			if(Math.random()>0.50 && technologies["wargames"]==1){
				rnd=(Math.random()*((power/2)+(hp/15)))/4;
				reward+=parseFloat(rnd).toFixed(2) + " plans<br>";
				craft["plans"]+=rnd;
				combatlog+="Your intelligence service produced  "+ Math.round(rnd)+" new plans.<br>";
			}
			if(Math.random()>0.98){
				combatlog+="You found a diamond!<br>";
				craft["diamond"]+=1;
				diamonize();
			}
			if(Math.random()>0.999){
				combatlog+="You found a strange artifact!<br>";
				craft["artifact"]+=1;
			}
			break;
		}

		ronda++
	}

	if(i>49){
		combatlog+="The combat ended in a draw...<br>"
	}

	$(".expeditionresult").html(combatlog)
	$(".encounter").html("")
	$(".encounter").hide()
}


function retreat(){
	$(".expeditionresult").html("You flee cowardly")
	$(".encounter").hide()
}
function crafting(b){
	var tocraft=1;
	if(buildstatus["workbench"]==1 && b!="book" && b!="patent"){
		tocraft=buildings["workbench"]+1;
	}
	for(i=0;i<tocraft;i++)
	{
		if (b=="pickaxe"){

			woodcost=20;
			coppercost=1;

			if (items["copper"]>=coppercost && items["wood"]>=woodcost){

				items["copper"]-=coppercost;
				items["wood"]-=woodcost;
				craft["pickaxe"]+=1+bonus["craft"];

			}

		}
		else if (b=="spear"){

			woodcost=50;
			coppercost=3;

			if (items["copper"]>=coppercost && items["wood"]>=woodcost){

				items["copper"]-=coppercost;
				items["wood"]-=woodcost;
				craft["spear"]+=1+bonus["craft"];

			}

		}
		else if (b=="sword"){

			ironcost=10;

			if (items["iron"]>=ironcost){

				items["iron"]-=ironcost;
				craft["sword"]+=1+bonus["craft"];

			}

		}
		else if (b=="block"){

			woodcost=100;
			mineralcost=200;

			if (items["wood"]>=woodcost && items["mineral"]>=mineralcost){

				items["mineral"]-=mineralcost;
				items["wood"]-=woodcost;
				craft["block"]+=1+bonus["craft"];

			}

		}
		else if (b=="coin"){

			goldcost=5

			if (items["gold"]>=goldcost){

				items["gold"]-=goldcost;

				craft["coin"]+=1+bonus["craft"];

			}

		}
		else if (b=="bronze"){

			coppercost=40
			tincost=10

			if (items["copper"]>=coppercost && items["tin"]>=tincost){

				items["copper"]-=coppercost;
				items["tin"]-=tincost;

				craft["bronze"]+=1+bonus["craft"];

			}

		}
		else if (b=="structure"){

			woodcost=1000;
			ironcost=20;

			if (items["wood"]>=woodcost && items["iron"]>=ironcost){

				items["wood"]-=woodcost;
				items["iron"]-=ironcost;

				craft["structure"]+=1+bonus["craft"];

			}

		}
		else if (b=="armor"){

			steelcost=30;
			bronzecost=5;

			if (items["steel"]>=steelcost && craft["bronze"]>=bronzecost){

				items["steel"]-=steelcost;
				craft["bronze"]-=bronzecost;

				craft["armor"]+=1+bonus["craft"];

			}

		}
		else if (b=="supplies"){

			plankcost=5;
			foodcost=500;
			watercost=100;

			if (craft["plank"]>=plankcost && items["food"]>=foodcost && items["water"]>=watercost){

				craft["plank"]-=plankcost;
				items["food"]-=foodcost;
				items["water"]-=watercost;


				craft["supplies"]+=1+bonus["craft"];

			}

		}
		else if (b=="chest"){

			plankcost=100;
			steelcost=30;
			bronzecost=5;
			lockcost=1;

			if (craft["plank"]>=plankcost && craft["bronze"]>=bronzecost && craft["lock"]>=lockcost && items["steel"]>=steelcost){

				craft["plank"]-=plankcost;
				craft["bronze"]-=bronzecost;
				craft["lock"]-=lockcost 
				items["steel"]-=steelcost;


				craft["chest"]+=1+bonus["craft"];

				maximums["wood"]+=50*(bonus["craft"]+1);
				maximums["mineral"]+=25*(bonus["craft"]+1);
				maximums["food"]+=10*(bonus["craft"]+1);
				maximums["copper"]+=0.3*(bonus["craft"]+1);
				maximums["gold"]+=0.05*(bonus["craft"]+1);
				maximums["iron"]+=0.2*(bonus["craft"]+1);
				maximums["tin"]+=0.15*(bonus["craft"]+1);
				maximums["coal"]+=0.15*(bonus["craft"]+1);
				maximums["steel"]+=0.10*(bonus["craft"]+1);

			}

		}
		else if (b=="glass" && technologies["floatglass"]==1){

			tincost=50;
			sandcost=200;
			coalcost=50;

			if (items["tin"]>=tincost && items["sand"]>=sandcost && items["coal"]>=coalcost){

				items["tin"]-=tincost;
				items["sand"]-=sandcost;
				items["coal"]-=coalcost;


				craft["glass"]+=1+bonus["craft"];

			}

		}
		else if (b=="bottle" && technologies["glassblowing"]==1){

			glasscost=5;

			if (craft["glass"]>=glasscost){

				craft["glass"]-=glasscost;

				craft["bottle"]+=1+bonus["craft"];

				maximums["water"]+=1*(bonus["craft"]+1);


			}

		}
		else if (b=="greatsword" && technologies["rampage"]==1){

			steelcost=100;


			if (items["steel"]>=steelcost){

				items["steel"]-=steelcost;

				craft["greatsword"]+=1+bonus["craft"];




			}

		}
		else if (b=="frame" && technologies["architecture"]==1){

			blockcost=500;
			structurecost=100;
			steelcost=100;


			if (items["steel"]>=steelcost && craft["block"]>=blockcost && craft["structure"]>=structurecost){

				items["steel"]-=steelcost;
				craft["block"]-=blockcost
				craft["structure"]-=structurecost

				craft["frame"]+=1+bonus["craft"];

			}

		}
		else if (b=="brick" && technologies["masonry"]==1){

			sandcost=500;
			claycost=150;


			if (items["clay"]>=claycost && items["sand"]>=sandcost){

				items["sand"]-=sandcost;
				items["clay"]-=claycost


				craft["brick"]+=1+bonus["craft"];

			}

		}
		else if (b=="gunpowder" && technologies["explosives"]==1){


			sandcost=300;
			coalcost=100;
			bronzecost=10;
			chemicalscost=5;


			if (items["sand"]>=sandcost && items["coal"]>=coalcost && items["chemicals"]>=chemicalscost && craft["bronze"]>=bronzecost){

				items["sand"]-=sandcost;
				items["coal"]-=coalcost
				items["chemicals"]-=chemicalscost
				craft["bronze"]-=bronzecost

				craft["gunpowder"]+=1+bonus["craft"];

			}

		}
		else if (b=="ammo" && technologies["ammunition"]==1){



			ironcost=50;
			gunpowdercost=10;


			if (items["iron"]>=ironcost && craft["gunpowder"]>=gunpowdercost){

				items["iron"]-=ironcost;
				craft["gunpowder"]-=gunpowdercost


				craft["ammo"]+=500+(bonus["craft"]*500);

			}

		}
		else if (b=="musket" && technologies["gunnery"]==1){

			woodcost=500;
			ironcost=500;
			steelcost=300;



			if (items["iron"]>=ironcost && items["wood"]>=woodcost && items["steel"]>=steelcost){

				items["iron"]-=ironcost;
				items["wood"]-=woodcost
				items["steel"]-=steelcost

				craft["musket"]+=1+bonus["craft"];

			}

		}
		else if (b=="plate" && technologies["metalwork"]==1){

			coppercost=400;
			ironcost=200;
			nickelcost=10;




			if (items["copper"]>=coppercost && items["iron"]>=ironcost && items["nickel"]>=nickelcost){

				items["iron"]-=ironcost;
				items["copper"]-=coppercost
				items["nickel"]-=nickelcost

				craft["plate"]+=1+bonus["craft"];

			}

		}
		else if (b=="engine" && technologies["steamengine"]==1){

			steelcost=400;
			platecost=100;
			bronzecost=200;



			if (items["steel"]>=steelcost && craft["plate"]>=platecost && craft["bronze"]>=bronzecost){

				items["steel"]-=steelcost
				craft["plate"]-=platecost;
				craft["bronze"]-=bronzecost;

				craft["engine"]+=1+bonus["craft"];

			}

		}
		else if (b=="book" && technologies["academicpublishing"]==1){

			knowledgecost=2500;



			if (items["knowledge"]>=knowledgecost){

				items["knowledge"]-=knowledgecost

				craft["book"]+=1+bonus["booking"];

			}

		}
		else if (b=="strategy" && technologies["wargames"]==1){

			planscost=2500;



			if (craft["plans"]>=planscost){

				craft["plans"]-=planscost

				craft["book"]+=1+bonus["booking"];

			}

		}
		else if (b=="patent" && technologies["patents"]==1){

			coincost=2500;

			if (craft["coin"]>=coincost){

				craft["coin"]-=coincost

				craft["book"]+=1+bonus["booking"];

			}

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
		ironcost=15

		if (items["iron"]>=ironcost  && items["mineral"]>=mineralcost  && items["wood"]>=woodcost  && technologies["storage"]==0){

			items["wood"]-=foodcost;
			items["mineral"]-=mineralcost;
			items["iron"]-=ironcost;

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
		goldcost=5;

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
	else if (b=="bronze" && technologies["bronze"]==0){

		ironcost=40;
		coppercost=40;

		if (items["iron"]>=ironcost && items["copper"]>=coppercost){

			items["iron"]-=ironcost;
			items["copper"]-=coppercost

			technologies["bronze"]++

			$(".craft_bronze").show()
			unlocked[".craft_bronze"]=1;
			$(".build_statue").show()
			unlocked[".build_statue"]=1;
		}

	}
	else if (b=="bronzetools" && technologies["bronzetools"]==0){

		bronzecost=2;

		if (craft["bronze"]>=bronzecost){

			craft["bronze"]-=bronzecost;

			bonus["wood"]+=0.2;
			bonus["mineral"]+=0.2;
			bonus["food"]+=0.2;
			bonus["copper"]+=0.1;
			bonus["iron"]+=0.1;
			bonus["tin"]+=0.1;

			technologies["bronzetools"]++



		}

	}
	else if (b=="charcoal" && technologies["charcoal"]==0){

		woodcost=4000
		mineralcost=2000

		if (items["wood"]>=woodcost && items["mineral"]>=mineralcost){

			items["wood"]-=woodcost;
			items["mineral"]-=mineralcost
			technologies["charcoal"]++

			$(".build_kiln").show()
			unlocked[".build_kiln"]=1;
		}

	}
	else if (b=="centralisation" && technologies["centralisation"]==0){

		woodcost=5000
		mineralcost=5000
		bronzecost=3
		goldcost=10

		if (items["wood"]>=woodcost && items["mineral"]>=mineralcost && craft["bronze"]>=bronzecost && items["gold"]>=goldcost){

			items["wood"]-=woodcost;
			items["mineral"]-=mineralcost
			items["gold"]-=goldcost
			craft["bronze"]-=bronzecost

			technologies["centralisation"]++

			$(".build_towncenter").show()
			unlocked[".build_towncenter"]=1;
			$(".craft_structure").show()
			unlocked[".craft_structure"]=1;
		}

	}
	else if (b=="steel" && technologies["steel"]==0){

		ironcost=50;
		coalcost=50;

		if (items["iron"]>=ironcost && items["coal"]>=coalcost){

			items["iron"]-=ironcost;
			items["coal"]-=coalcost;
			technologies["steel"]++

			$(".hire_foundryman").show()
			unlocked[".hire_foundryman"]=1;
		}

	}
	else if (b=="manufacturing" && technologies["manufacturing"]==0){

		steelcost=5;
		coincost=5;

		if (items["steel"]>=steelcost && craft["coin"]>=coincost){

			items["steel"]-=steelcost;
			craft["coin"]-=coincost;
			technologies["manufacturing"]++

			$(".build_workbench").show()
			unlocked[".build_workbench"]=1;
		}

	}
	else if (b=="steeltools" && technologies["steeltools"]==0){

		steelcost=10;

		if (items["steel"]>=steelcost){

			items["steel"]-=steelcost;

			bonus["wood"]+=0.3;
			bonus["mineral"]+=0.3;
			bonus["food"]+=0.3;
			bonus["copper"]+=0.1;
			bonus["iron"]+=0.1;
			bonus["tin"]+=0.1;
			bonus["steel"]+=0.05;

			technologies["steeltools"]++



		}

	}
	else if (b=="husbandry" && technologies["husbandry"]==0){

		foodcost=2500;

		if (items["food"]>=foodcost){

			items["food"]-=foodcost;

			technologies["husbandry"]++

		}

	}
	else if (b=="cavalry" && technologies["cavalry"]==0){

		goldcost=25;
		steelcost=25;

		if (items["gold"]>=goldcost && items["steel"]>=steelcost){

			items["steel"]-=steelcost;
			items["gold"]-=goldcost;

			technologies["cavalry"]++
			$(".craft_armor").show()
			unlocked[".craft_armor"]=1;
			$(".hire_knight").show()
			unlocked[".hire_knight"]=1;

		}

	}
	else if (b=="leadership" && technologies["leadership"]==0){

		coincost=25

		if (craft["coin"]>=coincost){

			craft["coin"]-=coincost


			technologies["leadership"]++
			$(".build_castle").show()
			unlocked[".build_castle"]=1;

		}

	}
	else if (b=="armament" && technologies["armament"]==0){

		spearcost=50
		swordcost=25
		armorcost=2

		if (craft["spear"]>=spearcost && craft["sword"]>=swordcost && craft["armor"]>=armorcost){

			craft["spear"]-=spearcost
			craft["sword"]-=swordcost
			craft["armor"]-=armorcost

			technologies["armament"]++
			bonus["power"]+=0.40;

		}

	}
	else if (b=="gambling" && technologies["gambling"]==0){

		coincost=50;

		if (craft["coin"]>=coincost){

			craft["coin"]-=coincost;


			technologies["gambling"]++
			$(".casinogame2").show()
			unlocked[".casinogame2"]=1;
		}

	}
	else if (b=="redeem" && technologies["redeem"]==0){

		tokencost=50;

		if (craft["token"]>=tokencost){

			craft["token"]-=tokencost;


			technologies["redeem"]++
			$(".build_relic").show()
			unlocked[".build_relic"]=1;
		}

	}
	else if (b=="wrapping" && technologies["wrapping"]==0){

		woodcost=20000;
		mineralcost=10000;

		if (items["wood"]>=woodcost && items["mineral"]>=mineralcost){

			bonus["storage"]+=0.10;
			items["wood"]-=woodcost;
			items["mineral"]-=mineralcost;

			technologies["wrapping"]++

		}

	}
	else if (b=="shipyard" && technologies["shipyard"]==0){

		woodcost=25000;


		if (items["wood"]>=woodcost){

			items["wood"]-=woodcost;


			technologies["shipyard"]++
			$(".build_shipyard").show()
			unlocked[".build_shipyard"]=1;
		}

	}
	else if (b=="sailing" && technologies["sailing"]==0){

		plankcost=100;


		if (craft["plank"]>=plankcost){

			craft["plank"]-=plankcost;


			technologies["sailing"]++
			$(".build_docks").show()
			unlocked[".build_docks"]=1;
		}

	}
	else if (b=="trade" && technologies["trade"]==0){

		foodcost=7000;
		goldcost=45;
		coincost=50;


		if (items["food"]>=foodcost && items["gold"]>=goldcost && craft["coin"]>=coincost){

			craft["coin"]-=coincost;
			items["gold"]-=goldcost;
			items["food"]-=foodcost;

			technologies["trade"]++
			$(".craft_supplies").show()
			unlocked[".craft_supplies"]=1;
			$(".hire_sailor").show()
			unlocked[".hire_sailor"]=1;
			$(".tradesea").show()
			unlocked[".tradesea"]=1;
		}

	}
	else if (b=="cache" && technologies["cache"]==0){

		mineralcost=22500;
		steelcost=100;
		plankcost=500;


		if (items["mineral"]>=mineralcost && items["steel"]>=steelcost && craft["plank"]>=plankcost){

			craft["plank"]-=plankcost;
			items["steel"]-=steelcost;
			items["mineral"]-=mineralcost;

			technologies["cache"]++
			$(".craft_chest").show()
			unlocked[".craft_chest"]=1;

		}

	}
	else if (b=="specialization" && technologies["specialization"]==0){

		knowledgecost=500;
		


		if (items["knowledge"]>=knowledgecost){

			items["knowledge"]-=knowledgecost

			technologies["specialization"]++
			$(".research_economy").show()
			unlocked[".research_economy"]=1;
			$(".research_science").show()
			unlocked[".research_science"]=1;
			$(".research_military").show()
			unlocked[".research_military"]=1;

		}

	}
	else if (b=="geology" && technologies["geology"]==0){

		mineralcost=28000;
		knowledgecost=50;
		


		if (items["knowledge"]>=knowledgecost && items["mineral"]>=mineralcost){


			items["mineral"]-=mineralcost;
			items["knowledge"]-=knowledgecost;

			bonus["mineral"]+=0.20;

			technologies["geology"]++


		}

	}
	else if (b=="funding" && technologies["funding"]==0){

		goldcost=50;
		knowledgecost=50;
		


		if (items["knowledge"]>=knowledgecost && items["gold"]>=goldcost){


			items["gold"]-=goldcost;
			items["knowledge"]-=knowledgecost;

			bonus["gold"]+=0.20;
			maximums["gold"]+=2;

			technologies["funding"]++


		}

	}
		else if (b=="tactics" && technologies["tactics"]==0){

		moralecost=35;
		knowledgecost=50;
		


		if (items["knowledge"]>=knowledgecost && items["morale"]>=moralecost){


			items["morale"]-=moralecost;
			items["knowledge"]-=knowledgecost;

			bonus["power"]+=0.20;
			maximums["morale"]+=2;

			technologies["tactics"]++


		}

	}
	else if (b=="healing" && technologies["healing"]==0){

		coincost=100;
		knowledgecost=200;
		


		if (items["knowledge"]>=knowledgecost && craft["coin"]>=coincost){


			craft["coin"]-=coincost;
			items["knowledge"]-=knowledgecost;

			bonus["hp"]+=0.05

			technologies["healing"]++

			$(".hire_medic").show()
			unlocked[".hire_medic"]=1;
		}

	}
	else if (b=="savings" && technologies["savings"]==0){

		coincost=100;
		knowledgecost=200;
		


		if (items["knowledge"]>=knowledgecost && craft["coin"]>=coincost){


			craft["coin"]-=coincost;
			items["knowledge"]-=knowledgecost;

			technologies["savings"]++

			$(".build_bank").show()
			unlocked[".build_bank"]=1;
		}

	}
	else if (b=="studies" && technologies["studies"]==0){


		knowledgecost=400;
		


		if (items["knowledge"]>=knowledgecost){

			items["knowledge"]-=knowledgecost;

			technologies["studies"]++

			$(".hire_scientist").show()
			unlocked[".hire_scientist"]=1;
		}

	}
	else if (b=="organization" && technologies["organization"]==0){

		blockcost=500;
		knowledgecost=300;
		


		if (items["knowledge"]>=knowledgecost && craft["block"]>=blockcost){


			craft["block"]-=blockcost;
			items["knowledge"]-=knowledgecost;

			technologies["organization"]++

			bonus["storage"]+=0.20;
		}

	}
	else if (b=="culturaltrade" && technologies["culturaltrade"]==0){

		bronzecost=50;
		knowledgecost=500;
		


		if (items["knowledge"]>=knowledgecost && craft["bronze"]>=bronzecost){


			craft["bronze"]-=bronzecost;
			items["knowledge"]-=knowledgecost;

			technologies["culturaltrade"]++


		}

	}
	else if (b=="intelligence" && technologies["intelligence"]==0){

		steelcost=100;
		knowledgecost=500;
		


		if (items["knowledge"]>=knowledgecost && items["steel"]>=steelcost){


			items["steel"]-=steelcost;
			items["knowledge"]-=knowledgecost;

			technologies["intelligence"]++


		}

	}
	else if (b=="crushing" && technologies["crushing"]==0){


		pickaxecost=500;
		knowledgecost=500;
		


		if (items["knowledge"]>=knowledgecost && craft["pickaxe"]>=pickaxecost){


			craft["pickaxe"]-=pickaxecost;
			items["knowledge"]-=knowledgecost;



			technologies["crushing"]++
			$(".build_crusher").show()
			unlocked[".build_crusher"]=1;

		}

	}
	else if (b=="floatglass" && technologies["floatglass"]==0){


		tincost=200;
		sandcost=600;
		knowledgecost=500;
		


		if (items["knowledge"]>=knowledgecost && items["tin"]>=tincost && items["sand"]>=sandcost){


			items["tin"]-=tincost;
			items["sand"]-=sandcost;
			items["knowledge"]-=knowledgecost;



			technologies["floatglass"]++
			$(".craft_glass").show()
			unlocked[".craft_glass"]=1;

		}

	}
	else if (b=="canteen" && technologies["canteen"]==0){



		knowledgecost=700;
		


		if (items["knowledge"]>=knowledgecost){


			items["knowledge"]-=knowledgecost;


			maximums["water"]+=20;

			technologies["canteen"]++


		}

	}
	else if (b=="galleon" && technologies["galleon"]==0){


		woodcost=40000;
		plankcost=1000;
		knowledgecost=800;
		


		if (items["knowledge"]>=knowledgecost && items["wood"]>=woodcost && craft["plank"]>=plankcost){


			items["wood"]-=woodcost;
			craft["plank"]-=plankcost;
			items["knowledge"]-=knowledgecost;



			technologies["galleon"]++
			$(".hire_galleon").show()
			unlocked[".hire_galleon"]=1;

		}

	}
	else if (b=="contracts" && technologies["contracts"]==0){


		coincost=200;
		knowledgecost=500;
		


		if (items["knowledge"]>=knowledgecost && craft["coin"]>=coincost){


			craft["coin"]-=coincost;
			items["knowledge"]-=knowledgecost;


			bonus["wood"]+=0.10;
			bonus["mineral"]+=0.10;
			bonus["knowledge"]+=0.10;
			bonus["morale"]+=0.10;


			technologies["contracts"]++


		}

	}
	else if (b=="glassblowing" && technologies["glassblowing"]==0){


		glasscost=20;
		knowledgecost=500;
		


		if (items["knowledge"]>=knowledgecost && craft["glass"]>=glasscost){


			craft["glass"]-=glasscost;
			items["knowledge"]-=knowledgecost;



			technologies["glassblowing"]++
			$(".craft_bottle").show()
			unlocked[".craft_bottle"]=1;
		}

	}
	else if (b=="rampage" && technologies["rampage"]==0){


		swordcost=1000;
		knowledgecost=800;
		


		if (items["knowledge"]>=knowledgecost && craft["sword"]>=swordcost){


			craft["sword"]-=swordcost;
			items["knowledge"]-=knowledgecost;



			technologies["rampage"]++
			$(".craft_greatsword").show()
			unlocked[".craft_greatsword"]=1;
			$(".hire_bersek").show()
			unlocked[".hire_bersek"]=1;
		}

	}
	else if (b=="construction" && technologies["construction"]==0){


		blockcost=2000;
		knowledgecost=800;
		


		if (items["knowledge"]>=knowledgecost && craft["block"]>=blockcost){


			craft["block"]-=blockcost;
			items["knowledge"]-=knowledgecost;



			technologies["construction"]++
			$(".build_blockyard").show()
			unlocked[".build_blockyard"]=1;

		}

	}
	else if (b=="architecture" && technologies["architecture"]==0){


		blockcost=1500;
		structurecost=500;
		steelcost=150;
		knowledgecost=1000;
		


		if (items["knowledge"]>=knowledgecost && craft["block"]>=blockcost && craft["structure"]>=structurecost && items["steel"]>=steelcost){


			craft["structure"]-=structurecost
			craft["block"]-=blockcost;
			items["steel"]-=steelcost
			items["knowledge"]-=knowledgecost;

			technologies["architecture"]++
			$(".craft_frame").show()
			unlocked[".craft_frame"]=1;

		}

	}
	else if (b=="chemistry" && technologies["chemistry"]==0){


		bottlecost=50
		knowledgecost=1000;
		


		if (items["knowledge"]>=knowledgecost && craft["bottle"]>=bottlecost){


			craft["bottle"]-=bottlecost;
			maximums["water"]-=bottlecost;
			items["knowledge"]-=knowledgecost;

			technologies["chemistry"]++
			$(".build_laboratory").show()
			unlocked[".build_laboratory"]=1;

		}

	}
	else if (b=="elephantry" && technologies["elephantry"]==0){


		suppliescost=100
		knowledgecost=800;
		


		if (items["knowledge"]>=knowledgecost && craft["supplies"]>=suppliescost){


			craft["supplies"]-=suppliescost;
			items["knowledge"]-=knowledgecost;

			technologies["elephantry"]++
			$(".hire_warelephant").show()
			unlocked[".hire_warelephant"]=1;

		}

	}
	else if (b=="wareconomy" && technologies["wareconomy"]==0){


		goldcost=60;
		moralecost=50;
		knowledgecost=800;
		


		if (items["knowledge"]>=knowledgecost && items["morale"]>=moralecost && items["gold"]>=goldcost){

			items["gold"]-=goldcost
			items["morale"]-=moralecost;
			items["knowledge"]-=knowledgecost;

			bonus["gold"]+=0.10
			bonus["food"]+=0.10

			technologies["wareconomy"]++


		}

	}
	else if (b=="undergroundstorage" && technologies["undergroundstorage"]==0){


		chestcost=50
		knowledgecost=500;
		


		if (items["knowledge"]>=knowledgecost && craft["chest"]>=chestcost){


			craft["chest"]-=chestcost;
			items["knowledge"]-=knowledgecost;

			maximums["wood"]-=50*chestcost
			maximums["mineral"]-=25*chestcost
			maximums["food"]-=10*chestcost
			maximums["copper"]-=0.3*chestcost
			maximums["gold"]-=0.05*chestcost
			maximums["iron"]-=0.2*chestcost
			maximums["tin"]-=0.15*chestcost
			maximums["coal"]-=0.15*chestcost
			maximums["steel"]-=0.10*chestcost

			technologies["undergroundstorage"]++
			$(".build_bunker").show()
			unlocked[".build_bunker"]=1;

		}

	}
	else if (b=="risk" && technologies["risk"]==0){


		tokencost=200
		knowledgecost=800;
		


		if (items["knowledge"]>=knowledgecost && craft["token"]>=tokencost){


			craft["token"]-=tokencost;
			items["knowledge"]-=knowledgecost;

			technologies["risk"]++
			$(".playx10").show()
			unlocked[".playx10"]=1;
			$(".playx100").show()
			unlocked[".playx100"]=1;

		}

	}
	else if (b=="investment" && technologies["investment"]==0){


		coincost=1000
		knowledgecost=300;
		


		if (items["knowledge"]>=knowledgecost && craft["coin"]>=coincost){


			craft["coin"]-=coincost;
			items["knowledge"]-=knowledgecost;

			technologies["investment"]++
			bonus["invest"]=2000

		}

	}
	else if (b=="domestication" && technologies["domestication"]==0){


		foodcost=10000;
		watercost=200;
		knowledgecost=800;
		


		if (items["knowledge"]>=knowledgecost && items["food"]>=foodcost && items["water"]>=watercost){

			items["food"]-=foodcost
			items["water"]-=watercost
			items["knowledge"]-=knowledgecost;

			technologies["domestication"]++

		}

	}
	else if (b=="expansion" && technologies["expansion"]==0){


		suppliescost=200;
		plankcost=2000;

		


		if (craft["supplies"]>=suppliescost && craft["plank"]>=plankcost){

			craft["supplies"]-=suppliescost
			craft["plank"]-=plankcost


			technologies["expansion"]++
			$(".expansionsea").show()
			unlocked[".expansionsea"]=1;
			$(".territory").show()
			unlocked[".territory"]=1;

		}

	}
	else if (b=="investigation" && technologies["investigation"]==0){


		chemicalscost=15;
		knowledgecost=800;
		


		if (items["knowledge"]>=knowledgecost && items["chemicals"]>=chemicalscost){

			items["chemicals"]-=chemicalscost
			items["knowledge"]-=knowledgecost;

			technologies["investigation"]++
			$(".build_scienceoutpost").show()
			unlocked[".build_scienceoutpost"]=1;

		}

	}
	else if (b=="internationalization" && technologies["internationalization"]==0){


		goldcost=70;
		bronzecost=300;
		knowledgecost=800;
		


		if (items["knowledge"]>=knowledgecost && items["gold"]>=goldcost && craft["bronze"]>=bronzecost){

			items["gold"]-=goldcost
			craft["bronze"]-=bronzecost
			items["knowledge"]-=knowledgecost;

			technologies["internationalization"]++
			$(".build_tradeoutpost").show()
			unlocked[".build_tradeoutpost"]=1;

		}

	}
	else if (b=="camps" && technologies["camps"]==0){


		horsecost=10;
		elephantcost=2;
		knowledgecost=800;
		


		if (items["knowledge"]>=knowledgecost && craft["horse"]>=horsecost && craft["elephant"]>=elephantcost){

			craft["horse"]-=horsecost
			craft["elephant"]-=elephantcost
			items["knowledge"]-=knowledgecost;

			technologies["camps"]++
			$(".build_militaryoutpost").show()
			unlocked[".build_militaryoutpost"]=1;

		}

	}
	else if (b=="fireship" && technologies["fireship"]==0){


		woodcost=80000
		framecost=5
		knowledgecost=1000;
		


		if (items["knowledge"]>=knowledgecost && craft["frame"]>=framecost && items["wood"]>=woodcost){

			craft["frame"]-=framecost
			items["wood"]-=woodcost
			items["knowledge"]-=knowledgecost;

			technologies["fireship"]++
			$(".hire_fireship").show()
			unlocked[".hire_fireship"]=1;

		}

	}
	else if (b=="deals" && technologies["deals"]==0){


		goldcost=100
		coincost=1500
		knowledgecost=1200;
		


		if (items["knowledge"]>=knowledgecost && craft["coin"]>=framecost && items["gold"]>=goldcost){

			craft["coin"]-=coincost
			items["gold"]-=goldcost
			items["knowledge"]-=knowledgecost;

			technologies["deals"]++
			$(".deals").show()
			unlocked[".deals"]=1;
			newDeal();
			setInterval(function(){ tickdeal()}, 1000);
		}

	}
	else if (b=="careening" && technologies["careening"]==0){


		woodcost=80000
		plankcost=1000
		knowledgecost=800;
		


		if (items["knowledge"]>=knowledgecost && craft["plank"]>=plankcost && items["wood"]>=woodcost){

			craft["plank"]-=plankcost
			items["wood"]-=woodcost
			items["knowledge"]-=knowledgecost;

			bonus["shipspeed"]+=30
			bonus["shiphp"]+=0.20

			technologies["careening"]++


		}

	}
	else if (b=="finding" && technologies["finding"]==0){


		moralecost=60;
		foodcost=20000;
		knowledgecost=1200;
		


		if (items["knowledge"]>=knowledgecost && items["morale"]>=moralecost && items["food"]>=foodcost){

			items["morale"]-=moralecost
			items["food"]-=foodcost
			items["knowledge"]-=knowledgecost;

			technologies["finding"]++


		}

	}
	else if (b=="openmining" && technologies["openmining"]==0){


		mineralcost=80000;
		pickaxecost=3000;
		knowledgecost=1200;
		


		if (items["knowledge"]>=knowledgecost && craft["pickaxe"]>=pickaxecost && items["mineral"]>=mineralcost){

			craft["pickaxe"]-=pickaxecost
			items["mineral"]-=mineralcost
			items["knowledge"]-=knowledgecost;

			technologies["openmining"]++
			$(".build_quarry").show()
			unlocked[".build_quarry"]=1;

		}

	}
	else if (b=="seacaptain" && technologies["seacaptain"]==0){


		plankcost=3000;
		coincost=800;
		knowledgecost=1200;
		


		if (items["knowledge"]>=knowledgecost && craft["plank"]>=plankcost && craft["coin"]>=coincost){

			craft["plank"]-=plankcost
			craft["coin"]-=coincost
			items["knowledge"]-=knowledgecost;

			technologies["seacaptain"]++

			$(".leader_foehn").show()
			unlocked[".leader_foehn"]=1;

		}

	}
	else if (b=="wisdom" && technologies["wisdom"]==0){



		knowledgecost=1300;
		


		if (items["knowledge"]>=knowledgecost){


			items["knowledge"]-=knowledgecost;

			technologies["wisdom"]++

			$(".leader_alfear").show()
			unlocked[".leader_alfear"]=1;

		}

	}
	else if (b=="masonry" && technologies["masonry"]==0){


		framecost=20;
		blockcost=3000;
		knowledgecost=1300;
		


		if (items["knowledge"]>=knowledgecost && craft["block"]>=blockcost && craft["frame"]>=framecost){

			craft["block"]-=blockcost
			craft["frame"]-=framecost
			items["knowledge"]-=knowledgecost;

			technologies["masonry"]++

			$(".craft_brick").show()
			unlocked[".craft_brick"]=1;

		}

	}
	else if (b=="woodwork" && technologies["woodwork"]==0){


		woodcost=90000;
		knowledgecost=1000;
		


		if (items["knowledge"]>=knowledgecost && items["wood"]>=woodcost){

			items["wood"]-=woodcost
			items["knowledge"]-=knowledgecost;

			technologies["woodwork"]++
			buildstatus["carpentry"]=1;
			$(".build_carpentry").show()
			unlocked[".build_carpentry"]=1;

		}

	}
	else if (b=="multitasking" && technologies["multitasking"]==0){


		pickaxecost=2000;
		knowledgecost=1000;
		


		if (items["knowledge"]>=knowledgecost && craft["pickaxe"]>=pickaxecost){

			craft["pickaxe"]-=pickaxecost
			items["knowledge"]-=knowledgecost;

			technologies["multitasking"]++


		}

	}
	else if (b=="commodities" && technologies["commodities"]==0){


		coincost=1000;
		knowledgecost=1000;
		


		if (items["knowledge"]>=knowledgecost && craft["coin"]>=coincost){

			craft["coin"]-=coincost
			items["knowledge"]-=knowledgecost;

			technologies["commodities"]++
			$(".trade_sand").show()
			unlocked[".trade_sand"]=1;

		}

	}
	else if (b=="quenching" && technologies["quenching"]==0){


		ironcost=500;
		steelcost=250;
		knowledgecost=1200;
		


		if (items["knowledge"]>=knowledgecost && items["steel"]>=steelcost && items["iron"]>=ironcost){

			items["steel"]-=steelcost
			items["iron"]-=ironcost
			items["knowledge"]-=knowledgecost;

			bonus["iron"]+=0.25
			bonus["steel"]+=0.25

			technologies["quenching"]++


		}

	}
	else if (b=="castiron" && technologies["castiron"]==0){


		brickcost=50;
		knowledgecost=1200;
		


		if (items["knowledge"]>=knowledgecost && craft["brick"]>=brickcost){

			craft["brick"]-=brickcost
			items["knowledge"]-=knowledgecost;

			technologies["castiron"]++

			$(".build_blastfurnace").show()
			unlocked[".build_blastfurnace"]=1;

		}

	}
	else if (b=="insecticides" && technologies["insecticides"]==0){


		chemicalscost=20;
		knowledgecost=1200;
		


		if (items["knowledge"]>=knowledgecost && items["chemicals"]>=chemicalscost){

			items["chemicals"]-=chemicalscost
			items["knowledge"]-=knowledgecost;

			technologies["insecticides"]++
			bonus["food"]+=0.40

		}

	}
	else if (b=="explosives" && technologies["explosives"]==0){


		moralecost=70;
		knowledgecost=1300;
		


		if (items["knowledge"]>=knowledgecost && items["morale"]>=moralecost){

			items["morale"]-=moralecost
			items["knowledge"]-=knowledgecost;

			technologies["explosives"]++
			$(".craft_gunpowder").show()
			unlocked[".craft_gunpowder"]=1;

		}

	}
	else if (b=="commerce" && technologies["commerce"]==0){


		coincost=2000;
		knowledgecost=1200;
		


		if (items["knowledge"]>=knowledgecost && craft["coin"]>=coincost){

			craft["coin"]-=coincost
			items["knowledge"]-=knowledgecost;

			technologies["commerce"]++

			$(".hire_marketer").show()
			unlocked[".hire_marketer"]=1;

		}

	}
	else if (b=="safes" && technologies["safes"]==0){


		lockcost=100;
		knowledgecost=1200;
		

		if (items["knowledge"]>=knowledgecost && craft["lock"]>=lockcost){

			craft["lock"]-=lockcost
			items["knowledge"]-=knowledgecost;

			maximums["gold"]+=30

			technologies["safes"]++



		}

	}
	else if (b=="packaging" && technologies["packaging"]==0){


		chestcost=200
		knowledgecost=1300;
		


		if (items["knowledge"]>=knowledgecost && craft["chest"]>=chestcost){


			craft["chest"]-=chestcost;
			items["knowledge"]-=knowledgecost;

			maximums["wood"]-=50*chestcost
			maximums["mineral"]-=25*chestcost
			maximums["food"]-=10*chestcost
			maximums["copper"]-=0.3*chestcost
			maximums["gold"]-=0.05*chestcost
			maximums["iron"]-=0.2*chestcost
			maximums["tin"]-=0.15*chestcost
			maximums["coal"]-=0.15*chestcost
			maximums["steel"]-=0.10*chestcost

			technologies["packaging"]++
			$(".build_compressor").show()
			unlocked[".build_compressor"]=1;

		}

	}
	else if (b=="ammunition" && technologies["ammunition"]==0){


		gunpowdercost=50;
		knowledgecost=1200;
		


		if (items["knowledge"]>=knowledgecost && craft["gunpowder"]>=gunpowdercost){


			craft["gunpowder"]-=gunpowdercost;
			items["knowledge"]-=knowledgecost;



			technologies["ammunition"]++
			$(".craft_ammo").show()
			unlocked[".craft_ammo"]=1;

		}

	}
	else if (b=="gunnery" && technologies["gunnery"]==0){


		ironcost=500;
		ammocost=1000;
		knowledgecost=1200;
		


		if (items["knowledge"]>=knowledgecost && items["iron"]>=ironcost && craft["ammo"]>=ammocost){

			craft["ammo"]-=ammocost;
			items["iron"]-=ironcost;
			items["knowledge"]-=knowledgecost;



			technologies["gunnery"]++
			$(".craft_musket").show()
			unlocked[".craft_musket"]=1;
			$(".hire_musketeer").show()
			unlocked[".hire_musketeer"]=1;
		}

	}
	else if (b=="windward" && technologies["windward"]==0){


		woodcost=200000
		plankcost=10000
		knowledgecost=1500;
		


		if (items["knowledge"]>=knowledgecost && craft["plank"]>=plankcost && items["wood"]>=woodcost){

			craft["plank"]-=plankcost
			items["wood"]-=woodcost
			items["knowledge"]-=knowledgecost;

			technologies["windward"]++
			$(".hire_caravel").show()
			unlocked[".hire_caravel"]=1;

		}

	}
	else if (b=="mineralcoal" && technologies["mineralcoal"]==0){


		pickaxecost=10000;
		coalcost=500;
		knowledgecost=1500;
		


		if (items["knowledge"]>=knowledgecost && craft["pickaxe"]>=pickaxecost && items["coal"]>=coalcost){

			craft["pickaxe"]-=pickaxecost
			items["coal"]-=coalcost
			items["knowledge"]-=knowledgecost;

			technologies["mineralcoal"]++

		}

	}
	else if (b=="carrying" && technologies["carrying"]==0){


		horsecost=100
		moralecost=120
		knowledgecost=1500;
		


		if (items["knowledge"]>=knowledgecost && craft["horse"]>=horsecost && items["morale"]>=moralecost){

			craft["horse"]-=horsecost;
			items["morale"]-=moralecost;
			items["knowledge"]-=knowledgecost;

			bonus["exprew"]+=0.50;
			technologies["carrying"]++


		}

	}
	else if (b=="shareholding" && technologies["shareholding"]==0){


		tokencost=5000;
		coincost=5000;
		knowledgecost=1500;
		


		if (items["knowledge"]>=knowledgecost && craft["token"]>=tokencost && craft["coin"]>=coincost){

			craft["token"]-=tokencost;
			craft["coin"]-=coincost;
			items["knowledge"]-=knowledgecost;

			
			technologies["shareholding"]++
			$(".build_share").show()
			unlocked[".build_share"]=1;
		}

	}
	else if (b=="safestorage" && technologies["safestorage"]==0){


		framecost=100;
		glasscost=300;
		knowledgecost=1600;
		


		if (items["knowledge"]>=knowledgecost && craft["frame"]>=framecost && craft["glass"]>=glasscost){

			craft["frame"]-=framecost;
			craft["glass"]-=glasscost;
			items["knowledge"]-=knowledgecost;

			traderatio["wood"]["nickel"]=0.00015;
			traderatio["mineral"]["nickel"]=0.00018;

			technologies["safestorage"]++
			$(".build_repository").show()
			unlocked[".build_repository"]=1;
		}

	}
	else if (b=="metalwork" && technologies["metalwork"]==0){


		ironcost=750;
		steelcost=400;
		knowledgecost=1700;
		


		if (items["knowledge"]>=knowledgecost && items["iron"]>=ironcost && items["steel"]>=steelcost){

			items["iron"]-=ironcost;
			items["steel"]-=steelcost;
			items["knowledge"]-=knowledgecost;

			
			technologies["metalwork"]++
			$(".craft_plate").show()
			unlocked[".craft_plate"]=1;
		}

	}
	else if (b=="steamengine" && technologies["steamengine"]==0){


		ironcost=800;
		platecost=50;
		knowledgecost=1800;
		


		if (items["knowledge"]>=knowledgecost && craft["plate"]>=platecost && items["iron"]>=ironcost){

			craft["plate"]-=platecost;
			items["iron"]-=ironcost;
			items["knowledge"]-=knowledgecost;

			
			technologies["steamengine"]++
			$(".craft_engine").show()
			unlocked[".craft_engine"]=1;
		}

	}
	else if (b=="armoredcombat" && technologies["armoredcombat"]==0){


		moralecost=130;
		platecost=500;
		knowledgecost=2000;
		


		if (items["knowledge"]>=knowledgecost && items["morale"]>=moralecost && craft["plate"]>=platecost){

			items["morale"]-=moralecost;
			craft["plate"]-=platecost;
			items["knowledge"]-=knowledgecost;

			
			technologies["armoredcombat"]++
			$(".hire_lighttank").show()
			unlocked[".hire_lighttank"]=1;
		}

	}
	else if (b=="railtransport" && technologies["railtransport"]==0){


		coincost=10000;
		platecost=300;
		knowledgecost=2000;
		


		if (items["knowledge"]>=knowledgecost && craft["coin"]>=coincost && craft["plate"]>=platecost){

			craft["coin"]-=coincost;
			craft["plate"]-=platecost;
			items["knowledge"]-=knowledgecost;

			
			technologies["railtransport"]++
			$(".build_trainstation").show()
			unlocked[".build_trainstation"]=1;
		}

	}
	else if (b=="industrialization" && technologies["industrialization"]==0){

		chemicalscost=100;
		platecost=300;
		knowledgecost=2000;
		


		if (items["knowledge"]>=knowledgecost && items["chemicals"]>=chemicalscost && craft["plate"]>=platecost){

			items["chemicals"]-=chemicalscost;
			craft["plate"]-=platecost;
			items["knowledge"]-=knowledgecost;

			
			technologies["industrialization"]++
			buildstatus["workshop"]=1;
			$(".build_workshop").show()
			unlocked[".build_workshop"]=1;
		}

	}
	else if (b=="academicpublishing" && technologies["academicpublishing"]==0){


		knowledgecost=2500;
		
		if (items["knowledge"]>=knowledgecost){
			
			items["knowledge"]-=knowledgecost;

			technologies["academicpublishing"]++
			$(".craft_book").show()
			unlocked[".craft_book"]=1;
		}

	}
	else if (b=="patents" && technologies["patents"]==0){


		coincost=10000;
		knowledgecost=2000;
		
		if (items["knowledge"]>=knowledgecost && craft["coin"]>=coincost){
			
			items["knowledge"]-=knowledgecost;
			craft["coin"]-=coincost

			technologies["patents"]++
			$(".craft_patent").show()
			unlocked[".craft_patent"]=1;
		}

	}
	else if (b=="logistics" && technologies["logistics"]==0){


		coincost=5000;
		bookcost=10;


		
		if (craft["coin"]>=coincost && craft["book"]>=bookcost){
			
			craft["coin"]-=coincost;
			craft["book"]-=bookcost;

			technologies["logistics"]++

		}

	}
	else if (b=="electricity" && technologies["electricity"]==0){



		bookcost=10;
		knowledgecost=2800;

		
		if (items["knowledge"]>=knowledgecost && craft["book"]>=bookcost){
			
			items["knowledge"]-=knowledgecost;
			craft["book"]-=bookcost;

			technologies["electricity"]++
			$(".build_powerplant").show()
			unlocked[".build_powerplant"]=1;
			$("#facilitiespane").removeClass("invisible")
			unlocked["#facilitiespane"]=1;
		}

	}
	else if (b=="pyroprocessing" && technologies["pyroprocessing"]==0){



		mineralcost=200000;
		claycost=10000
		bookcost=5;

		
		if (items["mineral"]>=mineralcost && items["clay"]>=claycost && craft["book"]>=bookcost){
			
			items["mineral"]-=mineralcost;
			items["clay"]-=claycost;
			craft["book"]-=bookcost;

			technologies["pyroprocessing"]++
			$(".build_cementkiln").show()
			unlocked[".build_cementkiln"]=1;
			$("#facilitiespane").removeClass("invisible")
			unlocked["#facilitiespane"]=1;
		}

	}

	else if (b=="triforce" && technologies["triforce"]==0){


		knowledgecost=3000;
		


		if (items["knowledge"]>=knowledgecost){


		items["knowledge"]-=knowledgecost;

		bonus["knowledge"]+=0.30;
		bonus["gold"]+=0.30
		bonus["morale"]+=0.30
		bonus["storage"]+=0.30
		bonus["craft"]+=0.30
			
			technologies["triforce"]++

		}

	}
	else if (b=="education" && technologies["education"]==0){


		bookcost=20;
		knowledgecost=3000;


		if (items["knowledge"]>=knowledgecost && craft["book"]>=bookcost){


		items["knowledge"]-=knowledgecost;
		craft["book"]-=bookcost
			
		technologies["education"]++
		$(".build_university").show()
		unlocked[".build_university"]=1;
		}

	}
	else if (b=="cementhydration" && technologies["cementhydration"]==0){

		claycost=15000;
		bookcost=20;
		
		if (items["clay"]>=claycost && craft["book"]>=bookcost){

			items["clay"]-=claycost;
			craft["book"]-=bookcost;

			technologies["cementhydration"]++
			$(".build_concretemixer").show()
			unlocked[".build_concretemixer"]=1;
		}

	}
	else if (b=="workforce" && technologies["workforce"]==0){

		concretecost=15000;
		bookcost=30;
		
		if (items["concrete"]>=concretecost && craft["book"]>=bookcost){

			items["concrete"]-=concretecost;
			craft["book"]-=bookcost;

			technologies["workforce"]++
			$(".build_toolfactory").show()
			unlocked[".build_toolfactory"]=1;
		}

	}
	else if (b=="wargames" && technologies["wargames"]==0){

		moralecost=250;
		bookcost=20;
		
		if (items["morale"]>=moralecost && craft["book"]>=bookcost){

			items["morale"]-=moralecost
			craft["book"]-=bookcost;

			technologies["wargames"]++
			$(".craft_strategy").show()
			unlocked[".craft_strategy"]=1;
		}

	}
	else if (b=="militarization" && technologies["militarization"]==0){

		spearcost=300000;
		swordcost=100000;
		bookcost=30;
		
		if (craft["spear"]>=spearcost && craft["sword"]>=swordcost && craft["book"]>=bookcost){

			craft["spear"]-=spearcost;
			craft["sword"]-=swordcost;
			craft["book"]-=bookcost;

			technologies["militarization"]++
			$(".build_barracks").show()
			unlocked[".build_barracks"]=1;
		}

	}
setTimeout(function(){

if(techvisible==0){
	techvisible=1;
	toggletech();
}

}, 700);



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
				craft["pickaxe"]-=pickaxecost
				people["miner"]+=1
				population++
				$(".fire_miner").show()
				unlocked[".fire_miner"]=1;
			}

		}
		else if (b=="foundryman"){

			foodcost=200;
			coincost=1;

			if (items["food"]>=foodcost && craft["coin"]>=coincost){
				items["food"]-=foodcost;
				craft["coin"]-=coincost
				people["foundryman"]+=1
				population++
				$(".fire_foundryman").show()
				unlocked[".fire_foundryman"]=1;
			}

		}

		else if (b=="sailor"){

			foodcost=500;
			coincost=5;

			if (items["food"]>=foodcost && craft["coin"]>=coincost){
				items["food"]-=foodcost;
				craft["coin"]-=coincost
				people["sailor"]+=1
				population++
				$(".fire_sailor").show()
				unlocked[".fire_sailor"]=1;
			}

		}
		
		else if (b=="scientist"){

			knowledgecost=100;
			coincost=10;

			if (items["knowledge"]>=knowledgecost && craft["coin"]>=coincost){
				items["knowledge"]-=knowledgecost;
				craft["coin"]-=coincost
				people["scientist"]+=1
				population++
				$(".fire_scientist").show()
				unlocked[".fire_scientist"]=1;
			}

		}
		else if (b=="marketer"){

			coincost=500;
			goldcost=100;

			if (items["gold"]>=goldcost && craft["coin"]>=coincost){
				items["gold"]-=goldcost;
				craft["coin"]-=coincost
				people["marketer"]+=1
				population++
				$(".fire_marketer").show()
				unlocked[".fire_marketer"]=1;
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
		else if (b=="medic"){

			foodcost=1000;
			coincost=20;

			if (items["food"]>=foodcost && craft["coin"]>=coincost){
				items["food"]-=foodcost;
				craft["coin"]-=coincost
				people["medic"]+=1
				population++
				$(".fire_medic").show()
				unlocked[".fire_medic"]=1;
			}

		}
		else if (b=="bersek"){

			coincost=50;
			greatswordcost=1;

			if (craft["coin"]>=coincost && craft["greatsword"]>=greatswordcost){
				craft["coin"]-=coincost;
				craft["greatsword"]-=greatswordcost;
				people["bersek"]+=1
				population++
				$(".fire_bersek").show()
				unlocked[".fire_bersek"]=1;
			}

		}
		else if (b=="warelephant"){

			suppliescost=100;
			elephantcost=1;

			if (craft["supplies"]>=suppliescost && craft["elephant"]>=elephantcost){
				craft["supplies"]-=suppliescost;
				craft["elephant"]-=elephantcost;
				people["warelephant"]+=1
				population++
				$(".fire_warelephant").show()
				unlocked[".fire_warelephant"]=1;
			}

		}
		else if (b=="musketeer"){

			coincost=100;
			musketcost=1;
			armorcost=1;

			if (craft["coin"]>=coincost && craft["musket"]>=musketcost && craft["armor"]>=armorcost){

				craft["coin"]-=coincost;
				craft["musket"]-=musketcost;
				craft["armor"]-=armorcost;
				people["musketeer"]+=1
				population++
				$(".fire_musketeer").show()
				unlocked[".fire_musketeer"]=1;
			}

		}
		else if (b=="lighttank" && (population+3)<=maximums["population"]){

			platecost=200;
			enginecost=2;


			if (craft["engine"]>=enginecost && craft["plate"]>=platecost){

				craft["plate"]-=platecost;
				craft["engine"]-=enginecost;

				people["lighttank"]+=1
				population+=3
				$(".fire_lighttank").show()
				unlocked[".fire_lighttank"]=1;
			}

		}
	}
	if (b=="knight"){

		swordmancost=1;
		horsecost=1;
		armorcost=1;

		if (people["swordman"]>=swordmancost && craft["horse"]>=horsecost && craft["armor"]>=armorcost){
			craft["armor"]-=armorcost;
			craft["horse"]-=horsecost;
			people["swordman"]-=1;
			people["knight"]+=1;
			$(".fire_knight").show()
			unlocked[".fire_knight"]=1;

			if (people["swordman"]==0){
				$(".fire_swordman").hide()
				unlocked[".fire_swordman"]=0;
			}


		}

	}

	if(ships<maximums["ships"]){
		if (b=="galley"){

			woodcost=20000;
			plankcost=200;
			structurecost=50;


			if (items["wood"]>=woodcost && craft["plank"]>=plankcost && craft["structure"]>=structurecost){

				items["wood"]-=woodcost
				craft["plank"]-=plankcost;
				craft["structure"]-=structurecost;

				people["galley"]+=1;
				ships++

				$(".salvage_galley").show()
				unlocked[".salvage_galley"]=1;



			}

		}
		if (b=="galleon"){

			plankcost=1500;
			structurecost=300;


			if (craft["plank"]>=plankcost && craft["structure"]>=structurecost){

				craft["plank"]-=plankcost;
				craft["structure"]-=structurecost;

				people["galleon"]+=1;
				ships++

				$(".salvage_galleon").show()
				unlocked[".salvage_galleon"]=1;



			}

		}
		if (b=="fireship"){

			plankcost=1000;
			steelcost=200;
			coalcost=300;


			if (craft["plank"]>=plankcost && items["coal"]>=coalcost && items["steel"]>=steelcost){

				craft["plank"]-=plankcost;
				items["coal"]-=coalcost;
				items["steel"]-=steelcost;

				people["fireship"]+=1;
				ships++

				$(".salvage_fireship").show()
				unlocked[".salvage_fireship"]=1;



			}

		}
		if (b=="caravel"){

			woodcost=100000;
			ironcost=500;
			plankcost=1000;
			



			if (craft["plank"]>=plankcost && items["iron"]>=ironcost && items["wood"]>=woodcost){

				craft["plank"]-=plankcost;
				items["wood"]-=woodcost;
				items["iron"]-=ironcost;

				people["caravel"]+=1;
				ships++

				$(".salvage_caravel").show()
				unlocked[".salvage_caravel"]=1;



			}

		}
	}

if(trains<maximums["trains"]){
		if (b=="cargotrain" && (population+3)<=maximums["population"]){

			steelcost=500;
			platecost=500;
			enginecost=8;



			if (items["steel"]>=steelcost && craft["plate"]>=platecost && craft["engine"]>=enginecost){

				items["steel"]-=steelcost
				craft["plate"]-=platecost;
				craft["engine"]-=enginecost;

				people["cargotrain"]+=1;

				trains++
				population+=3;

				$(".salvage_cargotrain").show()
				unlocked[".salvage_cargotrain"]=1;



			}

		}
}
}
function salvage(b){
	if (people[b]>0){

		people[b]-=1
		
		if (people[b]==0){
			$(".salvage_"+b).hide()
			unlocked[".salvage_"+b]=0;
		}
		if(b=="galley"){

			craft["plank"]+=10+(Math.random()*10);
			craft["structure"]+=5+(Math.random()*5);
			items["wood"]+=1000+(Math.random()*5000);
			ships--
			if(people["galley"]<1){
				$(".salvage_galley").hide()
				unlocked[".salvage_galley"]=0;
			}
		}
		if(b=="galleon"){

			craft["plank"]+=300+(Math.random()*300);
			craft["structure"]+=50+(Math.random()*50);
			items["wood"]+=20000+(Math.random()*20000);
			ships--
			if(people["galleon"]<1){
				$(".salvage_galleon").hide()
				unlocked[".salvage_galleon"]=0;
			}
		}
		if(b=="fireship"){

			craft["plank"]+=200+(Math.random()*300);
			items["steel"]+=50+(Math.random()*50);
			items["wood"]+=5000+(Math.random()*20000);
			ships--
			if(people["fireship"]<1){
				$(".salvage_fireship").hide()
				unlocked[".salvage_fireship"]=1;
			}
		}
		if(b=="caravel"){

			craft["plank"]+=200+(Math.random()*300);
			items["wood"]+=5000+(Math.random()*20000);
			items["iron"]+=100+(Math.random()*50);
			ships--
			if(people["caravel"]<1){
				$(".salvage_caravel").hide()
				unlocked[".salvage_caravel"]=1;
			}
		}
		if(b=="cargotrain"){

			craft["plate"]+=100+(Math.random()*100);
			items["steel"]+=100+(Math.random()*100);
			craft["engine"]+=1+(Math.random()*2);
			trains--
			population-=3;
			if(people["cargotrain"]<1){
				$(".salvage_cargotrain").hide()
				unlocked[".salvage_cargotrain"]=1;
			}
		}
	}


}
function fire(b){


	if (people[b]>0){

		people[b]-=1
		population--
		if(b=="lighttank"){
		population-=2;

		}
		if (people[b]==0){
			$(".fire_"+b).hide()
			unlocked[".fire_"+b]=0;
		}
	}
}
function build(b){
	if (b=="lumbermill"){

		woodcost= Math.pow(1.1,(buildings["lumbermill"]))*3

		if (items["wood"]>=woodcost){
			items["wood"]-=woodcost;
			buildings["lumbermill"]+=1
			$(".build_mine").show()
			unlocked[".build_mine"]=1;
		}

	}
	else if (b=="mine"){

		woodcost= Math.pow(1.1,(buildings["mine"]))*2
		mineralcost=Math.pow(1.1, (buildings["mine"]))*3.5

		if (items["wood"]>=woodcost && items["mineral"]>=mineralcost){
			items["wood"]-=woodcost;
			items["mineral"]-=mineralcost
			buildings["mine"]+=1
			$(".build_warehouse").show()
			unlocked[".build_warehouse"]=1;


		}

	}
	else if (b=="warehouse"){

		woodcost= Math.pow(1.6,(buildings["warehouse"]))*20
		mineralcost=Math.pow(1.6, (buildings["warehouse"]))*10

		if (items["wood"]>=woodcost && items["mineral"]>=mineralcost){
			items["wood"]-=woodcost;
			items["mineral"]-=mineralcost

			maximums["wood"]+=200;
			maximums["mineral"]+=200;
			maximums["food"]+=100;
			maximums["copper"]+=5;
			maximums["gold"]+=1;
			maximums["iron"]+=5;
			maximums["tin"]+=4;
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

		mineralcost=Math.pow(1.35, (buildings["fountain"]))*6

		if (items["mineral"]>=mineralcost){
			items["mineral"]-=mineralcost
			buildings["fountain"]+=1
			maximums["water"]+=5;
		}

	}
	else if (b=="pasture"){

		woodcost= Math.pow(1.35,(buildings["pasture"]))*10

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

		woodcost= Math.pow(1.8,(buildings["house"]))*20
		mineralcost=Math.pow(1.8, (buildings["house"]))*50
		foodcost=Math.pow(1.8, (buildings["house"]))*15
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

		woodcost= Math.pow(1.9,(buildings["library"]))*300
		mineralcost=Math.pow(1.9, (buildings["library"]))*100

		if (items["wood"]>=woodcost && items["mineral"]>=mineralcost){
			items["wood"]-=woodcost;
			items["mineral"]-=mineralcost;
			buildings["library"]+=1;
			maximums["knowledge"]+=100;

			switch(buildings["library"]){
				case 1: $(".tech_coppertools").show();unlocked[".tech_coppertools"]=1;$(".tech_pickaxe").show();unlocked[".tech_pickaxe"]=1;$("#technologiespane").removeClass("invisible");unlocked["#technologiespane"]=1;break;
				case 2: $(".build_banner").show();unlocked[".build_banner"]=1;$(".tech_spear").show();unlocked[".tech_spear"]=1;$(".tech_exploration").show();unlocked[".tech_exploration"]=1;break;
				case 3: $(".tech_ironfoundry").show();unlocked[".tech_ironfoundry"]=1;$(".tech_metallurgy").show();unlocked[".tech_metallurgy"]=1;$(".tech_sword").show();unlocked[".tech_sword"]=1;$(".tech_storage").show();unlocked[".tech_storage"]=1;break;
				case 4: $(".tech_currency").show();unlocked[".tech_currency"]=1;$(".tech_exchange").show();unlocked[".tech_exchange"]=1;$(".tech_coin").show();unlocked[".tech_coin"]=1;break;
				case 5: $(".tech_bronze").show();unlocked[".tech_bronze"]=1;$(".tech_bronzetools").show();unlocked[".tech_bronzetools"]=1;$(".tech_charcoal").show();unlocked[".tech_charcoal"]=1;$(".tech_centralisation").show();unlocked[".tech_centralisation"]=1;break;
				case 6: $(".tech_steel").show();unlocked[".tech_steel"]=1;$(".tech_manufacturing").show();unlocked[".tech_manufacturing"]=1;$(".tech_steeltools").show();unlocked[".tech_steeltools"]=1;$(".tech_husbandry").show();unlocked[".tech_husbandry"]=1;$(".tech_cavalry").show();unlocked[".tech_cavalry"]=1;break;
				case 7: $(".tech_leadership").show();unlocked[".tech_leadership"]=1;$(".tech_armament").show();unlocked[".tech_armament"]=1;$(".tech_gambling").show();unlocked[".tech_gambling"]=1;$(".tech_redeem").show();unlocked[".tech_redeem"]=1;$(".tech_wrapping").show();unlocked[".tech_wrapping"]=1;break;
				case 8: $(".tech_shipyard").show();unlocked[".tech_shipyard"]=1;$(".tech_sailing").show();unlocked[".tech_sailing"]=1;$(".tech_trade").show();unlocked[".tech_trade"]=1;$(".tech_cache").show();unlocked[".tech_cache"]=1;$(".tech_specialization").show();unlocked[".tech_specialization"]=1;break;
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


		mineralcost= Math.pow(1.3,(buildings["foundry"]))*500;
		coppercost=Math.pow(1.3, (buildings["foundry"]))*5

		if (items["copper"]>=coppercost && items["mineral"]>=mineralcost){
			items["mineral"]-=mineralcost;
			items["copper"]-=coppercost;
			buildings["foundry"]+=1;
			$(".toggle_foundry").show()
			unlocked[".toggle_foundry"]=1
		}

	}
	else if (b=="barn"){

		blockcost= Math.pow(1.4,(buildings["barn"]))*5


		if (craft["block"]>=blockcost){
			craft["block"]-=blockcost;

			maximums["wood"]+=500;
			maximums["mineral"]+=500;

			buildings["barn"]+=1


		}
	}
	else if (b=="casino"){

		blockcost= Math.pow(1.6,(buildings["casino"]))*3
		goldcost= Math.pow(1.6,(buildings["casino"]))*1

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

		blockcost= Math.pow(1.5,(buildings["kiln"]))*15
		mineralcost= Math.pow(1.5,(buildings["kiln"]))*2000

		if (items["mineral"]>=mineralcost && craft["block"]>=blockcost){
			items["mineral"]-=mineralcost;
			craft["block"]-=blockcost;
			$(".toggle_kiln").show()
			unlocked[".toggle_kiln"]=1
			buildings["kiln"]+=1


		}
	}
	else if (b=="statue"){

		bronzecost= Math.pow(1.5,(buildings["statue"]))*1


		if (craft["bronze"]>=bronzecost){

			craft["bronze"]-=bronzecost;
			maximums["morale"]+=2;
			bonus["morale"]+=0.05;


			buildings["statue"]+=1
		}
	}
	else if (b=="towncenter"){

		blockcost= Math.pow(1.25,(buildings["towncenter"]))*20
		structurecost= Math.pow(1.25,(buildings["towncenter"]))*5
		coincost= Math.pow(1.25,(buildings["towncenter"]))*3

		if (craft["block"]>=blockcost && craft["structure"]>=structurecost && craft["coin"]>=coincost){

			craft["block"]-=blockcost;
			craft["structure"]-=structurecost;
			craft["coin"]-=coincost;

			maximums["wood"]+=1500;
			maximums["mineral"]+=1000;
			maximums["food"]+=500;
			maximums["copper"]+=10;
			maximums["gold"]+=2;
			maximums["iron"]+=10;
			maximums["tin"]+=10;
			maximums["coal"]+=5;
			maximums["steel"]+=5;

			maximums["population"]+=5;

			buildings["towncenter"]+=1
		}
	}
	else if (b=="workbench"){

		steelcost= Math.pow(1.4,(buildings["workbench"]))*2


		if (items["steel"]>=steelcost){

			items["steel"]-=steelcost;
			bonus["craft"]+=0.08;


			buildings["workbench"]+=1
			$(".toggle_workbench").show()
			unlocked[".toggle_workbench"]=1
			$(".craftamount").show()
			unlocked[".craftamount"]=1
		}
	}
	else if (b=="castle"){

		blockcost= Math.pow(1.6,(buildings["castle"]))*50
		goldcost= Math.pow(1.6,(buildings["castle"]))*5

		if (craft["block"]>=blockcost && items["gold"]>=goldcost){

			craft["block"]-=blockcost;
			items["gold"]-=goldcost

			bonus["title"]+=1;


			buildings["castle"]+=1
			$(".leader_sucellus").show()
			unlocked[".leader_sucellus"]=1;
			$(".leader_eredal").show()
			unlocked[".leader_eredal"]=1;
			$(".leader_khrysos").show()
			unlocked[".leader_khrysos"]=1;
			$(".leader_elisia").show()
			unlocked[".leader_elisia"]=1;
			$(".leader_xochiquetzal").show()
			unlocked[".leader_xochiquetzal"]=1;
			$(".leader_warmuk").show()
			unlocked[".leader_warmuk"]=1;
			$(".titles").show()
			unlocked[".titles"]=1;
			$("#leaderpane").removeClass("invisible")
			unlocked["#leaderpane"]=1;
		}
	}
	else if (b=="relic"){

		tokencost= Math.pow(1.2,(buildings["relic"]))*20


		if (craft["token"]>=tokencost){

			craft["token"]-=tokencost;



			buildings["relic"]+=1
			bonus["global"]+=0.01
		}
	}
	else if (b=="shipyard"){

		woodcost=Math.pow(1.4,(buildings["shipyard"]))*20000
		structurecost= Math.pow(1.4,(buildings["shipyard"]))*50



		if (craft["structure"]>=structurecost && items["wood"]>=woodcost){

			craft["structure"]-=structurecost;
			items["wood"]-=woodcost;


			buildings["shipyard"]+=1
			$(".toggle_shipyard").show()
			unlocked[".toggle_shipyard"]=1

		}
	}

	else if (b=="docks"){
		ironcost=Math.pow(1.3,(buildings["docks"]))*100
		plankcost= Math.pow(1.3,(buildings["docks"]))*50



		if (craft["plank"]>=plankcost && items["iron"]>=ironcost){

			craft["plank"]-=plankcost;
			items["iron"]-=ironcost;

			maximums["ships"]++

			buildings["docks"]+=1

			$("#dockpane").removeClass("invisible");
			unlocked["#dockpane"]=1
			$(".hire_galley").show()
			unlocked[".hire_galley"]=1
			$(".ships").show()
			unlocked[".ships"]=1
		}
	}
	else if (b=="bank"){

		blockcost=Math.pow(1.4,(buildings["bank"]))*200
		steelcost=Math.pow(1.4,(buildings["bank"]))*100
		coincost=Math.pow(1.4,(buildings["bank"]))*100


		if (craft["block"]>=blockcost && items["steel"]>=steelcost && craft["coin"]>=coincost ){

			craft["block"]-=blockcost;
			craft["coin"]-=coincost;
			items["steel"]-=steelcost;

			maximums["gold"]+=2;

			buildings["bank"]+=1
			$(".toggle_bank").show()
			unlocked[".toggle_bank"]=1

		}
	}
	else if (b=="crusher"){

		coppercost=Math.pow(1.2,(buildings["crusher"]))*150
		ironcost=Math.pow(1.2,(buildings["crusher"]))*100
		steelcost=Math.pow(1.2,(buildings["crusher"]))*50


		if (items["copper"]>=coppercost && items["steel"]>=steelcost && items["iron"]>=ironcost ){

			items["copper"]-=coppercost;
			items["iron"]-=ironcost;
			items["steel"]-=steelcost;

			maximums["sand"]+=200;

			buildings["crusher"]+=1
			$(".toggle_crusher").show()
			unlocked[".toggle_crusher"]=1

			items["sand"]+=0.0001
			refreshselect()

		}
	}
	else if (b=="blockyard"){

		bronzecost=Math.pow(1.3,(buildings["blockyard"]))*50
		pickaxecost=Math.pow(1.3,(buildings["blockyard"]))*500



		if (craft["bronze"]>=bronzecost && craft["pickaxe"]>=pickaxecost){

			craft["bronze"]-=bronzecost;
			craft["pickaxe"]-=pickaxecost;


			buildings["blockyard"]+=1
			$(".toggle_blockyard").show()
			unlocked[".toggle_blockyard"]=1

		}
	}
		else if (b=="bunker"){

		framecost= Math.pow(1.4,(buildings["bunker"]))*5
		pickaxecost=Math.pow(1.4, (buildings["bunker"]))*750

		if (craft["pickaxe"]>=pickaxecost && craft["frame"]>=framecost){

			craft["pickaxe"]-=pickaxecost;
			craft["frame"]-=framecost

			maximums["wood"]+=4000;
			maximums["mineral"]+=4000;
			maximums["sand"]+=4000;
			maximums["clay"]+=500;
			maximums["cement"]+=500;
			maximums["concrete"]+=500;


			buildings["bunker"]+=1

		}

	}
	else if (b=="laboratory"){

		framecost=Math.pow(1.4,(buildings["laboratory"]))*5
		glasscost=Math.pow(1.4,(buildings["laboratory"]))*20


		if (craft["frame"]>=framecost && craft["glass"]>=glasscost){

			craft["frame"]-=framecost;
			craft["glass"]-=glasscost;

			maximums["chemicals"]+=5;

			buildings["laboratory"]+=1
			$(".toggle_laboratory").show()
			unlocked[".toggle_laboratory"]=1

			items["chemicals"]+=0.0001
			refreshselect()


		}
	}
	else if (b=="scienceoutpost"){

		framecost=Math.pow(1.3,(buildings["scienceoutpost"]))*10
		glasscost=Math.pow(1.3,(buildings["scienceoutpost"]))*20
		territorycost=Math.pow(1.2,(buildings["tradeoutpost"]+buildings["scienceoutpost"]+buildings["militaryoutpost"]))*400

		if (craft["frame"]>=framecost && craft["glass"]>=glasscost && bonus["territory"]>=territorycost){

			craft["frame"]-=framecost;
			craft["glass"]-=glasscost;
			bonus["territory"]-=territorycost

			buildings["scienceoutpost"]+=1
			maximums["population"]+=10;
			bonus["title"]+=1;

		}
	}
	else if (b=="tradeoutpost"){

		framecost=Math.pow(1.3,(buildings["tradeoutpost"]))*10
		coincost=Math.pow(1.3,(buildings["tradeoutpost"]))*300
		territorycost=Math.pow(1.2,(buildings["tradeoutpost"]+buildings["scienceoutpost"]+buildings["militaryoutpost"]))*400

		if (craft["frame"]>=framecost && craft["coin"]>=coincost && bonus["territory"]>=territorycost){

			craft["frame"]-=framecost;
			craft["coin"]-=coincost;
			bonus["territory"]-=territorycost

			buildings["tradeoutpost"]+=1
			maximums["population"]+=10;
			bonus["title"]+=1;

		}
	}
	else if (b=="militaryoutpost"){

		framecost=Math.pow(1.3,(buildings["militaryoutpost"]))*10
		swordcost=Math.pow(1.3,(buildings["militaryoutpost"]))*400
		armorcost=Math.pow(1.3,(buildings["militaryoutpost"]))*20
		territorycost=Math.pow(1.2,(buildings["tradeoutpost"]+buildings["scienceoutpost"]+buildings["militaryoutpost"]))*400

		if (craft["frame"]>=framecost && craft["armor"]>=armorcost && craft["sword"]>=swordcost && bonus["territory"]>=territorycost){

			craft["frame"]-=framecost;
			craft["armor"]-=armorcost;
			craft["sword"]-=swordcost
			bonus["territory"]-=territorycost

			maximums["morale"]+=3;
			buildings["militaryoutpost"]+=1;
			maximums["population"]+=10;
			bonus["title"]+=1;

		}
	}
	else if (b=="quarry"){

		mineralcost=Math.pow(1.2,(buildings["quarry"]))*50000
		pickaxecost=Math.pow(1.2,(buildings["quarry"]))*500


		if (items["mineral"]>=mineralcost && craft["pickaxe"]>=pickaxecost){

			items["mineral"]-=mineralcost;
			craft["pickaxe"]-=pickaxecost;


			buildings["quarry"]+=1


		}
	}
	else if (b=="carpentry"){

		framecost=Math.pow(1.4,(buildings["carpentry"]))*5
		brickcost=Math.pow(1.4,(buildings["carpentry"]))*20



		if (craft["brick"]>=brickcost && craft["frame"]>=framecost){

			craft["brick"]-=brickcost;
			craft["frame"]-=framecost;


			buildings["carpentry"]+=1
			$(".toggle_carpentry").show()
			unlocked[".toggle_carpentry"]=1

		}
	}
	else if (b=="blastfurnace"){

		brickcost=Math.pow(1.4,(buildings["blastfurnace"]))*25

		if (craft["brick"]>=brickcost){

			craft["brick"]-=brickcost;
			buildstatus["blastfurnace"]=1;
			buildings["blastfurnace"]+=1;
			$(".toggle_blastfurnace").show()
			unlocked[".toggle_blastfurnace"]=1

		}
	}
	else if (b=="compressor"){

		brickcost=Math.pow(1.2,(buildings["compressor"]))*500
		glasscost=Math.pow(1.2,(buildings["compressor"]))*50
		framecost=Math.pow(1.2,(buildings["compressor"]))*25


		if (craft["brick"]>=brickcost && craft["glass"]>=glasscost && craft["frame"]>=framecost){

			craft["brick"]-=brickcost;
			craft["glass"]-=glasscost;
			craft["frame"]-=framecost;

			bonus["storage"]+=0.05

			buildings["compressor"]+=1;


		}
	}
	else if (b=="share"){

		tokencost=Math.pow(1.15,(buildings["share"]))*1000


		if (craft["token"]>=tokencost){

			craft["token"]-=tokencost;

			buildings["share"]+=1;


		}
	}
	else if (b=="repository"){

		blockcost=Math.pow(1.2,(buildings["repository"]))*5000
		glasscost=Math.pow(1.2,(buildings["repository"]))*100
		bottlecost=Math.pow(1.2,(buildings["repository"]))*10


		if (craft["block"]>=blockcost && craft["glass"]>=glasscost && craft["bottle"]>=bottlecost){

			craft["block"]-=blockcost;
			craft["glass"]-=glasscost;
			craft["bottle"]-=bottlecost;
			maximums["water"]-=bottlecost;

			buildings["repository"]+=1;

			maximums["tin"]+=5;
			maximums["chemicals"]+=3;
			maximums["steel"]+=5;
			maximums["nickel"]+=5;
			maximums["silicon"]+=2;
			maximums["lithium"]+=1;


		}
	}
	else if (b=="trainstation"){

		woodcost=Math.pow(1.2,(buildings["trainstation"]))*100000
		ironcost=Math.pow(1.2,(buildings["trainstation"]))*500
		framecost= Math.pow(1.2,(buildings["trainstation"]))*50



		if (craft["frame"]>=framecost && items["iron"]>=ironcost && items["wood"]>=woodcost){

			craft["frame"]-=framecost;
			items["iron"]-=ironcost;
			items["wood"]-=woodcost;

			maximums["trains"]+=2;

			buildings["trainstation"]+=1


			$(".hire_cargotrain").show()
			unlocked[".hire_cargotrain"]=1
			$(".trains").show()
			unlocked[".trains"]=1
			$(".tradetrain").show()
			unlocked[".tradetrain"]=1;
		}
	}
	else if (b=="workshop"){

		brickcost= Math.pow(1.3,(buildings["workshop"]))*500
		platecost=Math.pow(1.3,(buildings["workshop"]))*500
		enginecost=Math.pow(1.3,(buildings["workshop"]))*10
	



		if (craft["brick"]>=brickcost && craft["plate"]>=platecost && craft["engine"]>=enginecost){

			craft["brick"]-=brickcost;
			craft["plate"]-=platecost;
			craft["engine"]-=enginecost;

			bonus["craft"]+=0.10
			buildings["workshop"]+=1


			$(".toggle_workshop").show()
			unlocked[".toggle_workshop"]=1

		}
	}
	else if (b=="powerplant"){

		framecost= Math.pow(1.1,(buildings["powerplant"]))*300
		platecost=Math.pow(1.1,(buildings["powerplant"]))*500
	

		if (craft["frame"]>=framecost && craft["plate"]>=platecost){

			craft["frame"]-=framecost;
			craft["plate"]-=platecost;

			maximums["energy"]+=100;

			buildstatus["powerplant"]=1;
			buildings["powerplant"]+=1


			$(".toggle_powerplant").show()
			unlocked[".toggle_powerplant"]=1

		}
	}
	else if (b=="cementkiln"){

		steelcost = Math.pow(1.3,(buildings["cementkiln"]))*600
		platecost = Math.pow(1.3,(buildings["cementkiln"]))*200
	

		if (items["steel"]>=steelcost && craft["plate"]>=platecost){

			items["steel"]-=steelcost;
			craft["plate"]-=platecost;

			buildstatus["cementkiln"]=1;
			buildings["cementkiln"]+=1


			$(".toggle_cementkiln").show()
			unlocked[".toggle_cementkiln"]=1

		}
	}
	else if (b=="university"){

		cementcost = Math.pow(1.3,(buildings["university"]))*15000
		brickcost = Math.pow(1.3,(buildings["university"]))*1000
		framecost = Math.pow(1.3,(buildings["university"]))*500

	

		if (items["cement"]>=cementcost && craft["frame"]>=framecost && craft["brick"]>=brickcost){

			items["cement"]-=cementcost;
			craft["brick"]-=brickcost;
			craft["frame"]-=framecost;

			buildstatus["university"]=1;
			buildings["university"]+=1

			maximums["knowledge"]+=200;

			$(".toggle_university").show()
			unlocked[".toggle_university"]=1

		}
	}
	else if (b=="concretemixer"){

		brickcost = Math.pow(1.25,(buildings["concretemixer"]))*1000
		platecost = Math.pow(1.25,(buildings["concretemixer"]))*200
	
		if (craft["brick"]>=brickcost && craft["plate"]>=platecost){

			craft["brick"]-=brickcost;
			craft["plate"]-=platecost;

			buildstatus["concretemixer"]=1;
			buildings["concretemixer"]+=1

			$(".toggle_concretemixer").show()
			unlocked[".toggle_concretemixer"]=1
		}
	}
	else if (b=="toolfactory"){

		brickcost = Math.pow(1.20,(buildings["toolfactory"]))*2500
		concretecost = Math.pow(1.20,(buildings["toolfactory"]))*10000
	
		if (craft["brick"]>=brickcost && items["concrete"]>=concretecost){

			craft["brick"]-=brickcost;
			items["concrete"]-=concretecost;

			buildstatus["toolfactory"]=1;
			buildings["toolfactory"]+=1

			$(".toggle_toolfactory").show()
			unlocked[".toggle_toolfactory"]=1
		}
	}
	else if (b=="barracks"){

		concretecost = Math.pow(1.20,(buildings["barracks"]))*20000
	
		if (items["concrete"]>=concretecost){

			items["concrete"]-=concretecost;

			maximums["population"]+=5;

			buildstatus["barracks"]=1;
			buildings["barracks"]+=1

			$(".toggle_barracks").show()
			unlocked[".toggle_barracks"]=1
		}
	}
}

function calculatecost(){

function set_unattainable(element, unattainable){
  if(unattainable){
    $(element).addClass("unattainable"); 
  } else {
    $(element).removeClass("unattainable"); 
  }
}




//Buildings


woodcost= Math.pow(1.1,(buildings["lumbermill"]))*3
if(items["wood"]<woodcost){
	$(".build_lumbermill").addClass("unavailable")
}
else
{
	$(".build_lumbermill").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost
set_unattainable(".build_lumbermill", unattainable);
$(".build_lumbermill").html("Lumbermill ("+buildings["lumbermill"]+")");
$(".build_lumbermill").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_lumbermill").attr('tooltip2', "Wood production: +0.20/s");


woodcost= Math.pow(1.1,(buildings["mine"]))*2
mineralcost=Math.pow(1.1, (buildings["mine"]))*3.5
if(items["wood"]<woodcost || items["mineral"]<mineralcost){
	$(".build_mine").addClass("unavailable")
}
else
{
	$(".build_mine").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["mineral"]*(bonus["storage"]+1)<mineralcost
set_unattainable(".build_mine", unattainable);
$(".build_mine").html("Mine ("+buildings["mine"]+")");
$(".build_mine").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2) )
$(".build_mine").attr('tooltip2',"Minerals: "+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2) )
$(".build_mine").attr('tooltip3', "Mineral production: +0.20/s");


woodcost= Math.pow(1.6,(buildings["warehouse"]))*20
mineralcost=Math.pow(1.6, (buildings["warehouse"]))*10
if(items["wood"]<woodcost || items["mineral"]<mineralcost){
	$(".build_warehouse").addClass("unavailable")
}
else
{
	$(".build_warehouse").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["mineral"]*(bonus["storage"]+1)<mineralcost
set_unattainable(".build_warehouse", unattainable);
$(".build_warehouse").html("Warehouse ("+buildings["warehouse"]+")");
$(".build_warehouse").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2) )
$(".build_warehouse").attr('tooltip2',"Minerals: "+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2) )
$(".build_warehouse").attr('tooltip3', "Increments storage space for basic materials");


mineralcost=Math.pow(1.35, (buildings["fountain"]))*6
if(items["mineral"]<mineralcost){
	$(".build_fountain").addClass("unavailable")
}
else
{
	$(".build_fountain").removeClass("unavailable")
}
unattainable=maximums["mineral"]*(bonus["storage"]+1)<mineralcost
set_unattainable(".build_fountain", unattainable);
$(".build_fountain").html("Fountain ("+buildings["fountain"]+")");
$(".build_fountain").attr('tooltip',"Minerals: "+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2) )
$(".build_fountain").attr('tooltip2', "Water production: +0.40/s");
$(".build_fountain").attr('tooltip3', "Water storage: 5");

woodcost= Math.pow(1.35,(buildings["pasture"]))*10
if(items["wood"]<woodcost){
	$(".build_pasture").addClass("unavailable")
}
else
{
	$(".build_pasture").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost
set_unattainable(".build_pasture", unattainable);
$(".build_pasture").html("Pasture ("+buildings["pasture"]+")");
$(".build_pasture").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_pasture").attr('tooltip2', "Water consumption: -0.20/s");
$(".build_pasture").attr('tooltip3', "Food production: +0.20/s");

woodcost= Math.pow(1.8,(buildings["house"]))*20
mineralcost=Math.pow(1.8, (buildings["house"]))*50
foodcost=Math.pow(1.8, (buildings["house"]))*15
if(items["wood"]<woodcost || items["mineral"]<mineralcost || items["food"]<foodcost){
	$(".build_house").addClass("unavailable")
}
else
{
	$(".build_house").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["mineral"]*(bonus["storage"]+1)<mineralcost || maximums["food"]*(bonus["storage"]+1)<foodcost
set_unattainable(".build_house", unattainable);
$(".build_house").html("House ("+buildings["house"]+")");
$(".build_house").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_house").attr('tooltip2', 'Minerals: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".build_house").attr('tooltip3', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".build_house").attr('tooltip4', "Max population +3");


woodcost= Math.pow(1.9,(buildings["library"]))*300
mineralcost=Math.pow(1.9, (buildings["library"]))*100
if(items["wood"]<woodcost || items["mineral"]<mineralcost){
	$(".build_library").addClass("unavailable")
}
else
{
	$(".build_library").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["mineral"]*(bonus["storage"]+1)<mineralcost
set_unattainable(".build_library", unattainable);
$(".build_library").html("Library ("+buildings["library"]+")");
$(".build_library").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_library").attr('tooltip2', 'Minerals: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
if(buildings["library"]<8){
$(".build_library").attr('tooltip3', 'Unlock powerful technologies each level');
}
else
{
$(".build_library").attr('tooltip4', 'Knowledge production +0.01/s');
$(".build_library").attr('tooltip5', 'Knowledge maximum + 100');
}


woodcost= Math.pow(1.7,(buildings["banner"]))*100;
coppercost=Math.pow(1.7, (buildings["banner"]))*1;
if(items["wood"]<woodcost || items["copper"]<coppercost){
	$(".build_banner").addClass("unavailable")
}
else
{
	$(".build_banner").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["copper"]*(bonus["storage"]+1)<coppercost
set_unattainable(".build_banner", unattainable);
$(".build_banner").html("Banner ("+buildings["banner"]+")");
$(".build_banner").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_banner").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".build_banner").attr('tooltip3', 'Max morale +1');

mineralcost= Math.pow(1.3,(buildings["foundry"]))*500;
coppercost=Math.pow(1.3, (buildings["foundry"]))*5
if(items["mineral"]<mineralcost || items["copper"]<coppercost){
	$(".build_foundry").addClass("unavailable")
}
else
{
	$(".build_foundry").removeClass("unavailable")
}
unattainable=maximums["mineral"]*(bonus["storage"]+1)<mineralcost || maximums["copper"]*(bonus["storage"]+1)<coppercost
set_unattainable(".build_foundry", unattainable);
$(".build_foundry").html("Foundry ("+buildings["foundry"]+")");
$(".build_foundry").attr('tooltip', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".build_foundry").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".build_foundry").attr('tooltip3', "Mineral consumption: -0.50/s");
$(".build_foundry").attr('tooltip4', "Iron production: +0.02/s");
if(technologies["bronze"]>0){
	$(".build_foundry").attr('tooltip5', "Tin production: +0.005/s");
}


blockcost= Math.pow(1.4,(buildings["barn"]))*5
if(craft["block"]<blockcost){
	$(".build_barn").addClass("unavailable")
}
else
{
	$(".build_barn").removeClass("unavailable")
}
$(".build_barn").html("Barn ("+buildings["barn"]+")");
$(".build_barn").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".build_barn").attr('tooltip2', 'Max wood +500');
$(".build_barn").attr('tooltip3', 'Max mineral +500');

blockcost= Math.pow(1.6,(buildings["casino"]))*3
goldcost= Math.pow(1.6,(buildings["casino"]))*1
if(craft["block"]<blockcost || items["gold"]<goldcost){
	$(".build_casino").addClass("unavailable")
}
else
{
	$(".build_casino").removeClass("unavailable")
}
unattainable=maximums["gold"]*(bonus["storage"]+1)<goldcost
set_unattainable(".build_casino", unattainable);
$(".build_casino").html("Casino ("+buildings["casino"]+")");
$(".build_casino").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".build_casino").attr('tooltip2', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".build_casino").attr('tooltip3', 'Allows betting in the casino');
$(".build_casino").attr('tooltip4', 'Gold production +0.004/s');
$(".build_casino").attr('tooltip5', 'Max bet +0.5');
$(".build_casino").attr('tooltip6', 'Max gold +1');


woodcost= Math.pow(1.6,(buildings["market"]))*500
coincost= Math.pow(1.6,(buildings["market"]))*1
if(craft["coin"]<coincost || items["wood"]<woodcost){
	$(".build_market").addClass("unavailable")
}
else
{
	$(".build_market").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost
set_unattainable(".build_market", unattainable);
$(".build_market").html("Market ("+buildings["market"]+")");
$(".build_market").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_market").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".build_market").attr('tooltip3', 'Allows trading');
$(".build_market").attr('tooltip4', '+5% market trade efficiency');

blockcost= Math.pow(1.5,(buildings["kiln"]))*15
mineralcost= Math.pow(1.5,(buildings["kiln"]))*2000
if(craft["block"]<blockcost || items["mineral"]<mineralcost){
	$(".build_kiln").addClass("unavailable")
}
else
{
	$(".build_kiln").removeClass("unavailable")
}
unattainable=maximums["mineral"]*(bonus["storage"]+1)<mineralcost
set_unattainable(".build_kiln", unattainable);
$(".build_kiln").html("Kiln ("+buildings["kiln"]+")");
$(".build_kiln").attr('tooltip', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".build_kiln").attr('tooltip2', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".build_kiln").attr('tooltip3', 'Wood consumption: -2.00/s');
$(".build_kiln").attr('tooltip4', 'Coal production: +0.01/s');

bronzecost= Math.pow(1.5,(buildings["statue"]))*1
if(craft["bronze"]<bronzecost){
	$(".build_statue").addClass("unavailable")
}
else
{
	$(".build_statue").removeClass("unavailable")
}
$(".build_statue").html("Statue ("+buildings["statue"]+")");
$(".build_statue").attr('tooltip', 'Bronze: '+ parseFloat(craft["bronze"]).toFixed(2)+" / "+parseFloat(bronzecost).toFixed(2))
$(".build_statue").attr('tooltip2', 'Max morale +2');
$(".build_statue").attr('tooltip3', 'Morale production +5%');

blockcost= Math.pow(1.25,(buildings["towncenter"]))*20
structurecost= Math.pow(1.25,(buildings["towncenter"]))*5
coincost= Math.pow(1.25,(buildings["towncenter"]))*3
if(craft["block"]<blockcost || craft["structure"]<structurecost || craft["coin"]<coincost){
	$(".build_towncenter").addClass("unavailable")
}
else
{
	$(".build_towncenter").removeClass("unavailable")
}
$(".build_towncenter").html("Towncenter ("+buildings["towncenter"]+")");
$(".build_towncenter").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".build_towncenter").attr('tooltip2', 'Structure: '+ parseFloat(craft["structure"]).toFixed(2)+" / "+parseFloat(structurecost).toFixed(2))
$(".build_towncenter").attr('tooltip3', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".build_towncenter").attr('tooltip4', 'Provides big storage space');
$(".build_towncenter").attr('tooltip5', 'Max population +5');

steelcost= Math.pow(1.4,(buildings["workbench"]))*2
if(items["steel"]<steelcost){
	$(".build_workbench").addClass("unavailable")
}
else
{
	$(".build_workbench").removeClass("unavailable")
}
unattainable=maximums["steel"]*(bonus["storage"]+1)<steelcost
set_unattainable(".build_workbench", unattainable);
$(".build_workbench").html("Workbench ("+buildings["workbench"]+")");
$(".build_workbench").attr('tooltip', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".build_workbench").attr('tooltip2', 'Craft efficiency +8%');
$(".build_workbench").attr('tooltip4', 'Allows +1 items crafted per workbench');
$(".build_workbench").attr('tooltip5', 'when active');


blockcost= Math.pow(1.6,(buildings["castle"]))*50
goldcost= Math.pow(1.6,(buildings["castle"]))*5
if(items["gold"]<goldcost || craft["block"]<blockcost){
	$(".build_castle").addClass("unavailable")
}
else
{
	$(".build_castle").removeClass("unavailable")
}
unattainable=maximums["gold"]*(bonus["storage"]+1)<goldcost
set_unattainable(".build_castle", unattainable);
$(".build_castle").html("Castle ("+buildings["castle"]+")");
$(".build_castle").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".build_castle").attr('tooltip2', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".build_castle").attr('tooltip4', 'Unlocks leaders to rule the realm.');
$(".build_castle").attr('tooltip5', '+1 title per level');


tokencost= Math.pow(1.2,(buildings["relic"]))*20
if(craft["token"]<tokencost){
	$(".build_relic").addClass("unavailable")
}
else
{
	$(".build_relic").removeClass("unavailable")
}
$(".build_relic").html("Relic ("+buildings["relic"]+")");
$(".build_relic").attr('tooltip', 'Token: '+ parseFloat(craft["token"]).toFixed(2)+" / "+parseFloat(tokencost).toFixed(2))
$(".build_relic").attr('tooltip3', 'Global production +1%');


woodcost=Math.pow(1.4,(buildings["shipyard"]))*20000
structurecost= Math.pow(1.4,(buildings["shipyard"]))*50
if(items["wood"]<woodcost || craft["structure"]<structurecost){
	$(".build_shipyard").addClass("unavailable")
}
else
{
	$(".build_shipyard").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost
set_unattainable(".build_shipyard", unattainable);
$(".build_shipyard").html("Shipyard ("+buildings["shipyard"]+")");
$(".build_shipyard").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_shipyard").attr('tooltip2', 'Structure: '+ parseFloat(craft["structure"]).toFixed(2)+" / "+parseFloat(structurecost).toFixed(2))
$(".build_shipyard").attr('tooltip4', 'Wood consumption -40.00/s');
$(".build_shipyard").attr('tooltip5', 'Plank production +0.05/s');


ironcost=Math.pow(1.3,(buildings["docks"]))*100
plankcost= Math.pow(1.3,(buildings["docks"]))*50
if(items["iron"]<ironcost || craft["plank"]<plankcost){
	$(".build_docks").addClass("unavailable")
}
else
{
	$(".build_docks").removeClass("unavailable")
}
unattainable=maximums["iron"]*(bonus["storage"]+1)<ironcost
set_unattainable(".build_docks", unattainable);
$(".build_docks").html("Docks ("+buildings["docks"]+")");
$(".build_docks").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".build_docks").attr('tooltip2', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".build_docks").attr('tooltip4', '+1 Ship storage');


blockcost=Math.pow(1.4,(buildings["bank"]))*200
steelcost=Math.pow(1.4,(buildings["bank"]))*100
coincost=Math.pow(1.4,(buildings["bank"]))*100
if(items["steel"]<steelcost || craft["block"]<blockcost || craft["coin"]<coincost){
	$(".build_bank").addClass("unavailable")
}
else
{
	$(".build_bank").removeClass("unavailable")
}
unattainable=maximums["steel"]*(bonus["storage"]+1)<steelcost
set_unattainable(".build_bank", unattainable);
$(".build_bank").html("Bank ("+buildings["bank"]+")");
$(".build_bank").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".build_bank").attr('tooltip2', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".build_bank").attr('tooltip3', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".build_bank").attr('tooltip5', 'Gold storage +2');
$(".build_bank").attr('tooltip6', 'Gold consumption -0.10/s');
$(".build_bank").attr('tooltip7', 'Coin production +0.02/s');


coppercost=Math.pow(1.2,(buildings["crusher"]))*150
ironcost=Math.pow(1.2,(buildings["crusher"]))*100
steelcost=Math.pow(1.2,(buildings["crusher"]))*50
if(items["steel"]<steelcost || items["iron"]<ironcost || items["copper"]<coppercost){
	$(".build_crusher").addClass("unavailable")
}
else
{
	$(".build_crusher").removeClass("unavailable")
}
unattainable=maximums["copper"]*(bonus["storage"]+1)<coppercost || maximums["iron"]*(bonus["storage"]+1)<ironcost || maximums["steel"]*(bonus["storage"]+1)<steelcost
set_unattainable(".build_crusher", unattainable);
$(".build_crusher").html("Crusher ("+buildings["crusher"]+")");
$(".build_crusher").attr('tooltip', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".build_crusher").attr('tooltip2', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".build_crusher").attr('tooltip3', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".build_crusher").attr('tooltip5', 'Sand storage +200');
$(".build_crusher").attr('tooltip6', 'Mineral consumption -10.00/s');
$(".build_crusher").attr('tooltip7', 'Sand production +0.5/s');


bronzecost=Math.pow(1.3,(buildings["blockyard"]))*50
pickaxecost=Math.pow(1.3,(buildings["blockyard"]))*500
if(craft["bronze"]<bronzecost || craft["pickaxe"]<pickaxecost){
	$(".build_blockyard").addClass("unavailable")
}
else
{
	$(".build_blockyard").removeClass("unavailable")
}
$(".build_blockyard").html("Blockyard ("+buildings["blockyard"]+")");
$(".build_blockyard").attr('tooltip', 'Bronze: '+ parseFloat(craft["bronze"]).toFixed(2)+" / "+parseFloat(bronzecost).toFixed(2))
$(".build_blockyard").attr('tooltip2', 'Pickaxe: '+ parseFloat(craft["pickaxe"]).toFixed(2)+" / "+parseFloat(pickaxecost).toFixed(2))
$(".build_blockyard").attr('tooltip4', 'Wood consumption -4.00/s');
$(".build_blockyard").attr('tooltip5', 'Mineral consumption -8.00/s');
$(".build_blockyard").attr('tooltip6', 'Block production +0.04/s');


framecost= Math.pow(1.4,(buildings["bunker"]))*5
pickaxecost=Math.pow(1.4, (buildings["bunker"]))*750
if(craft["frame"]<framecost || craft["pickaxe"]<pickaxecost){
	$(".build_bunker").addClass("unavailable")
}
else
{
	$(".build_bunker").removeClass("unavailable")
}
$(".build_bunker").html("Bunker ("+buildings["bunker"]+")");
$(".build_bunker").attr('tooltip', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".build_bunker").attr('tooltip2', 'Pickaxe: '+ parseFloat(craft["pickaxe"]).toFixed(2)+" / "+parseFloat(pickaxecost).toFixed(2))
$(".build_bunker").attr('tooltip4', 'Provides storage for bulk materials.');


framecost=Math.pow(1.4,(buildings["laboratory"]))*5
glasscost=Math.pow(1.4,(buildings["laboratory"]))*20
if(craft["frame"]<framecost || craft["glass"]<glasscost){
	$(".build_laboratory").addClass("unavailable")
}
else
{
	$(".build_laboratory").removeClass("unavailable")
}
$(".build_laboratory").html("Laboratory ("+buildings["laboratory"]+")");
$(".build_laboratory").attr('tooltip', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".build_laboratory").attr('tooltip2', 'Glass: '+ parseFloat(craft["glass"]).toFixed(2)+" / "+parseFloat(glasscost).toFixed(2))
$(".build_laboratory").attr('tooltip3', 'Chemicals storage + 5');
$(".build_laboratory").attr('tooltip4', 'Bottle consumption per scientist -0.001/s');
$(".build_laboratory").attr('tooltip5', 'Knowledge production per scientist  +0.005/s');
$(".build_laboratory").attr('tooltip6', 'Chemicals production per scientist +0.001/s');


framecost=Math.pow(1.3,(buildings["scienceoutpost"]))*10
glasscost=Math.pow(1.3,(buildings["scienceoutpost"]))*20
territorycost=Math.pow(1.2,(buildings["tradeoutpost"]+buildings["scienceoutpost"]+buildings["militaryoutpost"]))*400
if(craft["frame"]<framecost || craft["glass"]<glasscost || bonus["territory"]<territorycost){
	$(".build_scienceoutpost").addClass("unavailable")
}
else
{
	$(".build_scienceoutpost").removeClass("unavailable")
}
$(".build_scienceoutpost").html("Scientific outpost ("+buildings["scienceoutpost"]+")");
$(".build_scienceoutpost").attr('tooltip', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".build_scienceoutpost").attr('tooltip2', 'Glass: '+ parseFloat(craft["glass"]).toFixed(2)+" / "+parseFloat(glasscost).toFixed(2))
$(".build_scienceoutpost").attr('tooltip3', 'Territory: '+ parseFloat(bonus["territory"]).toFixed(2)+" / "+parseFloat(territorycost).toFixed(2))
$(".build_scienceoutpost").attr('tooltip5', 'Knowledge production +0.02/s');
$(".build_scienceoutpost").attr('tooltip6', 'Max population +10');
$(".build_scienceoutpost").attr('tooltip7', 'Grants 1 title per outpost');


framecost=Math.pow(1.3,(buildings["tradeoutpost"]))*10
coincost=Math.pow(1.3,(buildings["tradeoutpost"]))*300
territorycost=Math.pow(1.2,(buildings["tradeoutpost"]+buildings["scienceoutpost"]+buildings["militaryoutpost"]))*400
if(craft["frame"]<framecost || craft["coin"]<coincost || bonus["territory"]<territorycost){
	$(".build_tradeoutpost").addClass("unavailable")
}
else
{
	$(".build_tradeoutpost").removeClass("unavailable")
}
$(".build_tradeoutpost").html("Trade outpost ("+buildings["tradeoutpost"]+")");
$(".build_tradeoutpost").attr('tooltip', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".build_tradeoutpost").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".build_tradeoutpost").attr('tooltip3', 'Territory: '+ parseFloat(bonus["territory"]).toFixed(2)+" / "+parseFloat(territorycost).toFixed(2))
$(".build_tradeoutpost").attr('tooltip5', 'Gold production +0.01/s');
$(".build_tradeoutpost").attr('tooltip6', 'Max population +10');
$(".build_tradeoutpost").attr('tooltip7', 'Grants 1 title per outpost');


framecost=Math.pow(1.3,(buildings["militaryoutpost"]))*10
swordcost=Math.pow(1.3,(buildings["militaryoutpost"]))*400
armorcost=Math.pow(1.3,(buildings["militaryoutpost"]))*20
territorycost=Math.pow(1.2,(buildings["tradeoutpost"]+buildings["scienceoutpost"]+buildings["militaryoutpost"]))*400
if(craft["frame"]<framecost || craft["sword"]<swordcost || craft["armor"]<armorcost || bonus["territory"]<territorycost){
	$(".build_militaryoutpost").addClass("unavailable")
}
else
{
	$(".build_militaryoutpost").removeClass("unavailable")
}
$(".build_militaryoutpost").html("Military outpost ("+buildings["militaryoutpost"]+")");
$(".build_militaryoutpost").attr('tooltip', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".build_militaryoutpost").attr('tooltip2', 'Sword: '+ parseFloat(craft["sword"]).toFixed(2)+" / "+parseFloat(swordcost).toFixed(2))
$(".build_militaryoutpost").attr('tooltip3', 'Armor: '+ parseFloat(craft["armor"]).toFixed(2)+" / "+parseFloat(armorcost).toFixed(2))
$(".build_militaryoutpost").attr('tooltip4', 'Territory: '+ parseFloat(bonus["territory"]).toFixed(2)+" / "+parseFloat(territorycost).toFixed(2))
$(".build_militaryoutpost").attr('tooltip5', 'Max morale +3');
$(".build_militaryoutpost").attr('tooltip6', 'Max population +10');
$(".build_militaryoutpost").attr('tooltip7', 'Grants 1 title per outpost');


mineralcost=Math.pow(1.2,(buildings["quarry"]))*50000
pickaxecost=Math.pow(1.2,(buildings["quarry"]))*500
if(items["mineral"]<mineralcost || craft["pickaxe"]<pickaxecost){
	$(".build_quarry").addClass("unavailable")
}
else
{
	$(".build_quarry").removeClass("unavailable")
}
unattainable=maximums["mineral"]*(bonus["storage"]+1)<mineralcost
set_unattainable(".build_quarry", unattainable);
$(".build_quarry").html("Quarry ("+buildings["quarry"]+")");
$(".build_quarry").attr('tooltip', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".build_quarry").attr('tooltip2', 'Pickaxe: '+ parseFloat(craft["pickaxe"]).toFixed(2)+" / "+parseFloat(pickaxecost).toFixed(2))
$(".build_quarry").attr('tooltip4', 'Clay production +0.20/s');
if(technologies["mineralcoal"]==1){
$(".build_quarry").attr('tooltip5', 'Coal production +0.02/s');
}
if(technologies["safestorage"]==1){
$(".build_quarry").attr('tooltip6', 'Nickel production +0.001/s');
}


framecost=Math.pow(1.4,(buildings["carpentry"]))*5
brickcost=Math.pow(1.4,(buildings["carpentry"]))*20
if(craft["frame"]<framecost || craft["brick"]<brickcost){
	$(".build_carpentry").addClass("unavailable")
}
else
{
	$(".build_carpentry").removeClass("unavailable")
}
$(".build_carpentry").html("Carpentry ("+buildings["carpentry"]+")");
$(".build_carpentry").attr('tooltip', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".build_carpentry").attr('tooltip2', 'Brick: '+ parseFloat(craft["brick"]).toFixed(2)+" / "+parseFloat(brickcost).toFixed(2))
$(".build_carpentry").attr('tooltip4', 'Wood consumption -5.00/s');
$(".build_carpentry").attr('tooltip5', 'Iron consumption -0.10/s');
$(".build_carpentry").attr('tooltip6', 'Structure production +0.005/s');


brickcost=Math.pow(1.4,(buildings["blastfurnace"]))*25
if(craft["brick"]<brickcost){
	$(".build_blastfurnace").addClass("unavailable")
}
else
{
	$(".build_blastfurnace").removeClass("unavailable")
}
$(".build_blastfurnace").html("Blast furnace ("+buildings["blastfurnace"]+")");
$(".build_blastfurnace").attr('tooltip', 'Brick: '+ parseFloat(craft["brick"]).toFixed(2)+" / "+parseFloat(brickcost).toFixed(2))
$(".build_blastfurnace").attr('tooltip2', 'Mineral consumption per foundryman -0.25/s');
$(".build_blastfurnace").attr('tooltip3', 'Iron production per foundryman +0.01/s');


brickcost=Math.pow(1.2,(buildings["compressor"]))*500
glasscost=Math.pow(1.2,(buildings["compressor"]))*50
framecost=Math.pow(1.2,(buildings["compressor"]))*25
if(craft["brick"]<brickcost || craft["glass"]<glasscost || craft["frame"]<framecost){
	$(".build_compressor").addClass("unavailable")
}
else
{
	$(".build_compressor").removeClass("unavailable")
}
$(".build_compressor").html("Compressor ("+buildings["compressor"]+")");
$(".build_compressor").attr('tooltip', 'Brick: '+ parseFloat(craft["brick"]).toFixed(2)+" / "+parseFloat(brickcost).toFixed(2))
$(".build_compressor").attr('tooltip2', 'Glass: '+ parseFloat(craft["glass"]).toFixed(2)+" / "+parseFloat(glasscost).toFixed(2))
$(".build_compressor").attr('tooltip3', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".build_compressor").attr('tooltip5', 'Increases all storages by 5%');


tokencost=Math.pow(1.15,(buildings["share"]))*1000
if(craft["token"]<tokencost){
	$(".build_share").addClass("unavailable")
}
else
{
	$(".build_share").removeClass("unavailable")
}
$(".build_share").html("Share ("+buildings["share"]+")");
$(".build_share").attr('tooltip', 'Token: '+ parseFloat(craft["token"]).toFixed(2)+" / "+parseFloat(tokencost).toFixed(2))
$(".build_share").attr('tooltip3', 'Token production +0.1/s');


blockcost=Math.pow(1.2,(buildings["repository"]))*5000
glasscost=Math.pow(1.2,(buildings["repository"]))*100
bottlecost=Math.pow(1.2,(buildings["repository"]))*10
if(craft["block"]<blockcost || craft["glass"]<glasscost || craft["bottle"]<bottlecost){
	$(".build_repository").addClass("unavailable")
}
else
{
	$(".build_repository").removeClass("unavailable")
}
$(".build_repository").html("Repository ("+buildings["repository"]+")");
$(".build_repository").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".build_repository").attr('tooltip2', 'Glass: '+ parseFloat(craft["glass"]).toFixed(2)+" / "+parseFloat(glasscost).toFixed(2))
$(".build_repository").attr('tooltip3', 'Bottle: '+ parseFloat(craft["bottle"]).toFixed(2)+" / "+parseFloat(bottlecost).toFixed(2))
$(".build_repository").attr('tooltip5', 'Provides storage for complex materials');


woodcost=Math.pow(1.2,(buildings["trainstation"]))*100000
ironcost=Math.pow(1.2,(buildings["trainstation"]))*500
framecost= Math.pow(1.2,(buildings["trainstation"]))*50
if(craft["frame"]<framecost || items["iron"]<ironcost || items["wood"]<woodcost){
	$(".build_trainstation").addClass("unavailable")
}
else
{
	$(".build_trainstation").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["iron"]*(bonus["storage"]+1)<ironcost
set_unattainable(".build_trainstation", unattainable);
$(".build_trainstation").html("Train station ("+buildings["trainstation"]+")");
$(".build_trainstation").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_trainstation").attr('tooltip2', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".build_trainstation").attr('tooltip3', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".build_trainstation").attr('tooltip5', '+2 train capacity');


brickcost= Math.pow(1.3,(buildings["workshop"]))*500
platecost=Math.pow(1.3,(buildings["workshop"]))*500
enginecost=Math.pow(1.3,(buildings["workshop"]))*10
if(craft["brick"]<brickcost || craft["plate"]<platecost || craft["engine"]<enginecost){
	$(".build_workshop").addClass("unavailable")
}
else
{
	$(".build_workshop").removeClass("unavailable")
}
$(".build_workshop").html("Workshop ("+buildings["workshop"]+")");
$(".build_workshop").attr('tooltip', 'Brick: '+ parseFloat(craft["brick"]).toFixed(2)+" / "+parseFloat(brickcost).toFixed(2))
$(".build_workshop").attr('tooltip2', 'Plate: '+ parseFloat(craft["plate"]).toFixed(2)+" / "+parseFloat(platecost).toFixed(2))
$(".build_workshop").attr('tooltip3', 'Engine: '+ parseFloat(craft["engine"]).toFixed(2)+" / "+parseFloat(enginecost).toFixed(2))
$(".build_workshop").attr('tooltip4', '+10% craft efficiency');
$(".build_workshop").attr('tooltip5', 'Coal consumption: -0.03/s');
$(".build_workshop").attr('tooltip6', 'Chemicals consumption: -0.01/s');
$(".build_workshop").attr('tooltip7', '+10% autocraft efficiency when active');


framecost= Math.pow(1.1,(buildings["powerplant"]))*300
platecost=Math.pow(1.1,(buildings["powerplant"]))*500
if(craft["frame"]<framecost || craft["plate"]<platecost){
	$(".build_powerplant").addClass("unavailable")
}
else
{
	$(".build_powerplant").removeClass("unavailable")
}
$(".build_powerplant").html("Power plant ("+buildings["powerplant"]+")");
$(".build_powerplant").attr('tooltip', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".build_powerplant").attr('tooltip2', 'Plate: '+ parseFloat(craft["plate"]).toFixed(2)+" / "+parseFloat(platecost).toFixed(2))
$(".build_powerplant").attr('tooltip4', 'Coal consumption: -0.05/s');
$(".build_powerplant").attr('tooltip5', 'Water consumption: -2.00/s');
$(".build_powerplant").attr('tooltip6', 'Energy production: 1 MWh');
$(".build_powerplant").attr('tooltip7', 'Energy storage: 100 KWh');


steelcost = Math.pow(1.3,(buildings["cementkiln"]))*600
platecost = Math.pow(1.3,(buildings["cementkiln"]))*200
if(items["steel"]<steelcost || craft["plate"]<platecost){
	$(".build_cementkiln").addClass("unavailable")
}
else
{
	$(".build_cementkiln").removeClass("unavailable")
}
unattainable=maximums["steel"]*(bonus["storage"]+1)<steelcost
set_unattainable(".build_cementkiln", unattainable);
$(".build_cementkiln").html("Cement kiln ("+buildings["cementkiln"]+")");
$(".build_cementkiln").attr('tooltip', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".build_cementkiln").attr('tooltip2', 'Plate: '+ parseFloat(craft["plate"]).toFixed(2)+" / "+parseFloat(platecost).toFixed(2))
$(".build_cementkiln").attr('tooltip4', 'Mineral consumption: -100.00/s');
$(".build_cementkiln").attr('tooltip5', 'Clay consumption: -2.00/s');
$(".build_cementkiln").attr('tooltip6', 'Energy consumption: 300 KWh');
$(".build_cementkiln").attr('tooltip7', 'Cement production: +0.1/s');


cementcost = Math.pow(1.3,(buildings["university"]))*15000
brickcost = Math.pow(1.3,(buildings["university"]))*1000
framecost = Math.pow(1.3,(buildings["university"]))*500
if(items["cement"]<cementcost || craft["brick"]<brickcost || craft["frame"]<framecost){
	$(".build_university").addClass("unavailable")
}
else
{
	$(".build_university").removeClass("unavailable")
}
unattainable=maximums["cement"]*(bonus["storage"]+1)<cementcost
set_unattainable(".build_university", unattainable);
$(".build_university").html("University ("+buildings["university"]+")");
$(".build_university").attr('tooltip', 'Cement: '+ parseFloat(items["cement"]).toFixed(2)+" / "+parseFloat(cementcost).toFixed(2))
$(".build_university").attr('tooltip2', 'Brick: '+ parseFloat(craft["brick"]).toFixed(2)+" / "+parseFloat(brickcost).toFixed(2))
$(".build_university").attr('tooltip3', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".build_university").attr('tooltip4', 'Knowledge storage +200');
$(".build_university").attr('tooltip5', 'Energy consumption: 500 KWh');
$(".build_university").attr('tooltip6', 'Knowledge production: +0.05/s');
$(".build_university").attr('tooltip7', 'Book production +0.0001/s');

brickcost = Math.pow(1.25,(buildings["concretemixer"]))*1000
platecost = Math.pow(1.25,(buildings["concretemixer"]))*200
if(craft["brick"]<brickcost || craft["plate"]<platecost){
	$(".build_concretemixer").addClass("unavailable")
}
else
{
	$(".build_concretemixer").removeClass("unavailable")
}
$(".build_concretemixer").html("Concrete Mixer ("+buildings["concretemixer"]+")");
$(".build_concretemixer").attr('tooltip', 'Brick: '+ parseFloat(craft["brick"]).toFixed(2)+" / "+parseFloat(brickcost).toFixed(2))
$(".build_concretemixer").attr('tooltip2', 'Plate: '+ parseFloat(craft["plate"]).toFixed(2)+" / "+parseFloat(platecost).toFixed(2))
$(".build_concretemixer").attr('tooltip3', 'Mineral consumption: -50.00/s');
$(".build_concretemixer").attr('tooltip4', 'Water consumption: -10.00/s');
$(".build_concretemixer").attr('tooltip5', 'Cement consumption: -2.00/s');
$(".build_concretemixer").attr('tooltip6', 'Energy consumption: 500 KWh');
$(".build_concretemixer").attr('tooltip7', 'Concrete production: +0.05/s');

brickcost = Math.pow(1.20,(buildings["toolfactory"]))*2500
concretecost = Math.pow(1.20,(buildings["toolfactory"]))*10000
if(craft["brick"]<brickcost || items["concrete"]<concretecost){
	$(".build_toolfactory").addClass("unavailable")
}
else
{
	$(".build_toolfactory").removeClass("unavailable")
}
unattainable=maximums["concrete"]*(bonus["storage"]+1)<concretecost
set_unattainable(".build_toolfactory", unattainable);
$(".build_toolfactory").html("Tool factory ("+buildings["toolfactory"]+")");
$(".build_toolfactory").attr('tooltip', 'Brick: '+ parseFloat(craft["brick"]).toFixed(2)+" / "+parseFloat(brickcost).toFixed(2))
$(".build_toolfactory").attr('tooltip2', 'Concrete: '+ parseFloat(items["concrete"]).toFixed(2)+" / "+parseFloat(concretecost).toFixed(2))
$(".build_toolfactory").attr('tooltip3', 'Steel consumption: -2.00/s');
$(".build_toolfactory").attr('tooltip4', 'Copper consumption: -5.00/s');
$(".build_toolfactory").attr('tooltip5', 'Energy consumption: 1000 KWh');
$(".build_toolfactory").attr('tooltip6', 'Pickaxe production: +0.25/s');
$(".build_toolfactory").attr('tooltip7', 'Toolbox production: +0.001/s');


concretecost = Math.pow(1.20,(buildings["barracks"]))*20000
if(items["concrete"]<concretecost){
	$(".build_barracks").addClass("unavailable")
}
else
{
	$(".build_barracks").removeClass("unavailable")
}
unattainable=maximums["concrete"]*(bonus["storage"]+1)<concretecost
set_unattainable(".build_barracks", unattainable);
$(".build_barracks").html("Barracks ("+buildings["barracks"]+")");
$(".build_barracks").attr('tooltip', 'Concrete: '+ parseFloat(items["concrete"]).toFixed(2)+" / "+parseFloat(concretecost).toFixed(2))
$(".build_barracks").attr('tooltip3', 'Max population: +5');
$(".build_barracks").attr('tooltip5', 'Energy consumption: 800 KWh');
$(".build_barracks").attr('tooltip6', 'Morale consumption: -3.00/s');
$(".build_barracks").attr('tooltip7', 'Plans production: +0.1/s');




//People


foodcost=50;
if(items["food"]<foodcost || population>=maximums["population"]){
	$(".hire_woodcutter").addClass("unavailable")
}
else
{
	$(".hire_woodcutter").removeClass("unavailable")
}
$(".hire_woodcutter").html("Woodcutter ("+people["woodcutter"]+")");
$(".hire_woodcutter").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_woodcutter").attr('tooltip2', "Food consumption: -0.10/s");
$(".hire_woodcutter").attr('tooltip3', "Wood production: +1.00/s");


foodcost=50;
if(items["food"]<foodcost || population>=maximums["population"]){
	$(".hire_smelter").addClass("unavailable")
}
else
{
	$(".hire_smelter").removeClass("unavailable")
}
$(".hire_smelter").html("Smelter ("+people["smelter"]+")");
$(".hire_smelter").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_smelter").attr('tooltip2', "Mineral consumption: -0.20/s");
$(".hire_smelter").attr('tooltip3', "Food consumption: -0.10/s");
$(".hire_smelter").attr('tooltip4', "Copper production: +0.01/s");
if(technologies["metallurgy"]!=0){
	$(".hire_smelter").attr('tooltip5', "Gold production: +0.001/s");	
}


woodcost=50
if(items["wood"]<woodcost || population>=maximums["population"]){
	$(".hire_farmer").addClass("unavailable")
}
else
{
	$(".hire_farmer").removeClass("unavailable")
}
$(".hire_farmer").html("Farmer ("+people["farmer"]+")");
$(".hire_farmer").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_farmer").attr('tooltip2', "Food production: +0.40/s");


foodcost=50
pickaxecost=1
if(items["food"]<foodcost || craft["pickaxe"]<pickaxecost || population>=maximums["population"]){
	$(".hire_miner").addClass("unavailable")
}
else
{
	$(".hire_miner").removeClass("unavailable")
}
$(".hire_miner").html("Miner ("+people["miner"]+")");
$(".hire_miner").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_miner").attr('tooltip2', 'Pickaxe: '+ parseFloat(craft["pickaxe"]).toFixed(2)+" / "+parseFloat(pickaxecost).toFixed(2))
$(".hire_miner").attr('tooltip3', "Food consumption: -0.10/s");
$(".hire_miner").attr('tooltip4', 'Mineral production +1.00/s');
if(technologies["multitasking"]==1){
$(".hire_miner").attr('tooltip5', 'Clay production +0.05/s');
}


foodcost=200
coincost=1
if(items["food"]<foodcost || craft["coin"]<coincost || population>=maximums["population"]){
	$(".hire_foundryman").addClass("unavailable")
}
else
{
	$(".hire_foundryman").removeClass("unavailable")
}
$(".hire_foundryman").html("Foundryman ("+people["foundryman"]+")");
$(".hire_foundryman").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_foundryman").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".hire_foundryman").attr('tooltip3', "Food consumption: -0.10/s");
$(".hire_foundryman").attr('tooltip4', "Iron consumption: -0.05/s");
$(".hire_foundryman").attr('tooltip5', "Coal consumption: -0.02/s");
$(".hire_foundryman").attr('tooltip6', 'Steel production +0.01/s');


foodcost=500;
coincost=5;
if(items["food"]<foodcost || craft["coin"]<coincost || population>=maximums["population"]){
	$(".hire_sailor").addClass("unavailable")
}
else
{
	$(".hire_sailor").removeClass("unavailable")
}
$(".hire_sailor").html("Sailor ("+people["sailor"]+")");
$(".hire_sailor").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_sailor").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".hire_sailor").attr('tooltip3', "Food consumption: -0.40/s");
$(".hire_sailor").attr('tooltip5', 'People needed for naval missions.');


knowledgecost=100;
coincost=10;
if(items["knowledge"]<knowledgecost || craft["coin"]<coincost || population>=maximums["population"]){
	$(".hire_scientist").addClass("unavailable")
}
else
{
	$(".hire_scientist").removeClass("unavailable")
}
$(".hire_scientist").html("Scientist ("+people["scientist"]+")");
$(".hire_scientist").attr('tooltip', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".hire_scientist").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".hire_scientist").attr('tooltip3', "Food consumption: -0.20/s");
$(".hire_scientist").attr('tooltip4', "Coin consumption: -0.01/s");
$(".hire_scientist").attr('tooltip5', 'Knowledge production + 0.02/s');


coincost=500;
goldcost=100;
if(items["gold"]<goldcost || craft["coin"]<coincost || population>=maximums["population"]){
	$(".hire_marketer").addClass("unavailable")
}
else
{
	$(".hire_marketer").removeClass("unavailable")
}
$(".hire_marketer").html("Marketer ("+people["marketer"]+")");
$(".hire_marketer").attr('tooltip', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".hire_marketer").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".hire_marketer").attr('tooltip3', "Food consumption: -0.20/s");
$(".hire_marketer").attr('tooltip4', "Coin consumption: -0.05/s");
$(".hire_marketer").attr('tooltip5', 'Bronze production +0.001/s');
$(".hire_marketer").attr('tooltip6', 'Brick production +0.0005/s');
$(".hire_marketer").attr('tooltip7', 'Glass production +0.0005/s');


foodcost=50
spearcost=1
if(items["food"]<foodcost || craft["spear"]<spearcost || population>=maximums["population"]){
	$(".hire_pikeman").addClass("unavailable")
}
else
{
	$(".hire_pikeman").removeClass("unavailable")
}
$(".hire_pikeman").html("Pikeman ("+people["pikeman"]+")");
$(".hire_pikeman").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_pikeman").attr('tooltip2', 'Spear: '+ parseFloat(craft["spear"]).toFixed(2)+" / "+parseFloat(spearcost).toFixed(2))
$(".hire_pikeman").attr('tooltip3', "Food consumption: -0.10/s");
$(".hire_pikeman").attr('tooltip4', 'Morale production +0.02/s');
$(".hire_pikeman").attr('tooltip5', 'Attack: 5 Hp: 30');


foodcost=150
swordcost=1
if(items["food"]<foodcost || craft["sword"]<swordcost || population>=maximums["population"]){
	$(".hire_swordman").addClass("unavailable")
}
else
{
	$(".hire_swordman").removeClass("unavailable")
}
$(".hire_swordman").html("Swordman ("+people["swordman"]+")");
$(".hire_swordman").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_swordman").attr('tooltip2', 'Sword: '+ parseFloat(craft["sword"]).toFixed(2)+" / "+parseFloat(swordcost).toFixed(2))
$(".hire_swordman").attr('tooltip3', "Food consumption: -0.40/s");
$(".hire_swordman").attr('tooltip4', 'Morale production +0.01/s');
$(".hire_swordman").attr('tooltip5', 'Attack: 10 Hp: 50');
$(".hire_swordman").attr('tooltip6', 'Armor: 3');


swordmancost=1;
horsecost=1;
armorcost=1;
if(people["swordman"]<swordmancost || craft["horse"]<horsecost || craft["armor"]<armorcost){
	$(".hire_knight").addClass("unavailable")
}
else
{
	$(".hire_knight").removeClass("unavailable")
}
$(".hire_knight").html("Knight ("+people["knight"]+")");
$(".hire_knight").attr('tooltip', 'Swordman: '+ people["swordman"]+" / "+swordmancost)
$(".hire_knight").attr('tooltip2', 'Horse: '+ parseFloat(craft["horse"]).toFixed(2)+" / "+parseFloat(horsecost).toFixed(2))
$(".hire_knight").attr('tooltip3', 'Armor: '+ parseFloat(craft["armor"]).toFixed(2)+" / "+parseFloat(armorcost).toFixed(2))
$(".hire_knight").attr('tooltip4', "Food consumption: -2.00/s");
$(".hire_knight").attr('tooltip5', 'Morale production +0.04/s');
$(".hire_knight").attr('tooltip6', 'Attack: 25 Hp: 200');
$(".hire_knight").attr('tooltip7', 'Armor: 10');


foodcost=1000;
coincost=20;
if(items["food"]<foodcost || craft["coin"]<coincost || population>=maximums["population"]){
	$(".hire_medic").addClass("unavailable")
}
else
{
	$(".hire_medic").removeClass("unavailable")
}
$(".hire_medic").html("Medic ("+people["medic"]+")");
$(".hire_medic").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".hire_medic").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".hire_medic").attr('tooltip3', "Food consumption: -0.40/s");
$(".hire_medic").attr('tooltip5', 'Attack: 1 Hp: 50 Healing: 10');


coincost=50;
greatswordcost=1;
if(craft["coin"]<coincost || craft["greatsword"]<greatswordcost || population>=maximums["population"]){
	$(".hire_bersek").addClass("unavailable")
}
else
{
	$(".hire_bersek").removeClass("unavailable")
}
$(".hire_bersek").html("Bersek ("+people["bersek"]+")");
$(".hire_bersek").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".hire_bersek").attr('tooltip2', 'Greatsword: '+ parseFloat(craft["greatsword"]).toFixed(2)+" / "+parseFloat(greatswordcost).toFixed(2))
$(".hire_bersek").attr('tooltip3', "Food consumption: -0.80/s");
$(".hire_bersek").attr('tooltip4', "Gold consumption: -0.01/s");
$(".hire_bersek").attr('tooltip5', 'Morale production +0.20/s');
$(".hire_bersek").attr('tooltip6', 'Attack: 80 Hp: 100');
$(".hire_bersek").attr('tooltip7', 'Deals double damage the first round');


suppliescost=100;
elephantcost=1;
if(craft["elephant"]<elephantcost || craft["supplies"]<suppliescost || population>=maximums["population"]){
	$(".hire_warelephant").addClass("unavailable")
}
else
{
	$(".hire_warelephant").removeClass("unavailable")
}
$(".hire_warelephant").html("War elephant ("+people["warelephant"]+")");
$(".hire_warelephant").attr('tooltip', 'Supplies: '+ parseFloat(craft["supplies"]).toFixed(2)+" / "+parseFloat(suppliescost).toFixed(2))
$(".hire_warelephant").attr('tooltip2', 'Elephant: '+ parseFloat(craft["elephant"]).toFixed(2)+" / "+parseFloat(elephantcost).toFixed(2))
$(".hire_warelephant").attr('tooltip3', "Food consumption: -10.00/s");
$(".hire_warelephant").attr('tooltip4', "Water consumption: -2.00/s");
$(".hire_warelephant").attr('tooltip5', 'Morale production +0.02/s');
$(".hire_warelephant").attr('tooltip6', 'Attack: 100 Hp: 1200');
$(".hire_warelephant").attr('tooltip7', '25% chance to disobey and not attack');


coincost=100;
musketcost=1;
armorcost=1;
if(craft["musket"]<musketcost || craft["armor"]<armorcost || craft["coin"]<coincost || population>=maximums["population"]){
	$(".hire_musketeer").addClass("unavailable")
}
else
{
	$(".hire_musketeer").removeClass("unavailable")
}
$(".hire_musketeer").html("Musketeer ("+people["musketeer"]+")");
$(".hire_musketeer").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".hire_musketeer").attr('tooltip2', 'Armor: '+ parseFloat(craft["armor"]).toFixed(2)+" / "+parseFloat(armorcost).toFixed(2))
$(".hire_musketeer").attr('tooltip3', 'Musket: '+ parseFloat(craft["musket"]).toFixed(2)+" / "+parseFloat(musketcost).toFixed(2))
$(".hire_musketeer").attr('tooltip4', "Food consumption: -0.40/s");
$(".hire_musketeer").attr('tooltip5', 'Morale production +0.05/s');
$(".hire_musketeer").attr('tooltip6', 'Attack: 200 Hp: 400');
$(".hire_musketeer").attr('tooltip7', 'They need to reload between attacks');


platecost=200;
enginecost=2;
if(craft["plate"]<platecost || craft["engine"]<enginecost || population+2>=maximums["population"]){
	$(".hire_lighttank").addClass("unavailable")
}
else
{
	$(".hire_lighttank").removeClass("unavailable")
}
$(".hire_lighttank").html("Light tank ("+people["lighttank"]+")");
$(".hire_lighttank").attr('tooltip', 'Plate: '+ parseFloat(craft["plate"]).toFixed(2)+" / "+parseFloat(platecost).toFixed(2))
$(".hire_lighttank").attr('tooltip2', 'Engine: '+ parseFloat(craft["engine"]).toFixed(2)+" / "+parseFloat(enginecost).toFixed(2))
$(".hire_lighttank").attr('tooltip4', 'Attack: 500 Hp: 5000');
$(".hire_lighttank").attr('tooltip5', 'Armor: 50 Crew: 3');
$(".hire_lighttank").attr('tooltip6', 'Coal per expedition: 50');
$(".hire_lighttank").attr('tooltip7', 'They need to reload between attacks (4 ammo)');




//Ships


woodcost=20000;
plankcost=200;
structurecost=50;
if(items["wood"]<woodcost || craft["plank"]<plankcost || craft["structure"]<structurecost || ships>=maximums["ships"]){
	$(".hire_galley").addClass("unavailable")
}
else
{
	$(".hire_galley").removeClass("unavailable")
}
$(".hire_galley").html("Galley ("+people["galley"]+")");
$(".hire_galley").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".hire_galley").attr('tooltip2', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".hire_galley").attr('tooltip3', 'Structure: '+ parseFloat(craft["structure"]).toFixed(2)+" / "+parseFloat(structurecost).toFixed(2))
$(".hire_galley").attr('tooltip5', "Power: 150  Structure: 2,000");
$(".hire_galley").attr('tooltip6', 'Cargo capacity: 5,000  Crew: 2');


plankcost=1500;
structurecost=300;
if(craft["plank"]<plankcost || craft["structure"]<structurecost || ships>=maximums["ships"]){
	$(".hire_galleon").addClass("unavailable")
}
else
{
	$(".hire_galleon").removeClass("unavailable")
}
$(".hire_galleon").html("Galleon ("+people["galleon"]+")");
$(".hire_galleon").attr('tooltip', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".hire_galleon").attr('tooltip2', 'Structure: '+ parseFloat(craft["structure"]).toFixed(2)+" / "+parseFloat(structurecost).toFixed(2))
$(".hire_galleon").attr('tooltip4', "Power: 500  Structure: 15,000");
$(".hire_galleon").attr('tooltip5', 'Cargo capacity: 25,000  Crew: 5');

plankcost=1000;
steelcost=200;
coalcost=300;
if(craft["plank"]<plankcost || items["steel"]<steelcost || items["coal"]<coalcost || ships>=maximums["ships"]){
	$(".hire_fireship").addClass("unavailable")
}
else
{
	$(".hire_fireship").removeClass("unavailable")
}
$(".hire_fireship").html("Fireship ("+people["fireship"]+")");
$(".hire_fireship").attr('tooltip', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".hire_fireship").attr('tooltip2', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".hire_fireship").attr('tooltip3', 'Coal: '+ parseFloat(items["coal"]).toFixed(2)+" / "+parseFloat(coalcost).toFixed(2))
$(".hire_fireship").attr('tooltip4', "Power: 0  Structure: 4,000");
$(".hire_fireship").attr('tooltip5', 'Cargo capacity: 0  Crew: 3');
$(".hire_fireship").attr('tooltip6', 'Throws fire that deal 100 damage per round');
$(".hire_fireship").attr('tooltip7', 'This effect stacks');

plankcost=1000;
woodcost=100000;
ironcost=500;
if(craft["plank"]<plankcost || items["wood"]<woodcost || items["iron"]<ironcost || ships>=maximums["ships"]){
	$(".hire_caravel").addClass("unavailable")
}
else
{
	$(".hire_caravel").removeClass("unavailable")
}
$(".hire_caravel").html("Caravel ("+people["caravel"]+")");
$(".hire_caravel").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".hire_caravel").attr('tooltip2', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".hire_caravel").attr('tooltip3', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".hire_caravel").attr('tooltip4', "Power: 200  Structure: 6,000");
$(".hire_caravel").attr('tooltip5', 'Cargo capacity: 10.000  Crew: 3');
$(".hire_caravel").attr('tooltip6', 'Throws chains that lower enemy attack by 75 per round');
$(".hire_caravel").attr('tooltip7', 'Reduces trade mission time slightly');

steelcost=500;
platecost=500;
enginecost=8;
if(craft["plate"]<platecost || craft["engine"]<enginecost || items["steel"]<steelcost || trains>=maximums["trains"] || population+2>=maximums["population"]){
	$(".hire_cargotrain").addClass("unavailable")
}
else
{
	$(".hire_cargotrain").removeClass("unavailable")
}
$(".hire_cargotrain").html("Cargo train ("+people["cargotrain"]+")");
$(".hire_cargotrain").attr('tooltip', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".hire_cargotrain").attr('tooltip2', 'Plate: '+ parseFloat(craft["plate"]).toFixed(2)+" / "+parseFloat(platecost).toFixed(2))
$(".hire_cargotrain").attr('tooltip3', 'Engine: '+ parseFloat(craft["engine"]).toFixed(2)+" / "+parseFloat(enginecost).toFixed(2))
$(".hire_cargotrain").attr('tooltip5', "Coal consumption -0.02/s");
$(".hire_cargotrain").attr('tooltip6', 'Crew: 3');
$(".hire_cargotrain").attr('tooltip7', 'Trade amount: 3 coins/minute');




//Technologies


coppercost=1;
if(items["copper"]<coppercost){
	$(".tech_coppertools").addClass("unavailable")
}
else
{
	$(".tech_coppertools").removeClass("unavailable")
}
unattainable=maximums["copper"]*(bonus["storage"]+1)<coppercost
set_unattainable(".tech_coppertools", unattainable);
$(".tech_coppertools").addClass((technologies["coppertools"] >0 ? "researched" : ""))
$(".tech_coppertools").html("Copper tools" + (technologies["coppertools"] >0 ? " (researched)" : ""));
$(".tech_coppertools").attr('tooltip', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".tech_coppertools").attr('tooltip2', "Increments wood and mineral production by 20%");


woodcost=100;
coppercost=3;
if(items["copper"]<coppercost || items["wood"]<woodcost){
	$(".tech_pickaxe").addClass("unavailable")
}
else
{
	$(".tech_pickaxe").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["copper"]*(bonus["storage"]+1)<coppercost
set_unattainable(".tech_pickaxe", unattainable);
$(".tech_pickaxe").addClass((technologies["pickaxe"] >0 ? "researched" : ""))
$(".tech_pickaxe").html("Pickaxe" + (technologies["pickaxe"] >0 ? " (researched)" : ""));
$(".tech_pickaxe").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_pickaxe").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".tech_pickaxe").attr('tooltip3', "Allows the crafting of pickaxes and hiring of miners");


woodcost=200;
coppercost=5;
if(items["copper"]<coppercost || items["wood"]<woodcost){
	$(".tech_spear").addClass("unavailable")
}
else
{
	$(".tech_spear").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["copper"]*(bonus["storage"]+1)<coppercost
set_unattainable(".tech_spear", unattainable);
$(".tech_spear").addClass((technologies["spear"] >0 ? "researched" : ""))
$(".tech_spear").html("Basic weapons" + (technologies["spear"] >0 ? " (researched)" : ""));
$(".tech_spear").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_spear").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".tech_spear").attr('tooltip3', "Allows the crafting of spears and hiring of pikeman");


foodcost=100;
if(items["food"]<foodcost){
	$(".tech_exploration").addClass("unavailable")
}
else
{
	$(".tech_exploration").removeClass("unavailable")
}
unattainable=maximums["food"]*(bonus["storage"]+1)<foodcost
set_unattainable(".tech_exploration", unattainable);
$(".tech_exploration").addClass((technologies["exploration"] >0 ? "researched" : ""))
$(".tech_exploration").html("Exploration" + (technologies["exploration"] >0 ? " (researched)" : ""));
$(".tech_exploration").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_exploration").attr('tooltip2', "Allows exploration expeditions");


woodcost=1000;
mineralcost=500;
foodcost=200;
if(items["mineral"]<mineralcost || items["wood"]<woodcost || items["food"]<foodcost){
	$(".tech_ironfoundry").addClass("unavailable")
}
else
{
	$(".tech_ironfoundry").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["mineral"]*(bonus["storage"]+1)<mineralcost || maximums["food"]*(bonus["storage"]+1)<foodcost
set_unattainable(".tech_ironfoundry", unattainable);
$(".tech_ironfoundry").addClass((technologies["ironfoundry"] >0 ? "researched" : ""))
$(".tech_ironfoundry").html("Iron Foundry" + (technologies["ironfoundry"] >0 ? " (researched)" : ""));
$(".tech_ironfoundry").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_ironfoundry").attr('tooltip2', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_ironfoundry").attr('tooltip3', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_ironfoundry").attr('tooltip4', "Allows the construction of foundrys");


foodcost=200;
coppercost=10;
ironcost=5;
if(items["copper"]<coppercost || items["iron"]<ironcost || items["food"]<foodcost){
	$(".tech_metallurgy").addClass("unavailable")
}
else
{
	$(".tech_metallurgy").removeClass("unavailable")
}
unattainable=maximums["food"]*(bonus["storage"]+1)<foodcost || maximums["copper"]*(bonus["storage"]+1)<coppercost || maximums["iron"]*(bonus["storage"]+1)<ironcost
set_unattainable(".tech_metallurgy", unattainable);
$(".tech_metallurgy").addClass((technologies["metallurgy"] >0 ? "researched" : ""))
$(".tech_metallurgy").html("Metallurgy" + (technologies["metallurgy"] >0 ? " (researched)" : ""));
$(".tech_metallurgy").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_metallurgy").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".tech_metallurgy").attr('tooltip3', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_metallurgy").attr('tooltip4', "Provides 10% bonus to copper and iron production");
$(".tech_metallurgy").attr('tooltip5', "Allows smelters to smelt a bit of gold");


foodcost=500;
ironcost=10;
if(items["iron"]<ironcost || items["food"]<foodcost){
	$(".tech_sword").addClass("unavailable")
}
else
{
	$(".tech_sword").removeClass("unavailable")
}
unattainable=maximums["food"]*(bonus["storage"]+1)<foodcost || maximums["iron"]*(bonus["storage"]+1)<ironcost
set_unattainable(".tech_sword", unattainable);
$(".tech_sword").addClass((technologies["sword"] >0 ? "researched" : ""))
$(".tech_sword").html("Iron Sword" + (technologies["sword"] >0 ? " (researched)" : ""));
$(".tech_sword").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_sword").attr('tooltip2', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_sword").attr('tooltip3', "Allows the crafting of Iron Swords and the hiring of swordman");


woodcost=500
mineralcost=500
ironcost=15
if(items["iron"]<ironcost || items["wood"]<woodcost || items["mineral"]<mineralcost){
	$(".tech_storage").addClass("unavailable")
}
else
{
	$(".tech_storage").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["mineral"]*(bonus["storage"]+1)<mineralcost || maximums["iron"]*(bonus["storage"]+1)<ironcost
set_unattainable(".tech_storage", unattainable);
$(".tech_storage").addClass((technologies["storage"] >0 ? "researched" : ""))
$(".tech_storage").html("Storage management" + (technologies["storage"] >0 ? " (res...)" : ""));
$(".tech_storage").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_storage").attr('tooltip2', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_storage").attr('tooltip3', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_storage").attr('tooltip4', "Unlocks better storage methods");


goldcost=2;
if(items["gold"]<goldcost){
	$(".tech_currency").addClass("unavailable")
}
else
{
	$(".tech_currency").removeClass("unavailable")
}
unattainable=maximums["gold"]*(bonus["storage"]+1)<goldcost
set_unattainable(".tech_currency", unattainable);
$(".tech_currency").addClass((technologies["currency"] >0 ? "researched" : ""))
$(".tech_currency").html("Currency" + (technologies["currency"] >0 ? " (researched)" : ""));
$(".tech_currency").attr('tooltip', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".tech_currency").attr('tooltip2', "Unlocks casinos");


ironcost=20;
goldcost=5;
if(items["gold"]<goldcost || items["iron"]<ironcost){
	$(".tech_coin").addClass("unavailable")
}
else
{
	$(".tech_coin").removeClass("unavailable")
}
unattainable=maximums["iron"]*(bonus["storage"]+1)<ironcost || maximums["gold"]*(bonus["storage"]+1)<goldcost
set_unattainable(".tech_coin", unattainable);
$(".tech_coin").addClass((technologies["coin"] >0 ? "researched" : ""))
$(".tech_coin").html("Coin forging" + (technologies["coin"] >0 ? " (researched)" : ""));
$(".tech_coin").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_coin").attr('tooltip2', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".tech_coin").attr('tooltip3', "Allows forging gold coins");


foodcost=800
coincost=3
if(items["food"]<foodcost || craft["coin"]<coincost){
	$(".tech_exchange").addClass("unavailable")
}
else
{
	$(".tech_exchange").removeClass("unavailable")
}
unattainable=maximums["food"]*(bonus["storage"]+1)<foodcost
set_unattainable(".tech_exchange", unattainable);
$(".tech_exchange").addClass((technologies["exchange"] >0 ? "researched" : ""))
$(".tech_exchange").html("Exchange" + (technologies["exchange"] >0 ? " (researched)" : ""));
$(".tech_exchange").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_exchange").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_exchange").attr('tooltip3', "Allow the construction of markets");


ironcost=40;
coppercost=40;
if(items["iron"]<ironcost || items["copper"]<coppercost){
	$(".tech_bronze").addClass("unavailable")
}
else
{
	$(".tech_bronze").removeClass("unavailable")
}
unattainable=maximums["iron"]*(bonus["storage"]+1)<ironcost || maximums["copper"]*(bonus["storage"]+1)<coppercost
set_unattainable(".tech_bronze", unattainable);
$(".tech_bronze").addClass((technologies["bronze"] >0 ? "researched" : ""))
$(".tech_bronze").html("Bronze" + (technologies["bronze"] >0 ? " (researched)" : ""));
$(".tech_bronze").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_bronze").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".tech_bronze").attr('tooltip3', "Allows foundrys to smelt a bit of tin");
$(".tech_bronze").attr('tooltip4', "Unlocks bronze crafting");

bronzecost=2;
if(craft["bronze"]<bronzecost){
	$(".tech_bronzetools").addClass("unavailable")
}
else
{
	$(".tech_bronzetools").removeClass("unavailable")
}
$(".tech_bronzetools").addClass((technologies["bronzetools"] >0 ? "researched" : ""))
$(".tech_bronzetools").html("Bronze tools" + (technologies["bronzetools"] >0 ? " (researched)" : ""));
$(".tech_bronzetools").attr('tooltip', 'Bronze: '+ parseFloat(craft["bronze"]).toFixed(2)+" / "+parseFloat(bronzecost).toFixed(2))
$(".tech_bronzetools").attr('tooltip2', "Increments wood, mineral, and food production by 20%");
$(".tech_bronzetools").attr('tooltip3', "Increments iron, copper, and tin production by 10%");


woodcost=4000
mineralcost=2000
if(items["wood"]<woodcost || items["mineral"]<mineralcost ){
	$(".tech_charcoal").addClass("unavailable")
}
else
{
	$(".tech_charcoal").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["mineral"]*(bonus["storage"]+1)<mineralcost
set_unattainable(".tech_charcoal", unattainable);
$(".tech_charcoal").addClass((technologies["charcoal"] >0 ? "researched" : ""))
$(".tech_charcoal").html("Charcoal" + (technologies["charcoal"] >0 ? " (researched)" : ""));
$(".tech_charcoal").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_charcoal").attr('tooltip2', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_charcoal").attr('tooltip3', "Unlocks kilns");


ironcost=50;
coalcost=50;
if(items["iron"]<ironcost || items["coal"]<coalcost ){
	$(".tech_steel").addClass("unavailable")
}
else
{
	$(".tech_steel").removeClass("unavailable")
}
unattainable=maximums["iron"]*(bonus["storage"]+1)<ironcost || maximums["coal"]*(bonus["storage"]+1)<coalcost
set_unattainable(".tech_steel", unattainable);
$(".tech_steel").addClass((technologies["steel"] >0 ? "researched" : ""))
$(".tech_steel").html("Steel" + (technologies["steel"] >0 ? " (researched)" : ""));
$(".tech_steel").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_steel").attr('tooltip2', 'Coal: '+ parseFloat(items["coal"]).toFixed(2)+" / "+parseFloat(coalcost).toFixed(2))
$(".tech_steel").attr('tooltip3', "Unlocks foundrymen, experts in steel");


steelcost=5;
coincost=5;
if(items["steel"]<steelcost || craft["coin"]<coincost ){
	$(".tech_manufacturing").addClass("unavailable")
}
else
{
	$(".tech_manufacturing").removeClass("unavailable")
}
unattainable=maximums["steel"]*(bonus["storage"]+1)<steelcost
set_unattainable(".tech_manufacturing", unattainable);
$(".tech_manufacturing").addClass((technologies["manufacturing"] >0 ? "researched" : ""))
$(".tech_manufacturing").html("Manufacturing" + (technologies["manufacturing"] >0 ? " (researched)" : ""));
$(".tech_manufacturing").attr('tooltip', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".tech_manufacturing").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_manufacturing").attr('tooltip3', "Enhances crafting by allowing the building of workbenchs");


woodcost=5000
mineralcost=5000
bronzecost=3
goldcost=10
if(craft["bronze"]<bronzecost || items["wood"]<woodcost || items["mineral"]<mineralcost || items["gold"]<goldcost){
	$(".tech_centralisation").addClass("unavailable")
}
else
{
	$(".tech_centralisation").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["mineral"]*(bonus["storage"]+1)<mineralcost || maximums["gold"]*(bonus["storage"]+1)<goldcost
set_unattainable(".tech_centralisation", unattainable);
$(".tech_centralisation").addClass((technologies["centralisation"] >0 ? "researched" : ""))
$(".tech_centralisation").html("Centralisation" + (technologies["centralisation"] >0 ? " (researched)" : ""));
$(".tech_centralisation").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_centralisation").attr('tooltip2', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_centralisation").attr('tooltip3', 'Bronze: '+ parseFloat(craft["bronze"]).toFixed(2)+" / "+parseFloat(bronzecost).toFixed(2))
$(".tech_centralisation").attr('tooltip4', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".tech_centralisation").attr('tooltip5', "Allows the building of towncenters");


steelcost=10;
if(items["steel"]<steelcost){
	$(".tech_steeltools").addClass("unavailable")
}
else
{
	$(".tech_steeltools").removeClass("unavailable")
}
unattainable=maximums["steel"]*(bonus["storage"]+1)<steelcost
set_unattainable(".tech_steeltools", unattainable);
$(".tech_steeltools").addClass((technologies["steeltools"] >0 ? "researched" : ""))
$(".tech_steeltools").html("Steel tools" + (technologies["steeltools"] >0 ? " (researched)" : ""));
$(".tech_steeltools").attr('tooltip', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".tech_steeltools").attr('tooltip2', "Increments wood, mineral, and food production by 30%");
$(".tech_steeltools").attr('tooltip3', "Increments iron, copper, and tin production by 10%");
$(".tech_steeltools").attr('tooltip4', "Increments steel production by 5%");

foodcost=2500;
if(items["food"]<foodcost){
	$(".tech_husbandry").addClass("unavailable")
}
else
{
	$(".tech_husbandry").removeClass("unavailable")
}
unattainable=maximums["food"]*(bonus["storage"]+1)<foodcost
set_unattainable(".tech_husbandry", unattainable);
$(".tech_husbandry").addClass((technologies["husbandry"] >0 ? "researched" : ""))
$(".tech_husbandry").html("Husbandry" + (technologies["husbandry"] >0 ? " (researched)" : ""));
$(".tech_husbandry").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_husbandry").attr('tooltip3', "Allow soldiers to bring back horses found on expeditions");


goldcost=25;
steelcost=25;
if(items["steel"]<steelcost || items["gold"]<goldcost){
	$(".tech_cavalry").addClass("unavailable")
}
else
{
	$(".tech_cavalry").removeClass("unavailable")
}
unattainable=maximums["gold"]*(bonus["storage"]+1)<goldcost || maximums["steel"]*(bonus["storage"]+1)<steelcost
set_unattainable(".tech_cavalry", unattainable);
$(".tech_cavalry").addClass((technologies["cavalry"] >0 ? "researched" : ""))
$(".tech_cavalry").html("Cavalry" + (technologies["cavalry"] >0 ? " (researched)" : ""));
$(".tech_cavalry").attr('tooltip', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".tech_cavalry").attr('tooltip2', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".tech_cavalry").attr('tooltip4', "Grants swordmen training to become armored knights");


coincost=25;
if(craft["coin"]<coincost ){
	$(".tech_leadership").addClass("unavailable")
}
else
{
	$(".tech_leadership").removeClass("unavailable")
}
$(".tech_leadership").addClass((technologies["leadership"] >0 ? "researched" : ""))
$(".tech_leadership").html("Leadership" + (technologies["leadership"] >0 ? " (researched)" : ""));
$(".tech_leadership").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_leadership").attr('tooltip3', "Unlocks castles, which can grant titles to powerful leaders.");

spearcost=50
swordcost=25
armorcost=2
if(craft["spear"]<spearcost || craft["sword"]<swordcost || craft["armor"]<armorcost){
	$(".tech_armament").addClass("unavailable")
}
else
{
	$(".tech_armament").removeClass("unavailable")
}
$(".tech_armament").addClass((technologies["armament"] >0 ? "researched" : ""))
$(".tech_armament").html("Armament" + (technologies["armament"] >0 ? " (researched)" : ""));
$(".tech_armament").attr('tooltip', 'Spear: '+ parseFloat(craft["spear"]).toFixed(2)+" / "+parseFloat(spearcost).toFixed(2))
$(".tech_armament").attr('tooltip2', 'Sword: '+ parseFloat(craft["sword"]).toFixed(2)+" / "+parseFloat(swordcost).toFixed(2))
$(".tech_armament").attr('tooltip3', 'Armor: '+ parseFloat(craft["armor"]).toFixed(2)+" / "+parseFloat(armorcost).toFixed(2))
$(".tech_armament").attr('tooltip5', "Grants soldiers a 40% attack boost");

coincost=50;
if(craft["coin"]<coincost ){
	$(".tech_gambling").addClass("unavailable")
}
else
{
	$(".tech_gambling").removeClass("unavailable")
}
$(".tech_gambling").addClass((technologies["gambling"] >0 ? "researched" : ""))
$(".tech_gambling").html("Gambling" + (technologies["gambling"] >0 ? " (researched)" : ""));
$(".tech_gambling").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_gambling").attr('tooltip3', "Unlocks a new game at the casino.");

tokencost=50;
if(craft["token"]<tokencost ){
	$(".tech_redeem").addClass("unavailable")
}
else
{
	$(".tech_redeem").removeClass("unavailable")
}
$(".tech_redeem").addClass((technologies["redeem"] >0 ? "researched" : ""))
$(".tech_redeem").html("Redeem" + (technologies["redeem"] >0 ? " (researched)" : ""));
$(".tech_redeem").attr('tooltip', 'Token: '+ parseFloat(craft["token"]).toFixed(2)+" / "+parseFloat(tokencost).toFixed(2))
$(".tech_redeem").attr('tooltip3', "Allows redeeming tokens in the casino.");


woodcost=20000;
mineralcost=10000;
if(items["wood"]<woodcost || items["mineral"]<mineralcost){
	$(".tech_wrapping").addClass("unavailable")
}
else
{
	$(".tech_wrapping").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["mineral"]*(bonus["storage"]+1)<mineralcost
set_unattainable(".tech_wrapping", unattainable);
$(".tech_wrapping").addClass((technologies["wrapping"] >0 ? "researched" : ""))
$(".tech_wrapping").html("Wrapping" + (technologies["wrapping"] >0 ? " (researched)" : ""));
$(".tech_wrapping").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_wrapping").attr('tooltip2', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_wrapping").attr('tooltip4', "Increases all storages by 10%");


woodcost=25000;
if(items["wood"]<woodcost ){
	$(".tech_shipyard").addClass("unavailable")
}
else
{
	$(".tech_shipyard").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost
set_unattainable(".tech_shipyard", unattainable);
$(".tech_shipyard").addClass((technologies["shipyard"] >0 ? "researched" : ""))
$(".tech_shipyard").html("Shipyard" + (technologies["shipyard"] >0 ? " (researched)" : ""));
$(".tech_shipyard").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_shipyard").attr('tooltip3', "Unlocks the buildings of shipyards.");


plankcost=100;
if(craft["plank"]<plankcost ){
	$(".tech_sailing").addClass("unavailable")
}
else
{
	$(".tech_sailing").removeClass("unavailable")
}
$(".tech_sailing").addClass((technologies["sailing"] >0 ? "researched" : ""))
$(".tech_sailing").html("Sailing" + (technologies["sailing"] >0 ? " (researched)" : ""));
$(".tech_sailing").attr('tooltip', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".tech_sailing").attr('tooltip3', "Allows building docks to store ships.");


foodcost=7000;
goldcost=45;
coincost=50;
if(craft["coin"]<coincost || items["food"]<foodcost || items["gold"]<goldcost){
	$(".tech_trade").addClass("unavailable")
}
else
{
	$(".tech_trade").removeClass("unavailable")
}
unattainable=maximums["food"]*(bonus["storage"]+1)<foodcost || maximums["gold"]*(bonus["storage"]+1)<goldcost
set_unattainable(".tech_trade", unattainable);
$(".tech_trade").addClass((technologies["trade"] >0 ? "researched" : ""))
$(".tech_trade").html("Trade" + (technologies["trade"] >0 ? " (researched)" : ""));
$(".tech_trade").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_trade").attr('tooltip2', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".tech_trade").attr('tooltip3', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_trade").attr('tooltip5', "Allows hiring sailors to embark on trade missions.");


mineralcost=22500;
steelcost=100;
plankcost=500;
if(craft["plank"]<plankcost || items["mineral"]<mineralcost || items["steel"]<steelcost){
	$(".tech_cache").addClass("unavailable")
}
else
{
	$(".tech_cache").removeClass("unavailable")
}
unattainable=maximums["mineral"]*(bonus["storage"]+1)<mineralcost || maximums["steel"]*(bonus["storage"]+1)<steelcost
set_unattainable(".tech_cache", unattainable);
$(".tech_cache").addClass((technologies["cache"] >0 ? "researched" : ""))
$(".tech_cache").html("Cache" + (technologies["cache"] >0 ? " (researched)" : ""));
$(".tech_cache").attr('tooltip', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_cache").attr('tooltip2', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".tech_cache").attr('tooltip3', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".tech_cache").attr('tooltip5', "Allows crafting chests to store resources.");


knowledgecost=500;
if(items["knowledge"]<knowledgecost ){
	$(".tech_specialization").addClass("unavailable")
}
else
{
	$(".tech_specialization").removeClass("unavailable")
}
$(".tech_specialization").addClass((technologies["specialization"] >0 ? "researched" : ""))
$(".tech_specialization").html("Specialization" + (technologies["specialization"] >0 ? " (researched)" : ""));
$(".tech_specialization").attr('tooltip', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_specialization").attr('tooltip3', "Allows you to choose where your research should be headed");
$(".tech_specialization").attr('tooltip4', "New technologies will be unlocked based on your research.");


mineralcost=28000;
knowledgecost=50;
if(items["knowledge"]<knowledgecost || items["mineral"]<mineralcost){
	$(".tech_geology").addClass("unavailable")
}
else
{
	$(".tech_geology").removeClass("unavailable")
}
unattainable=maximums["mineral"]*(bonus["storage"]+1)<mineralcost
set_unattainable(".tech_geology", unattainable);
$(".tech_geology").addClass((technologies["geology"] >0 ? "researched" : ""))
$(".tech_geology").html("Geology" + (technologies["geology"] >0 ? " (researched)" : ""));
$(".tech_geology").attr('tooltip', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_geology").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_geology").attr('tooltip4', "Mineral production +20%");


goldcost=50;
knowledgecost=50;
if(items["knowledge"]<knowledgecost || items["gold"]<goldcost){
	$(".tech_funding").addClass("unavailable")
}
else
{
	$(".tech_funding").removeClass("unavailable")
}
unattainable=maximums["gold"]*(bonus["storage"]+1)<goldcost
set_unattainable(".tech_funding", unattainable);
$(".tech_funding").addClass((technologies["funding"] >0 ? "researched" : ""))
$(".tech_funding").html("Funding" + (technologies["funding"] >0 ? " (researched)" : ""));
$(".tech_funding").attr('tooltip', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".tech_funding").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_funding").attr('tooltip4', "Gold production +20%");
$(".tech_funding").attr('tooltip5', "Gold storage +2");


moralecost=35;
knowledgecost=50;
if(items["knowledge"]<knowledgecost || items["morale"]<moralecost){
	$(".tech_tactics").addClass("unavailable")
}
else
{
	$(".tech_tactics").removeClass("unavailable")
}
unattainable=maximums["morale"]*(bonus["storage"]+1)<moralecost
set_unattainable(".tech_tactics", unattainable);
$(".tech_tactics").addClass((technologies["tactics"] >0 ? "researched" : ""))
$(".tech_tactics").html("Tactics" + (technologies["tactics"] >0 ? " (researched)" : ""));
$(".tech_tactics").attr('tooltip', 'Morale: '+ parseFloat(items["morale"]).toFixed(2)+" / "+parseFloat(moralecost).toFixed(2))
$(".tech_tactics").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_tactics").attr('tooltip4', "Troops attack +20%");
$(".tech_tactics").attr('tooltip5', "Morale maximum +2");


coincost=100;
knowledgecost=200;
if(items["knowledge"]<knowledgecost || craft["coin"]<coincost){
	$(".tech_healing").addClass("unavailable")
}
else
{
	$(".tech_healing").removeClass("unavailable")
}
$(".tech_healing").addClass((technologies["healing"] >0 ? "researched" : ""))
$(".tech_healing").html("Healing" + (technologies["healing"] >0 ? " (researched)" : ""));
$(".tech_healing").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_healing").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_healing").attr('tooltip4', "Troops hp +5%");
$(".tech_healing").attr('tooltip5', "Allows hiring medics to aid during combat.");


coincost=100;
knowledgecost=200;
if(items["knowledge"]<knowledgecost || craft["coin"]<coincost){
	$(".tech_savings").addClass("unavailable")
}
else
{
	$(".tech_savings").removeClass("unavailable")
}
$(".tech_savings").addClass((technologies["savings"] >0 ? "researched" : ""))
$(".tech_savings").html("Savings" + (technologies["savings"] >0 ? " (researched)" : ""));
$(".tech_savings").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_savings").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_savings").attr('tooltip4', "Allows building banks to store gold and produce coins.");


knowledgecost=400;
if(items["knowledge"]<knowledgecost){
	$(".tech_studies").addClass("unavailable")
}
else
{
	$(".tech_studies").removeClass("unavailable")
}
$(".tech_studies").addClass((technologies["studies"] >0 ? "researched" : ""))
$(".tech_studies").html("Studies" + (technologies["studies"] >0 ? " (researched)" : ""));
$(".tech_studies").attr('tooltip', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_studies").attr('tooltip3', "Allows hiring scientists that use funds to gain knowledge.");


blockcost=500;
knowledgecost=300;
if(items["knowledge"]<knowledgecost || craft["block"]<blockcost){
	$(".tech_organization").addClass("unavailable")
}
else
{
	$(".tech_organization").removeClass("unavailable")
}
$(".tech_organization").addClass((technologies["organization"] >0 ? "researched" : ""))
$(".tech_organization").html("Organization" + (technologies["organization"] >0 ? " (researched)" : ""));
$(".tech_organization").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".tech_organization").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_organization").attr('tooltip4', "Gives a 20% bonus to all storages");


bronzecost=50;
knowledgecost=500;
if(items["knowledge"]<knowledgecost || craft["bronze"]<bronzecost){
	$(".tech_culturaltrade").addClass("unavailable")
}
else
{
	$(".tech_culturaltrade").removeClass("unavailable")
}
$(".tech_culturaltrade").addClass((technologies["culturaltrade"] >0 ? "researched" : ""))
$(".tech_culturaltrade").html("Cultural trade" + (technologies["culturaltrade"] >0 ? " (res..)" : ""));
$(".tech_culturaltrade").attr('tooltip', 'Bronze: '+ parseFloat(craft["bronze"]).toFixed(2)+" / "+parseFloat(bronzecost).toFixed(2))
$(".tech_culturaltrade").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_culturaltrade").attr('tooltip4', "Allows getting knowledge when trading with other civilizations.");


goldcost=60;
moralecost=50;
knowledgecost=800;
if(items["knowledge"]<knowledgecost || items["gold"]<goldcost || items["morale"]<moralecost){
	$(".tech_wareconomy").addClass("unavailable")
}
else
{
	$(".tech_wareconomy").removeClass("unavailable")
}
unattainable=maximums["gold"]*(bonus["storage"]+1)<goldcost || maximums["morale"]*(bonus["storage"]+1)<moralecost
set_unattainable(".tech_wareconomy", unattainable);
$(".tech_wareconomy").addClass((technologies["wareconomy"] >0 ? "researched" : ""))
$(".tech_wareconomy").html("War economy" + (technologies["wareconomy"] >0 ? " (researched)" : ""));
$(".tech_wareconomy").attr('tooltip', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".tech_wareconomy").attr('tooltip2', 'Morale: '+ parseFloat(items["morale"]).toFixed(2)+" / "+parseFloat(moralecost).toFixed(2))
$(".tech_wareconomy").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_wareconomy").attr('tooltip5', "Increases gold and food production by 10%.");


steelcost=100;
knowledgecost=500;
if(items["knowledge"]<knowledgecost || items["steel"]<steelcost){
	$(".tech_intelligence").addClass("unavailable")
}
else
{
	$(".tech_intelligence").removeClass("unavailable")
}
unattainable=maximums["steel"]*(bonus["storage"]+1)<steelcost
set_unattainable(".tech_intelligence", unattainable);
$(".tech_intelligence").addClass((technologies["intelligence"] >0 ? "researched" : ""))
$(".tech_intelligence").html("Intelligence" + (technologies["intelligence"] >0 ? " (researched)" : ""));
$(".tech_intelligence").attr('tooltip', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".tech_intelligence").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_intelligence").attr('tooltip4', "When you win a fight, you get a chance to steal knowledge from the enemy.");


pickaxecost=500;
knowledgecost=500;
if(items["knowledge"]<knowledgecost || craft["pickaxe"]<pickaxecost){
	$(".tech_crushing").addClass("unavailable")
}
else
{
	$(".tech_crushing").removeClass("unavailable")
}
$(".tech_crushing").addClass((technologies["crushing"] >0 ? "researched" : ""))
$(".tech_crushing").html("Crushing" + (technologies["crushing"] >0 ? " (researched)" : ""));
$(".tech_crushing").attr('tooltip', 'Pickaxe: '+ parseFloat(craft["pickaxe"]).toFixed(2)+" / "+parseFloat(pickaxecost).toFixed(2))
$(".tech_crushing").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_crushing").attr('tooltip4', "Allows building crushing mills to produce sand.");


tincost=200;
sandcost=600;
knowledgecost=500;
if(items["knowledge"]<knowledgecost || items["tin"]<tincost || items["sand"]<sandcost){
	$(".tech_floatglass").addClass("unavailable")
}
else
{
	$(".tech_floatglass").removeClass("unavailable")
}
unattainable=maximums["tin"]*(bonus["storage"]+1)<tincost || maximums["sand"]*(bonus["storage"]+1)<sandcost
set_unattainable(".tech_floatglass", unattainable);
$(".tech_floatglass").addClass((technologies["floatglass"] >0 ? "researched" : ""))
$(".tech_floatglass").html("Float glass" + (technologies["floatglass"] >0 ? " (researched)" : ""));
$(".tech_floatglass").attr('tooltip', 'Tin: '+ parseFloat(items["tin"]).toFixed(2)+" / "+parseFloat(tincost).toFixed(2))
$(".tech_floatglass").attr('tooltip2', 'Sand: '+ parseFloat(items["sand"]).toFixed(2)+" / "+parseFloat(sandcost).toFixed(2))
$(".tech_floatglass").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_floatglass").attr('tooltip5', "A process to create sheets of glass. ");


knowledgecost=700;
if(items["knowledge"]<knowledgecost){
	$(".tech_canteen").addClass("unavailable")
}
else
{
	$(".tech_canteen").removeClass("unavailable")
}
$(".tech_canteen").addClass((technologies["canteen"] >0 ? "researched" : ""))
$(".tech_canteen").html("Canteen" + (technologies["canteen"] >0 ? " (researched)" : ""));
$(".tech_canteen").attr('tooltip', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_canteen").attr('tooltip3', "Increases water storage by 20");
$(".tech_canteen").attr('tooltip4', "Allows to find or steal water bottles to further increase water storage.");


coincost=200;
knowledgecost=500;
if(items["knowledge"]<knowledgecost || craft["coin"]<coincost){
	$(".tech_contracts").addClass("unavailable")
}
else
{
	$(".tech_contracts").removeClass("unavailable")
}
$(".tech_contracts").addClass((technologies["contracts"] >0 ? "researched" : ""))
$(".tech_contracts").html("Contracts" + (technologies["contracts"] >0 ? " (researched)" : ""));
$(".tech_contracts").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_contracts").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_contracts").attr('tooltip4', "Contracts increase wood, mineral, morale and knowledge production by 10%");


woodcost=40000;
plankcost=1000;
knowledgecost=800;
if(items["knowledge"]<knowledgecost || items["wood"]<woodcost || craft["plank"]<plankcost){
	$(".tech_galleon").addClass("unavailable")
}
else
{
	$(".tech_galleon").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost
set_unattainable(".tech_galleon", unattainable);
$(".tech_galleon").addClass((technologies["galleon"] >0 ? "researched" : ""))
$(".tech_galleon").html("Galleon" + (technologies["galleon"] >0 ? " (researched)" : ""));
$(".tech_galleon").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_galleon").attr('tooltip2', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".tech_galleon").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_galleon").attr('tooltip5', "Galleons are mega ships that can carry loads of resources.");


glasscost=20;
knowledgecost=500;
if(items["knowledge"]<knowledgecost || craft["glass"]<glasscost){
	$(".tech_glassblowing").addClass("unavailable")
}
else
{
	$(".tech_glassblowing").removeClass("unavailable")
}
$(".tech_glassblowing").addClass((technologies["glassblowing"] >0 ? "researched" : ""))
$(".tech_glassblowing").html("Glassblowing" + (technologies["glassblowing"] >0 ? " (researched)" : ""));
$(".tech_glassblowing").attr('tooltip', 'Glass: '+ parseFloat(craft["glass"]).toFixed(2)+" / "+parseFloat(glasscost).toFixed(2))
$(".tech_glassblowing").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_glassblowing").attr('tooltip4', "Allows you to craft bottles to store water and other liquids.");


swordcost=1000;
knowledgecost=800;
if(items["knowledge"]<knowledgecost || craft["sword"]<swordcost){
	$(".tech_rampage").addClass("unavailable")
}
else
{
	$(".tech_rampage").removeClass("unavailable")
}
$(".tech_rampage").addClass((technologies["rampage"] >0 ? "researched" : ""))
$(".tech_rampage").html("Rampage" + (technologies["rampage"] >0 ? " (researched)" : ""));
$(".tech_rampage").attr('tooltip', 'Sword: '+ parseFloat(craft["sword"]).toFixed(2)+" / "+parseFloat(swordcost).toFixed(2))
$(".tech_rampage").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_rampage").attr('tooltip4', "A thousand swords were used to perfect the technique, allows crafting greatswords,");
$(".tech_rampage").attr('tooltip5', "and hiring berseks");


blockcost=2000;
knowledgecost=800;
if(items["knowledge"]<knowledgecost || craft["block"]<blockcost){
	$(".tech_construction").addClass("unavailable")
}
else
{
	$(".tech_construction").removeClass("unavailable")
}
$(".tech_construction").addClass((technologies["construction"] >0 ? "researched" : ""))
$(".tech_construction").html("Construction" + (technologies["construction"] >0 ? " (researched)" : ""));
$(".tech_construction").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".tech_construction").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_construction").attr('tooltip4', "Lets you build blockyards to automate block manufacturing.");


blockcost=1500;
structurecost=500;
steelcost=150;
knowledgecost=1000;
if(items["knowledge"]<knowledgecost || craft["block"]<blockcost || craft["structure"]<structurecost || items["steel"]<steelcost){
	$(".tech_architecture").addClass("unavailable")
}
else
{
	$(".tech_architecture").removeClass("unavailable")
}
unattainable=maximums["steel"]*(bonus["storage"]+1)<steelcost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_architecture", unattainable);
$(".tech_architecture").addClass((technologies["architecture"] >0 ? "researched" : ""))
$(".tech_architecture").html("Architecture" + (technologies["architecture"] >0 ? " (researched)" : ""));
$(".tech_architecture").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".tech_architecture").attr('tooltip2', 'Structure: '+ parseFloat(craft["structure"]).toFixed(2)+" / "+parseFloat(structurecost).toFixed(2))
$(".tech_architecture").attr('tooltip3', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".tech_architecture").attr('tooltip4', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_architecture").attr('tooltip6', "Allows crafting frames, a complex building material.");


bottlecost=50
knowledgecost=1000;
if(items["knowledge"]<knowledgecost || craft["bottle"]<bottlecost){
	$(".tech_chemistry").addClass("unavailable")
}
else
{
	$(".tech_chemistry").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_chemistry", unattainable);
$(".tech_chemistry").addClass((technologies["chemistry"] >0 ? "researched" : ""))
$(".tech_chemistry").html("Chemistry" + (technologies["chemistry"] >0 ? " (researched)" : ""));
$(".tech_chemistry").attr('tooltip', 'Bottle: '+ parseFloat(craft["bottle"]).toFixed(2)+" / "+parseFloat(bottlecost).toFixed(2))
$(".tech_chemistry").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_chemistry").attr('tooltip4', "Lets you build laboratories where scientists can work.");


tokencost=200
knowledgecost=800;
if(items["knowledge"]<knowledgecost || craft["token"]<tokencost){
	$(".tech_risk").addClass("unavailable")
}
else
{
	$(".tech_risk").removeClass("unavailable")
}
$(".tech_risk").addClass((technologies["risk"] >0 ? "researched" : ""))
$(".tech_risk").html("Risk" + (technologies["risk"] >0 ? " (researched)" : ""));
$(".tech_risk").attr('tooltip', 'Token: '+ parseFloat(craft["token"]).toFixed(2)+" / "+parseFloat(tokencost).toFixed(2))
$(".tech_risk").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_risk").attr('tooltip4', "Lets you play x10 and x100 in the casino");


coincost=1000
knowledgecost=300;
if(items["knowledge"]<knowledgecost || craft["coin"]<coincost){
	$(".tech_investment").addClass("unavailable")
}
else
{
	$(".tech_investment").removeClass("unavailable")
}
$(".tech_investment").addClass((technologies["investment"] >0 ? "researched" : ""))
$(".tech_investment").html("Investment" + (technologies["investment"] >0 ? " (researched)" : ""));
$(".tech_investment").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_investment").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_investment").attr('tooltip4', "Gives back 2000 coins at a rate of 0.1/s");


suppliescost=100
knowledgecost=800;
if(items["knowledge"]<knowledgecost || craft["supplies"]<suppliescost){
	$(".tech_elephantry").addClass("unavailable")
}
else
{
	$(".tech_elephantry").removeClass("unavailable")
}
$(".tech_elephantry").addClass((technologies["elephantry"] >0 ? "researched" : ""))
$(".tech_elephantry").html("Elephantry" + (technologies["elephantry"] >0 ? " (researched)" : ""));
$(".tech_elephantry").attr('tooltip', 'Supplies: '+ parseFloat(craft["supplies"]).toFixed(2)+" / "+parseFloat(suppliescost).toFixed(2))
$(".tech_elephantry").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_elephantry").attr('tooltip4', "Allows you to ride elephants into war");


chestcost=50
knowledgecost=500;
if(items["knowledge"]<knowledgecost || craft["chest"]<chestcost){
	$(".tech_undergroundstorage").addClass("unavailable")
}
else
{
	$(".tech_undergroundstorage").removeClass("unavailable")
}
$(".tech_undergroundstorage").addClass((technologies["undergroundstorage"] >0 ? "researched" : ""))
$(".tech_undergroundstorage").html("Underground storage" + (technologies["undergroundstorage"] >0 ? " (res..)" : ""));
$(".tech_undergroundstorage").attr('tooltip', 'Chest: '+ parseFloat(craft["chest"]).toFixed(2)+" / "+parseFloat(chestcost).toFixed(2))
$(".tech_undergroundstorage").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_undergroundstorage").attr('tooltip4', "Allows building bunkers to store bulk materials");


chestcost=200
knowledgecost=1300;
if(items["knowledge"]<knowledgecost || craft["chest"]<chestcost){
	$(".tech_packaging").addClass("unavailable")
}
else
{
	$(".tech_packaging").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_packaging", unattainable);
$(".tech_packaging").addClass((technologies["packaging"] >0 ? "researched" : ""))
$(".tech_packaging").html("Packaging" + (technologies["packaging"] >0 ? " (researched)" : ""));
$(".tech_packaging").attr('tooltip', 'Chest: '+ parseFloat(craft["chest"]).toFixed(2)+" / "+parseFloat(chestcost).toFixed(2))
$(".tech_packaging").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_packaging").attr('tooltip4', "Allows to build compressor to increase storage space of other buildings");


foodcost=10000;
watercost=200;
knowledgecost=800;
if(items["knowledge"]<knowledgecost || items["food"]<foodcost || items["water"]<watercost){
	$(".tech_domestication").addClass("unavailable")
}
else
{
	$(".tech_domestication").removeClass("unavailable")
}
unattainable=maximums["food"]*(bonus["storage"]+1)<foodcost || maximums["water"]*(bonus["storage"]+1)<watercost
set_unattainable(".tech_domestication", unattainable);
$(".tech_domestication").addClass((technologies["domestication"] >0 ? "researched" : ""))
$(".tech_domestication").html("Domestication" + (technologies["domestication"] >0 ? " (researched)" : ""));
$(".tech_domestication").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_domestication").attr('tooltip2', 'Water: '+ parseFloat(items["water"]).toFixed(2)+" / "+parseFloat(watercost).toFixed(2))
$(".tech_domestication").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_domestication").attr('tooltip5', "Allows you to take back elephants from expeditions.");


suppliescost=200;
plankcost=2000;
if(craft["plank"]<plankcost || craft["supplies"]<suppliescost){
	$(".tech_expansion").addClass("unavailable")
}
else
{
	$(".tech_expansion").removeClass("unavailable")
}
$(".tech_expansion").addClass((technologies["expansion"] >0 ? "researched" : ""))
$(".tech_expansion").html("Expansion" + (technologies["expansion"] >0 ? " (researched)" : ""));
$(".tech_expansion").attr('tooltip', 'Supplies: '+ parseFloat(craft["supplies"]).toFixed(2)+" / "+parseFloat(suppliescost).toFixed(2))
$(".tech_expansion").attr('tooltip2', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".tech_expansion").attr('tooltip4', "Allows you to conquest new territory by fleet fights.");


chemicalscost=15;
knowledgecost=800;
if(items["knowledge"]<knowledgecost || items["chemicals"]<chemicalscost){
	$(".tech_investigation").addClass("unavailable")
}
else
{
	$(".tech_investigation").removeClass("unavailable")
}
unattainable=maximums["chemicals"]*(bonus["storage"]+1)<chemicalscost
set_unattainable(".tech_investigation", unattainable);
$(".tech_investigation").addClass((technologies["investigation"] >0 ? "researched" : ""))
$(".tech_investigation").html("Investigation" + (technologies["investigation"] >0 ? " (researched)" : ""));
$(".tech_investigation").attr('tooltip', 'Chemicals: '+ parseFloat(items["chemicals"]).toFixed(2)+" / "+parseFloat(chemicalscost).toFixed(2))
$(".tech_investigation").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_investigation").attr('tooltip4', "Allows you to build scientific outposts in conquered territory.");


goldcost=70;
bronzecost=300;
knowledgecost=800;
if(items["knowledge"]<knowledgecost || items["gold"]<goldcost || craft["bronze"]<bronzecost){
	$(".tech_internationalization").addClass("unavailable")
}
else
{
	$(".tech_internationalization").removeClass("unavailable")
}
unattainable=maximums["gold"]*(bonus["storage"]+1)<goldcost
set_unattainable(".tech_internationalization", unattainable);
$(".tech_internationalization").addClass((technologies["internationalization"] >0 ? "researched" : ""))
$(".tech_internationalization").html("Internationalization" + (technologies["internationalization"] >0 ? " (res..)" : ""));
$(".tech_internationalization").attr('tooltip', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".tech_internationalization").attr('tooltip2', 'Bronze: '+ parseFloat(craft["bronze"]).toFixed(2)+" / "+parseFloat(bronzecost).toFixed(2))
$(".tech_internationalization").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_internationalization").attr('tooltip5', "Allows you to build trade outposts in conquered territory.");


horsecost=10;
elephantcost=2;
knowledgecost=800;
if(items["knowledge"]<knowledgecost || craft["horse"]<horsecost || craft["elephant"]<elephantcost){
	$(".tech_camps").addClass("unavailable")
}
else
{
	$(".tech_camps").removeClass("unavailable")
}
$(".tech_camps").addClass((technologies["camps"] >0 ? "researched" : ""))
$(".tech_camps").html("Camps" + (technologies["camps"] >0 ? " (researched)" : ""));
$(".tech_camps").attr('tooltip', 'Horse: '+ parseFloat(craft["horse"]).toFixed(2)+" / "+parseFloat(horsecost).toFixed(2))
$(".tech_camps").attr('tooltip2', 'Elephant: '+ parseFloat(craft["elephant"]).toFixed(2)+" / "+parseFloat(elephantcost).toFixed(2))
$(".tech_camps").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_camps").attr('tooltip5', "Allows you to build military outposts in conquered territory.");


woodcost=80000
framecost=5
knowledgecost=1000;
if(items["knowledge"]<knowledgecost || craft["frame"]<framecost || items["wood"]<woodcost){
	$(".tech_fireship").addClass("unavailable")
}
else
{
	$(".tech_fireship").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost
set_unattainable(".tech_fireship", unattainable);
$(".tech_fireship").addClass((technologies["fireship"] >0 ? "researched" : ""))
$(".tech_fireship").html("Fireship" + (technologies["fireship"] >0 ? " (researched)" : ""));
$(".tech_fireship").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_fireship").attr('tooltip2', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".tech_fireship").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_fireship").attr('tooltip5', "Allows you to build fire ships, an agressive military ship.");


woodcost=80000
plankcost=1000
knowledgecost=800;
if(items["knowledge"]<knowledgecost || craft["plank"]<plankcost || items["wood"]<woodcost){
	$(".tech_careening").addClass("unavailable")
}
else
{
	$(".tech_careening").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost
set_unattainable(".tech_careening", unattainable);
$(".tech_careening").addClass((technologies["careening"] >0 ? "researched" : ""))
$(".tech_careening").html("Careening" + (technologies["careening"] >0 ? " (researched)" : ""));
$(".tech_careening").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_careening").attr('tooltip2', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".tech_careening").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_careening").attr('tooltip5', "Reduces trade mission time by 30s, and increases ships hp by 20%");


goldcost=100
coincost=1500
knowledgecost=1200;
if(items["knowledge"]<knowledgecost || craft["coin"]<coincost || items["gold"]<goldcost){
	$(".tech_deals").addClass("unavailable")
}
else
{
	$(".tech_deals").removeClass("unavailable")
}
unattainable=maximums["gold"]*(bonus["storage"]+1)<goldcost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_deals", unattainable);
$(".tech_deals").addClass((technologies["deals"] >0 ? "researched" : ""))
$(".tech_deals").html("Dealing" + (technologies["deals"] >0 ? " (researched)" : ""));
$(".tech_deals").attr('tooltip', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".tech_deals").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_deals").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_deals").attr('tooltip5', "A merchant will appear in the market every 10 min with a new offer.");


foodcost=20000;
moralecost=60;
knowledgecost=1200;
if(items["knowledge"]<knowledgecost || items["morale"]<moralecost || items["food"]<foodcost){
	$(".tech_finding").addClass("unavailable")
}
else
{
	$(".tech_finding").removeClass("unavailable")
}
unattainable=maximums["food"]*(bonus["storage"]+1)<foodcost || maximums["morale"]*(bonus["storage"]+1)<moralecost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_finding", unattainable);
$(".tech_finding").addClass((technologies["finding"] >0 ? "researched" : ""))
$(".tech_finding").html("Finding" + (technologies["finding"] >0 ? " (researched)" : ""));
$(".tech_finding").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".tech_finding").attr('tooltip2', 'Morale: '+ parseFloat(items["morale"]).toFixed(2)+" / "+parseFloat(moralecost).toFixed(2))
$(".tech_finding").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_finding").attr('tooltip5', "Allows you to find more complex materials in expeditions, like sand, clay or bricks.");


mineralcost=80000;
pickaxecost=3000;
knowledgecost=1200;
if(items["knowledge"]<knowledgecost || craft["pickaxe"]<pickaxecost || items["mineral"]<mineralcost){
	$(".tech_openmining").addClass("unavailable")
}
else
{
	$(".tech_openmining").removeClass("unavailable")
}
unattainable=maximums["mineral"]*(bonus["storage"]+1)<mineralcost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_openmining", unattainable);
$(".tech_openmining").addClass((technologies["openmining"] >0 ? "researched" : ""))
$(".tech_openmining").html("Open mining" + (technologies["openmining"] >0 ? " (researched)" : ""));
$(".tech_openmining").attr('tooltip', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_openmining").attr('tooltip2', 'Pickaxe: '+ parseFloat(craft["pickaxe"]).toFixed(2)+" / "+parseFloat(pickaxecost).toFixed(2))
$(".tech_openmining").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_openmining").attr('tooltip5', "Allows you to build quarrys to extract clay from the ground.");


pickaxecost=2000;
knowledgecost=1000;
if(craft["pickaxe"]<pickaxecost || items["knowledge"]<knowledgecost){
	$(".tech_multitasking").addClass("unavailable")
}
else
{
	$(".tech_multitasking").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_multitasking", unattainable);
$(".tech_multitasking").addClass((technologies["multitasking"] >0 ? "researched" : ""))
$(".tech_multitasking").html("Multitasking" + (technologies["multitasking"] >0 ? " (researched)" : ""));
$(".tech_multitasking").attr('tooltip', 'Pickaxe: '+ parseFloat(craft["pickaxe"]).toFixed(2)+" / "+parseFloat(pickaxecost).toFixed(2))
$(".tech_multitasking").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_multitasking").attr('tooltip4', "Miners now also extract some clay.");


plankcost=3000;
coincost=800;
knowledgecost=1200;
if(items["knowledge"]<knowledgecost || craft["coin"]<coincost || craft["plank"]<plankcost){
	$(".tech_seacaptain").addClass("unavailable")
}
else
{
	$(".tech_seacaptain").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_seacaptain", unattainable);
$(".tech_seacaptain").addClass((technologies["seacaptain"] >0 ? "researched" : ""))
$(".tech_seacaptain").html("Sea captain" + (technologies["seacaptain"] >0 ? " (researched)" : ""));
$(".tech_seacaptain").attr('tooltip', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".tech_seacaptain").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_seacaptain").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_seacaptain").attr('tooltip5', "Unlocks a new  leader.");


knowledgecost=1300;
if(items["knowledge"]<knowledgecost){
	$(".tech_wisdom").addClass("unavailable")
}
else
{
	$(".tech_wisdom").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_wisdom", unattainable);
$(".tech_wisdom").addClass((technologies["wisdom"] >0 ? "researched" : ""))
$(".tech_wisdom").html("Wisdom" + (technologies["wisdom"] >0 ? " (researched)" : ""));
$(".tech_wisdom").attr('tooltip', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_wisdom").attr('tooltip3', "Unlocks a new leader.");


framecost=20;
blockcost=3000;
knowledgecost=1300;
if(items["knowledge"]<knowledgecost || craft["frame"]<framecost || craft["block"]<blockcost){
	$(".tech_masonry").addClass("unavailable")
}
else
{
	$(".tech_masonry").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_masonry", unattainable);
$(".tech_masonry").addClass((technologies["masonry"] >0 ? "researched" : ""))
$(".tech_masonry").html("Masonry" + (technologies["masonry"] >0 ? " (researched)" : ""));
$(".tech_masonry").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".tech_masonry").attr('tooltip2', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".tech_masonry").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_masonry").attr('tooltip5', "Allows you to craft bricks used in buildings.");


woodcost=90000;
knowledgecost=1000;
if(items["knowledge"]<knowledgecost || items["wood"]<woodcost){
	$(".tech_woodwork").addClass("unavailable")
}
else
{
	$(".tech_woodwork").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_woodwork", unattainable);
$(".tech_woodwork").addClass((technologies["woodwork"] >0 ? "researched" : ""))
$(".tech_woodwork").html("Woodwork" + (technologies["woodwork"] >0 ? " (researched)" : ""));
$(".tech_woodwork").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_woodwork").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_woodwork").attr('tooltip4', "Allows you to build carpentries to automate structure crafting.");


coincost=1000;
knowledgecost=1000;
if(items["knowledge"]<knowledgecost || craft["coin"]<coincost){
	$(".tech_commodities").addClass("unavailable")
}
else
{
	$(".tech_commodities").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_commodities", unattainable);
$(".tech_commodities").addClass((technologies["commodities"] >0 ? "researched" : ""))
$(".tech_commodities").html("Commodities" + (technologies["commodities"] >0 ? " (researched)" : ""));
$(".tech_commodities").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_commodities").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_commodities").attr('tooltip4', "Allows you to buy sand on the market");


coincost=2000;
knowledgecost=1200;
if(items["knowledge"]<knowledgecost || craft["coin"]<coincost){
	$(".tech_commerce").addClass("unavailable")
}
else
{
	$(".tech_commerce").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_commerce", unattainable);
$(".tech_commerce").addClass((technologies["commerce"] >0 ? "researched" : ""))
$(".tech_commerce").html("Commerce" + (technologies["commerce"] >0 ? " (researched)" : ""));
$(".tech_commerce").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_commerce").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_commerce").attr('tooltip4', "Allows you to hire marketers");


moralecost=70;
knowledgecost=1300;
if(items["knowledge"]<knowledgecost || items["morale"]<moralecost){
	$(".tech_explosives").addClass("unavailable")
}
else
{
	$(".tech_explosives").removeClass("unavailable")
}
unattainable=maximums["morale"]*(bonus["storage"]+1)<moralecost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_explosives", unattainable);
$(".tech_explosives").addClass((technologies["explosives"] >0 ? "researched" : ""))
$(".tech_explosives").html("Explosives" + (technologies["explosives"] >0 ? " (researched)" : ""));
$(".tech_explosives").attr('tooltip', 'Morale: '+ parseFloat(items["morale"]).toFixed(2)+" / "+parseFloat(moralecost).toFixed(2))
$(".tech_explosives").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_explosives").attr('tooltip4', "Allows you to craft gunpowder.");


ironcost=500;
steelcost=250;
knowledgecost=1200;
if(items["knowledge"]<knowledgecost || items["iron"]<ironcost || items["steel"]<steelcost){
	$(".tech_quenching").addClass("unavailable")
}
else
{
	$(".tech_quenching").removeClass("unavailable")
}
unattainable=maximums["iron"]*(bonus["storage"]+1)<ironcost || maximums["steel"]*(bonus["storage"]+1)<steelcost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_quenching", unattainable);
$(".tech_quenching").addClass((technologies["quenching"] >0 ? "researched" : ""))
$(".tech_quenching").html("Quenching" + (technologies["quenching"] >0 ? " (researched)" : ""));
$(".tech_quenching").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_quenching").attr('tooltip2', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".tech_quenching").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_quenching").attr('tooltip5', "Increases iron and steel production by 25%");


brickcost=50;
knowledgecost=1200;
if(items["knowledge"]<knowledgecost || craft["brick"]<brickcost){
	$(".tech_castiron").addClass("unavailable")
}
else
{
	$(".tech_castiron").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_castiron", unattainable);
$(".tech_castiron").addClass((technologies["castiron"] >0 ? "researched" : ""))
$(".tech_castiron").html("Cast iron" + (technologies["castiron"] >0 ? " (researched)" : ""));
$(".tech_castiron").attr('tooltip', 'Brick: '+ parseFloat(craft["brick"]).toFixed(2)+" / "+parseFloat(brickcost).toFixed(2))
$(".tech_castiron").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_castiron").attr('tooltip4', "New techniques allows you to build blast furnaces.");


chemicalscost=20;
knowledgecost=1200;
if(items["knowledge"]<knowledgecost || items["chemicals"]<chemicalscost){
	$(".tech_insecticides").addClass("unavailable")
}
else
{
	$(".tech_insecticides").removeClass("unavailable")
}
unattainable=maximums["chemicals"]*(bonus["storage"]+1)<chemicalscost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_insecticides", unattainable);
$(".tech_insecticides").addClass((technologies["insecticides"] >0 ? "researched" : ""))
$(".tech_insecticides").html("Insecticides" + (technologies["insecticides"] >0 ? " (researched)" : ""));
$(".tech_insecticides").attr('tooltip', 'Chemicals: '+ parseFloat(items["chemicals"]).toFixed(2)+" / "+parseFloat(chemicalscost).toFixed(2))
$(".tech_insecticides").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_insecticides").attr('tooltip4', "Increases food production by 40%");


lockcost=100;
knowledgecost=1200;
if(items["knowledge"]<knowledgecost || craft["lock"]<lockcost){
	$(".tech_safes").addClass("unavailable")
}
else
{
	$(".tech_safes").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_safes", unattainable);
$(".tech_safes").addClass((technologies["safes"] >0 ? "researched" : ""))
$(".tech_safes").html("Safes" + (technologies["safes"] >0 ? " (researched)" : ""));
$(".tech_safes").attr('tooltip', 'Lock: '+ parseFloat(craft["lock"]).toFixed(2)+" / "+parseFloat(lockcost).toFixed(2))
$(".tech_safes").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_safes").attr('tooltip4', "Increases gold storage by 30");


gunpowdercost=50;
knowledgecost=1200;
if(items["knowledge"]<knowledgecost || craft["gunpowder"]<gunpowdercost){
	$(".tech_ammunition").addClass("unavailable")
}
else
{
	$(".tech_ammunition").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_ammunition", unattainable);
$(".tech_ammunition").addClass((technologies["ammunition"] >0 ? "researched" : ""))
$(".tech_ammunition").html("Ammunition" + (technologies["ammunition"] >0 ? " (researched)" : ""));
$(".tech_ammunition").attr('tooltip', 'Gunpowder: '+ parseFloat(craft["gunpowder"]).toFixed(2)+" / "+parseFloat(gunpowdercost).toFixed(2))
$(".tech_ammunition").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_ammunition").attr('tooltip4', "Allows you to craft ammo");


ironcost=500;
ammocost=1000;
knowledgecost=1200;
if(items["knowledge"]<knowledgecost || craft["ammo"]<ammocost || items["iron"]<ironcost){
	$(".tech_gunnery").addClass("unavailable")
}
else
{
	$(".tech_gunnery").removeClass("unavailable")
}
unattainable=maximums["iron"]*(bonus["storage"]+1)<ironcost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_gunnery", unattainable);
$(".tech_gunnery").addClass((technologies["gunnery"] >0 ? "researched" : ""))
$(".tech_gunnery").html("Gunnery" + (technologies["gunnery"] >0 ? " (researched)" : ""));
$(".tech_gunnery").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_gunnery").attr('tooltip2', 'Ammo: '+ parseFloat(craft["ammo"]).toFixed(2)+" / "+parseFloat(ammocost).toFixed(2))
$(".tech_gunnery").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_gunnery").attr('tooltip4', "Allows you to craft musket and hire musketeers");


woodcost=200000
plankcost=10000
knowledgecost=1500;
if(items["knowledge"]<knowledgecost || craft["plank"]<plankcost || items["wood"]<woodcost){
	$(".tech_windward").addClass("unavailable")
}
else
{
	$(".tech_windward").removeClass("unavailable")
}
unattainable=maximums["wood"]*(bonus["storage"]+1)<woodcost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_windward", unattainable);
$(".tech_windward").addClass((technologies["windward"] >0 ? "researched" : ""))
$(".tech_windward").html("Windward" + (technologies["windward"] >0 ? " (researched)" : ""));
$(".tech_windward").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_windward").attr('tooltip2', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".tech_windward").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_windward").attr('tooltip5', "Allows you to build caravels.");


pickaxecost=10000;
coalcost=500;
knowledgecost=1500;
if(items["knowledge"]<knowledgecost || craft["pickaxe"]<pickaxecost || items["coal"]<coalcost){
	$(".tech_mineralcoal").addClass("unavailable")
}
else
{
	$(".tech_mineralcoal").removeClass("unavailable")
}
unattainable=maximums["coal"]*(bonus["storage"]+1)<coalcost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_mineralcoal", unattainable);
$(".tech_mineralcoal").addClass((technologies["mineralcoal"] >0 ? "researched" : ""))
$(".tech_mineralcoal").html("Mineral Coal" + (technologies["mineralcoal"] >0 ? " (researched)" : ""));
$(".tech_mineralcoal").attr('tooltip', 'Coal: '+ parseFloat(items["coal"]).toFixed(2)+" / "+parseFloat(coalcost).toFixed(2))
$(".tech_mineralcoal").attr('tooltip2', 'Pickaxe: '+ parseFloat(craft["pickaxe"]).toFixed(2)+" / "+parseFloat(pickaxecost).toFixed(2))
$(".tech_mineralcoal").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_mineralcoal").attr('tooltip5', "Quarries now also produce coal.");


horsecost=100
moralecost=120
knowledgecost=1500;
if(items["knowledge"]<knowledgecost || craft["horse"]<horsecost || items["morale"]<moralecost){
	$(".tech_carrying").addClass("unavailable")
}
else
{
	$(".tech_carrying").removeClass("unavailable")
}
unattainable=maximums["morale"]*(bonus["storage"]+1)<moralecost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_carrying", unattainable);
$(".tech_carrying").addClass((technologies["carrying"] >0 ? "researched" : ""))
$(".tech_carrying").html("Carrying" + (technologies["carrying"] >0 ? " (researched)" : ""));
$(".tech_carrying").attr('tooltip', 'Morale: '+ parseFloat(items["morale"]).toFixed(2)+" / "+parseFloat(moralecost).toFixed(2))
$(".tech_carrying").attr('tooltip2', 'Horse: '+ parseFloat(craft["horse"]).toFixed(2)+" / "+parseFloat(horsecost).toFixed(2))
$(".tech_carrying").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_carrying").attr('tooltip5', "Increases the amount of resources you get on expeditions by 50%");


tokencost=5000;
coincost=5000;
knowledgecost=1500;
if(items["knowledge"]<knowledgecost || craft["token"]<tokencost || craft["coin"]<coincost){
	$(".tech_shareholding").addClass("unavailable")
}
else
{
	$(".tech_shareholding").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_shareholding", unattainable);
$(".tech_shareholding").addClass((technologies["shareholding"] >0 ? "researched" : ""))
$(".tech_shareholding").html("Shareholding" + (technologies["shareholding"] >0 ? " (researched)" : ""));
$(".tech_shareholding").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_shareholding").attr('tooltip2', 'Token: '+ parseFloat(craft["token"]).toFixed(2)+" / "+parseFloat(tokencost).toFixed(2))
$(".tech_shareholding").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_shareholding").attr('tooltip5', "Allows you to redeem tokens on the casino for casino shares.");


framecost=100;
glasscost=300;
knowledgecost=1600;
if(items["knowledge"]<knowledgecost || craft["glass"]<glasscost || craft["frame"]<framecost){
	$(".tech_safestorage").addClass("unavailable")
}
else
{
	$(".tech_safestorage").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_safestorage", unattainable);
$(".tech_safestorage").addClass((technologies["safestorage"] >0 ? "researched" : ""))
$(".tech_safestorage").html("Safe storage" + (technologies["safestorage"] >0 ? " (researched)" : ""));
$(".tech_safestorage").attr('tooltip', 'Frame: '+ parseFloat(craft["frame"]).toFixed(2)+" / "+parseFloat(framecost).toFixed(2))
$(".tech_safestorage").attr('tooltip2', 'Glass: '+ parseFloat(craft["glass"]).toFixed(2)+" / "+parseFloat(glasscost).toFixed(2))
$(".tech_safestorage").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_safestorage").attr('tooltip5', "Allows you to build repositories to store complex materials");
$(".tech_safestorage").attr('tooltip6', "Quarries now also produce nickel");
$(".tech_safestorage").attr('tooltip7', "You can also get nickel on expeditions or trade routes.");


ironcost=750;
steelcost=400;
knowledgecost=1700;
if(items["knowledge"]<knowledgecost || items["iron"]<ironcost || items["steel"]<steelcost){
	$(".tech_metalwork").addClass("unavailable")
}
else
{
	$(".tech_metalwork").removeClass("unavailable")
}
unattainable=maximums["iron"]*(bonus["storage"]+1)<ironcost || maximums["steel"]*(bonus["storage"]+1)<steelcost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_metalwork", unattainable);
$(".tech_metalwork").addClass((technologies["metalwork"] >0 ? "researched" : ""))
$(".tech_metalwork").html("Metalwork" + (technologies["metalwork"] >0 ? " (researched)" : ""));
$(".tech_metalwork").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_metalwork").attr('tooltip2', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".tech_metalwork").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_metalwork").attr('tooltip5', "Allows you to craft alloy plates.");


ironcost=800;
platecost=50;
knowledgecost=1800;
if(items["knowledge"]<knowledgecost || items["iron"]<ironcost || craft["plate"]<platecost){
	$(".tech_steamengine").addClass("unavailable")
}
else
{
	$(".tech_steamengine").removeClass("unavailable")
}
unattainable=maximums["iron"]*(bonus["storage"]+1)<ironcost
set_unattainable(".tech_steamengine", unattainable);
$(".tech_steamengine").addClass((technologies["steamengine"] >0 ? "researched" : ""))
$(".tech_steamengine").html("Steam engine" + (technologies["steamengine"] >0 ? " (researched)" : ""));
$(".tech_steamengine").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_steamengine").attr('tooltip2', 'Plate: '+ parseFloat(craft["plate"]).toFixed(2)+" / "+parseFloat(platecost).toFixed(2))
$(".tech_steamengine").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_steamengine").attr('tooltip5', "Allows you to build steam powered engines.");


moralecost=130;
platecost=500;
knowledgecost=2000;
if(items["knowledge"]<knowledgecost || items["morale"]<moralecost || craft["plate"]<platecost){
	$(".tech_armoredcombat").addClass("unavailable")
}
else
{
	$(".tech_armoredcombat").removeClass("unavailable")
}
unattainable=maximums["morale"]*(bonus["storage"]+1)<moralecost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_armoredcombat", unattainable);
$(".tech_armoredcombat").addClass((technologies["armoredcombat"] >0 ? "researched" : ""))
$(".tech_armoredcombat").html("Armored combat" + (technologies["armoredcombat"] >0 ? " (res...)" : ""));
$(".tech_armoredcombat").attr('tooltip', 'Morale: '+ parseFloat(items["morale"]).toFixed(2)+" / "+parseFloat(moralecost).toFixed(2))
$(".tech_armoredcombat").attr('tooltip2', 'Plate: '+ parseFloat(craft["plate"]).toFixed(2)+" / "+parseFloat(platecost).toFixed(2))
$(".tech_armoredcombat").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_armoredcombat").attr('tooltip5', "Allows you to build armored tanks to ride into battle");


coincost=10000;
platecost=300;
knowledgecost=2000;
if(items["knowledge"]<knowledgecost || craft["coin"]<coincost || craft["plate"]<platecost){
	$(".tech_railtransport").addClass("unavailable")
}
else
{
	$(".tech_railtransport").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_railtransport", unattainable);
$(".tech_railtransport").addClass((technologies["railtransport"] >0 ? "researched" : ""))
$(".tech_railtransport").html("Rail transport" + (technologies["railtransport"] >0 ? " (researched)" : ""));
$(".tech_railtransport").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_railtransport").attr('tooltip2', 'Plate: '+ parseFloat(craft["plate"]).toFixed(2)+" / "+parseFloat(platecost).toFixed(2))
$(".tech_railtransport").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_railtransport").attr('tooltip5', "Trains are a good way to keep your economy moving.");


chemicalscost=100;
platecost=300;
knowledgecost=2000;
if(items["knowledge"]<knowledgecost || items["chemicals"]<chemicalscost || craft["plate"]<platecost){
	$(".tech_industrialization").addClass("unavailable")
}
else
{
	$(".tech_industrialization").removeClass("unavailable")
}
unattainable=maximums["chemicals"]*(bonus["storage"]+1)<chemicalscost || maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_industrialization", unattainable);
$(".tech_industrialization").addClass((technologies["industrialization"] >0 ? "researched" : ""))
$(".tech_industrialization").html("Industrialization" + (technologies["industrialization"] >0 ? " (researched)" : ""));
$(".tech_industrialization").attr('tooltip', 'Chemicals: '+ parseFloat(items["chemicals"]).toFixed(2)+" / "+parseFloat(chemicalscost).toFixed(2))
$(".tech_industrialization").attr('tooltip2', 'Plate: '+ parseFloat(craft["plate"]).toFixed(2)+" / "+parseFloat(platecost).toFixed(2))
$(".tech_industrialization").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_industrialization").attr('tooltip5', "Further developments has increased the efficiency of crafting.");


knowledgecost=2500;
if(items["knowledge"]<knowledgecost){
	$(".tech_academicpublishing").addClass("unavailable")
}
else
{
	$(".tech_academicpublishing").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_academicpublishing", unattainable);
$(".tech_academicpublishing").addClass((technologies["academicpublishing"] >0 ? "researched" : ""))
$(".tech_academicpublishing").html("Academic Publishing" + (technologies["academicpublishing"] >0 ? " (res..)" : ""));
$(".tech_academicpublishing").attr('tooltip', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_academicpublishing").attr('tooltip3', "Allows you to store your knowledge in books of scientific papers.");


coincost=10000;
knowledgecost=2000;
if(items["knowledge"]<knowledgecost || craft["coin"]<coincost ){
	$(".tech_patents").addClass("unavailable")
}
else
{
	$(".tech_patents").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_patents", unattainable);
$(".tech_patents").addClass((technologies["patents"] >0 ? "researched" : ""))
$(".tech_patents").html("Patents" + (technologies["patents"] >0 ? " (researched)" : ""));
$(".tech_patents").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_patents").attr('tooltip2', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_patents").attr('tooltip4', "Allows you to buy patents to further advance your research.");


coincost=5000;
bookcost=10;
if(craft["book"]<bookcost || craft["coin"]<coincost ){
	$(".tech_logistics").addClass("unavailable")
}
else
{
	$(".tech_logistics").removeClass("unavailable")
}
$(".tech_logistics").addClass((technologies["logistics"] >0 ? "researched" : ""))
$(".tech_logistics").html("Logistics" + (technologies["logistics"] >0 ? " (researched)" : ""));
$(".tech_logistics").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".tech_logistics").attr('tooltip2', 'Book: '+ parseFloat(craft["book"]).toFixed(2)+" / "+parseFloat(bookcost).toFixed(2))
$(".tech_logistics").attr('tooltip4', "Logistics provide a shortcut to crafting.");
$(".tech_logistics").attr('tooltip5', "Allows you to craft materials directly by clicking its name on the inventory.");


knowledgecost=2800;
bookcost=10;
if(craft["book"]<bookcost || items["knowledge"]<knowledgecost ){
	$(".tech_electricity").addClass("unavailable")
}
else
{
	$(".tech_electricity").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_electricity", unattainable);
$(".tech_electricity").addClass((technologies["electricity"] >0 ? "researched" : ""))
$(".tech_electricity").html("Electricity" + (technologies["electricity"] >0 ? " (researched)" : ""));
$(".tech_electricity").attr('tooltip', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_electricity").attr('tooltip2', 'Book: '+ parseFloat(craft["book"]).toFixed(2)+" / "+parseFloat(bookcost).toFixed(2))
$(".tech_electricity").attr('tooltip4', "Grants you to the knowledge of handling electricity");
$(".tech_electricity").attr('tooltip5', "Allows you to build powerplants");


mineralcost=200000;
claycost=10000
bookcost=5;
if(craft["book"]<bookcost || items["clay"]<claycost || items["mineral"]<mineralcost){
	$(".tech_pyroprocessing").addClass("unavailable")
}
else
{
	$(".tech_pyroprocessing").removeClass("unavailable")
}
unattainable=maximums["clay"]*(bonus["storage"]+1)<claycost || maximums["mineral"]*(bonus["storage"]+1)<mineralcost
set_unattainable(".tech_pyroprocessing", unattainable);
$(".tech_pyroprocessing").addClass((technologies["pyroprocessing"] >0 ? "researched" : ""))
$(".tech_pyroprocessing").html("Pyroprocessing" + (technologies["pyroprocessing"] >0 ? " (researched)" : ""));
$(".tech_pyroprocessing").attr('tooltip', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".tech_pyroprocessing").attr('tooltip2', 'Clay: '+ parseFloat(items["clay"]).toFixed(2)+" / "+parseFloat(claycost).toFixed(2))
$(".tech_pyroprocessing").attr('tooltip3', 'Book: '+ parseFloat(craft["book"]).toFixed(2)+" / "+parseFloat(bookcost).toFixed(2))
$(".tech_pyroprocessing").attr('tooltip5', "Allows you to build cement kilns");


knowledgecost=3000;
if(items["knowledge"]<knowledgecost){
	$(".tech_triforce").addClass("unavailable")
}
else
{
	$(".tech_triforce").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_triforce", unattainable);
$(".tech_triforce").addClass((technologies["triforce"] >0 ? "researched" : ""))
$(".tech_triforce").html("Triforce" + (technologies["triforce"] >0 ? " (researched)" : ""));
$(".tech_triforce").attr('tooltip', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_triforce").attr('tooltip3', "+30% gold production");
$(".tech_triforce").attr('tooltip4', "+30% knowledge production");
$(".tech_triforce").attr('tooltip5', "+30% morale production");
$(".tech_triforce").attr('tooltip6', "+30% storage space");
$(".tech_triforce").attr('tooltip7', "+30% craft efficiency");


bookcost=20;
knowledgecost=3000;
if(items["knowledge"]<knowledgecost || craft["book"]<bookcost){
	$(".tech_education").addClass("unavailable")
}
else
{
	$(".tech_education").removeClass("unavailable")
}
unattainable=maximums["knowledge"]*(bonus["storage"]+1)<knowledgecost
set_unattainable(".tech_education", unattainable);
$(".tech_education").addClass((technologies["education"] >0 ? "researched" : ""))
$(".tech_education").html("Education" + (technologies["education"] >0 ? " (researched)" : ""));
$(".tech_education").attr('tooltip', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_education").attr('tooltip2', 'Book: '+ parseFloat(craft["book"]).toFixed(2)+" / "+parseFloat(bookcost).toFixed(2))
$(".tech_education").attr('tooltip4', "Allows the building of universities");


claycost=15000;
bookcost=20;
if(craft["book"]<bookcost || items["clay"]<claycost){
	$(".tech_cementhydration").addClass("unavailable")
}
else
{
	$(".tech_cementhydration").removeClass("unavailable")
}
unattainable=maximums["clay"]*(bonus["storage"]+1)<claycost
set_unattainable(".tech_cementhydration", unattainable);
$(".tech_cementhydration").addClass((technologies["cementhydration"] >0 ? "researched" : ""))
$(".tech_cementhydration").html("Cement Hydration" + (technologies["cementhydration"] >0 ? " (researched)" : ""));
$(".tech_cementhydration").attr('tooltip', 'Clay: '+ parseFloat(items["clay"]).toFixed(2)+" / "+parseFloat(claycost).toFixed(2))
$(".tech_cementhydration").attr('tooltip2', 'Book: '+ parseFloat(craft["book"]).toFixed(2)+" / "+parseFloat(bookcost).toFixed(2))
$(".tech_cementhydration").attr('tooltip4', "Allows you to build concrete mixers");


concretecost=15000;
bookcost=30;
if(craft["book"]<bookcost || items["concrete"]<concretecost){
	$(".tech_workforce").addClass("unavailable")
}
else
{
	$(".tech_workforce").removeClass("unavailable")
}
unattainable=maximums["concrete"]*(bonus["storage"]+1)<concretecost
set_unattainable(".tech_workforce", unattainable);
$(".tech_workforce").addClass((technologies["workforce"] >0 ? "researched" : ""))
$(".tech_workforce").html("Work force" + (technologies["workforce"] >0 ? " (researched)" : ""));
$(".tech_workforce").attr('tooltip', 'Concrete: '+ parseFloat(items["concrete"]).toFixed(2)+" / "+parseFloat(concretecost).toFixed(2))
$(".tech_workforce").attr('tooltip2', 'Book: '+ parseFloat(craft["book"]).toFixed(2)+" / "+parseFloat(bookcost).toFixed(2))
$(".tech_workforce").attr('tooltip4', "Allows you to build tool factories to provide industrial tools.");


spearcost=300000;
swordcost=100000;
bookcost=30;
if(craft["book"]<bookcost || craft["sword"]<swordcost || craft["spear"]<spearcost){
	$(".tech_militarization").addClass("unavailable")
}
else
{
	$(".tech_militarization").removeClass("unavailable")
}
$(".tech_militarization").addClass((technologies["militarization"] >0 ? "researched" : ""))
$(".tech_militarization").html("Militarization" + (technologies["militarization"] >0 ? " (researched)" : ""));
$(".tech_militarization").attr('tooltip', 'Spear: '+ parseFloat(craft["spear"]).toFixed(2)+" / "+parseFloat(spearcost).toFixed(2))
$(".tech_militarization").attr('tooltip2', 'Sword: '+ parseFloat(craft["sword"]).toFixed(2)+" / "+parseFloat(swordcost).toFixed(2))
$(".tech_militarization").attr('tooltip3', 'Book: '+ parseFloat(craft["book"]).toFixed(2)+" / "+parseFloat(bookcost).toFixed(2))
$(".tech_militarization").attr('tooltip5', "Allows you to build barracks");


moralecost=250;
bookcost=20;
if(items["morale"]<moralecost || craft["book"]<bookcost){
	$(".tech_wargames").addClass("unavailable")
}
else
{
	$(".tech_wargames").removeClass("unavailable")
}
unattainable=maximums["morale"]*(bonus["storage"]+1)<moralecost
set_unattainable(".tech_wargames", unattainable);
$(".tech_wargames").addClass((technologies["wargames"] >0 ? "researched" : ""))
$(".tech_wargames").html("War games" + (technologies["wargames"] >0 ? " (researched)" : ""));
$(".tech_wargames").attr('tooltip', 'Morale: '+ parseFloat(items["morale"]).toFixed(2)+" / "+parseFloat(moralecost).toFixed(2))
$(".tech_wargames").attr('tooltip2', 'Book: '+ parseFloat(craft["book"]).toFixed(2)+" / "+parseFloat(bookcost).toFixed(2))
$(".tech_wargames").attr('tooltip4', "Allows you to gather plans from the enemy and use them to make strategies.");


$(".research_economy").html("Economy " + intToString(bonus["economy"]));
$(".research_economy").attr('tooltip', "The economy is a lucrative force. Prosperity and wealth await");
$(".research_economy").attr('tooltip2', "those who seek to harness it.");
$(".research_economy").attr('tooltip4', "Increases global production");
if(bonus["economy"]>100000) {$(".research_economy").attr('tooltip6', 'An additional investment of ' + parseFloat(Math.pow(1.1,Math.round(Math.ceil(Math.log(bonus["economy"]/100000)/Math.log(1.1),0)))*100000-bonus["economy"]).toFixed(2) + ' knowledge will unlock the next Mastery Technology.');}

$(".research_science").html("Science " + intToString(bonus["science"]));
$(".research_science").attr('tooltip', "Science is an evolutionary force. Progress can be slow,");
$(".research_science").attr('tooltip2', "but it will never stop pushing humanity forward.");
$(".research_science").attr('tooltip4', "Increases craft efficiency");
if(bonus["science"]>100000) {$(".research_science").attr('tooltip6', 'An additional investment of ' + parseFloat(Math.pow(1.1,Math.round(Math.ceil(Math.log(bonus["science"]/100000)/Math.log(1.1),0)))*100000-bonus["science"]).toFixed(2) + ' knowledge will unlock the next Mastery Technology.');}

$(".research_military").html("Military " + intToString(bonus["military"]));
$(".research_military").attr('tooltip', "The military are a powerful force. There are times when");
$(".research_military").attr('tooltip2', "only might can make right. Is it now?");
$(".research_military").attr('tooltip4', "Increases troops attack and hp");
if(bonus["military"]>100000) {$(".research_military").attr('tooltip6', 'An additional investment of ' + parseFloat(Math.pow(1.1,Math.round(Math.ceil(Math.log(bonus["military"]/100000)/Math.log(1.1),0)))*100000-bonus["military"]).toFixed(2) + ' knowledge will unlock the next Mastery Technology.');}




//Crafting


woodcost=20;
coppercost=1;
if(items["wood"]<woodcost || items["copper"]<coppercost){
	$(".craft_pickaxe").addClass("unavailable")
}
else
{
	$(".craft_pickaxe").removeClass("unavailable")
}
$(".craft_pickaxe").html("Pickaxe");
$(".craft_pickaxe").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".craft_pickaxe").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".craft_pickaxe").attr('tooltip4', "Basic copper pickaxe");


woodcost=50;
coppercost=3;
if(items["wood"]<woodcost || items["copper"]<coppercost){
	$(".craft_spear").addClass("unavailable")
}
else
{
	$(".craft_spear").removeClass("unavailable")
}
$(".craft_spear").html("Spear");
$(".craft_spear").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".craft_spear").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".craft_spear").attr('tooltip4', "Spear made of wood and copper");


ironcost=10
if(items["iron"]<ironcost){
	$(".craft_sword").addClass("unavailable")
}
else
{
	$(".craft_sword").removeClass("unavailable")
}
$(".craft_sword").html("Sword");
$(".craft_sword").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".craft_sword").attr('tooltip3', "Strong Iron sword");

woodcost=100
mineralcost=200
if(items["wood"]<woodcost || items["mineral"]<mineralcost){
	$(".craft_block").addClass("unavailable")
}
else
{
	$(".craft_block").removeClass("unavailable")
}
$(".craft_block").html("Block");
$(".craft_block").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".craft_block").attr('tooltip2', 'Mineral: '+ parseFloat(items["mineral"]).toFixed(2)+" / "+parseFloat(mineralcost).toFixed(2))
$(".craft_block").attr('tooltip3', "Compact building material");


goldcost=5
if(items["gold"]<goldcost){
	$(".craft_coin").addClass("unavailable")
}
else
{
	$(".craft_coin").removeClass("unavailable")
}
$(".craft_coin").html("Coin");
$(".craft_coin").attr('tooltip', 'Gold: '+ parseFloat(items["gold"]).toFixed(2)+" / "+parseFloat(goldcost).toFixed(2))
$(".craft_coin").attr('tooltip3', "Gold refined into a coin for future use.");


coppercost=40
tincost=10
if(items["copper"]<coppercost || items["tin"]<tincost){
	$(".craft_bronze").addClass("unavailable")
}
else
{
	$(".craft_bronze").removeClass("unavailable")
}
$(".craft_bronze").html("Bronze");
$(".craft_bronze").attr('tooltip', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".craft_bronze").attr('tooltip2', 'Tin: '+ parseFloat(items["tin"]).toFixed(2)+" / "+parseFloat(tincost).toFixed(2))
$(".craft_bronze").attr('tooltip4', "A refined alloy of copper and tin");


woodcost=1000;
ironcost=20;
if(items["wood"]<woodcost || items["iron"]<ironcost){
	$(".craft_structure").addClass("unavailable")
}
else
{
	$(".craft_structure").removeClass("unavailable")
}
$(".craft_structure").html("Structure");
$(".craft_structure").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".craft_structure").attr('tooltip2', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".craft_structure").attr('tooltip4', "Reinforced structure for big buildings");


steelcost=30;
bronzecost=5;
if(items["steel"]<steelcost || craft["bronze"]<bronzecost){
	$(".craft_armor").addClass("unavailable")
}
else
{
	$(".craft_armor").removeClass("unavailable")
}
$(".craft_armor").html("Armor");
$(".craft_armor").attr('tooltip', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".craft_armor").attr('tooltip2', 'Bronze: '+ parseFloat(craft["bronze"]).toFixed(2)+" / "+parseFloat(bronzecost).toFixed(2))
$(".craft_armor").attr('tooltip4', "Fine crafted armor");


plankcost=5;
foodcost=500;
watercost=100;
if(craft["plank"]<plankcost || items["food"]<foodcost || items["water"]<watercost){
	$(".craft_supplies").addClass("unavailable")
}
else
{
	$(".craft_supplies").removeClass("unavailable")
}
$(".craft_supplies").html("Supplies");
$(".craft_supplies").attr('tooltip', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".craft_supplies").attr('tooltip2', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".craft_supplies").attr('tooltip3', 'Water: '+ parseFloat(items["water"]).toFixed(2)+" / "+parseFloat(watercost).toFixed(2))
$(".craft_supplies").attr('tooltip5', "A barrel containing supplies");


plankcost=100;
steelcost=30;
bronzecost=5;
lockcost=1;
if(craft["plank"]<plankcost || craft["bronze"]<bronzecost || items["steel"]<steelcost ||  craft["lock"]<lockcost){
	$(".craft_chest").addClass("unavailable")
}
else
{
	$(".craft_chest").removeClass("unavailable")
}
$(".craft_chest").html("Chest");
$(".craft_chest").attr('tooltip', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".craft_chest").attr('tooltip2', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".craft_chest").attr('tooltip3', 'Bronze: '+ parseFloat(craft["bronze"]).toFixed(2)+" / "+parseFloat(bronzecost).toFixed(2))
$(".craft_chest").attr('tooltip4', 'Lock: '+ parseFloat(craft["lock"]).toFixed(2)+" / "+parseFloat(lockcost).toFixed(2))

$(".craft_chest").attr('tooltip6', "A chest used to store resources");


tincost=50;
sandcost=200;
coalcost=50;
if(items["tin"]<tincost || items["sand"]<sandcost || items["coal"]<coalcost){
	$(".craft_glass").addClass("unavailable")
}
else
{
	$(".craft_glass").removeClass("unavailable")
}
$(".craft_glass").html("Glass");
$(".craft_glass").attr('tooltip', 'Tin: '+ parseFloat(items["tin"]).toFixed(2)+" / "+parseFloat(tincost).toFixed(2))
$(".craft_glass").attr('tooltip2', 'Sand: '+ parseFloat(items["sand"]).toFixed(2)+" / "+parseFloat(sandcost).toFixed(2))
$(".craft_glass").attr('tooltip3', 'Coal: '+ parseFloat(items["coal"]).toFixed(2)+" / "+parseFloat(coalcost).toFixed(2))
$(".craft_glass").attr('tooltip5', "A sheet of glass");


glasscost=5
if(craft["glass"]<glasscost){
	$(".craft_bottle").addClass("unavailable")
}
else
{
	$(".craft_bottle").removeClass("unavailable")
}
$(".craft_bottle").html("Bottle");
$(".craft_bottle").attr('tooltip', 'Glass: '+ parseFloat(craft["glass"]).toFixed(2)+" / "+parseFloat(glasscost).toFixed(2))
$(".craft_bottle").attr('tooltip3', "A bottle of glass to store water and others liquids.");
$(".craft_bottle").attr('tooltip4', "+1 water storage");


steelcost=100
if(items["steel"]<steelcost){
	$(".craft_greatsword").addClass("unavailable")
}
else
{
	$(".craft_greatsword").removeClass("unavailable")
}
$(".craft_greatsword").html("Greatsword");
$(".craft_greatsword").attr('tooltip', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".craft_greatsword").attr('tooltip3', "This double handed sword is a marvel of smithing.");


blockcost=500;
structurecost=100;
steelcost=100;
if(craft["block"]<blockcost || craft["structure"]<structurecost || items["steel"]<steelcost){
	$(".craft_frame").addClass("unavailable")
}
else
{
	$(".craft_frame").removeClass("unavailable")
}
$(".craft_frame").html("Frame");
$(".craft_frame").attr('tooltip', 'Block: '+ parseFloat(craft["block"]).toFixed(2)+" / "+parseFloat(blockcost).toFixed(2))
$(".craft_frame").attr('tooltip2', 'Structure: '+ parseFloat(craft["structure"]).toFixed(2)+" / "+parseFloat(structurecost).toFixed(2))
$(".craft_frame").attr('tooltip3', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".craft_frame").attr('tooltip5', "Massive construction material used in big buildings.");


sandcost=500;
claycost=150;
if(items["sand"]<sandcost || items["clay"]<claycost){
	$(".craft_brick").addClass("unavailable")
}
else
{
	$(".craft_brick").removeClass("unavailable")
}
$(".craft_brick").html("Brick");
$(".craft_brick").attr('tooltip', 'Sand: '+ parseFloat(items["sand"]).toFixed(2)+" / "+parseFloat(sandcost).toFixed(2))
$(".craft_brick").attr('tooltip2', 'Clay: '+ parseFloat(items["clay"]).toFixed(2)+" / "+parseFloat(claycost).toFixed(2))
$(".craft_brick").attr('tooltip4', "Bricks are a modular construction material.");


sandcost=300;
coalcost=100;
bronzecost=10;
chemicalscost=5;
if(items["sand"]<sandcost || items["coal"]<coalcost || items["chemicals"]<chemicalscost || craft["bronze"]<bronzecost){
	$(".craft_gunpowder").addClass("unavailable")
}
else
{
	$(".craft_gunpowder").removeClass("unavailable")
}
$(".craft_gunpowder").html("Gunpowder");
$(".craft_gunpowder").attr('tooltip', 'Sand: '+ parseFloat(items["sand"]).toFixed(2)+" / "+parseFloat(sandcost).toFixed(2))
$(".craft_gunpowder").attr('tooltip2', 'Coal: '+ parseFloat(items["coal"]).toFixed(2)+" / "+parseFloat(coalcost).toFixed(2))
$(".craft_gunpowder").attr('tooltip3', 'Bronze: '+ parseFloat(craft["bronze"]).toFixed(2)+" / "+parseFloat(bronzecost).toFixed(2))
$(".craft_gunpowder").attr('tooltip4', 'Chemicals: '+ parseFloat(items["chemicals"]).toFixed(2)+" / "+parseFloat(chemicalscost).toFixed(2))
$(".craft_gunpowder").attr('tooltip5', "A powder used for explosives and ammunition.");


ironcost=50;
gunpowdercost=10;
if(items["iron"]<ironcost || craft["gunpowder"]<gunpowdercost){
	$(".craft_ammo").addClass("unavailable")
}
else
{
	$(".craft_ammo").removeClass("unavailable")
}
$(".craft_ammo").html("Ammo");
$(".craft_ammo").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".craft_ammo").attr('tooltip2', 'Gunpowder: '+ parseFloat(craft["gunpowder"]).toFixed(2)+" / "+parseFloat(gunpowdercost).toFixed(2))
$(".craft_ammo").attr('tooltip4', "Iron shells and gunpowder x500");


woodcost=500;
ironcost=500;
steelcost=300;
if(items["wood"]<woodcost || items["iron"]<ironcost || items["steel"]<steelcost){
	$(".craft_musket").addClass("unavailable")
}
else
{
	$(".craft_musket").removeClass("unavailable")
}
$(".craft_musket").html("Musket");
$(".craft_musket").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".craft_musket").attr('tooltip2', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".craft_musket").attr('tooltip3', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".craft_musket").attr('tooltip5', "A rudimentary fire weapon.");


coppercost=400;
ironcost=200;
nickelcost=10;
if(items["copper"]<coppercost || items["iron"]<ironcost || items["nickel"]<nickelcost){
	$(".craft_plate").addClass("unavailable")
}
else
{
	$(".craft_plate").removeClass("unavailable")
}
$(".craft_plate").html("Plate");
$(".craft_plate").attr('tooltip', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".craft_plate").attr('tooltip2', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".craft_plate").attr('tooltip3', 'Nickel: '+ parseFloat(items["nickel"]).toFixed(2)+" / "+parseFloat(nickelcost).toFixed(2))
$(".craft_plate").attr('tooltip5', "A plate made of complex alloy.");


steelcost=400;
platecost=100;
bronzecost=200;
if(craft["plate"]<platecost || craft["bronze"]<bronzecost || items["steel"]<steelcost){
	$(".craft_engine").addClass("unavailable")
}
else
{
	$(".craft_engine").removeClass("unavailable")
}
$(".craft_engine").html("Engine");
$(".craft_engine").attr('tooltip', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".craft_engine").attr('tooltip2', 'Bronze: '+ parseFloat(craft["bronze"]).toFixed(2)+" / "+parseFloat(bronzecost).toFixed(2))
$(".craft_engine").attr('tooltip3', 'Plate: '+ parseFloat(craft["plate"]).toFixed(2)+" / "+parseFloat(platecost).toFixed(2))
$(".craft_engine").attr('tooltip5', "A steam powered engine.");


knowledgecost=2500;
if(items["knowledge"]<knowledgecost){
	$(".craft_book").addClass("unavailable")
}
else
{
	$(".craft_book").removeClass("unavailable")
}
$(".craft_book").html("Scientific papers");
$(".craft_book").attr('tooltip', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".craft_book").attr('tooltip3', "Book with scientific papers which can be used to research new technologies");


planscost=2500;
if(craft["plans"]<planscost){
	$(".craft_strategy").addClass("unavailable")
}
else
{
	$(".craft_strategy").removeClass("unavailable")
}
$(".craft_strategy").html("Strategy");
$(".craft_strategy").attr('tooltip', 'Plans: '+ parseFloat(craft["plans"]).toFixed(2)+" / "+parseFloat(planscost).toFixed(2))
$(".craft_strategy").attr('tooltip3', "Book with military plans");


coincost=2500;
if(craft["coin"]<coincost){
	$(".craft_patent").addClass("unavailable")
}
else
{
	$(".craft_patent").removeClass("unavailable")
}
$(".craft_patent").html("Patent");
$(".craft_patent").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".craft_patent").attr('tooltip3', "Book with all sorts of blueprints and inventions which can be used for new technologies.");




//Leaders


if(bonus["title"]<1){
	$(".leader_sucellus").addClass("unavailable")
	$(".leader_eredal").addClass("unavailable")
	$(".leader_khrysos").addClass("unavailable")
	$(".leader_elisia").addClass("unavailable")
	$(".leader_xochiquetzal").addClass("unavailable")
	$(".leader_warmuk").addClass("unavailable")
	$(".leader_foehn").addClass("unavailable")
	$(".leader_alfear").addClass("unavailable")
}
else
{
	$(".leader_sucellus").removeClass("unavailable")
	$(".leader_eredal").removeClass("unavailable")
	$(".leader_khrysos").removeClass("unavailable")
	$(".leader_elisia").removeClass("unavailable")
	$(".leader_xochiquetzal").removeClass("unavailable")
	$(".leader_warmuk").removeClass("unavailable")
	$(".leader_foehn").removeClass("unavailable")
	$(".leader_alfear").removeClass("unavailable")

}

$(".leader_sucellus").html("Sucellus (lv:" + people["sucellus"]+")");
$(".leader_sucellus").attr('tooltip', 'Increments wood production by 20%')
$(".leader_sucellus").attr('tooltip2', 'Increments water production by 20%')
$(".leader_sucellus").attr('tooltip3', 'Increments food production by 20%')
$(".leader_sucellus").attr('tooltip4', 'Increments maximum water by +5')
$(".leader_sucellus").attr('tooltip6', "'Nature its not optional'");

$(".leader_eredal").html("Eredal (lv:" + people["eredal"]+")");
$(".leader_eredal").attr('tooltip', 'Increments mineral production by 10%')
$(".leader_eredal").attr('tooltip2', 'Increments copper production by 10%')
$(".leader_eredal").attr('tooltip3', 'Increments iron production by 10%')
$(".leader_eredal").attr('tooltip4', 'Increments steel production by 10%')
$(".leader_eredal").attr('tooltip6', "'Metal till death'");

$(".leader_khrysos").html("Khrysos (lv:" + people["khrysos"]+")");
$(".leader_khrysos").attr('tooltip', 'Increments gold production by 25%')
$(".leader_khrysos").attr('tooltip2', 'Increments market ratios by 10%')
$(".leader_khrysos").attr('tooltip4', "'Everything has a price'");

$(".leader_elisia").html("Elisia (lv:" + people["elisia"]+")");
$(".leader_elisia").attr('tooltip', 'Increments craft efficiency by 5%')
$(".leader_elisia").attr('tooltip2', 'Increments wood and mineral storage by 500')
$(".leader_elisia").attr('tooltip4', "'Making makes us human'");

$(".leader_xochiquetzal").html("Xochiquetzal (lv:" + people["xochiquetzal"]+")");
$(".leader_xochiquetzal").attr('tooltip', 'Increments max population by 2')
$(".leader_xochiquetzal").attr('tooltip2', 'Increments troops hp by 5%')
$(".leader_xochiquetzal").attr('tooltip4', "'Life finds a way'");

$(".leader_warmuk").html("Warmuk (lv:" + people["warmuk"]+")");
$(".leader_warmuk").attr('tooltip', 'Increments troops attack by 10%')
$(".leader_warmuk").attr('tooltip2', 'Increments max morale by 2')
$(".leader_warmuk").attr('tooltip3', 'Increments morale production by 5%')
$(".leader_warmuk").attr('tooltip5', "'If you run away, you will die tired'");

$(".leader_foehn").html("Foehn (lv:" + people["foehn"]+")");
$(".leader_foehn").attr('tooltip', 'Increments ships power by 10%')
$(".leader_foehn").attr('tooltip2', 'Increments ships structure by 10%')
$(".leader_foehn").attr('tooltip3', 'Increments ships cargo capacity by 15%')
$(".leader_foehn").attr('tooltip5', "'Take what you can, give nothing back.'");

$(".leader_alfear").html("Alfear (lv:" + people["alfear"]+")");
$(".leader_alfear").attr('tooltip', 'Increments knowledge production by 10%')
$(".leader_alfear").attr('tooltip2', 'Increments knowledge maximum by 100')
$(".leader_alfear").attr('tooltip4', "'For even the very wise cannot see all ends.'");

treasurecost = Math.floor(Math.pow(1.7,(bonus["reespeccost"]))*5)
if(prestige["treasure"]<treasurecost){
	$(".reespec").addClass("unavailable")
}
else
{
	$(".reespec").removeClass("unavailable")
}
$(".reespec").html("Respec");
$(".reespec").attr('tooltip', 'Treasures: '+ parseFloat(prestige["treasure"]).toFixed(2)+" / "+parseFloat(treasurecost).toFixed(2))
$(".reespec").attr('tooltip3', 'Lets you get your titles back, for a cost..')

treasurecost = Math.floor(Math.pow(1.5,(bonus["warpcost"]))*5)
if(prestige["treasure"]<treasurecost){
	$(".legacy_warp").addClass("unavailable")
}
else
{
	$(".legacy_warp").removeClass("unavailable")
}
$(".legacy_warp").html("Rush economy");
$(".legacy_warp").attr('tooltip', 'Treasures: '+ parseFloat(prestige["treasure"]).toFixed(2)+" / "+parseFloat(treasurecost).toFixed(2))
$(".legacy_warp").attr('tooltip3', 'Gives you 30 min of production')

diamondcost=1
if(craft["diamond"]<diamondcost){
	$(".rush1").addClass("unavailable")
}
else
{
	$(".rush1").removeClass("unavailable")
}
$(".rush1").html("Boost 1 hour");
$(".rush1").attr('tooltip', 'Diamond: '+ parseFloat(craft["diamond"]).toFixed(2)+" / "+parseFloat(diamondcost).toFixed(2))
$(".rush1").attr('tooltip3', 'Doubles your production for 1 hour')

diamondcost=20
if(craft["diamond"]<diamondcost){
	$(".rush24").addClass("unavailable")
}
else
{
	$(".rush24").removeClass("unavailable")
}
$(".rush24").html("Boost 1 day");
$(".rush24").attr('tooltip', 'Diamond: '+ parseFloat(craft["diamond"]).toFixed(2)+" / "+parseFloat(diamondcost).toFixed(2))
$(".rush24").attr('tooltip3', 'Doubles your production for 1 day')

diamondcost=100
if(craft["diamond"]<diamondcost){
	$(".rush7").addClass("unavailable")
}
else
{
	$(".rush7").removeClass("unavailable")
}
$(".rush7").html("Boost 1 week");
$(".rush7").attr('tooltip', 'Diamond: '+ parseFloat(craft["diamond"]).toFixed(2)+" / "+parseFloat(diamondcost).toFixed(2))
$(".rush7").attr('tooltip3', 'Doubles your production for 1 week')

$(".currentrush").html("Remaining boost "+totimehour(bonus["rush"]))
//Others

if(prestige["number"]>0){
	tooltipsprestige("motivation");
	tooltipsprestige("depot");
	tooltipsprestige("vengeance");
	tooltipsprestige("aegis");
	tooltipsprestige("bargain");
	tooltipsprestige("mastery");
	tooltipsprestige("learning");
	tooltipsprestige("memory");
  
  legacyadd = getlegacyadd();
  legacyaddstr = legacyadd > 0 ? " (" + legacyadd + ")" : "";
	$(".legacynum").html("Legacy: "+prestige["legacy"]+legacyaddstr)
	$(".treasurenum").html("Treasures: "+prestige["treasure"])
}


power=0;
power+=people["pikeman"]*5
power+=people["swordman"]*10
power+=people["knight"]*25
power+=people["medic"]*1
power+=people["bersek"]*80
power+=people["warelephant"]*100
power+=people["musketeer"]*75

hp=0;
hp+=people["pikeman"]*30
hp+=people["swordman"]*50
hp+=people["knight"]*200
hp+=people["medic"]*50
hp+=people["bersek"]*100
hp+=people["warelephant"]*1200
hp+=people["musketeer"]*400

healing=0
healing+=people["medic"]*10

foodcost=power*2
watercost=power
moralecost=power/5

coalcost=0;
coalcost+=people["lighttank"]*50;


power+=people["musketeer"]*125

power+=people["lighttank"]*500
hp+=people["lighttank"]*5000

power=power*(bonus["power"]+1)
hp=hp*(bonus["hp"]+1)
healing=healing*(bonus["healing"]+1)
if(power == 0 || items["food"]<foodcost || items["water"]<watercost || items["morale"]<moralecost || items["coal"]<coalcost){
	$(".expedition").addClass("unavailable")
}
else
{
	$(".expedition").removeClass("unavailable")
}
unattainable=maximums["food"]*(bonus["storage"]+1)<foodcost || maximums["water"]*(bonus["storage"]+1)<watercost|| maximums["morale"]*(bonus["storage"]+1)<moralecost || maximums["coal"]*(bonus["storage"]+1)<coalcost
if(unattainable){
  $(".expedition").addClass("unattainable"); 
} else {
  $(".expedition").removeClass("unattainable"); 
}
$(".expedition").html("Expedition");
$(".expedition").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".expedition").attr('tooltip2', 'Water: '+ parseFloat(items["water"]).toFixed(2)+" / "+parseFloat(watercost).toFixed(2))
$(".expedition").attr('tooltip3', 'Morale: '+ parseFloat(items["morale"]).toFixed(2)+" / "+parseFloat(moralecost).toFixed(2))
if(coalcost>0){
$(".expedition").attr('tooltip4', 'Coal: '+ parseFloat(items["coal"]).toFixed(2)+" / "+parseFloat(coalcost).toFixed(2))
}
$(".expedition").attr('tooltip5', "Send your soldiers in a expedition");
$(".expedition").attr('tooltip6', "Total Attack: "+Math.round(power)+" Total Hp: "+Math.round(hp));
if(healing>0){
$(".expedition").attr('tooltip7', "Total Healing: "+Math.round(healing));

}
tradewood=600*(bonus["trade"]+1)
trademineral=500*(bonus["trade"]+1)
tradefood=400*(bonus["trade"]+1)
tradesand=20*(bonus["trade"]+1)
if(craft["coin"]<1){
	$(".trade_wood").addClass("unavailable")
	$(".trade_mineral").addClass("unavailable")
	$(".trade_food").addClass("unavailable")
	$(".trade_sand").addClass("unavailable")
}
else
{

	$(".trade_wood").removeClass("unavailable")
	$(".trade_mineral").removeClass("unavailable")
	$(".trade_food").removeClass("unavailable")
	$(".trade_sand").removeClass("unavailable")
}
$(".trade_wood").html("Wood: " + Math.round(tradewood));
$(".trade_mineral").html("Mineral: " + Math.round(trademineral));
$(".trade_food").html("Food: " + Math.round(tradefood));
$(".trade_sand").html("Sand: " + Math.round(tradesand));
}



function refresh(){

	var energypro=0;
	var energycon=0;

	var production =new Array()
	for(key in items){
		production[key]=0;
	}
	var consumption =new Array()
	for(key in items){
		consumption[key]=0;
	}
//buildings
if(items["coal"]>=people["cargotrain"]*0.005){
	consumption["coal"]+=people["cargotrain"]*0.005
	if(trademission["trainbuy"]!="nothing" && craft["coin"]>=people["cargotrain"]*0.0125){
		craft["coin"]-=people["cargotrain"]*0.0125
		production[trademission["trainbuy"]]+=people["cargotrain"]*tradetrain[trademission["trainbuy"]]*0.0125
	}
}

if(buildstatus["workshop"]==1 && items["coal"]>=buildings["workshop"]*0.0075 && items["chemicals"]>=buildings["workshop"]*0.0025)
{
	consumption["coal"]+=buildings["workshop"]*0.0075
	consumption["chemicals"]+=buildings["workshop"]*0.0025
	bonus["auto"]=buildings["workshop"]*0.10
}
else
{
bonus["auto"]=0
}

if (items["coal"]>=buildings["powerplant"]*0.0125 &&  items["water"]>=buildings["powerplant"]*0.5 && buildstatus["powerplant"]==1)
{
	consumption["water"]+=buildings["powerplant"]*0.5
	consumption["coal"]+=buildings["powerplant"]*0.0125
	energypro+=(0.25/3.6)*buildings["powerplant"];
	bonus["energy"]+=(0.25/3.6)*buildings["powerplant"];
}
else if(buildings["powerplant"]>0)
{
		buildstatus["powerplant"]=0;
		$(".build_powerplant").addClass("off")
}

if (items["mineral"]>=buildings["cementkiln"]*25  &&  items["clay"]>=buildings["cementkiln"]*0.5 &&  bonus["energy"]>=(0.075/3.6)*buildings["cementkiln"] && buildstatus["cementkiln"]==1)
{
	consumption["mineral"]+=buildings["cementkiln"]*25
	consumption["clay"]+=buildings["cementkiln"]*0.5
	production["cement"]+=buildings["cementkiln"]*0.025
	energycon+=(0.075/3.6)*buildings["cementkiln"];
	bonus["energy"]-=(0.075/3.6)*buildings["cementkiln"];
}
else if(buildings["cementkiln"]>0)
{
		buildstatus["cementkiln"]=0;
		$(".build_cementkiln").addClass("off")
}

if (bonus["energy"]>=(0.125/3.6)*buildings["university"] && buildstatus["university"]==1)
{
	craft["book"]+=buildings["university"]*0.000025*(bonus["auto"]+1);
	production["knowledge"]+=buildings["university"]*0.0125
	energycon+=(0.125/3.6)*buildings["university"];
	bonus["energy"]-=(0.125/3.6)*buildings["university"];
}
else if(buildings["university"]>0)
{
		buildstatus["university"]=0;
		$(".build_university").addClass("off")
}
if (items["mineral"]>=buildings["concretemixer"]*12.5  &&  items["water"]>=buildings["concretemixer"]*0.5 && items["cement"]>=buildings["concretemixer"]*0.5 &&  bonus["energy"]>=(0.125/3.6)*buildings["concretemixer"] && buildstatus["concretemixer"]==1)
{
	consumption["mineral"]+=buildings["concretemixer"]*12.5
	consumption["water"]+=buildings["concretemixer"]*2.5
	consumption["cement"]+=buildings["concretemixer"]*0.5
	production["concrete"]+=buildings["concretemixer"]*0.0125
	energycon+=(0.125/3.6)*buildings["concretemixer"];
	bonus["energy"]-=(0.125/3.6)*buildings["concretemixer"];
}
else if(buildings["concretemixer"]>0)
{
		buildstatus["concretemixer"]=0;
		$(".build_concretemixer").addClass("off")
}
if (items["steel"]>=buildings["toolfactory"]*0.5 && items["copper"]>=buildings["toolfactory"]*1.25 &&  bonus["energy"]>=(0.25/3.6)*buildings["toolfactory"] && buildstatus["toolfactory"]==1)
{
	consumption["steel"]+=buildings["toolfactory"]*0.5
	consumption["copper"]+=buildings["toolfactory"]*1.25
	craft["pickaxe"]+=buildings["toolfactory"]*0.125*(bonus["auto"]+1);
	craft["toolbox"]+=buildings["toolfactory"]*0.00025*(bonus["auto"]+1);
	energycon+=(0.25/3.6)*buildings["toolfactory"];
	bonus["energy"]-=(0.25/3.6)*buildings["toolfactory"];
}

if (items["morale"]>=buildings["barracks"]*0.75 && bonus["energy"]>=(0.20/3.6)*buildings["barracks"] && buildstatus["barracks"]==1)
{
	consumption["morale"]+=buildings["barracks"]*0.75

	craft["plans"]+=buildings["barracks"]*0.025*(bonus["auto"]+1);
	energycon+=(0.20/3.6)*buildings["barracks"];
	bonus["energy"]-=(0.20/3.6)*buildings["barracks"];
}
else if(buildings["barracks"]>0)
{
		buildstatus["barracks"]=0;
		$(".build_barracks").addClass("off")
}
production["wood"]+=buildings["lumbermill"]/20;
production["mineral"]+=buildings["mine"]/20;
production["water"]+=buildings["fountain"]/10;
production["gold"]+=buildings["casino"]/1000;
production["knowledge"]+=buildings["scienceoutpost"]/200;
production["gold"]+=buildings["tradeoutpost"]/400;
production["clay"]+=buildings["quarry"]*0.05;
if(technologies["safestorage"]==1){
production["nickel"]+=buildings["quarry"]/4000;
}
if(technologies["mineralcoal"]==1){
production["coal"]+=buildings["quarry"]*0.005;
}
craft["token"]+=(buildings["share"]/40)*(bonus["auto"]+1);

if (items["water"]>=buildings["pasture"]/20 && buildstatus["pasture"]==1)
{
	consumption["water"]+=buildings["pasture"]/20
	production["food"]+=buildings["pasture"]/20;
}
if (items["mineral"]>=buildings["foundry"]/8 && buildstatus["foundry"]==1)
{
	consumption["mineral"]+=buildings["foundry"]/8
	production["iron"]+=buildings["foundry"]/200;
	if(technologies["bronze"]>0){
		production["tin"]+=buildings["foundry"]/800;
	}
}

if (items["wood"]>=buildings["kiln"]/2 && buildstatus["kiln"]==1)
{
	consumption["wood"]+=buildings["kiln"]/2
	production["coal"]+=buildings["kiln"]/400;

}
if (items["wood"]>=buildings["shipyard"]*10 && buildstatus["shipyard"]==1)
{
	consumption["wood"]+=buildings["shipyard"]*10
	craft["plank"]+=(buildings["shipyard"]/80)*(bonus["auto"]+1);
}
if (items["gold"]>=buildings["bank"]/40 && buildstatus["bank"]==1)
{
	consumption["gold"]+=buildings["bank"]/40
	craft["coin"]+=(buildings["bank"]/200)*(bonus["auto"]+1);
}
if(buildings["library"]>=8){
	production["knowledge"]+=buildings["library"]/400;
}
if (items["mineral"]>=buildings["crusher"]*2.5 && buildstatus["crusher"]==1)
{
	consumption["mineral"]+=buildings["crusher"]*2.5;
	production["sand"]+=buildings["crusher"]/8;

}
if (items["wood"]>=buildings["blockyard"] && items["mineral"]>=buildings["blockyard"]*2 && buildstatus["blockyard"]==1)
{
	consumption["wood"]+=buildings["blockyard"]
	consumption["mineral"]+=buildings["blockyard"]*2
	craft["block"]+=(buildings["blockyard"]/100)*(bonus["auto"]+1);
}

if (items["wood"]>=buildings["carpentry"]*1.25 && items["iron"]>=buildings["carpentry"]*0.025 && buildstatus["carpentry"]==1)
{
	consumption["wood"]+=buildings["carpentry"]*1.25
	consumption["iron"]+=buildings["carpentry"]*0.025 
	craft["structure"]+=(buildings["carpentry"]/800)*(bonus["auto"]+1);
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
if (craft["coin"]>=people["marketer"]*0.0125 && items["food"]>=people["marketer"]/20)
{
	craft["coin"]-=people["marketer"]*0.0125
	consumption["food"]+=people["marketer"]/20
	craft["bronze"]+=0.00025*people["marketer"]*(bonus["auto"]+1)
	craft["brick"]+=0.000125*people["marketer"]*(bonus["auto"]+1)
	craft["glass"]+=0.000125*people["marketer"]*(bonus["auto"]+1)
}





if (items["iron"]>=people["foundryman"]/100 && items["food"]>=people["foundryman"]/40 && items["coal"]>=people["foundryman"]/200)
{
	consumption["iron"]+=people["foundryman"]/100
	consumption["coal"]+=people["foundryman"]/200
	consumption["food"]+=people["foundryman"]/40
	production["steel"]+=people["foundryman"]/400
	if(buildings["blastfurnace"]>=1 && buildstatus["blastfurnace"]==1){

		if(items["mineral"]>=(buildings["blastfurnace"]*people["foundryman"]*0.0625)){
			consumption["mineral"]+=(buildings["blastfurnace"]*people["foundryman"]*0.0625)
			production["iron"]+=(buildings["blastfurnace"]*people["foundryman"]*0.0025)
		}

	}
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
	production["morale"]+=people["bersek"]/20
}

if (items["food"]>=people["warelephant"]*2.5 && items["water"]>=people["warelephant"]/2)
{
	consumption["food"]+=people["warelephant"]*2.5;
	consumption["water"]+=people["warelephant"]/2;
	production["morale"]+=people["warelephant"]/200;
}
if (items["food"]>=people["musketeer"]/10)
{
	consumption["food"]+=people["musketeer"]/10;
	production["morale"]+=people["musketeer"]*0.0125;
}

if (bonus["invest"]>=0.025)
{
	bonus["invest"]-=0.025
	craft["coin"]+=0.025
}
var rushbonus=1
if(bonus["rush"]>=1){
	bonus["rush"]--
	rushbonus=2
}
var inv_text="<table>"
for(key in items){
	if(items[key]!=0){
		inv_text+="<tr><td class='resource'>"+key+": </td><td class='amount' align='center'>"+intToString(items[key])+" / "+ intToStringRound(maximums[key]*(bonus["storage"]+1))+"</td><td class='production' align='right'> ("+parseFloat(4*((production[key]*(bonus[key]+bonus["global"]+1)*rushbonus)-consumption[key])).toFixed(2)+")</td> ";
		if (bonus[key]>0 || bonus["global"]>0){
			inv_text+= "<td class='bonus'>+"+Math.round((bonus[key]+bonus["global"])*100)+"%"+(rushbonus >1 ? " x2" : "")+"</td>";
		}

		inv_text+="<tr>"
	}
}

inv_text+="</table>"
$(".inventory").html(inv_text);
$(".population").html("Population: "+population+" / "+ +maximums["population"]);
$(".ships").html("Ships: "+ships+" / "+ +maximums["ships"]);
$(".trains").html("Trains: "+trains+" / "+ +maximums["trains"]);
$(".titles").html("Titles: "+bonus["title"]);
$(".territory").html("Territory: "+intToString(bonus["territory"]));
var inv_text="<table>"
for(key in craft){
	if(craft[key]!=0){
		if(technologies["logistics"]==1)
		{
			inv_text+="<tr><td class='craftclick' onclick='crafting(\""+key+"\")'>"+key+":</td><td align='right'> "+parseFloat(craft[key]).toFixed(2);
		}
		else
		{
			inv_text+="<tr><td>"+key+":</td><td align='right'> "+parseFloat(craft[key]).toFixed(2);
		}
		inv_text+="</td></tr>"
	}
}
inv_text+="</table>"
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
$(".craftamount").html("Items crafted: "+intToString((1+bonus["craft"]))+"<br>")

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

if(maximums["energy"]>0){



var energynet=energypro-energycon

if(bonus["energy"]<0){
	bonus["energy"]=0;
}
if(bonus["energy"]>maximums["energy"]){
	bonus["energy"]=maximums["energy"];
}

var energyrel=Math.round((bonus["energy"]/maximums["energy"])*100)

$(".progress-bar").prop("aria-valuenow",energyrel)
$(".progress-bar").css("width",energyrel+"%")
$(".progress-bar").text(intToString(bonus["energy"])+"KWh")
var energytext=""
energytext+="Energy production: <span style='color:green'>+" +intToString(energypro*3.6*4)+" MWh</span><br>"
energytext+="Energy consumption:<span style='color:red'>-" +intToString(energycon*3.6*4)+" MWh</span><br>"
energytext+="Energy capacity:" +intToString(maximums["energy"])+" KWh<br>"
$(".energylog").html(energytext)
}

calculatecost();
autorefresh();

}
function trade(b){


	if (craft["coin"]>=1){
		tradewood=600*(bonus["trade"]+1)
		trademineral=500*(bonus["trade"]+1)
		tradefood=400*(bonus["trade"]+1)
		tradesand=20*(bonus["trade"]+1)
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
		else if(b=="sand"){
			items["sand"]+=Math.round(tradesand)
			craft["coin"]-=1
		}

	}






}


function toggletech(){
	if(techvisible==1){
		$(".researched").hide()
		$(".researched + br").hide()
		$(".toggletech").html("Show researched technologies")
		techvisible=0;
	}
	else
	{
		$(".researched").show()
		$(".researched + br").show()
		$(".toggletech").html("Hide researched technologies")
		techvisible=1;
	}
}
function save(){
	
	clearListCookies()
	bonus["savetime"]=parseInt(serverTime())

	Cookies.set( 'items', JSON.stringify(items) ,{ expires: 9999 });
	Cookies.set( 'bonus', JSON.stringify(bonus) ,{ expires: 9999 });
	Cookies.set( 'buildings', JSON.stringify(buildings) ,{ expires: 9999 });
	Cookies.set( 'maximums',JSON.stringify( maximums) ,{ expires: 9999 });
	Cookies.set( 'technologies', JSON.stringify(technologies) ,{ expires: 9999 });
	Cookies.set( 'people', JSON.stringify(people) ,{ expires: 9999 });
	Cookies.set( 'craft', JSON.stringify(craft) ,{ expires: 9999 });
	Cookies.set('population', population,{ expires: 9999 });
	Cookies.set('trademission', trademission,{ expires: 9999 });
	Cookies.set('prestige', prestige,{ expires: 9999 });
	Cookies.set('buildstatus', buildstatus,{ expires: 9999 });
	Cookies.set('autotechnologies', autotechnologies,{ expires: 9999 });

	var unlock1=new Array()
	var unlock2=new Array()
	var unlock3=new Array()
	var i=0;
	for(key in unlocked)
	{
		i++
		if(i<100){
			unlock1[key]=unlocked[key]
		}
		else if(i<200)
		{
			unlock2[key]=unlocked[key]
		}
		else
		{
			unlock3[key]=unlocked[key]
		}
	}

	Cookies.set( 'unlock1', btoa(JSON.stringify(unlock1)) ,{ expires: 9999 });
	Cookies.set( 'unlock2', btoa(JSON.stringify(unlock2)) ,{ expires: 9999 });
	Cookies.set( 'unlock3', btoa(JSON.stringify(unlock3)) ,{ expires: 9999 });
}
function encode(){
bonus["savetime"]=parseInt(serverTime())
encodestring=JSON.stringify(items)+"--"+JSON.stringify(bonus)+"--"
encodestring+=JSON.stringify(buildings)+"--"+JSON.stringify( maximums)+"--"+JSON.stringify(technologies)+"--"
encodestring+=JSON.stringify(people)+"--"+JSON.stringify(craft)+"--"+JSON.stringify(unlocked)+"--"
encodestring+=JSON.stringify(population)+"--"+JSON.stringify(trademission)+"--"
encodestring+=JSON.stringify(prestige)+"--"+JSON.stringify(buildstatus)+"--"+JSON.stringify(autotechnologies)
b64string=btoa(encodestring);
$('.inputtxt').val(b64string)
}

function decode(){
for(var key in unlocked){
	unlocked[key]=0;
}

	unlocked[".legacy_motivation"]=1;
	unlocked[".legacy_depot"]=1;
	unlocked[".legacy_vengeance"]=1;
	unlocked[".legacy_aegis"]=1;
	unlocked[".legacy_bargain"]=1;
	unlocked[".legacy_mastery"]=1;
	unlocked[".legacy_learning"]=1;
	unlocked[".legacy_memory"]=1;
	unlocked[".legacy_warp"]=1;

$("#militarypane, #jobspane, #craftingpane, #technologiespane, #casinopane, #dockpane, #marketpane, #leaderpane, #legacypane, #facilitiespane").addClass("invisible");
$(".block, .fire, .population,.toggle ,.titles,.craftamount,.encounter,.casinogame2,.ships,.tradesea,.expansionsea,.territory,.deals").hide()
$(".playx10,.playx100").hide()

$(".block").removeClass("researched");

var result=atob($('.inputtxt').val())
result= result.split("--")
console.log(result)
items = update(items,JSON.parse(result[0]));
bonus = update(bonus,JSON.parse(result[1]));
buildings = update(buildings,JSON.parse(result[2]));
maximums = update(maximums,JSON.parse(result[3]));
technologies = update(technologies,JSON.parse(result[4]));
people = update(people,JSON.parse(result[5]));
craft = update(craft,JSON.parse(result[6]));
unlocked = update(unlocked,JSON.parse(result[7]));
population = update(population,JSON.parse(result[8]));
trademission = update(trademission,JSON.parse(result[9]));
prestige = update(prestige,JSON.parse(result[10]));
buildstatus = update(buildstatus,JSON.parse(result[11]));

if(result[12]!=null){
autotechnologies = update(autotechnologies,JSON.parse(result[12]));

}
		population = Cookies.get('population');
		population=people["woodcutter"]+people["smelter"]+people["farmer"]+people["miner"]+people["foundryman"]+people["sailor"]+people["scientist"]+people["marketer"]+people["pikeman"]+people["swordman"]+people["knight"]+people["medic"]+people["bersek"]+people["warelephant"]+people["musketeer"]+(people["lighttank"]*3)+(people["cargotrain"]*3)

		trains=people["cargotrain"]


		ships=people["galley"]+people["galleon"]+people["fireship"]+people["caravel"]
		for(key in unlocked){
			if (unlocked[key]==1)
			{
				$(key).show().removeClass("invisible")
			}
		}

		if(buildings["library"]>=7){
		$(".tech_wrapping").show()
		unlocked[".tech_wrapping"]=1;
		}

		if(bonus["savetime"]!=0){
			warp()
		}
		if(craft["diamond"]>=1){
			diamonize()
		}
		if(technologies["safestorage"]==1){

		traderatio["wood"]["nickel"]=0.00015;
		traderatio["mineral"]["nickel"]=0.00018;

		}

maximums["cement"]=buildings["bunker"]*500
maximums["trains"]=buildings["trainstation"]*2
	researchunlock()
	if(prestige["number"]>0){
		$(".reespec").show()
		unlocked[".reespec"]=1;
	}
	$('.tradetrainselect').val(trademission["trainbuy"]);
	refreshselect()
	filllog();

if(technologies["deals"]==1){
	setInterval(function(){ tickdeal()}, 1000);
fillDeal();
}

}
function load(){

	if (typeof Cookies.get( 'items') != 'undefined'){
		items = update(items,JSON.parse(Cookies.get( 'items')));
		bonus = update(bonus,JSON.parse(Cookies.get( 'bonus')));
		buildings = update(buildings,JSON.parse(Cookies.get( 'buildings')));
		maximums = update(maximums,JSON.parse(Cookies.get( 'maximums')));
		technologies = update(technologies,JSON.parse(Cookies.get( 'technologies')));
		people = update(people,JSON.parse(Cookies.get( 'people')));
		craft = update(craft,JSON.parse(Cookies.get( 'craft')));

		if(typeof Cookies.get( 'unlock1') != 'undefined'){
		update(unlocked,JSON.parse(atob(Cookies.get( 'unlock1'))));
		update(unlocked,JSON.parse(atob(Cookies.get( 'unlock2'))));
		update(unlocked,JSON.parse(atob(Cookies.get( 'unlock3'))));
		console.log('new');
		}
		else{
		unlocked = update(unlocked,JSON.parse(Cookies.get( 'unlocked')));
		console.log('old');
		}

		population = Cookies.get('population');
		population=people["woodcutter"]+people["smelter"]+people["farmer"]+people["miner"]+people["foundryman"]+people["sailor"]+people["scientist"]+people["marketer"]+people["pikeman"]+people["swordman"]+people["knight"]+people["medic"]+people["bersek"]+people["warelephant"]+people["musketeer"]+(people["lighttank"]*3)+(people["cargotrain"]*3)

		trains=people["cargotrain"]
		

		ships=people["galley"]+people["galleon"]+people["fireship"]+people["caravel"]
		for(key in unlocked){
			if (unlocked[key]==1)
			{
				$(key).show().removeClass("invisible")
			}
		}

		if(buildings["library"]>=7){
		$(".tech_wrapping").show()
		unlocked[".tech_wrapping"]=1;
		}
		
		if(craft["diamond"]>=1){
			diamonize()
		}
		if(typeof Cookies.get( 'autotechnologies') != 'undefined'){
		autotechnologies = update(autotechnologies,JSON.parse(Cookies.get( 'autotechnologies')));
		}


maximums["cement"]=buildings["bunker"]*500
maximums["trains"]=buildings["trainstation"]*2
	//END RETROCOMPATIBILITY

if(technologies["safestorage"]==1){

traderatio["wood"]["nickel"]=0.00015;
traderatio["mineral"]["nickel"]=0.00018;

}





	if (typeof Cookies.get( 'trademission') != 'undefined'){
		trademission = update(trademission,JSON.parse(Cookies.get('trademission')));
		if(trademission["time"]>0){
			tickinterval = setInterval(function(){ ticktrade()}, 1000);
			$(".docklog").html("Trade Mission<br>Time remaining: "+totime(trademission["time"]));
			$(".tradego").hide()
		}

	}

	if (typeof Cookies.get( 'prestige') != 'undefined'){
		prestige = update(prestige,JSON.parse(Cookies.get('prestige')));
	}

	if (typeof Cookies.get( 'buildstatus') != 'undefined'){
		buildstatus = update(buildstatus,JSON.parse(Cookies.get('buildstatus')));
		for (key in buildstatus){
			if(buildstatus[key]==0){
				buildstatus[key]==0
				$(".build_"+key).addClass("off")
			}
		}

	}

	if(bonus["savetime"]!=0){
			warp()
	}


	researchunlock()
	$('.tradetrainselect').val(trademission["trainbuy"]);
	save()

	} 
} 






function update(array1, array2){

	for (key in array2){
		if( key!='u' && key!='undefined' && key!= undefined && array2[key]!='u' && array2[key]!='undefined' && array2[key]!= undefined ){
		array1[key]=array2[key]
		}
		else
		{
		console.log("error")
		}
	}

	return array1
}


function diamonize(){

unlocked[".rush1"]=1
unlocked[".rush24"]=1
unlocked[".rush7"]=1
unlocked[".currentrush"]=1
$(".rush1").show()
$(".rush24").show()
$(".rush7").show()
$(".currentrush").show()
}

function rush(a,b){

if(craft["diamond"]>=b){

craft["diamond"]-=b
bonus["rush"]+=a*14400



}
}
