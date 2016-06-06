function expedition() {
	power = 0
	power += people.pikeman * 5;
	power += people.swordman * 10;
	power += people.knight * 25;
	power += people.medic * 1;
	power += people.bersek * 80;
	power += people.warelephant * 100;
	power += people.musketeer * 75;

	foodcost = power * 2;
	watercost = power;
	moralecost = power / 5;
	coalcost = 0;
	coalcost += people.lighttank * 50;
	power += people.lighttank * 500
	power = power * (bonus.power + 1) * (bonus.exprew + 1);

	if (power > 0 && items["food"] >= foodcost && items["water"] >= watercost && items["morale"] >= moralecost && items["coal"] >= coalcost) {
		$(".expeditionresult").html("")
		$(".encounter").hide()
		if (Math.random() > 0.40) {
			var reward = getreward(power);
			if (reward !== "") {
				$(".expeditionresult").html("The expedition found:<br>" + reward);
			} else {
				$(".expeditionresult").html("The expedition did not find anything useful.")
			}
		} else {
			attacked();
		}
	}
}

// generate an encounter and calculate the power level of your troops. 
function attacked() {
	hp = 0;
	hp += people.pikeman * 30
	hp += people.swordman * 50
	hp += people.knight * 200
	hp += people.medic * 50
	hp += people.bersek * 100
	hp += people.warelephant * 1200
	hp += people.musketeer * 400
	hp += people.lighttank * 5000
	hp = hp * (bonus.hp + 1)

	healing = 0
	healing += people.medic * 10
	healing = healing * (bonus.healing + 1)

	burst = 0;
	burst += people.bersek * 80
	burst = burst * (bonus.power + 1)

	power = 0;
	power += people.pikeman * 5
	power += people.swordman * 10
	power += people.knight * 25
	power += people.medic * 1
	power += people.bersek * 80
	power -= people.warelephant * 25 * (bonus.power + 1)
	power -= people.lighttank * 250 * (bonus.power + 1)
	power += people.musketeer * 25 * (bonus.power + 1)
	power = power * (bonus.power + 1)

	armor = 0;
	armor += people.swordman * 3
	armor += people.knight * 10
	armor += people.lighttank * 50
	armor = armor * (bonus.armor + 1)

	disobey = people.warelephant * 100 * (bonus.power + 1)

	reload = 0;
	reload += people.musketeer * 200 * (bonus.power + 1)
	reload += people.lighttank * 500 * (bonus.power + 1)

	// construct a different power value for building the enemy list. this allows us to use our established power level later on if we want
	enemybuildingpower = (power / 2) + (hp / 10) + (healing / 2) + (burst / 10) + (armor / 2)
		// build a new enemy array. Sets the enemy array, including the enemy reward, hp, armor etc.
	var stringencuentro = buildenemy(enemybuildingpower);

	stringencuentro += "Reward: " + enemy.reward.toFixed(2) + " Coins<br>";
	stringencuentro += "<button class='fight' onclick='fight()'>Fight</button><button class='retreat' onclick='retreat()'>Flee</button>";
	$(".encounter").show();
	$(".expeditionresult").html("Some enemies appeared in our way!");
	$(".encounter").html(stringencuentro);
}

// construct an enemy army from the given power level. Returns a string to input into the 
function buildenemy(power) {
	enemy.reward = 0;
	enemy.peasant = 0;
	enemy.bandit = 0;
	enemy.mercenary = 0;
	enemy.soldier = 0;
	enemy.halberdier = 0;
	enemy.warrior = 0;
	enemy.rifleman = 0;

	var enemytipo = Math.random() * power;
	var stringencuentro = "Enemies:<br>"
	var rew = 0;
	if (enemytipo < 25) {
		enemy.peasant = Math.round((Math.random() * power * 0.50) + (power * 0.14)) + 1;
		stringencuentro += enemy.peasant + " Peasants (Attack:2 Hp:8)<br>";
		rew += (Math.random() * enemy.peasant * 0.07) + (enemy.peasant * 0.015)
	}
	if (enemytipo >= 25 && enemytipo < 50) {
		enemy.bandit = Math.round((Math.random() * power * 0.22) + (power * 0.070)) + 1;
		stringencuentro += enemy.bandit + " Bandits (Attack:4 Hp:15)<br>";
		rew += (Math.random() * enemy.bandit * 0.14) + (enemy.bandit * 0.03)
	}
	if (enemytipo >= 50 && enemytipo < 100) {
		enemy.peasant = Math.round((Math.random() * power * 0.25) + (power * 0.07)) + 1;
		stringencuentro += enemy.peasant + " Peasants (Attack:2 Hp:8)<br>";
		rew += (Math.random() * enemy.peasant * 0.07) + (enemy.peasant * 0.015)
		enemy.bandit = Math.round((Math.random() * power * 0.11) + (power * 0.035)) + 1;
		stringencuentro += enemy.bandit + " Bandits (Attack:4 Hp:15)<br>";
		rew += (Math.random() * enemy.bandit * 0.14) + (enemy.bandit * 0.03)
	}
	if (enemytipo >= 100 && enemytipo < 150) {
		enemy.mercenary = Math.round((Math.random() * power * 0.090) + (power * 0.018)) + 1;
		stringencuentro += enemy.mercenary + " Mercenarys (Attack:9 Hp:40 armor:5)<br>";
		rew += (Math.random() * enemy.mercenary * 0.32) + (enemy.mercenary * 0.07)
	}
	if (enemytipo >= 150 && enemytipo < 200) {
		enemy.peasant = Math.round((Math.random() * power * 0.22) + (power * 0.05)) + 1;
		stringencuentro += enemy.peasant + " Peasants (Attack:2 Hp:8)<br>";
		rew += (Math.random() * enemy.peasant * 0.07) + (enemy.peasant * 0.015)
		enemy.bandit = Math.round((Math.random() * power * 0.07) + (power * 0.015)) + 1;
		stringencuentro += enemy.bandit + " Bandits (Attack:4 Hp:15)<br>";
		rew += (Math.random() * enemy.bandit * 0.14) + (enemy.bandit * 0.03)
		enemy.mercenary = Math.round((Math.random() * power * 0.01) + (power * 0.01)) + 1;
		stringencuentro += enemy.mercenary + " Mercenarys (Attack:9 Hp:40 armor:5)<br>";
		rew += (Math.random() * enemy.mercenary * 0.32) + (enemy.mercenary * 0.07)
	}
	if (enemytipo >= 200 && enemytipo < 280) {
		enemy.soldier = Math.round((Math.random() * power * 0.04) + (power * 0.010)) + 1;
		stringencuentro += enemy.soldier + " Soldiers (Attack:15 Hp:100 armor:10)<br>";
		rew += (Math.random() * enemy.soldier * 0.68) + (enemy.soldier * 0.15)
	}
	if (enemytipo >= 280 && enemytipo < 420) {
		enemy.halberdier = Math.round((Math.random() * power * 0.022) + (power * 0.007)) + 1;
		stringencuentro += enemy.halberdier + " Halberdier (Attack:40 Hp:160)<br>";
		rew += (Math.random() * enemy.halberdier * 1.2) + (enemy.halberdier * 0.30)
	}
	if (enemytipo >= 420 && enemytipo < 600) {
		enemy.warrior = Math.round((Math.random() * power * 0.011) + (power * 0.005)) + 1;
		stringencuentro += enemy.warrior + " Warrior (Attack:50 Hp:400)<br>";
		rew += (Math.random() * enemy.warrior * 2) + (enemy.warrior * 0.50)
	}
	if (enemytipo >= 600 && enemytipo < 800) {
		enemy.halberdier = Math.round((Math.random() * power * 0.011) + (power * 0.0034)) + 1;
		stringencuentro += enemy.halberdier + " Halberdier (Attack:40 Hp:160)<br>";
		rew += (Math.random() * enemy.halberdier * 1.2) + (enemy.halberdier * 0.30)
		enemy.warrior = Math.round((Math.random() * power * 0.005) + (power * 0.0024)) + 1;
		stringencuentro += enemy.warrior + " Warrior (Attack:50 Hp:400)<br>";
		rew += (Math.random() * enemy.warrior * 2) + (enemy.warrior * 0.50)
	}
	if (enemytipo >= 800) {
		enemy.rifleman = Math.round((Math.random() * power * 0.005) + (power * 0.0022)) + 1;
		stringencuentro += enemy.rifleman + " Rifleman (Attack:200 Hp:400)<br>";
		rew += (Math.random() * enemy.rifleman * 5) + (enemy.rifleman * 1.5)
	}

	enemy.reward = rew;

	// set up enemy values here instead of multiple times elsewhere
	power2 = 0;
	power2 += enemy.peasant * 2
	power2 += enemy.bandit * 4
	power2 += enemy.mercenary * 9
	power2 += enemy.soldier * 15
	power2 += enemy.halberdier * 40
	power2 += enemy.warrior * 50
	power2 += enemy.rifleman * 200

	hp2 = 0;
	hp2 += enemy.peasant * 8
	hp2 += enemy.bandit * 15
	hp2 += enemy.mercenary * 40
	hp2 += enemy.soldier * 100
	hp2 += enemy.halberdier * 160
	hp2 += enemy.warrior * 400
	hp2 += enemy.rifleman * 400

	armor2 = 0
	armor2 += enemy.mercenary * 5
	armor2 += enemy.soldier * 10

	return stringencuentro;
}

function fight() {
	combatlog = "The battle began!<br>"
	var ronda = 0;
	for (i = 0; i <= 50; i++) {
		dmg1 = power + (Math.random() * (power / 4)) - (Math.random() * (power / 4));
		dmg2 = power2 + (Math.random() * (power2 / 4)) - (Math.random() * (power2 / 4));
		if (i === 0 && burst > 0) {
			dmg1 += burst + (Math.random() * (burst / 4)) - (Math.random() * (burst / 4));
		}

		combatlog += "Round " + (i + 1) + "<br>"
		if (disobey > 0 && Math.random() > 0.75) {
			combatlog += "The elephants stubbornly refuse to attack.<br>"
		} else {
			dmg1 += disobey + (Math.random() * (disobey / 4)) - (Math.random() * (disobey / 4));
		}
		if (i % 2 !== 0 && reload > 0) {
			dmg1 += reload + (Math.random() * (reload / 4)) - (Math.random() * (reload / 4));
		} else if (reload > 0 && craft.ammo >= (people.musketeer + (people.lighttank * 4))) {
			if (i == 0) {
				combatlog += "Your troops load their weapons.<br>"
			} else {
				combatlog += "Your troops are reloading.<br>"
			}
			ammocost = 0;
			ammocost += people.musketeer
			ammocost += people.lighttank * 4
			combatlog += "-" + ammocost + " ammo <br>"
			craft.ammo -= ammocost;
		} else if (reload > 0) {
			combatlog += "Your troops are out of ammo!<br>"
			reload = 0;
		}
		if (armor > 0) {
			dmg2 -= armor;
			if (dmg2 < 0) {
				dmg2 = 0;
				combatlog += "Your troop's armor blocks all damage!<br>"
			} else {
				combatlog += "Your troop's armor blocks " + intToString(armor) + " damage.<br>"
			}
		}
		if (armor2 > 0) {
			dmg1 -= armor2;
			if (dmg1 < 0) {
				dmg1 = 0;
				combatlog += "The enemy's armor blocks all damage!<br>"
			} else {
				combatlog += "The enemy's armor blocks " + intToString(armor2) + " damage.<br>"
			}
		}
		if (i === 0 && burst > 0) {
			combatlog += "Your troops smash into the enemy lines and deal " + intToString(dmg1) + " damage!<br>"
		} else if (dmg1 > power * 1.1) {
			combatlog += "Your troops find a weak spot and deal " + intToString(dmg1) + " damage!<br>"
		} else if (dmg1 < power * 0.9) {
			combatlog += "Your troops hesitate, and only deal " + intToString(dmg1) + " damage.<br>"
		} else {
			combatlog += "Your troops deal " + intToString(dmg1) + " damage.<br>"
		}
		if (dmg2 > power2 * 1.1) {
			combatlog += "The enemy finds a weak spot and deals " + intToString(dmg2) + " damage!<br>"
		} else if (dmg2 < power2 * 0.9) {
			combatlog += "The enemy hesitates, and only deals " + intToString(dmg2) + " damage.<br>"
		} else {
			combatlog += "The enemy deals " + intToString(dmg2) + " damage.<br>"
		}

		if (healing > 0) {
			healed = healing + (Math.random() * (healing / 8)) - (Math.random() * (healing / 8));
			hp += healed;
			combatlog += "Your medics restore " + intToString(healed) + " hp.<br>"
		}

		hp2 -= dmg1;
		hp -= dmg2;
		combatlog += "Your hp: " + Math.round(hp) + " / Enemy hp: " + Math.round(hp2) + "<br><br>";

		// add 
		if (hp <= 0 || hp2 <= 0) {
			break;
		}
		if (i > 49) {
			combatlog += "The combat ended in a draw...<br>";
			break;
		}
	}
	ronda++;

	if (hp2 < 0) {
		combatlog += "Your troops won the combat!<br><br>";
		combatlog += "You won " + intToString(enemy.reward) + " coins<br>";
		craft.coin += enemy.reward;
		if (Math.random() > 0.70 && technologies["intelligence"] == 1) {
			rnd = (Math.random() * ((power / 2) + (hp / 15))) / 4;
			reward += parseFloat(rnd).toFixed(2) + " knowledge<br>";
			items["knowledge"] += rnd;
			combatlog += "Your intelligence service stole " + Math.round(rnd) + " knowledge from the enemy.<br>";
		}
		if (Math.random() > 0.50 && technologies["wargames"] == 1) {
			rnd = (Math.random() * ((power / 2) + (hp / 15))) / 4;
			reward += parseFloat(rnd).toFixed(2) + " plans<br>";
			craft["plans"] += rnd;
			combatlog += "Your intelligence service produced  " + Math.round(rnd) + " new plans.<br>";
		}
		var reward = getreward(power);
		if (reward !== "") {
			$(".expeditionresult").append("Your troops find goods on the bodies and in the settlements of their enemies:<br>" + reward);
		} else {
			$(".expeditionresult").append("Your troops return victorious, but without finding anything further .")
		}

	} else if (hp < 0) {
		losecombat();
	}
	$(".expeditionresult").html(combatlog)
	$(".encounter").html("")
	$(".encounter").hide()
}


// Generates the effects of lost combat. All effects are in-line for now.
function losecombat() {
	combatlog += "You lost the combat...<br>"
	if (people.pikeman > 0 && Math.random() > 0.75) {
		losses = Math.round(Math.random() * (people.pikeman - 1)) + 1
		people.pikeman -= losses;
		population -= losses;
		combatlog += "You lost " + losses + " pikeman.<br>"
	}
	if (people.swordman > 0 && Math.random() > 0.75) {
		losses = Math.round(Math.random() * (people.swordman - 1)) + 1
		people.swordman -= losses;
		population -= losses;
		combatlog += "You lost " + losses + " swordman.<br>"
	}
	if (people.knight > 0 && Math.random() > 0.75) {
		losses = Math.round(Math.random() * (people.knight - 1)) + 1
		people.knight -= losses;
		population -= losses;
		combatlog += "You lost " + losses + " knights.<br>"
	}
	if (people.medic > 0 && Math.random() > 0.75) {
		losses = Math.round(Math.random() * (people.medic - 1)) + 1
		people.medic -= losses;
		population -= losses;
		combatlog += "You lost " + losses + " medics.<br>"
	}
	if (people.bersek > 0 && Math.random() > 0.75) {
		losses = Math.round(Math.random() * (people.bersek - 1)) + 1
		people.bersek -= losses;
		population -= losses;
		combatlog += "You lost " + losses + " berseks.<br>"
	}
	if (people.warelephant > 0 && Math.random() > 0.75) {
		losses = Math.round(Math.random() * (people.warelephant - 1)) + 1
		people.warelephant -= losses;
		population -= losses;
		combatlog += "You lost " + losses + " war elephants.<br>"
	}
	if (people.musketeer > 0 && Math.random() > 0.75) {
		losses = Math.round(Math.random() * (people.musketeer - 1)) + 1
		people.musketeer -= losses;
		population -= losses;
		combatlog += "You lost " + losses + " musketeers.<br>"
	}
	if (people.lighttank > 0 && Math.random() > 0.75) {
		losses = Math.round(Math.random() * (people.lighttank - 1)) + 1
		people.lighttank -= losses;
		population -= losses * 3;
		combatlog += "You lost " + losses + " light tanks.<br>"
	}
}


// generates a reward based on the power level of an encounter. 
// returns reward text. Effects of the reward are built into the function. 
function getreward(power) {
	var reward = "";

	if (Math.random() > 0.50) {
		rnd = (Math.random() * power) * 25;
		reward += parseFloat(rnd).toFixed(2) + " wood<br>";
		items["wood"] += rnd;
	}
	if (Math.random() > 0.70) {
		rnd = (Math.random() * power) * 15;
		reward += parseFloat(rnd).toFixed(2) + " minerals<br>";
		items["mineral"] += rnd;
	}
	if (Math.random() > 0.80) {
		rnd = (Math.random() * power) * 5;
		reward += parseFloat(rnd).toFixed(2) + " food<br>";
		items["food"] += rnd;
	}
	if (Math.random() > 0.85 && technologies["finding"] == 1) {
		rnd = (Math.random() * power);
		reward += parseFloat(rnd).toFixed(2) + " sand<br>";
		items["sand"] += rnd;
	}
	if (Math.random() > 0.925) {
		rnd = (Math.random() * power) / 5;
		reward += parseFloat(rnd).toFixed(2) + " copper<br>";
		items["copper"] += rnd;
	}
	if (Math.random() > 0.925) {
		rnd = (Math.random() * power) / 8;
		reward += parseFloat(rnd).toFixed(2) + " iron<br>";
		items["iron"] += rnd;
	}
	if (Math.random() > 0.95) {
		rnd = (Math.random() * power) / 20;
		reward += parseFloat(rnd).toFixed(2) + " gold<br>";
		items["gold"] += rnd;
	}
	if (Math.random() > 0.95 && technologies["spear"] == 1) {
		rnd = Math.round((Math.random() * power) / 50) + 1;
		reward += parseFloat(rnd).toFixed(2) + " spear<br>";
		craft["spear"] += rnd;
	}
	if (Math.random() > 0.95 && technologies["sword"] == 1) {
		rnd = Math.round((Math.random() * power) / 50) + 1;
		reward += parseFloat(rnd).toFixed(2) + " sword<br>";
		craft["sword"] += rnd;
	}
	if (Math.random() > 0.95 && technologies["storage"] == 1) {
		rnd = Math.round((Math.random() * power) / 200) + 1;
		reward += parseFloat(rnd).toFixed(2) + " block<br>";
		craft["block"] += rnd;
	}
	if (Math.random() > 0.95 && technologies.coin == 1) {
		rnd = Math.round((Math.random() * power) / 300) + 1;
		reward += parseFloat(rnd).toFixed(2) + " coin<br>";
		craft.coin += rnd;
	}
	if (Math.random() > 0.90 && technologies["finding"] == 1) {
		rnd = (Math.random() * power) / 50;
		reward += parseFloat(rnd).toFixed(2) + " clay<br>";
		items["clay"] += rnd;
	}
	if (Math.random() > 0.95 && technologies["finding"] == 1) {
		rnd = (Math.random() * power) / 500;
		reward += parseFloat(rnd).toFixed(2) + " brick<br>";
		craft["brick"] += rnd;
	}
	if (Math.random() > 0.90 && technologies["husbandry"] == 1) {
		rnd = Math.round((Math.random() * power) / 300) + 1;
		reward += parseFloat(rnd).toFixed(2) + " horse<br>";
		craft["horse"] += rnd;
	}
	if (Math.random() > 0.95 && technologies["cache"] == 1) {
		rnd = Math.round((Math.random() * power) / 300) + 1;
		reward += parseFloat(rnd).toFixed(2) + " lock<br>";
		craft["lock"] += rnd;
	}
	if (Math.random() > 0.95 && technologies["canteen"] == 1) {
		rnd = (Math.random() * power) / 500;
		reward += parseFloat(rnd).toFixed(2) + " bottle<br>";
		craft["bottle"] += rnd;
		maximums["water"] += rnd;
	}
	if (Math.random() > 0.90 && technologies["safestorage"] == 1) {
		rnd = (Math.random() * power) / 500;
		reward += parseFloat(rnd).toFixed(2) + " nickel<br>";
		items["nickel"] += rnd;
	}
	if (Math.random() > 0.99 && technologies["cache"] == 1) {
		rnd = (Math.random() * power) / 500;
		reward += parseFloat(rnd).toFixed(2) + " chest<br>";
		craft["chest"] += rnd;
		maximums["wood"] += 50 * (rnd);
		maximums["mineral"] += 25 * (rnd);
		maximums["food"] += 10 * (rnd);
		maximums["copper"] += 0.3 * (rnd);
		maximums["gold"] += 0.05 * (rnd);
		maximums["iron"] += 0.2 * (rnd);
		maximums["tin"] += 0.15 * (rnd);
		maximums["coal"] += 0.15 * (rnd);
		maximums["steel"] += 0.10 * (rnd);

	}
	if (Math.random() > 0.95 && technologies["domestication"] == 1) {
		rnd = Math.round((Math.random() * power) / 800) + 1;
		reward += parseFloat(rnd).toFixed(2) + " elephant<br>";
		craft["elephant"] += rnd;
	}
	if (Math.random() > 0.999) {
		reward += "<div style='display:inline;color:orange'>You found an heirloom!</div><br>";
		createheirloom();
		$("#heirlooms").show()
		unlocked["#heirlooms"] = 1;
		$("#heirloomspane").removeClass("invisible");
		unlocked["#heirloomspane"] = 1;
	}
	return reward;
}

function retreat() {
	$(".expeditionresult").html("You flee cowardly")
	$(".encounter").hide()
}