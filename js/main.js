
var items=new Array()


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
items["morale"]=0;
items["knowledge"]=0;

var bonus =new Array()
for(key in items){
	bonus[key]=0;
}
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
bonus["knowledge"]=0;
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

var buildstatus =new Array()
for(key in buildings){
	buildstatus[key]=1;
}

var maximums=new Array()

maximums["population"]=0;
maximums["ships"]=0;
maximums["bet"]=0;


for(key in items){
	maximums[key]=0;
}
maximums["wood"]=50
maximums["mineral"]=20

var population=0;
var ships=0;


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


var people=new Array();
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

people["sucellus"]=0
people["eredal"]=0
people["khrysos"]=0
people["elisia"]=0
people["xochiquetzal"]=0
people["warmuk"]=0

people["galley"]=0
people["galleon"]=0

var craft=new Array();

craft["chest"]=0
craft["diamond"]=0
craft["pickaxe"]=0
craft["spear"]=0
craft["sword"]=0
craft["block"]=0
craft["coin"]=0
craft["bronze"]=0
craft["structure"]=0
craft["armor"]=0
craft["horse"]=0
craft["token"]=0
craft["plank"]=0
craft["supplies"]=0
craft["lock"]=0
craft["glass"]=0

var unlocked=new Array();

var enemy=new Array();
enemy["reward"]=0;
enemy["peasant"]=0;
enemy["bandit"]=0;
enemy["mercenary"]=0;
enemy["soldier"]=0;
enemy["halberdier"]=0;


function develop(b){

	bonus[b]+=items["knowledge"]-0.001


	if(b=="economy"){
		bonus["global"]+=(items["knowledge"]-0.001)/(((bonus["economy"]+(items["knowledge"]/2)+100000)))

	}
	else if(b=="science"){
		bonus["craft"]+=(items["knowledge"]*1.5)/(((bonus["science"]+(items["knowledge"]/2)+100000)))

	}
	else if(b=="military"){
		bonus["power"]+=(items["knowledge"]*2)/(((bonus["science"]+(items["knowledge"]/2)+100000)))
		bonus["hp"]+=(items["knowledge"]*2)/(((bonus["science"]+(items["knowledge"]/2)+100000)))
	}





	items["knowledge"]=0.001;
	researchunlock()
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

			bonus["wood"]+=0.15
			bonus["food"]+=0.15
			bonus["water"]+=0.15

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

			bonus["gold"]+=0.30
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





	}






}

function expedition(){
	power=0
	power+=people["pikeman"]*5
	power+=people["swordman"]*10
	power+=people["knight"]*25
	power+=people["medic"]*1

	foodcost=power*2
	watercost=power
	moralecost=power/5

	power=power*(bonus["power"]+1)

	if(power>0 && items["food"]>=foodcost && items["water"]>=watercost && items["morale"]>=moralecost){


		items["food"]-=foodcost;
		items["water"]-=watercost;
		items["morale"]-=moralecost;


		$(".expeditionresult").html("")
		$(".encounter").hide()



		if(Math.random()>0.40){


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
			if(Math.random()>0.75){
				rnd=(Math.random()*power)*5;
				reward+=parseFloat(rnd).toFixed(2) + " food<br>";
				items["food"]+=rnd;
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
			hp=0;
			hp+=people["pikeman"]*30
			hp+=people["swordman"]*50
			hp+=people["knight"]*200
			hp+=people["medic"]*50

			hp=hp*(bonus["hp"]+1)

			healing=0
			healing+=people["medic"]*10
			healing=healing*(bonus["healing"]+1)

			power=(power/2)+(hp/15)+(healing/2)

			enemy["reward"]=0;
			enemy["peasant"]=0;
			enemy["bandit"]=0;
			enemy["mercenary"]=0;
			enemy["soldier"]=0;
			enemy["halberdier"]=0;

			var enemytipo=Math.random()*power;
			var stringencuentro="Enemies:<br>"
			var rew=0;
			if(enemytipo<25){
				enemy["peasant"]=Math.round((Math.random()*power*0.60)+(power*0.15))+1;
				stringencuentro+=enemy["peasant"]+" Peasants (Attack:2 Hp:8)<br>";
				rew+=(Math.random()*enemy["peasant"]*0.07)+(enemy["peasant"]*0.015)
			}
			if(enemytipo>20 && enemytipo<50){
				enemy["bandit"]=Math.round((Math.random()*power*0.30)+(power*0.075))+1;
				stringencuentro+=enemy["bandit"]+" Bandits (Attack:4 Hp:15)<br>";
				rew+=(Math.random()*enemy["bandit"]*0.14)+(enemy["bandit"]*0.03)
			}
			if(enemytipo>40 && enemytipo<120){
				enemy["mercenary"]=Math.round((Math.random()*power*0.120)+(power*0.030))+1;
				stringencuentro+=enemy["mercenary"]+" Mercenarys (Attack:9 Hp:40)<br>";
				rew+=(Math.random()*enemy["mercenary"]*0.32)+(enemy["mercenary"]*0.07)
			}
			if(enemytipo>110 && enemytipo<280){
				enemy["soldier"]=Math.round((Math.random()*power*0.06)+(power*0.015))+1;
				stringencuentro+=enemy["soldier"]+" Soldiers (Attack:15 Hp:100)<br>";
				rew+=(Math.random()*enemy["soldier"]*0.68)+(enemy["soldier"]*0.15)
			}
			if(enemytipo>260){
				enemy["halberdier"]=Math.round((Math.random()*power*0.03)+(power*0.008))+1;
				stringencuentro+=enemy["soldier"]+" Halberdier (Attack:40 Hp:160)<br>";
				rew+=(Math.random()*enemy["soldier"]*1.2)+(enemy["soldier"]*0.30)
			}
			enemy["reward"]=rew;
			stringencuentro+="Reward: "+parseFloat(rew).toFixed(2)+" Coins<br>"
			stringencuentro+="<button class='fight' onclick='fight()'>Fight</button><button class='retreat' onclick='retreat()'>Flee</button>";


			$(".encounter").show()
			$(".expeditionresult").html("Some enemies appeared in our way.")
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

	power=power*(bonus["power"]+1)

	hp=0;
	hp+=people["pikeman"]*30
	hp+=people["swordman"]*50
	hp+=people["knight"]*200
	hp+=people["medic"]*50

	hp=hp*(bonus["hp"]+1)

	power2=0;
	power2+=enemy["peasant"]*2
	power2+=enemy["bandit"]*4
	power2+=enemy["mercenary"]*9
	power2+=enemy["soldier"]*15
	power2+=enemy["halberdier"]*40

	hp2=0;
	hp2+=enemy["peasant"]*8
	hp2+=enemy["bandit"]*15
	hp2+=enemy["mercenary"]*40
	hp2+=enemy["soldier"]*100
	hp2+=enemy["halberdier"]*160

	healing=0
	healing+=people["medic"]*10

	healing=healing*(bonus["healing"]+1)
	combatlog="The battle starts:<br>"
	var ronda=0;
	for(i=0;i<=50;i++){
		dmg1=power+(Math.random()*(power/4))-(Math.random()*(power/4));
		dmg2=power2+(Math.random()*(power2/4))-(Math.random()*(power2/4));
		combatlog+="Round "+(i+1)+"<br>"
		combatlog+="Your soldiers deals "+intToString(dmg1)+" damage<br>"
		combatlog+="The enemy deals "+intToString(dmg2)+" damage<br>"
		if(healing>0){
			healed=healing+(Math.random()*(healing/8))-(Math.random()*(healing/8));
			hp+=healed;
			combatlog+="Your medics restore "+intToString(healed)+" hp<br>"
		}
		hp2-=dmg1;
		hp-=dmg2;
		combatlog+="Your hp: "+Math.round(hp) +" / Enemy hp: "+Math.round(hp2)+"<br><br>";
		if(hp<0){
			combatlog+="You lose the combat<br>"
			if(people["pikeman"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["pikeman"]-1))+1
				people["pikeman"]-=losses;
				population-=losses;
				combatlog+="You lose "+losses+" pikeman<br>"
			}
			if(people["swordman"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["swordman"]-1))+1
				people["swordman"]-=losses;
				population-=losses;
				combatlog+="You lose "+losses+" swordman<br>"
			}
			if(people["knight"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["knight"]-1))+1
				people["knight"]-=losses;
				population-=losses;
				combatlog+="You lose "+losses+" knight<br>"
			}
			if(people["medic"]>0 && Math.random()>0.75){
				losses=Math.round(Math.random()*(people["medic"]-1))+1
				people["medic"]-=losses;
				population-=losses;
				combatlog+="You lose "+losses+" medics<br>"
			}


			break;
		}
		else if(hp2<1){
			var reward="";
			combatlog+="You win the combat!<br><br>";
			combatlog+="You won "+ intToString(enemy["reward"])+" coins<br>";
			$(".encounter").hide()
			craft["coin"]+=enemy["reward"];
			if(Math.random()>0.80 && technologies["cache"]==1){
				rnd=(Math.random()*((power/2)+(hp/15)))/300;
				reward+=parseFloat(rnd).toFixed(2) + " chest<br>";
				craft["chest"]+=rnd;
				combatlog+="You took "+ intToString(rnd)+" chests that they were carrying<br>";
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
				combatlog+="You also found "+ Math.round(rnd)+" lock<br>";
			}
			if(Math.random()>0.70 && technologies["intelligence"]==1){
				rnd=(Math.random()*((power/2)+(hp/15)))/4;
				reward+=parseFloat(rnd).toFixed(2) + " knowledge<br>";
				items["knowledge"]+=rnd;
				combatlog+="Your intelligence service stole "+ Math.round(rnd)+" knowledge from the enemy<br>";
			}
			break;
		}

		ronda++
	}

	if(i>49){
		combatlog+="The combat ends in a draw<br>"
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
	if(buildstatus["workbench"]==1){
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
		else if (b=="glass"){

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


		if (items["mineral"]>=mineralcost && items["gold"]>=goldcost && craft["plank"]>=plankcost){

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
	}



}
function salvage(b){
	if (people[b]>0){

		people[b]-=1
		ships--
		if (people[b]==0){
			$(".salvage_"+b).hide()
			unlocked[".salvage_"+b]=0;
		}
		if(b=="galley"){

			craft["plank"]+=10+(Math.random()*10);
			craft["structure"]+=5+(Math.random()*5);
			items["wood"]+=1000+(Math.random()*5000);
		}
		if(b=="galleon"){

			craft["plank"]+=300+(Math.random()*300);
			craft["structure"]+=50+(Math.random()*50);
			items["wood"]+=20000+(Math.random()*20000);
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
				case 7: $(".tech_leadership").show();unlocked[".tech_leadership"]=1;$(".tech_armament").show();unlocked[".tech_armament"]=1;$(".tech_gambling").show();unlocked[".tech_gambling"]=1;$(".tech_redeem").show();unlocked[".tech_redeem"]=1;break;
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


		mineralcost= Math.pow(1.4,(buildings["foundry"]))*500;
		coppercost=Math.pow(1.4, (buildings["foundry"]))*5

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

		blockcost= Math.pow(1.3,(buildings["towncenter"]))*20
		structurecost= Math.pow(1.3,(buildings["towncenter"]))*5
		coincost= Math.pow(1.3,(buildings["towncenter"]))*3

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

		}
	}
}

function calculatecost(){


//Buildings
woodcost= Math.pow(1.1,(buildings["lumbermill"]))*3
if(items["wood"]<woodcost){
	$(".build_lumbermill").addClass("unavailable")
}
else
{
	$(".build_lumbermill").removeClass("unavailable")
}
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
$(".build_banner").html("Banner ("+buildings["banner"]+")");
$(".build_banner").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_banner").attr('tooltip2', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".build_banner").attr('tooltip3', 'Max morale +1');

mineralcost= Math.pow(1.4,(buildings["foundry"]))*500;
coppercost=Math.pow(1.4, (buildings["foundry"]))*5
if(items["mineral"]<mineralcost || items["copper"]<coppercost){
	$(".build_foundry").addClass("unavailable")
}
else
{
	$(".build_foundry").removeClass("unavailable")
}
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
$(".build_market").html("Market ("+buildings["market"]+")");
$(".build_market").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".build_market").attr('tooltip2', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(coincost).toFixed(2))
$(".build_market").attr('tooltip3', 'Allows trading');
$(".build_market").attr('tooltip4', '+5% market trade effiency');

blockcost= Math.pow(1.5,(buildings["kiln"]))*15
mineralcost= Math.pow(1.5,(buildings["kiln"]))*2000
if(craft["block"]<blockcost || items["mineral"]<mineralcost){
	$(".build_kiln").addClass("unavailable")
}
else
{
	$(".build_kiln").removeClass("unavailable")
}
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

blockcost= Math.pow(1.3,(buildings["towncenter"]))*20
structurecost= Math.pow(1.3,(buildings["towncenter"]))*5
coincost= Math.pow(1.3,(buildings["towncenter"]))*3
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
$(".build_workbench").html("Workbench ("+buildings["workbench"]+")");
$(".build_workbench").attr('tooltip', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".build_workbench").attr('tooltip2', 'Craft effiency +8%');
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
$(".build_crusher").html("Crusher ("+buildings["crusher"]+")");
$(".build_crusher").attr('tooltip', 'Copper: '+ parseFloat(items["copper"]).toFixed(2)+" / "+parseFloat(coppercost).toFixed(2))
$(".build_crusher").attr('tooltip2', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".build_crusher").attr('tooltip3', 'Steel: '+ parseFloat(items["steel"]).toFixed(2)+" / "+parseFloat(steelcost).toFixed(2))
$(".build_crusher").attr('tooltip5', 'Sand storage +200');
$(".build_crusher").attr('tooltip6', 'Mineral consumption -10.00/s');
$(".build_crusher").attr('tooltip7', 'Sand production +0.5/s');




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
$(".hire_galley").attr('tooltip5', "Power: 150  Structure: 2.000");
$(".hire_galley").attr('tooltip6', 'Cargo capacity: 5.000  Crew: 2');


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
$(".hire_galleon").attr('tooltip4', "Power: 500  Structure: 15.000");
$(".hire_galleon").attr('tooltip5', 'Cargo capacity: 25.000  Crew: 5');
//Technologies

coppercost=1;
if(items["copper"]<coppercost){
	$(".tech_coppertools").addClass("unavailable")
}
else
{
	$(".tech_coppertools").removeClass("unavailable")
}
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
$(".tech_steel").addClass((technologies["steel"] >0 ? "researched" : ""))
$(".tech_steel").html("Steel" + (technologies["steel"] >0 ? " (researched)" : ""));
$(".tech_steel").attr('tooltip', 'Iron: '+ parseFloat(items["iron"]).toFixed(2)+" / "+parseFloat(ironcost).toFixed(2))
$(".tech_steel").attr('tooltip2', 'Coal: '+ parseFloat(items["coal"]).toFixed(2)+" / "+parseFloat(coalcost).toFixed(2))
$(".tech_steel").attr('tooltip3', "Unlocks foundrymans experts in steel");

steelcost=5;
coincost=5;
if(items["steel"]<steelcost || craft["coin"]<coincost ){
	$(".tech_manufacturing").addClass("unavailable")
}
else
{
	$(".tech_manufacturing").removeClass("unavailable")
}
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
$(".tech_leadership").attr('tooltip3', "Unlocks castles, wich can grant titles to powerful leaders.");

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
$(".tech_redeem").attr('tooltip3', "Allows reedeming tokens in the casino.");

woodcost=25000;
if(items["wood"]<woodcost ){
	$(".tech_shipyard").addClass("unavailable")
}
else
{
	$(".tech_shipyard").removeClass("unavailable")
}
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

steelcost=100;
knowledgecost=500;
if(items["knowledge"]<knowledgecost || items["steel"]<steelcost){
	$(".tech_intelligence").addClass("unavailable")
}
else
{
	$(".tech_intelligence").removeClass("unavailable")
}
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
$(".tech_floatglass").addClass((technologies["floatglass"] >0 ? "researched" : ""))
$(".tech_floatglass").html("Float glass" + (technologies["floatglass"] >0 ? " (researched)" : ""));
$(".tech_floatglass").attr('tooltip', 'Tin: '+ parseFloat(items["tin"]).toFixed(2)+" / "+parseFloat(tincost).toFixed(2))
$(".tech_floatglass").attr('tooltip2', 'Sand: '+ parseFloat(items["sand"]).toFixed(2)+" / "+parseFloat(sandcost).toFixed(2))
$(".tech_floatglass").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_floatglass").attr('tooltip5', "A process to create sheets of glass. ");

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
$(".tech_contracts").attr('tooltip', 'Coin: '+ parseFloat(craft["coin"]).toFixed(2)+" / "+parseFloat(pickaxecost).toFixed(2))
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
$(".tech_galleon").addClass((technologies["galleon"] >0 ? "researched" : ""))
$(".tech_galleon").html("Galleon" + (technologies["galleon"] >0 ? " (researched)" : ""));
$(".tech_galleon").attr('tooltip', 'Wood: '+ parseFloat(items["wood"]).toFixed(2)+" / "+parseFloat(woodcost).toFixed(2))
$(".tech_galleon").attr('tooltip2', 'Plank: '+ parseFloat(craft["plank"]).toFixed(2)+" / "+parseFloat(plankcost).toFixed(2))
$(".tech_galleon").attr('tooltip3', 'Knowledge: '+ parseFloat(items["knowledge"]).toFixed(2)+" / "+parseFloat(knowledgecost).toFixed(2))
$(".tech_galleon").attr('tooltip5', "Galleons are mega ships that can carry loads of resources.");
//Research


$(".research_economy").html("Economy " + intToString(bonus["economy"]));
$(".research_economy").attr('tooltip', "Economy its a big force, prosperity and wealth awaits for those ");
$(".research_economy").attr('tooltip2', "who look for it.");
$(".research_economy").attr('tooltip4', "Also increases global production");

$(".research_science").html("Science " + intToString(bonus["science"]));
$(".research_science").attr('tooltip', "Science leads humanity forward, it can be slow, ");
$(".research_science").attr('tooltip2', "but it never stops evolving. ");
$(".research_science").attr('tooltip4', "Also increases craft effiency");

$(".research_military").html("Military " + intToString(bonus["military"]));
$(".research_military").attr('tooltip', "There are times, when only the most powerfull get what he wants,");
$(".research_military").attr('tooltip2', "is that you?");
$(".research_military").attr('tooltip4', "Also increases troops attack and hp");


//crafting
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
//Leaders

if(bonus["title"]<1){
	$(".leader_sucellus").addClass("unavailable")
	$(".leader_eredal").addClass("unavailable")
	$(".leader_khrysos").addClass("unavailable")
	$(".leader_elisia").addClass("unavailable")
	$(".leader_xochiquetzal").addClass("unavailable")
	$(".leader_warmuk").addClass("unavailable")
}
else
{
	$(".leader_sucellus").removeClass("unavailable")
	$(".leader_eredal").removeClass("unavailable")
	$(".leader_khrysos").removeClass("unavailable")
	$(".leader_elisia").removeClass("unavailable")
	$(".leader_xochiquetzal").removeClass("unavailable")
	$(".leader_warmuk").removeClass("unavailable")
}

$(".leader_sucellus").html("Sucellus (lv:" + people["sucellus"]+")");
$(".leader_sucellus").attr('tooltip', 'Increments wood, water and food production by 15%')
$(".leader_sucellus").attr('tooltip3', "'Nature its not optional'");

$(".leader_eredal").html("Eredal (lv:" + people["eredal"]+")");
$(".leader_eredal").attr('tooltip', 'Increments mineral, copper, iron and steel production by 10%')
$(".leader_eredal").attr('tooltip3', "'Metal till death'");

$(".leader_khrysos").html("Khrysos (lv:" + people["khrysos"]+")");
$(".leader_khrysos").attr('tooltip', 'Increments gold production by 30%')
$(".leader_khrysos").attr('tooltip2', 'Increments market ratios by 10%')
$(".leader_khrysos").attr('tooltip4', "'Everything has a price'");

$(".leader_elisia").html("Elisia (lv:" + people["elisia"]+")");
$(".leader_elisia").attr('tooltip', 'Increments craft effiency by 5%')
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



//Others

if(prestige["number"]>0){
	tooltipsprestige("motivation");
	tooltipsprestige("depot");
	tooltipsprestige("vengeance");
	tooltipsprestige("aegis");
	tooltipsprestige("bargain");
	tooltipsprestige("mastery");

	$(".legacynum").html("Legacy: "+prestige["legacy"])
	$(".treasurenum").html("Treasures: "+prestige["treasure"])
}


power=0;
power+=people["pikeman"]*5
power+=people["swordman"]*10
power+=people["knight"]*25
power+=people["medic"]*1

hp=0;
hp+=people["pikeman"]*30
hp+=people["swordman"]*50
hp+=people["knight"]*200
hp+=people["medic"]*50

healing=0
healing+=people["medic"]*10

foodcost=power*2
watercost=power
moralecost=power/5

power=power*(bonus["power"]+1)
hp=hp*(bonus["hp"]+1)
healing=healing*(bonus["healing"]+1)
if(items["food"]<foodcost || items["water"]<watercost || items["morale"]<moralecost){
	$(".expedition").addClass("unavailable")
}
else
{
	$(".expedition").removeClass("unavailable")
}
$(".expedition").html("Expedition");
$(".expedition").attr('tooltip', 'Food: '+ parseFloat(items["food"]).toFixed(2)+" / "+parseFloat(foodcost).toFixed(2))
$(".expedition").attr('tooltip2', 'Water: '+ parseFloat(items["water"]).toFixed(2)+" / "+parseFloat(watercost).toFixed(2))
$(".expedition").attr('tooltip3', 'Morale: '+ parseFloat(items["morale"]).toFixed(2)+" / "+parseFloat(moralecost).toFixed(2))
$(".expedition").attr('tooltip5', "Send your soldiers in a expedition");
$(".expedition").attr('tooltip6', "Total Attack: "+Math.round(power)+" Total Hp: "+Math.round(hp));
if(healing>0){
$(".expedition").attr('tooltip7', "Total Healing: "+Math.round(healing));

}
tradewood=600*(bonus["trade"]+1)
trademineral=500*(bonus["trade"]+1)
tradefood=400*(bonus["trade"]+1)
if(craft["coin"]<1){
	$(".trade_wood").addClass("unavailable")
	$(".trade_mineral").addClass("unavailable")
	$(".trade_food").addClass("unavailable")
}
else
{

	$(".trade_wood").removeClass("unavailable")
	$(".trade_mineral").removeClass("unavailable")
	$(".trade_food").removeClass("unavailable")

}
$(".trade_wood").html("Wood: " + Math.round(tradewood));
$(".trade_mineral").html("Mineral: " + Math.round(trademineral));
$(".trade_food").html("Food: " + Math.round(tradefood));
}



function refresh(){


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

var inv_text="<table>"
for(key in items){
	if(items[key]!=0){
		inv_text+="<tr><td class='resource'>"+key+": </td><td class='amount' align='center'>"+intToString(items[key])+" / "+ intToStringRound(maximums[key]*(bonus["storage"]+1))+"</td><td class='production' align='right'> ("+parseFloat(4*((production[key]*(bonus[key]+bonus["global"]+1))-consumption[key])).toFixed(2)+")</td> ";
		if (bonus[key]>0 || bonus["global"]>0){
			inv_text+= "<td class='bonus'>+"+Math.round((bonus[key]+bonus["global"])*100)+"%</td>";
		}

		inv_text+="<tr>"
	}
}
inv_text+="</table>"
$(".inventory").html(inv_text);
$(".population").html("Population: "+population+" / "+ +maximums["population"]);
$(".ships").html("Ships: "+ships+" / "+ +maximums["ships"]);
$(".titles").html("Titles: "+bonus["title"]);

var inv_text="<table>"
for(key in craft){
	if(craft[key]!=0){
		inv_text+="<tr><td>"+key+":</td><td align='right'> "+parseFloat(craft[key]).toFixed(2);
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

	var result=(production[key]*(bonus[key]+bonus["global"]+1))-consumption[key]

	if((items[key]+result)<(maximums[key]*(bonus["storage"]+1))){
		items[key]+=(production[key]*(bonus[key]+bonus["global"]+1))-consumption[key];
	}
	else
	{
		items[key]=(maximums[key]*(bonus["storage"]+1))
	}

}



calculatecost();


}
function trade(b){


	if (craft["coin"]>=1){
		tradewood=600*(bonus["trade"]+1)
		trademineral=500*(bonus["trade"]+1)
		tradefood=400*(bonus["trade"]+1)

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

var techvisible=1;
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
	Cookies.set('trademission', trademission,{ expires: 9999 });
	Cookies.set('prestige', prestige,{ expires: 9999 });
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
		unlocked = update(unlocked,JSON.parse(Cookies.get( 'unlocked')));

		population = Cookies.get('population');
		population=people["woodcutter"]+people["smelter"]+people["farmer"]+people["miner"]+people["foundryman"]+people["sailor"]+people["scientist"]+people["pikeman"]+people["swordman"]+people["knight"]




		ships=people["galley"]
		for(key in unlocked){
			if (unlocked[key]==1)
			{
				$(key).show().removeClass("invisible")
			}
		}
		switch(buildings["library"]){
			case 1: $(".tech_coppertools").show();unlocked[".tech_coppertools"]=1;$(".tech_pickaxe").show();unlocked[".tech_pickaxe"]=1;$("#technologiespane").removeClass("invisible");unlocked["#technologiespane"]=1;
			case 2: $(".build_banner").show();unlocked[".build_banner"]=1;$(".tech_spear").show();unlocked[".tech_spear"]=1;$(".tech_exploration").show();unlocked[".tech_exploration"]=1;break;
			case 3: $(".tech_ironfoundry").show();unlocked[".tech_ironfoundry"]=1;$(".tech_metallurgy").show();unlocked[".tech_metallurgy"]=1;$(".tech_sword").show();unlocked[".tech_sword"]=1;$(".tech_storage").show();unlocked[".tech_storage"]=1;break;
			case 4: $(".tech_currency").show();unlocked[".tech_currency"]=1;$(".tech_exchange").show();unlocked[".tech_exchange"]=1;$(".tech_coin").show();unlocked[".tech_coin"]=1;break;
			case 5: $(".tech_bronze").show();unlocked[".tech_bronze"]=1;$(".tech_bronzetools").show();unlocked[".tech_bronzetools"]=1;$(".tech_charcoal").show();unlocked[".tech_charcoal"]=1;$(".tech_centralisation").show();unlocked[".tech_centralisation"]=1;break;
			case 6: $(".tech_steel").show();unlocked[".tech_steel"]=1;$(".tech_manufacturing").show();unlocked[".tech_manufacturing"]=1;$(".tech_steeltools").show();unlocked[".tech_steeltools"]=1;$(".tech_husbandry").show();unlocked[".tech_husbandry"]=1;$(".tech_cavalry").show();unlocked[".tech_cavalry"]=1;break;
		}

		if(buildings["library"]>=4){
			$(".tech_currency").show();unlocked[".tech_currency"]=1;
			$(".tech_exchange").show();unlocked[".tech_exchange"]=1;
			$(".tech_coin").show();unlocked[".tech_coin"]=1;
		}

		if(buildings["library"]>=5){
			$(".tech_bronze").show();unlocked[".tech_bronze"]=1;
			$(".tech_centralisation").show();unlocked[".tech_centralisation"]=1;
		}

		if(buildings["library"]>=6){
			$(".tech_steeltools").show();unlocked[".tech_steeltools"]=1;
			$(".tech_husbandry").show();unlocked[".tech_husbandry"]=1;
			$(".tech_cavalry").show();unlocked[".tech_cavalry"]=1;
		}

		if(buildings["library"]>=7){
			$(".tech_leadership").show();unlocked[".tech_leadership"]=1;
			$(".tech_armament").show();unlocked[".tech_armament"]=1;
			$(".tech_gambling").show();unlocked[".tech_gambling"]=1;
			$(".tech_redeem").show();unlocked[".tech_redeem"]=1;
		}
		if(buildings["library"]>=8){
			$(".tech_shipyard").show();unlocked[".tech_shipyard"]=1;
			$(".tech_sailing").show();unlocked[".tech_sailing"]=1;
			$(".tech_trade").show();unlocked[".tech_trade"]=1;
			$(".tech_cache").show();unlocked[".tech_cache"]=1;
			$(".tech_specialization").show();unlocked[".tech_specialization"]=1;
		}
	//RETROCOMPATIBILITY
	if(maximums["moral"]!=0 && maximums["moral"]!=null)
	{
		maximums["morale"]=maximums["moral"]
		maximums["moral"]=0
		items["morale"]=items["moral"]
		items["moral"]=0;
	}

	maximums["knowledge"]=buildings["library"]*100;
	maximums["tin"]=(buildings["warehouse"]*4)+(buildings["towncenter"]*10)

	if(technologies["bronze"]==1){
		$(".build_statue").show()
		unlocked[".build_statue"]=1;
	}

	if(buildings["workbench"]>0){
		$(".craftamount").show()
		unlocked[".craftamount"]=1
	}

	if(craft["pickaxe"]<0){
		craft["pickaxe"]=0;
	}

	bonus["hp"]=people["xochiquetzal"]*0.05
	//END RETROCOMPATIBILITY





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


	researchunlock()

	save()

	} 
} 






function update(array1, array2){

	for (key in array2){
		array1[key]=array2[key]
	}

	return array1
}
