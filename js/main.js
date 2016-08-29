
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
bonus["armor"]=0;
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
buildings["factory"]=0;

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
technologies["luck"]=0
technologies["militarization"]=0
technologies["wargames"]=0
technologies["industrialrevolution"]=0

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
people["berserk"]=0
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

tooltipcurrent=10;
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
	power+=people["berserk"]*80
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
			if(Math.random()>0.999){
				reward+="<div style='display:inline;color:orange'>You found an heirloom!</div><br>";
				createheirloom();
				$("#heirlooms").show()
				unlocked["#heirlooms"]=1;
				$("#heirloomspane").removeClass("invisible");
				unlocked["#heirloomspane"]=1;
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
			hp+=people["berserk"]*100
			hp+=people["warelephant"]*1200
			hp+=people["musketeer"]*400
			hp+=people["lighttank"]*5000

			hp=hp*(bonus["hp"]+1)

			healing=0
			healing+=people["medic"]*10
			healing=healing*(bonus["healing"]+1)

			burst=0;
			burst+=people["berserk"]*80
			burst=burst*(bonus["power"]+1)

			power=power/(bonus["exprew"]+1)

			power-=people["warelephant"]*25*(bonus["power"]+1)
			power-=people["lighttank"]*250*(bonus["power"]+1)
			power+=people["musketeer"]*25*(bonus["power"]+1)

			armor=0;
			armor+=people["swordman"]*3
			armor+=people["knight"]*10
			armor+=people["lighttank"]*50
			armor=armor*(bonus["armor"]+1)

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
	power+=people["berserk"]*80

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
	hp+=people["berserk"]*100
	hp+=people["warelephant"]*1200
	hp+=people["musketeer"]*400
	hp+=people["lighttank"]*5000

	hp=hp*(bonus["hp"]+1)

	armor=0
	armor+=people["swordman"]*3
	armor+=people["knight"]*10
	armor+=people["lighttank"]*50
	armor=armor*(bonus["armor"]+1)
	
	armor2=0
	armor2+=enemy["mercenary"]*5
	armor2+=enemy["soldier"]*10

	burst=0;
	burst+=people["berserk"]*80

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
				combatlog+="Your troop's armor blocks "+intToString(armor)+" damage.<br>"
			}
		}
		if(armor2>0){

			dmg1-=armor2;
			
			if(dmg1<0){
				dmg1=0;
				combatlog+="The enemy's armor blocks all damage!<br>"
			} else {
				combatlog+="The enemy's armor blocks "+intToString(armor2)+" damage.<br>"
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
			if(people["berserk"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["berserk"]-1))+1
				people["berserk"]-=losses;
				population-=losses;
				combatlog+="You lost "+losses+" berserks.<br>"
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
			if(Math.random()>0.99){
				combatlog+="<div style='display:inline;color:orange'>You found a heirloom!</div><br>";
				createheirloom();
				unlocked["#heirlooms"]=1;
				$("#heirloomspane").removeClass("invisible");
				unlocked["#heirloomspane"]=1;
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
	if(buildstatus["factory"]==1 && b!="book" && b!="patent"){
		tocraft+=buildings["factory"]*100;
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

var techdata = {
  /* Template
  variablename: {
    name (String) -- specify display name, if different from Variablename
    *cost (Dictionary) -- research costs, from item or craft arrays. auto appears in tooltip
    bonus (Dictionary) -- production bonuses, if any. auto appears in tooltip
    unlock (String[]) -- HTML elements to unlock. # elements call remove("invisible"); . elements call show(); both set unlocked[_]=1
    desc (String[]) -- addition tooltips to display, if necessary
  }*/
  coppertools: {
    name: "Copper tools",
    cost: {copper: 1},
    bonus: {wood: 0.20, mineral: 0.20}
  },
  pickaxe: {
    cost: {wood: 100, copper: 3},
    unlock: ["#craftingpane", ".craft_pickaxe", ".hire_miner"],
    desc: ["Allows the crafting of pickaxes and hiring of miners"]
  },
  spear: {
    name: "Basic weapons",
    cost: {wood: 200, copper: 5},
    unlock: ["#craftingpane", "#militarypane", ".craft_spear", ".hire_pikeman"],
    desc: ["Allows the crafting of spears and hiring of pikeman"]
  },
  exploration: {
    cost: {food: 100},
    unlock: [".expedition"],
    desc: ["Allows exploration expeditions"]
  },
  ironfoundry: {
    name: "Iron Foundry",
    cost: {wood: 1000, mineral: 500, food: 200},
    unlock: [".build_foundry"],
    desc: ["Allows the construction of foundrys"]
  },
  metallurgy: {
    cost: {food: 200, copper: 10, iron: 5},
    bonus: {iron: 0.10, copper: 0.10},
    desc: ["Allows smelters to smelt a bit of gold"]
  },
  sword: {
    cost: {food: 500, iron: 10},
    unlock: ["#craftingpane", "#militarypane", ".craft_sword", ".hire_swordman"],
    desc: ["Allows the crafting of Iron Swords and the hiring of swordman"]
  },
  storage: {
    name: "Storage management",
    cost: {wood: 500, mineral: 500, iron: 15},
    unlock: ["#craftingpane", ".craft_block", ".build_barn"],
    desc: ["Unlocks better storage methods"]
  },
  currency: {
    cost: {gold: 2},
    unlock: [".build_casino"],
    desc: ["Unlocks casinos"]
  },
  coin: {
    name: "Coin forging",
    cost: {iron: 20, gold: 5},
    unlock: [".craft_coin"],
    desc: ["Allows forging gold coins"]
  },
  exchange: {
    cost: {food: 800, coin: 3},
    unlock: [".build_market"],
    desc: ["Allow the construction of markets"]
  },
  bronze: {
    cost: {iron: 40, copper: 40},
    unlock: [".craft_bronze", ".build_statue"],
    desc: ["Allows foundrys to smelt a bit of tin",
      "Unlocks bronze crafting"]
  },
  bronzetools: {
    name: "Bronze tools",
    cost: {bronze: 2},
    bonus: {wood: 0.20, mineral: 0.20, food: 0.20, copper: 0.10, iron: 0.10, tin: 0.10}
  },
  charcoal: {
    cost: {wood: 4000, mineral: 2000},
    unlock: [".build_kiln"],
    desc: ["Unlocks kilns"]
  },
  centralisation: {
    cost: {wood: 5000, mineral: 5000, bronze: 3, gold: 10},
    unlock: [".build_towncenter", ".craft_structure"],
    desc: ["Allows the building of towncenters"]
  },
  steel: {
    cost: {iron: 50, coal: 50},
    unlock: [".hire_foundryman"],
    desc: ["Unlocks foundrymen, experts in steel"]
  },
  manufacturing: {
    cost: {steel: 5, coin: 5},
    unlock: [".build_workbench"],
    desc: ["Enhances crafting by allowing the building of workbenchs"]
  },
  steeltools: {
    name: "Steel tools",
    cost: {steel: 10},
    bonus: {wood: 0.30, mineral: 0.3, food: 0.3, copper: 0.1, iron: 0.1, tin: 0.1, steel: 0.05}
  },
  husbandry: {
    cost: {food: 2500},
    desc: ["Allow soldiers to bring back horses found on expeditions"]
  },
  cavalry: {
    cost: {gold: 25, steel: 25},
    unlock: [".craft_armor", ".hire_knight"],
    desc: ["Grants swordmen training to become armored knights"]
  },
  leadership: {
    cost: {coin: 25},
    unlock: [".build_castle"],
    desc: ["Unlocks castles, which can grant titles to powerful leaders"]
  },
  armament: {
    cost: {spear: 50, sword: 25, armor: 2},
    bonus: {power: 0.4}
  },
  gambling: {
    cost: {coin: 50},
    unlock: [".casinogame2"],
    desc: ["Unlocks a new game at the casino"]
  },
  redeem: {
    cost: {token: 50},
    unlock: [".build_relic"],
    desc: ["Allows redeeming tokens in the casino."]
  },
  wrapping: {
    cost: {wood: 20000, mineral: 10000},
    bonus: {storage: 0.1}
  },
  shipyard: {
    cost: {wood: 25000},
    unlock: [".build_shipyard"],
    desc: ["Unlocks the buildings of shipyards"]
  },
  sailing: {
    cost: {plank: 100},
    unlock: [".build_docks"],
    desc: ["Allows building docks to store ships"]
  },
  trade: {
    cost: {food: 7000, gold: 45, coin: 50},
    unlock: [".craft_supplies", ".hire_sailor", ".tradesea"],
    desc: ["Allows hiring sailors to embark on trade missions"]
  },
  cache: {
    cost: {mineral: 22500, steel: 100, plank: 500},
    unlock: [".craft_chest"],
    desc: ["Allows crafting chests to store resources"]
  },
  specialization: {
    cost: {knowledge: 500},
    unlock: [".research_economy", ".research_science", ".research_military"],
    desc: ["Allows you to choose where your research should be headed",
      "New technologies will be unlocked based on your research"]
  },
  geology: {
    cost: {mineral: 28000, knowledge: 50},
    bonus: {mineral: 0.2}
  },
  funding: {
    cost: {gold: 50, knowledge: 50},
    bonus: {gold: 0.2},
    max: {gold: 2}
  },
  tactics: {
    cost: {morale: 35, knowledge: 50},
    bonus: {power: 0.2},
    max: {morale: 2}
  },
  healing: {
    cost: {coin: 100, knowledge: 200},
    bonus: {hp: 0.05},
    unlock: [".hire_medic"],
    desc: ["Allows hiring medics to aid during combat"]
  },
  savings: {
    cost: {coin: 100, knowledge: 200},
    unlock: [".build_bank"],
    desc: ["Allows building banks to store gold and produce coins."]
  },
  studies: {
    cost: {knowledge: 400},
    unlock: [".hire_scientist"],
    desc: ["Allows hiring scientists that use funds to gain knowledge."]
  },
  organization: {
    cost: {block: 500, knowledge: 300},
    bonus: {storage: 0.2}
  },
  culturaltrade: {
    name: "Cultural Trade",
    cost: {bronze: 50, knowledge: 500},
    desc: ["Allows getting knowledge when trading with other civilizations"]
  },
  intelligence: {
    cost: {steel: 100, knowledge: 500},
    desc: ["When you win a fight, you get a chance to steal knowledge from the enemy"]
  },
  crushing: {
    cost: {pickaxe: 500, knowledge: 500},
    unlock: [".build_crusher"],
    desc: ["Allows building crushing mills to produce sand"]
  },
  floatglass: {
    name: "Float glass",
    cost: {tin: 200, sand: 600, knowledge: 500},
    unlock: [".craft_glass"],
    desc: ["A process to create sheets of glass"]
  },
  canteen: {
    cost: {knowledge: 700},
    max: {water: 20},
    desc: ["Allows to find or steal water bottles to further increase water storage"]
  },
  galleon: {
    cost: {wood: 40000, plank: 1000, knowledge: 800},
    unlock: [".hire_galleon"],
    desc: ["Galleons are mega ships that can carry loads of resources"]
  },
  contracts: {
    cost: {coin: 200, knowledge: 500},
    bonus: {wood: 0.1, mineral: 0.1, knowledge: 0.1, morale: 0.1}
  },
  glassblowing: {
    cost: {glass: 20, knowledge: 500},
    unlock: [".craft_bottle"],
    desc: ["Allows you to craft bottles to store water and other liquids."]
  },
  rampage: {
    cost: {sword: 1000, knowledge: 800},
    unlock: [".craft_greatsword", ".hire_berserk"],
    desc: ["A thousand swords were used to perfect the technique, allows crafting greatswords,",
      "and hiring berserks"]
  },
  construction: {
    cost: {block: 2000, knowledge: 800},
    unlock: [".build_blockyard"],
    desc: ["Lets you build blockyards to automate block manufacturing"]
  },
  architecture: {
    cost: {block: 1500, structure: 500, steel: 150, knowledge: 1000},
    unlock: [".craft_frame"],
    desc: ["Allows crafting frames, a complex building material."]
  },
  chemistry: {
    cost: {bottle: 50, knowledge: 1000},
    unlock: [".build_laboratory"],
    desc: ["Lets you build laboratories where scientists can work"]
  },
  elephantry: {
    cost: {supplies: 100, knowledge: 800},
    unlock: [".hire_warelephant"],
    desc: ["Allows you to ride elephants into war"]
  },
  wareconomy: {
    name: "War economy",
    cost: {gold: 60, morale: 50, knowledge: 800},
    bonus: {food: 0.1, gold: 0.1}
  },
  undergroundstorage: {
    name: "Underground storage",
    cost: {chest: 50, knowledge: 500},
    unlock: [".build_bunker"],
    desc: ["Allows building bunkers to store bulk materials"]
  },
  risk: {
    cost: {token: 200, knowledge: 800},
    unlock: [".playx10", ".playx100"],
    desc: ["Lets you play x10 and x100 in the casino"]
  },
  investment: {
    cost: {coin: 1000, knowledge: 300},
    bonus: {invest: 2000},
    desc: ["Gives back 2000 coins at a rate of 0.1/s"]
  },
  domestication: {
    cost: {food: 10000, water: 200, knowledge: 800},
    desc: ["Allows you to take back elephants from expeditions"]
  },
  expansion: {
    cost: {supplies: 200, plank: 2000},
    unlock: [".expansionsea", ".territory"],
    desc: ["Allows you to conquest new territory by fleet fights"]
  },
  investigation: {
    cost: {chemicals: 15, knowledge: 800},
    unlock: [".build_scienceoutpost"],
    desc: ["Allows you to build scientific outposts in conquered territory"]
  },
  internationalization: {
    cost: {gold: 70, bronze: 300, knowledge: 800},
    unlock: [".build_tradeoutpost"],
    desc: ["Allows you to build trade outposts in conquered territory"]
  },
  camps: {
    cost: {horse: 10, elephant: 2, knowledge: 800},
    unlock: [".build_militaryoutpost"],
    desc: ["Allows you to build military outposts in conquered territory"]
  },
  fireship: {
    cost: {wood: 80000, frame: 5, knowledge: 1000},
    unlock: [".hire_fireship"],
    desc: ["Allows you to build fire ships, an agressive military ship"]
  },
  deals: {
    cost: {gold: 100, coin: 1500, knowledge: 1200},
    unlock: [".deals"],
    desc: ["A merchant will appear in the market every 10 min with a new offer"]
  },
  careening: {
    cost: {wood: 80000, plank: 1000, knowledge: 800},
    bonus: {shipspeed: 30, shiphp: 0.2}
  },
  finding: {
    cost: {morale: 60, food: 20000, knowledge: 1200},
    desc: ["Allows you to find more complex materials in expeditions, like sand, clay or bricks"]
  },
  openmining: {
    name: "Open mining",
    cost: {mineral: 80000, pickaxe: 3000, knowledge: 1200},
    unlock: [".build_quarry"],
    desc: ["Allows you to build quarrys to extract clay from the ground"]
  },
  seacaptain: {
    name: "Sea captain",
    cost: {plank: 3000, coin: 800, knowledge: 1200},
    unlock: [".leader_foehn"],
    desc: ["Unlocks a new leader"]
  },
  wisdom: {
    cost: {knowledge: 1300},
    unlock: [".leader_alfear"],
    desc: ["Unlocks a new leader"]
  },
  masonry: {
    cost: {frame: 20, block: 3000, knowledge: 1300},
    unlock: [".craft_brick"],
    desc: ["Allows you to craft bricks used in buildings"]
  },
  woodwork: {
    cost: {wood: 90000, knowledge: 1000},
    unlock: [".build_carpentry"],
    desc: ["Allows you to build carpentries to automate structure crafting"]
  },
  multitasking: {
    cost: {pickaxe: 2000, knowledge: 1000},
    desc: ["Miners now also extract some clay"]
  },
  commodities: {
    cost: {coin: 1000, knowledge: 1000},
    unlock: [".trade_sand", ".trademax_sand"],
    desc: ["Allows you to buy sand on the market"]
  },
  quenching: {
    cost: {iron: 500, steel: 250, knowledge: 1200},
    bonus: {iron: 0.25, steel: 0.25}
  },
  castiron: {
    name: "Cast iron",
    cost: {brick: 50, knowledge: 1200},
    unlock: [".build_blastfurnace"],
    desc: ["New techniques allows you to build blast furnaces"]
  },
  insecticides: {
    cost: {chemicals: 20, knowledge: 1200},
    bonus: {food: 0.4}
  },
  explosives: {
    cost: {morale: 70, knowledge: 1300},
    unlock: [".craft_gunpowder"],
    desc: ["Allows you to craft gunpowder"]
  },
  commerce: {
    cost: {coin: 2000, knowledge: 1200},
    unlock: [".hire_marketer"],
    desc: ["Allows you to hire marketers"]
  },
  safes: {
    cost: {lock: 100, knowledge: 1200},
    max: {gold: 30}
  },
  packaging: {
    cost: {chest: 200, knowledge: 1300},
    unlock: [".build_compressor"],
    desc: ["Allows to build compressor to increase storage space of other buildings"]
  },
  ammunition: {
    cost: {gunpowder: 50, knowledge: 1200},
    unlock: [".craft_ammo"],
    desc: ["Allows you to craft ammo"]
  },
  gunnery: {
    cost: {iron: 500, ammo: 1000, knowledge: 1200},
    unlock: [".craft_musket", ".hire_musketeer"],
    desc: ["Allows you to craft musket and hire musketeers"]
  },
  windward: {
    cost: {wood: 200000, plank: 10000, knowledge: 1500},
    unlock: [".hire_caravel"],
    desc: ["Allows you to build caravels"]
  },
  mineralcoal: {
    name: "Mineral coal",
    cost: {pickaxe: 10000, coal: 500, knowledge: 1500},
    desc: ["Quarries now also produce coal"]
  },
  carrying: {
    cost: {horse: 100, morale: 120, knowledge: 1500},
    bonus: {exprew: 0.50}
  },
  shareholding: {
    cost: {token: 5000, coin: 5000, knowledge: 1500},
    unlock: [".build_share"],
    desc: ["Allows you to redeem tokens on the casino for casino shares"]
  },
  safestorage: {
    name: "Safe storage",
    cost: {frame: 100, glass: 300, knowledge: 1600},
    unlock: [".build_repository"],
    desc: ["Allows you to build repositories to store complex materials",
      "Quarries now also produce nickel",
      "You can also get nickel on expeditions or trade routes"]
  },
  metalwork: {
    cost: {iron: 750, steel: 400, knowledge: 1700},
    unlock: [".craft_plate"],
    desc: ["Allows you to craft alloy plates"]
  },
  steamengine: {
    name: "Steam engine",
    cost: {iron: 800, plate: 50, knowledge: 1800},
    unlock: [".craft_engine"],
    desc: ["Allows you to build steam powered engines"]
  },
  armoredcombat: {
    name: "Armored combat",
    cost: {morale: 130, plate: 500, knowledge: 2000},
    unlock: [".hire_lighttank"],
    desc: ["Allows you to build armored tanks to ride into battle"]
  },
  railtransport: {
    name: "Rail transport",
    cost: {coin: 10000, plate: 300, knowledge: 2000},
    unlock: [".build_trainstation"],
    desc: ["Trains are a good way to keep your economy moving"]
  },
  industrialization: {
    cost: {chemicals: 100, plate: 300, knowledge: 2000},
    unlock: [".build_workshop"],
    desc: ["Further developments has increased the efficiency of crafting"]
  },
  academicpublishing: {
    name: "Academic publishing",
    cost: {knowledge: 2500},
    unlock: [".craft_book"],
    desc: ["Allows you to store your knowledge in books of scientific papers"]
  },
  patents: {
    cost: {coin: 10000, knowledge: 2000},
    unlock: [".craft_patent"],
    desc: ["Allows you to buy patents to further advance your research"]
  },
  logistics: {
    cost: {coin: 5000, book: 10},
    desc: ["Logistics provide a shortcut to crafting",
      "Allows you to craft materials directly by clicking its name on the inventory"]
  },
  electricity: {
    cost: {book: 10, knowledge: 2800},
    unlock: [".build_powerplant", "#facilitiespane"],
    desc: ["Grants you to the knowledge of handling electricity",
      "Allows you to build powerplants"]
  },
  pyroprocessing: {
    cost: {mineral: 200000, clay: 10000, book: 5},
    unlock: [".build_cementkiln", "#facilitiespane"],
    desc: ["Allows you to build cement kilns"]
  },
  triforce: {
    cost: {knowledge: 3000},
    bonus: {knowledge: 0.3, gold: 0.3, morale: 0.3, storage: 0.3, craft: 0.3}
  },
  education: {
    cost: {book: 20, knowledge: 3000},
    unlock: [".build_university"],
    desc: ["Allows the building of universities"]
  },
  cementhydration: {
    name: "Cement Hydration",
    cost: {clay: 15000, book: 20},
    unlock: [".build_concretemixer"],
    desc: ["Allows you to build concrete mixers"]
  },
  workforce: {
    name: "Work force",
    cost: {concrete: 15000, book: 30},
    unlock: [".build_toolfactory"],
    desc: ["Allows you to build tool factories to provide industrial tools"]
  },
  luck: {
    cost: {token: 50000, book: 50},
    unlock: [".slotmachine"],
    desc: ["Allows you to play the slot machine in the casino",
      "Multiplies by 1000 the maximum bet on double or nothing"]
  },
  wargames: {
    name: "War games",
    cost: {morale: 250, book: 20},
    unlock: [".craft_strategy"],
    desc: ["Allows you to gather plans from the enemy and use them to make strategies"]
  },
  militarization: {
    cost: {spear: 300000, sword: 100000, book: 30},
    unlock: [".build_barracks"],
    desc: ["Allows you to build barracks"]
  },
  industrialrevolution: {
    name: "Industrial revolution",
    cost: {coin: 500000, toolbox: 100, book: 100},
    unlock: [".build_factory"],
    desc: ["Allows you to build mass production factories"]
  }
};

function isAffordable(cost) {
  affordable = true;
  netPopCost = 0;
  for (costname in cost) {
    if (items.hasOwnProperty(costname)) {
      affordable = affordable && items[costname] >= cost[costname];
    } else if (craft.hasOwnProperty(costname)) {
      affordable = affordable && craft[costname] >= cost[costname];
    } else if (bonus.hasOwnProperty(costname)) {
      affordable = affordable && bonus[costname] >= cost[costname];
    } else if (people.hasOwnProperty(costname)) {
      affordable = affordable && people[costname] >= cost[costname];
      netPopCost -= cost[costname]; // Offset the net population cost by transforming existing people, e.g. swordsman->knight
    } else if (costname == 'pop') {
      netPopCost += cost[costname];
    } else if (costname == 'ships') {
      affordable = affordable && (ships + cost[costname] <= maximums.ships);
    } else if (costname == 'trains') {
      affordable = affordable && (trains + cost[costname] <= maximums.trains);
    }
  }
  if (netPopCost > 0) {
    affordable = affordable && (population + netPopCost <= maximums.population);
  }
  return affordable
}

function payCost(cost) {
  for (costname in cost) {
    if (items.hasOwnProperty(costname)) {
      items[costname] -= cost[costname];
    } else if (craft.hasOwnProperty(costname)) {
      craft[costname] -= cost[costname]; 
      if (costname == 'bottle') {
        maximums.water -= cost[costname]
      } else if (costname == 'chest') {
        maximums.wood -= 50 * cost[costname]
        maximums.mineral -= 25 * cost[costname]
        maximums.food -= 10 * cost[costname]
        maximums.copper -= 0.3 * cost[costname]
        maximums.gold -= 0.05 * cost[costname]
        maximums.iron -= 0.2 * cost[costname]
        maximums.tin -= 0.15 * cost[costname]
        maximums.coal -= 0.15 * cost[costname]
        maximums.steel -= 0.10 * cost[costname]
      }
    } else if (bonus.hasOwnProperty(costname)) {
      bonus[costname] -= cost[costname];
    } else if (people.hasOwnProperty(costname)) {
      people[costname] -= cost[costname];
      population--;
      if (people[costname] == 0) {lockFireBtn(costname);} // Hide fire button if none left
    } else if (costname == 'pop') {
      population += cost[costname];
    } else if (costname == 'ships') {
      ships += cost[costname];
    }else if (costname == 'trains') {
      trains += cost[costname];
    }
  }
}

function unlockElements(unlocks) {
  if (typeof unlocks != 'undefined') {
    for (i = 0; i < unlocks.length; i++) {
      var u = unlocks[i];
      unlocked[u] = 1;
      if (u[0] == "#") {
        $(u).removeClass("invisible");
      } else if (u[0] == ".") {
        $(u).show();
        // Turn on buildings
        if (u.substr(1,5) == 'build') {
          buildstatus[u.substr(7)] = 1;
        }
      }
    }
  }
}

function incrementMaximums(maxes) {
  if (typeof maxes != 'undefined') {
    for (m in maxes) {
      if (unlocked["#dockpane"] && traderatio.hasOwnProperty(m) && maximums[m] == 0) { // Resource is new and now tradeable
        maximums[m] += maxes[m];
        items[m] += 0.0001; // Add small amount for refreshselect() logic
        refreshselect(); // Update trade dropdown with new resource
      } else {
        maximums[m] += maxes[m];
      }
    }
  }
}

function applyBonuses(bonuses) {
  if (typeof bonuses != 'unavailable') {
    for (var b in bonuses) {
      bonus[b] += bonuses[b];
    }
  }
}


function research(b) {
tooltipcurrent=10;
  if (techdata.hasOwnProperty(b)) {
    var tech = techdata[b]

    if (technologies[b] == 0 && isAffordable(techdata[b].cost)) {

      payCost(tech.cost);        
      technologies[b]++
      applyBonuses(tech.bonus);
      incrementMaximums(tech.max);
      unlockElements(tech.unlock);

      if (b == 'deals') { // Special cases
        newDeal();
        setInterval(function(){tickdeal()}, 1000);
      } else if (b == 'safestorage') {
        traderatio["wood"]["nickel"] = 0.00015;
        traderatio["mineral"]["nickel"] = 0.00018;
      }

    }

  }

  setTimeout(function() {
    if(techvisible == 0){
      techvisible = 1;
      toggletech();
    }
  }, 700);

}

var peopledata = {
  woodcutter: {
    cost: {pop: 1, food: 50}
  },
  smelter: {
    cost: {pop: 1, food: 50}
  },
  farmer: {
    cost: {pop: 1, wood: 50}
  },
  miner: {
    cost: {pop: 1, food: 50, pickaxe: 1}
  },
  foundryman: {
    cost: {pop: 1, food: 200, coin: 1}
  },
  sailor: {
    cost: {pop: 1, food: 500, coin: 5}
  },
  scientist: {
    cost: {pop: 1, knowledge: 100, coin: 10}
  },
  marketer: {
    cost: {pop: 1, coin: 500, gold: 100}
  },
  pikeman: {
    cost: {pop: 1, food: 50, spear: 1}
  },
  swordman: {
    cost: {pop: 1, food: 150, sword: 1}
  },
  medic: {
    cost: {pop: 1, food: 1000, coin: 20}
  },
  berserk: {
    cost: {pop: 1, coin: 50, greatsword: 1}
  },
  warelephant: {
    cost: {pop: 1, supplies: 100, elephant: 1}
  },
  musketeer: {
    cost: {pop: 1, coin: 100, musket: 1, armor: 1}
  },
  lighttank: {
    cost: {pop: 3, plate: 200, engine: 2}
  },
  knight: {
    cost: {pop: 1, swordman: 1, horse: 1, armor: 1}
  }
};

var shipdata = {
  galley: {
    cost: {ships: 1, wood: 20000, plank: 200, structure: 50},
    salvages: {ships: 1, wood: [1000,5000], plank: [10,10], structure: [5,5]}
  },
  galleon: {
    cost: {ships: 1, plank: 1500, structure: 300},
    salvages: {ships: 1, wood: [20000,20000], plank: [300,300], structure: [50,50]}
  },
  fireship: {
    cost: {ships: 1, plank: 1000, steel: 200, coal: 300},
    salvages: {ships: 1, wood: [5000,20000], plank: [200,300], steel: [50,50]}
  },
  caravel: {
    cost: {ships: 1, wood: 100000, iron: 500, plank: 1000},
    salvages: {ships: 1, wood: [5000,20000], iron: [100,50], plank: [200,300]}
  }
};

var traindata = {
  cargotrain: {
    cost: {trains: 1, pop: 3, steel: 500, plate: 500, engine: 8},
    salvages: {trains: 1, pop: 3, steel: [100,100], plate: [100,100], engine: [1,2]}
  }
};

function unlockFireBtn(b) {
  $(".fire_"+b).show();
  unlocked[".fire_"+b] = 1;
}

function lockFireBtn(b) {
  $(".fire_"+b).hide();
  unlocked[".fire_"+b] = 0;
}

function unlockSalvageBtn(b) {
  $(".salvage_"+b).show();
  unlocked[".salvage_"+b] = 1;
}

function lockSalvageBtn(b) {
  $(".salvage_"+b).hide();
  unlocked[".salvage_"+b] = 0;
}

function hire(b) {

tooltipcurrent=10;
  if (peopledata.hasOwnProperty(b) && isAffordable(peopledata[b].cost)) {
    people[b]++;
    unlockFireBtn(b);
    payCost(peopledata[b].cost);
  }

  if (shipdata.hasOwnProperty(b) && isAffordable(shipdata[b].cost)) {
    people[b]++;
    unlockSalvageBtn(b);
    payCost(shipdata[b].cost);
  }

  if (traindata.hasOwnProperty(b) && isAffordable(traindata[b].cost)) {
    people[b]++;
    unlockSalvageBtn(b);
    payCost(traindata[b].cost);
  }

}

function salvage(b) {
  if (people[b] > 0) {

    people[b]--;
    if (people[b] == 0) {lockSalvageBtn(b);}

    salvages = {};
    if (shipdata.hasOwnProperty(b)) {
      salvages = shipdata[b].salvages;
    } else if (traindata.hasOwnProperty(b)) {
      salvages = traindata[b].salvages;
    }

    for (k in salvages) {
      if (items.hasOwnProperty(k)) {
        items[k] += salvages[k][0] + Math.random()*salvages[k][1];
      } else if (craft.hasOwnProperty(k)) {
        craft[k] += salvages[k][0] + Math.random()*salvages[k][1];        
      } else if (k == 'pop') {
        population -= salvages[k];
      } else if (k == 'ships') {
        ships -= salvages[k];
      } else if (k == 'trains') {
        trains -= salvages[k];
      }
    }

  }
}

function fire(b){
  tooltipcurrent=10;
	if (people[b] > 0) {
		people[b]--;
		population -= peopledata[b].cost.pop;
	}
	if (people[b] == 0) {lockFireBtn(b);}
}

var buildingdata = {
  lumbermill: {
    cost: {wood: 3},
    scale: 1.1,
    unlock: [".build_mine"]
  },
  mine: {
    cost: {wood: 2, mineral: 3.5},
    scale: 1.1,
    unlock: [".build_warehouse"]
  },
  warehouse: {
    cost: {wood: 20, mineral: 10},
    scale: 1.6,
    max: {wood: 200, mineral: 200, food: 100, copper: 5, gold: 1, iron: 5, tin: 4, coal: 5, steel: 3},
    unlock: [".build_fountain", ".build_pasture"]
  },
  fountain: {
    cost: {mineral: 6},
    scale: 1.35,
    max: {water: 5}
  },
  pasture: {
    cost: {wood: 10},
    scale: 1.35,
    unlock: [".build_house", ".toggle_pasture"]
  },
  house: {
    cost: {wood: 20, mineral: 50, food: 15},
    scale: 1.8,
    max: {population: 3},
    unlock: [".build_library", ".population", ".hire_woodcutter", ".hire_smelter", ".hire_farmer", "#jobspane"]
  },
  library: {
    cost: {wood: 300, mineral: 100},
    scale: 1.9,
    max: {knowledge: 100},
    tieredUnlock: {
      1: [".tech_coppertools", ".tech_pickaxe", "#technologiespane"],
      2: [".build_banner", ".tech_spear", ".tech_exploration"],
      3: [".tech_ironfoundry", ".tech_metallurgy", ".tech_sword", ".tech_storage"],
      4: [".tech_currency", ".tech_exchange", ".tech_coin"],
      5: [".tech_bronze", ".tech_bronzetools", ".tech_charcoal", ".tech_centralisation"],
      6: [".tech_steel", ".tech_manufacturing", ".tech_steeltools", ".tech_husbandry", ".tech_cavalry"],
      7: [".tech_leadership", ".tech_armament", ".tech_gambling", ".tech_redeem", ".tech_wrapping"],
      8: [".tech_shipyard", ".tech_sailing", ".tech_trade", ".tech_cache", ".tech_specialization"]
    }
  },
  banner: {
    cost: {wood: 100, copper: 1},
    scale: 1.7,
    max: {morale: 1}
  },
  foundry: {
    cost: {mineral: 500, copper: 5},
    scale: 1.3,
    unlock: [".toggle_foundry"]
  },
  barn: {
    cost: {block: 5},
    scale: 1.4,
    max: {wood: 500, mineral: 500}
  },
  casino: {
    cost: {block: 3, gold: 1},
    scale: 1.6,
    max: {gold: 1, bet: 0.5},
    unlock: ["#casinopane"]
  },
  market: {
    cost: {wood: 500, coin: 1},
    scale: 1.6,
    bonus: {trade: 0.05},
    unlock: ["#marketpane"]
  },
  kiln: {
    cost: {block: 15, mineral: 2000},
    scale: 1.5,
    unlock: [".toggle_kiln"]
  },
  statue: {
    cost: {bronze: 1},
    scale: 1.5,
    max: {morale: 2},
    bonus: {morale: 0.05}
  },
  towncenter: {
    cost: {block: 20, structure: 5, coin: 3},
    scale: 1.25,
    max: {wood: 1500, mineral: 1000, food: 500, copper: 10, gold: 2, iron: 10, tin: 10, coal: 5, steel: 5, population: 5}
  },
  workbench: {
    cost: {steel: 2},
    scale: 1.4,
    bonus: {craft: 0.08},
    unlock: [".toggle_workbench", ".craftamount"]
  },
  castle: {
    cost: {block: 50, gold: 5},
    scale: 1.6,
    bonus: {title: 1},
    unlock: [".leader_sucellus", ".leader_eredal", ".leader_khrysos", ".leader_elisia",
      ".leader_xochiquetzal", ".leader_warmuk", ".titles", "#leaderpane"]
  },
  relic: {
    cost: {token: 20},
    scale: 1.2,
    bonus: {global: 0.01}
  },
  shipyard: {
    cost: {wood: 20000, structure: 50},
    scale: 1.4,
    unlock: [".toggle_shipyard"]
  },
  docks: {
    cost: {iron: 100, plank: 50},
    scale: 1.3,
    max: {ships: 1},
    unlock: ["#dockpane", ".hire_galley", ".ships"]
  },
  bank: {
    cost: {block: 200, steel: 100, coin: 100},
    scale: 1.4,
    max: {gold: 2},
    unlock: [".toggle_bank"]
  },
  crusher: {
    cost: {copper: 150, iron: 100, steel: 50},
    scale: 1.2,
    max: {sand: 200},
    unlock: [".toggle_crusher"]
  },
  blockyard: {
    cost: {bronze: 50, pickaxe: 500},
    scale: 1.3,
    unlock: [".toggle_blockyard"]
  },
  bunker: {
    cost: {frame: 5, pickaxe: 750},
    scale: 1.4,
    max: {wood: 4000, mineral: 4000, sand: 4000, clay: 500, cement: 500, concrete: 500}
  },
  laboratory: {
    cost: {frame: 5, glass: 20},
    scale: 1.4,
    max: {chemicals: 5},
    unlock: [".toggle_laboratory"]
  },
  scienceoutpost: {
    cost: {frame: 10, glass: 20, territory: 400},
    scale: 1.3,
    max: {population: 10},
    bonus: {title: 1}
  },
  tradeoutpost: {
    cost: {frame: 10, coin: 300, territory: 400},
    scale: 1.3,
    max: {population: 10},
    bonus: {title: 1}
  },
  militaryoutpost: {
    cost: {frame: 10, sword: 400, armor: 20, territory: 400},
    scale: 1.3,
    max: {population: 10, morale: 3},
    bonus: {title: 1}
  },
  quarry: {
    cost: {mineral: 50000, pickaxe: 500},
    scale: 1.2
  },
  carpentry: {
    cost: {frame: 5, brick: 20},
    scale: 1.4,
    unlock: [".toggle_carpentry"]
  },
  blastfurnace: {
    cost: {brick: 25},
    scale: 1.4,
    unlock: [".toggle_blastfurnace"]
  },
  compressor: {
    cost: {brick: 500, glass: 50, frame: 25},
    scale: 1.2,
    bonus: {storage: 0.05}
  },
  share: {
    cost: {token: 1000},
    scale: 1.15
  },
  repository: {
    cost: {block: 5000, glass: 100, bottle: 10},
    scale: 1.2,
    max: {tin: 5, chemicals: 3, steel: 5, nickel: 5, silicon: 2, lithium: 1}
  },
  trainstation: {
    cost: {wood: 100000, iron: 500, frame: 50},
    scale: 1.2,
    max: {trains: 2},
    unlock: [".hire_cargotrain", ".trains", ".tradetrain"]
  },
  workshop: {
    cost: {brick: 500, plate: 500, engine: 10},
    scale: 1.3,
    bonus: {craft: 0.1},
    unlock: [".toggle_workshop"]
  },
  powerplant: {
    cost: {frame: 300, plate: 500},
    scale: 1.1,
    max: {energy: 100},
    unlock: [".toggle_powerplant"]
  },
  cementkiln: {
    cost: {steel: 600, plate: 200},
    scale: 1.3,
    unlock: [".toggle_cementkiln"]
  },
  university: {
    cost: {cement: 15000, brick: 1000, frame: 500},
    scale: 1.3,
    max: {knowledge: 200},
    unlock: [".toggle_university"]
  },
  concretemixer: {
    cost: {brick: 1000, plate: 200},
    scale: 1.25,
    max: {knowledge: 200},
    unlock: [".toggle_concretemixer"]
  },
  toolfactory: {
    cost: {brick: 2500, concrete: 1000},
    scale: 1.2,
    unlock: [".toggle_toolfactory"]
  },
  barracks: {
    cost: {concrete: 20000},
    scale: 1.2,
    max: {population: 5},
    unlock: [".toggle_barracks"]
  },
  factory: {
    cost: {brick: 10000, toolbox: 50, concrete: 5000},
    scale: 1.2,
    bonus: {craft: 0.2},
    unlock: [".toggle_factory"]
  }
};

function build(b){
	tooltipcurrent=10;
  if (b in buildingdata) {
    currentCost = {};
    for (var c in buildingdata[b].cost) {
      currentCost[c] = buildingdata[b].cost[c]
      if (c == 'territory') {
        currentCost[c] *= Math.pow(1.2, buildings["tradeoutpost"] + buildings["scienceoutpost"] + buildings["militaryoutpost"]);
      } else {
        currentCost[c] *= Math.pow(buildingdata[b].scale, buildings[b]);
      }
    }
    if (isAffordable(currentCost)) {
      buildings[b]++;
      payCost(currentCost);
      unlockElements(buildingdata[b].unlock);
      incrementMaximums(buildingdata[b].max);
      applyBonuses(buildingdata[b].bonus);
      if (buildingdata[b].hasOwnProperty('tieredUnlock')) {
        unlockElements(buildingdata[b].tieredUnlock[buildings[b]]);
      }
    }
  }
}

var tooltipfactor=1
var tooltipcurrent=0;
function calculatecost(){


tooltipcurrent++
if(tooltipcurrent>=tooltipfactor)
{
tooltipcurrent=0;
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


brickcost= Math.pow(1.2,(buildings["factory"]))*10000
toolboxcost=Math.pow(1.2,(buildings["factory"]))*50
concretecost=Math.pow(1.2,(buildings["factory"]))*5000

if(items["concrete"]<concretecost || craft["brick"]<brickcost || craft["toolbox"]<toolboxcost){
	$(".build_factory").addClass("unavailable")
}
else
{
	$(".build_factory").removeClass("unavailable")
}
unattainable=maximums["concrete"]*(bonus["storage"]+1)<concretecost
set_unattainable(".build_factory", unattainable);
$(".build_factory").html("Factory ("+buildings["factory"]+")");
$(".build_factory").attr('tooltip', 'Concrete: '+ parseFloat(items["concrete"]).toFixed(2)+" / "+parseFloat(concretecost).toFixed(2))
$(".build_factory").attr('tooltip2', 'Brick: '+ parseFloat(craft["brick"]).toFixed(2)+" / "+parseFloat(brickcost).toFixed(2))
$(".build_factory").attr('tooltip3', 'Toolbox: '+ parseFloat(craft["toolbox"]).toFixed(2)+" / "+parseFloat(toolboxcost).toFixed(2))

$(".build_factory").attr('tooltip5', '+20% Craft efficiency ');
$(".build_factory").attr('tooltip6', '+100 items crafted when active');

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
	$(".hire_berserk").addClass("unavailable")
}
else
{
	$(".hire_berserk").removeClass("unavailable")
}
$(".hire_berserk").html("Berserk ("+people["berserk"]+")");
$(".hire_berserk").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".hire_berserk").attr('tooltip2', 'Greatsword: '+ parseFloat(craft["greatsword"]).toFixed(2)+" / "+parseFloat(greatswordcost).toFixed(2))
$(".hire_berserk").attr('tooltip3', "Food consumption: -0.80/s");
$(".hire_berserk").attr('tooltip4', "Gold consumption: -0.01/s");
$(".hire_berserk").attr('tooltip5', 'Morale production +0.20/s');
$(".hire_berserk").attr('tooltip6', 'Attack: 80 Hp: 100');
$(".hire_berserk").attr('tooltip7', 'Deals double damage the first round');


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

if (typeof techOnHover !== 'undefined' && techOnHover != null) {
	updateTechTooltip(techOnHover);
}

function setTechBtnAvailability(b) {
  if (isAffordable(techdata[b].cost)) {
    $(".tech_"+b).removeClass("unavailable");
  } else {
    $(".tech_"+b).addClass("unavailable");
  }
}

for (b in techdata) {

  var tech = techdata[b];
  var attainable = true;
  
  for (var costname in tech.cost) {
    if (items.hasOwnProperty(costname)) {
      attainable = attainable && maximums[costname]*(bonus.storage+1) >= tech.cost[costname];
    }
  }

  setTechBtnAvailability(b);

  set_unattainable(".tech_"+b, !attainable);
  $(".tech_"+b).addClass((technologies[b] > 0 ? 'researched' : ''));
  
  var techname = tech.hasOwnProperty('name') ? tech.name : toProperCase(b);
  var suffix = (technologies[b] > 0 ? (techname.length < 14 ? ' (researched)' : ' (res...)')  : '');
  $(".tech_"+b).html(techname + suffix);

}

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

$(".shardsnum").html("Shards: "+prestige["shards"]);

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
power+=people["berserk"]*80
power+=people["warelephant"]*100
power+=people["musketeer"]*75

hp=0;
hp+=people["pikeman"]*30
hp+=people["swordman"]*50
hp+=people["knight"]*200
hp+=people["medic"]*50
hp+=people["berserk"]*100
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
tradewood=600*(bonus["trade"]+1);
trademineral=500*(bonus["trade"]+1);
tradefood=400*(bonus["trade"]+1);
tradesand=20*(bonus["trade"]+1);

var maxWoodCoin = Math.min(Math.ceil(((maximums["wood"]*(bonus["storage"]+1)) - items["wood"]) / Math.round(tradewood)), Math.floor(craft["coin"]));
var maxMineralCoin = Math.min(Math.ceil(((maximums["mineral"]*(bonus["storage"]+1)) - items["mineral"]) / Math.round(trademineral)), Math.floor(craft["coin"]));
var maxFoodCoin = Math.min(Math.ceil(((maximums["food"]*(bonus["storage"]+1)) - items["food"]) / Math.round(tradefood)), Math.floor(craft["coin"]));
var maxSandCoin = Math.min(Math.ceil(((maximums["sand"]*(bonus["storage"]+1)) - items["sand"]) / Math.round(tradesand)), Math.floor(craft["coin"]));

if(craft["coin"]<1){
	$(".trade_wood").addClass("unavailable");
	$(".trademax_wood").hide();
	$(".trade_mineral").addClass("unavailable");
	$(".trademax_mineral").hide();
	$(".trade_food").addClass("unavailable");
	$(".trademax_food").hide();
	$(".trade_sand").addClass("unavailable");
	$(".trademax_sand").hide();
}
else
{
	$(".trade_wood").removeClass("unavailable");
	$(".trademax_wood").show(); 
	$(".trade_mineral").removeClass("unavailable");
	$(".trademax_mineral").show();
	$(".trade_food").removeClass("unavailable");
	$(".trademax_food").show();
	$(".trade_sand").removeClass("unavailable");
	if ( technologies["commodities"] != 0 ) { $(".trademax_sand").show(); }
}
$(".trade_wood").html("Wood: " + Math.round(tradewood));
$(".trademax_wood").attr('tooltip', 'Coin Cost:');
$(".trademax_wood").attr('tooltip2', parseFloat(maxWoodCoin).toFixed(0));
$(".trademax_wood").attr('tooltip4', 'Wood Purchased:');
$(".trademax_wood").attr('tooltip5', parseFloat(maxWoodCoin * tradewood).toFixed(0));

$(".trade_mineral").html("Mineral: " + Math.round(trademineral));
$(".trademax_mineral").attr('tooltip', 'Coin Cost:');
$(".trademax_mineral").attr('tooltip2', parseFloat(maxMineralCoin).toFixed(0));
$(".trademax_mineral").attr('tooltip4', 'Minerals Purchased:');
$(".trademax_mineral").attr('tooltip5', parseFloat(maxMineralCoin * trademineral).toFixed(0));

$(".trade_food").html("Food: " + Math.round(tradefood));
$(".trademax_food").attr('tooltip', 'Coin Cost:');
$(".trademax_food").attr('tooltip2', parseFloat(maxFoodCoin).toFixed(0));
$(".trademax_food").attr('tooltip4', 'Food Purchased:');
$(".trademax_food").attr('tooltip5', parseFloat(maxFoodCoin * tradefood).toFixed(0));

$(".trade_sand").html("Sand: " + Math.round(tradesand));
$(".trademax_sand").attr('tooltip', 'Coin Cost:');
$(".trademax_sand").attr('tooltip2', parseFloat(maxSandCoin).toFixed(0));
$(".trademax_sand").attr('tooltip4', 'Sand Purchased:');
$(".trademax_sand").attr('tooltip5', parseFloat(maxSandCoin * tradesand).toFixed(0));

}
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
if(heirlooms[8]=="auto"){
bonus["auto"]+=heirlooms[7]
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

if (items["food"]>=people["berserk"]/5 && items["gold"]>=people["berserk"]/400)
{
	consumption["food"]+=people["berserk"]/5
	consumption["gold"]+=people["berserk"]/400
	production["morale"]+=people["berserk"]/20
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
function tradeMaximum(b){
	if (craft["coin"]>=1){
		tradewood=600*(bonus["trade"]+1);
		trademineral=500*(bonus["trade"]+1);
		tradefood=400*(bonus["trade"]+1);
		tradesand=20*(bonus["trade"]+1);
		
		var maxWoodCoin = Math.min(Math.ceil(((maximums["wood"]*(bonus["storage"]+1)) - items["wood"]) / Math.round(tradewood)), Math.floor(craft["coin"]));
		var maxMineralCoin = Math.min(Math.ceil(((maximums["mineral"]*(bonus["storage"]+1)) - items["mineral"]) / Math.round(trademineral)), Math.floor(craft["coin"]));
		var maxFoodCoin = Math.min(Math.ceil(((maximums["food"]*(bonus["storage"]+1)) - items["food"]) / Math.round(tradefood)), Math.floor(craft["coin"]));
		var maxSandCoin = Math.min(Math.ceil(((maximums["sand"]*(bonus["storage"]+1)) - items["sand"]) / Math.round(tradesand)), Math.floor(craft["coin"]));
		
		if(b=="wood") { for(var MaxTradeCt = 0; MaxTradeCt < maxWoodCoin; MaxTradeCt++) { trade(b); } }
		else if(b=="mineral") { for(var MaxTradeCt = 0; MaxTradeCt < maxMineralCoin; MaxTradeCt++) { trade(b); } }
		else if(b=="food") { for(var MaxTradeCt = 0; MaxTradeCt < maxFoodCoin; MaxTradeCt++) { trade(b); } }
		else if(b=="sand") { for(var MaxTradeCt = 0; MaxTradeCt < maxSandCoin; MaxTradeCt++) { trade(b); } }
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
	Cookies.set('heirlooms', heirlooms,{ expires: 9999 });

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
encodestring+=JSON.stringify(prestige)+"--"+JSON.stringify(buildstatus)+"--"+JSON.stringify(autotechnologies)+"--"+JSON.stringify(heirlooms)
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
$(".block, .fire, .population,.toggle ,.titles,.craftamount,.encounter,.casinogame2,.ships,.tradesea,.expansionsea,.territory,.deals,.slotmachine").hide()
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
if(result[13]!=null){
heirlooms = update(heirlooms,JSON.parse(result[13]));
drawheirlooms();
}
		population = Cookies.get('population');
		population=people["woodcutter"]+people["smelter"]+people["farmer"]+people["miner"]+people["foundryman"]+people["sailor"]+people["scientist"]+people["marketer"]+people["pikeman"]+people["swordman"]+people["knight"]+people["medic"]+people["berserk"]+people["warelephant"]+people["musketeer"]+(people["lighttank"]*3)+(people["cargotrain"]*3)

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
if(typeof Cookies.get( 'heirlooms') != 'undefined'){
heirlooms = update(heirlooms,JSON.parse(Cookies.get( 'heirlooms')));
drawheirlooms();
}
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

		//population = Cookies.get('population');
    population = 0 // Doesn't it make more sense to start from 0 since it is recalculating from scratch?
    trains = 0
    ships = 0
    for (p in peopledata) {
      population += people[p] * peopledata[p].cost.pop;
    }
    for (p in shipdata) {
      ships += people[p] * shipdata[p].cost.ships;
    }
    for (p in traindata) {
      population += people[p] * traindata[p].cost.pop;
      trains += people[p] * traindata[p].cost.trains;
    }

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

  // Loop through every tech and define hover events to update the tooltip only on hover
  for (var techname in techdata) {
    $(".tech_"+techname).hover(
      setTechOnHover(techname),
      resetTechOnHover()
    );
    updateTechTooltip(techname); // Initialize the tooltip once otherwise it looks bad on first hover
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


function toProperCase(str) {
  return str[0].toUpperCase() + str.substr(1)
}

function updateTechTooltip(techname) {  
  var tech = techdata[techname];
  var tooltips = [];
  for (var costname in tech.cost) {
    var isItem = items.hasOwnProperty(costname)
    var amt = (isItem ? items : craft)[costname];
    var costAmt = tech.cost[costname];
    tooltips.push(toProperCase(costname) + ": " + parseFloat(amt).toFixed(2) + " / " + parseFloat(costAmt).toFixed(2));
  }

  if (tech.hasOwnProperty('bonus')) {
    for (var techbonus in tech.bonus) {
      if (techbonus == 'shipspeed') {
        tooltips.push('-' + tech.bonus[techbonus] + 's trade mission time');
      } else if (techbonus == 'shiphp') {
        tooltips.push('+' + (tech.bonus[techbonus])*100 + '% ' + 'ship hp');
      } else if (techbonus == 'exprew') {
        tooltips.push('+' + (tech.bonus[techbonus])*100 + '% more resources found on expeditions');
      } else if (techbonus == 'storage') {
        tooltips.push('+' + (tech.bonus[techbonus])*100 + '% ' + techbonus + ' space');
      } else if (techbonus == 'craft') {
        tooltips.push('+' + (tech.bonus[techbonus])*100 + '% ' + techbonus + ' efficiency');
      } else if (items.hasOwnProperty(techbonus)) {
        tooltips.push('+' + (tech.bonus[techbonus])*100 + '% ' + techbonus + ' production');
      } else if (techbonus != 'invest') {
        tooltips.push('+' + (tech.bonus[techbonus])*100 + '% ' + techbonus);
      }
    }
  }

  if (tech.hasOwnProperty('max')) {
    for (var techmax in tech.max) {
      tooltips.push('+' + (tech.max[techmax]) + ' max ' + techmax);
    }
  }

  if (tech.hasOwnProperty('desc')) {
    for (var i=0; i<=tech.desc.length;i++) {
      tooltips.push(tech.desc[i]);
    }
  }

  for (var i=0; i<tooltips.length; i++) {
    var attr = 'tooltip' + (i>0 ? i+1 : '');
    $(".tech_"+techname).attr(attr, tooltips[i]);
  }
}

function setTechOnHover(techname) {
  return function() {
    updateTechTooltip(techname); // Update tooltip to avoid the 0-250ms lag from refresh() loop
    techOnHover = techname; // Flags tech to be updated in refresh() loop
  }
}

function resetTechOnHover() {
  return function() {
   techOnHover = null; // Unflags tech to be updated in refresh() loop
  }
}
