
var enemyship=new Array()


enemyship["boat"]=0;
enemyship["trireme"]=0;
enemyship["turtleship"]=0;
enemyship["blastship"]=0;

function filllog(){

var force=Math.pow(1.3,(bonus["expansion"]))*30
enemyship["boat"]=0;
enemyship["trireme"]=0;
enemyship["turtleship"]=0;
enemyship["blastship"]=0;

stringencuentro=""
if (force<50)
{
enemyship["boat"]=Math.round(force*0.2)+1;
stringencuentro+=enemyship["boat"]+" Boat (Power:50 Structure:300)<br>";
}
if (force>=50 && force<=120)
{
enemyship["trireme"]=Math.round(force*0.04)+1;
stringencuentro+=enemyship["trireme"]+" Trireme (Power:200 Structure:3.000)<br>";
}
if (force>120 && force<=900)
{
enemyship["trireme"]=Math.round(force*0.04)+1;
stringencuentro+=enemyship["trireme"]+" Trireme (Power:200 Structure:3.000)<br>";
enemyship["turtleship"]=Math.round(force*0.01)+1;
stringencuentro+=enemyship["turtleship"]+" Turtle ship (Power:150 Structure:10.000)<br><br>";
}
if (force>900){
enemyship["trireme"]=Math.round(force*0.02)+2;
stringencuentro+=enemyship["trireme"]+" Trireme (Power:200 Structure:3.000)<br>";
enemyship["turtleship"]=Math.round(force*0.01)+1;
stringencuentro+=enemyship["turtleship"]+" Turtle ship (Power:150 Structure:10.000)<br>";
enemyship["blastship"]=Math.round(force*0.005)+1;
stringencuentro+=enemyship["blastship"]+" Blast ship (Power:800 Structure:8.000)<br><br>";
}

stringencuentro+="Territory protected: "+intToString(Math.pow(1.2,(bonus["expansion"]))*200)


$(".expansionlog").html(stringencuentro);

}

function expand(){

crew=0
crew+=people["galley"]*2;
crew+=people["galleon"]*5;
crew+=people["fireship"]*3;
crew+=people["caravel"]*3;

if(trademission["time"]>=1){
	alert("Your ships are already on a mission")
	return;
}
if(ships<1){
	alert("You dont have any ships.")
	return;
}
if(crew>people["sailor"]){
	alert("You need " + crew+ " sailors for this mission.")
	return;
}
	power=0;

	power+=people["galley"]*150*(bonus["shippower"]+1)
	power+=people["galleon"]*500*(bonus["shippower"]+1)
	power+=people["caravel"]*200*(bonus["shippower"]+1)

	hp=0;
	hp+=people["galley"]*2000*(bonus["shiphp"]+1)
	hp+=people["galleon"]*15000*(bonus["shiphp"]+1)
	hp+=people["fireship"]*4000*(bonus["shiphp"]+1)
	hp+=people["caravel"]*6000*(bonus["shiphp"]+1)

	burn=0;
	burn+=people["fireship"]*100*(bonus["shippower"]+1)

	chains=0
	chains+=people["caravel"]*75

	power2=0;
	power2+=enemyship["boat"]*50
	power2+=enemyship["trireme"]*200
	power2+=enemyship["turtleship"]*150
	power2+=enemyship["blastship"]*800

	hp2=0;
	hp2+=enemyship["boat"]*300
	hp2+=enemyship["trireme"]*3000
	hp2+=enemyship["turtleship"]*10000
	hp2+=enemyship["blastship"]*8000

	totalburn=0;
	combatlog="The encounter starts:<br>"
	var ronda=0;

	for(i=0;i<=50;i++){
		dmg1=power+(Math.random()*(power/3))-(Math.random()*(power/3));
		dmg2=power2+(Math.random()*(power2/3))-(Math.random()*(power2/3));


		combatlog+="Round "+(i+1)+"<br>"


		combatlog+="Your ships deals "+intToString(dmg1)+" damage<br>"
		combatlog+="The enemy ships deal "+intToString(dmg2)+" damage<br>"
		if(chains>0 && power2>0){
			totalchains=chains+(Math.random()*(chains/3))-(Math.random()*(chains/3));
			combatlog+="You incapacitate enemy ships for -"+intToString(totalchains)+" power<br>"
			power2-=totalchains
			if(power2<0){
				power2=0;
			}
		}
		if(burn>0){
			totalburn+=burn+(Math.random()*(burn/3))-(Math.random()*(burn/3));
			combatlog+="The enemy ships burn for "+intToString(totalburn)+" damage<br>"		
		}
		hp2-=(dmg1+totalburn);
		hp-=dmg2;
		combatlog+="Your fleet structure: "+Math.round(hp) +" / Enemy fleet structure: "+Math.round(hp2)+"<br><br>";
		if(hp<0){
			combatlog+="You lose the combat.<br> All your ships are destroyed.<br> All your sailors died<br>"

			rewardplank=0;
			rewardstructure=0;

			rewardplank+=Math.random()*people["galley"]*100
			rewardplank+=Math.random()*people["galleon"]*500
			rewardplank+=Math.random()*people["fireship"]*200
			rewardplank+=Math.random()*people["caravel"]*250

			rewardstructure+=Math.random()*people["galley"]*30
			rewardstructure+=Math.random()*people["galleon"]*200

			combatlog+="You managed to salvage:<br>"
			population-=people["sailor"];
			people["sailor"]=0;
			craft["plank"]+=rewardplank;
			craft["structure"]+=rewardstructure;
			combatlog+=intToString(rewardplank)+" plank<br>"
			combatlog+=intToString(rewardstructure)+" structure<br>";
			people["galley"]=0;
			people["galleon"]=0;
			people["fireship"]=0;
			people["caravel"]=0;
			ships=0;

			break;
		}
		else if(hp2<1){
		
			combatlog+="You win the fight!<br><br>";
			combatlog+="You conquered " +intToString(Math.pow(1.2,(bonus["expansion"]))*200) + " new territory."
			bonus["territory"]+=(Math.pow(1.2,(bonus["expansion"]))*200)
			bonus["expansion"]++;
			break;
		}

		ronda++
	}

	if(i>49){
		combatlog+="The combat ends in a draw<br>"
	}

	$(".docklog").html(combatlog)
	filllog();














}

